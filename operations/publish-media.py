"""Host public video assets separately, leaving the main studio deploy untouched."""
import hashlib
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STATE = ROOT / 'operations/media-host.json'
MAIN_SITE = '1aa56b2e-6e8d-4b74-a4d9-8cb68dcd9867'
NAME = 'ayoba-studio-media-1aa56b'
FILES = ['ayoba-hero.mp4', 'ayoba-film.mp4', 'ayoba-video-poster.jpg']
token = os.environ.get('NETLIFY_AUTH_TOKEN')
if not token:
    config = json.loads((Path.home() / 'Library/Preferences/netlify/config.json').read_text())
    token = config['users'][config['userId']]['auth']['token']

def request(path, method='GET', data=None):
    headers = {'Authorization': 'Bearer ' + token}
    if isinstance(data, bytes):
        headers['Content-Type'] = 'application/octet-stream'
    elif data is not None:
        headers['Content-Type'] = 'application/json'
        data = json.dumps(data).encode()
    req = urllib.request.Request('https://api.netlify.com/api/v1/' + path, headers=headers, data=data, method=method)
    with urllib.request.urlopen(req, timeout=45) as response:
        body = response.read()
        return json.loads(body) if body else None

mode = sys.argv[1] if len(sys.argv) > 1 else 'status'
if mode == 'stage':
    assert not STATE.exists(), 'Media host already recorded; inspect it before creating another deployment.'
    uploads = {}
    media = {}
    for filename in FILES:
        data = (ROOT / 'assets' / filename).read_bytes()
        digest = hashlib.sha1(data).hexdigest()
        path = Path(filename)
        target = 'assets/' + path.stem + '.' + digest[:12] + path.suffix
        uploads[target] = data
        media[filename] = {'path': target, 'sha1': digest, 'bytes': len(data)}
    uploads['index.html'] = b'<!doctype html><meta name="robots" content="noindex"><title>Ayoba Studio media</title><a href="https://ayoba-studio-movement.netlify.app/">Ayoba Studio</a>'
    uploads['robots.txt'] = b'User-agent: *\nDisallow: /\n'
    uploads['_headers'] = b'/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n  X-Content-Type-Options: nosniff\n  X-Robots-Tag: noindex\n'
    main = request('sites/' + MAIN_SITE)
    account = main['account_slug']
    try:
        site = request('sites/' + NAME + '.netlify.app')
        assert site['account_slug'] == account and site['name'] == NAME
        assert not site.get('published_deploy'), 'An existing media production deployment needs explicit reconciliation.'
    except urllib.error.HTTPError as error:
        if error.code != 404:
            raise
        site = request(urllib.parse.quote(account, safe='') + '/sites', 'POST', {'name': NAME})
    state = {'main_site_id': MAIN_SITE, 'main_deploy_before': main['published_deploy']['id'], 'site_id': site['id'], 'site_url': 'https://' + NAME + '.netlify.app', 'files': media}
    STATE.write_text(json.dumps(state, indent=2) + '\n')
    digest_map = {path: hashlib.sha1(data).hexdigest() for path, data in uploads.items()}
    deploy = request('sites/' + site['id'] + '/deploys?title=Ayoba%20video%20assets', 'POST', {'files': digest_map, 'draft': False})
    state['deploy_id'] = deploy['id']
    for value in media.values():
        value['url'] = state['site_url'] + '/' + value['path']
    STATE.write_text(json.dumps(state, indent=2) + '\n')
    required = set(deploy.get('required', []))
    for path, data in uploads.items():
        if digest_map[path] in required:
            request('deploys/' + deploy['id'] + '/files/' + urllib.parse.quote(path, safe='/'), 'PUT', data)
    print(json.dumps({'site_id': site['id'], 'deploy_id': deploy['id'], 'status': 'uploaded', 'bytes': sum(len(x) for x in uploads.values())}))
elif mode == 'status':
    state = json.loads(STATE.read_text())
    deploy = request('deploys/' + state['deploy_id'])
    main = request('sites/' + MAIN_SITE)
    assert main['published_deploy']['id'] == state['main_deploy_before'], 'Main site deployment changed.'
    print(json.dumps({'state': deploy['state'], 'error': deploy.get('error_message'), 'main_deployment_unchanged': True, 'url': state['site_url']}))
    if deploy['state'] == 'ready':
        media_site = request('sites/' + state['site_id'])
        assert media_site['published_deploy']['id'] == state['deploy_id']
        for name, asset in state['files'].items():
            req = urllib.request.Request(asset['url'], headers={'Range': 'bytes=0-63'})
            with urllib.request.urlopen(req, timeout=30) as response:
                expected = 'video/mp4' if name.endswith('.mp4') else 'image/jpeg'
                assert response.headers.get_content_type() == expected, name
                assert response.status == 206, (name, response.status)
        print('Verified published media, MIME types, and range requests. Main studio deployment untouched.')
else:
    raise SystemExit('Use stage or status.')
