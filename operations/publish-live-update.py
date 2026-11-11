"""Update Ayoba's named Netlify snippet without redeploying its backend."""
import json
import os
import urllib.request
from pathlib import Path

SITE_ID = '1aa56b2e-6e8d-4b74-a4d9-8cb68dcd9867'
payload = json.loads(Path(__file__).with_name('netlify-snippet.json').read_text())
token = os.environ.get('NETLIFY_AUTH_TOKEN')
if not token:
    config = json.loads((Path.home() / 'Library/Preferences/netlify/config.json').read_text())
    token = config['users'][config['userId']]['auth']['token']

def request(path, method='GET', data=None):
    headers = {'Authorization': 'Bearer ' + token}
    if data is not None:
        headers['Content-Type'] = 'application/json'
        data = json.dumps(data).encode()
    req = urllib.request.Request(
        'https://api.netlify.com/api/v1/sites/' + SITE_ID + path,
        headers=headers, data=data, method=method,
    )
    with urllib.request.urlopen(req, timeout=30) as response:
        body = response.read()
        return json.loads(body) if body else None

snippets = request('/snippets')
matches = [s for s in snippets if s.get('title') == payload['title']]
if len(matches) > 1:
    raise SystemExit('More than one matching snippet exists; reconcile in Netlify first.')
if matches:
    request('/snippets/' + str(matches[0]['id']), 'PUT', payload)
else:
    # Reconcile the list after creation; Netlify may return a JSON null body.
    request('/snippets', 'POST', payload)
verified = [s for s in request('/snippets') if s.get('title') == payload['title']]
assert len(verified) == 1, 'Could not confirm the named snippet.'
assert verified[0]['general'] == payload['general'], 'Snippet content differs.'
assert verified[0]['general_position'] == 'footer'
print('Verified live Netlify snippet ' + str(verified[0]['id']) + '. Backend deployment unchanged.')
