import json
import re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TARGET = REPO / 'operations'
TARGET.mkdir(exist_ok=True)
home = (REPO / 'index.html').read_text()
manifesto = re.search(r'<section class="manifesto movement-manifesto".*?</section>', home, re.S).group(0)
css = (REPO / 'assets/art-direction.css').read_text()
art = (REPO / 'assets/art-direction.js').read_text()
video_css = (REPO / 'assets/video-hero.css').read_text()
video_js = (REPO / 'assets/video-hero.js').read_text()
media = json.loads((TARGET / 'media-host.json').read_text())['files']
def video_markup(name, local=False):
    result = (TARGET / name).read_text()
    for placeholder, filename in [('__POSTER_URL__', 'ayoba-video-poster.jpg'), ('__HERO_URL__', 'ayoba-hero.mp4'), ('__FILM_URL__', 'ayoba-film.mp4')]:
        result = result.replace(placeholder, '/assets/' + filename if local else media[filename]['url'])
    return result
hero = video_markup('video-hero.html')
film = video_markup('studio-film.html')
source = '''// Ayoba public-page update, applied with Netlify snippet injection.
// Deliberately independent of the deployed studio backend.
(() => {
  const route = location.pathname.replace(/\\/+$/, '') || '/';
  if (!['/', '/about', '/private-sessions'].includes(route)) return;
  function apply() {
    if (!document.querySelector('link[href*="/assets/art-direction.css"], #ayoba-art-direction')) {
      const style = document.createElement('style');
      style.id = 'ayoba-art-direction';
      style.textContent = CSS_SOURCE;
      document.head.append(style);
    }
    if (route === '/') {
      if (!document.querySelector('link[href*="/assets/video-hero.css"], #ayoba-video-design')) {
        const style = document.createElement('style');
        style.id = 'ayoba-video-design';
        style.textContent = VIDEO_CSS_SOURCE;
        document.head.append(style);
      }
      const previousHero = document.querySelector('.hero-canvas');
      if (previousHero && !previousHero.hasAttribute('data-video-hero')) {
        const booking = document.querySelector('.navlinks .button')?.getAttribute('href') || '/contact/#intro-call';
        const template = document.createElement('template');
        template.innerHTML = VIDEO_HERO_SOURCE;
        template.content.querySelector('a[href="/contact/#intro-call"]').setAttribute('href', booking);
        previousHero.replaceWith(template.content.firstElementChild);
      }
      const previousFilm = document.querySelector('.film-section');
      if (previousFilm && !previousFilm.classList.contains('studio-film')) {
        const template = document.createElement('template');
        template.innerHTML = VIDEO_FILM_SOURCE;
        previousFilm.replaceWith(template.content.firstElementChild);
      }
      const manifesto = document.querySelector('#philosophy');
      if (manifesto && !manifesto.classList.contains('movement-manifesto') && manifesto.querySelector('h2')?.textContent.includes('We were never meant')) {
        const template = document.createElement('template');
        template.innerHTML = MANIFESTO_SOURCE;
        manifesto.classList.add('movement-manifesto');
        manifesto.replaceChildren(...template.content.firstElementChild.childNodes);
        if (location.hash === '#philosophy') requestAnimationFrame(() => manifesto.scrollIntoView({behavior: 'instant'}));
      }
    }
    if (route === '/about') {
      const heading = document.querySelector('main h1');
      if (heading && heading.textContent.replace(/\\s+/g, ' ').includes('Learning to move')) {
        heading.classList.add('art-title');
        heading.innerHTML = 'dance as <em>art.</em>';
      }
    }
    if (route === '/private-sessions') {
      const lede = document.querySelector('main .lede');
      const old = 'Your pace, your curiosity, your way of moving. An individualized space to explore without needing to get anywhere.';
      if (lede?.textContent.trim() === old) lede.textContent = 'Your pace, your curiosity, your way of moving.';
    }
    ART_SOURCE
    VIDEO_JS_SOURCE
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once: true});
  else apply();
})();
'''.replace('VIDEO_CSS_SOURCE', json.dumps(video_css)).replace('VIDEO_HERO_SOURCE', json.dumps(hero)).replace('VIDEO_FILM_SOURCE', json.dumps(film)).replace('VIDEO_JS_SOURCE', video_js).replace('CSS_SOURCE', json.dumps(css)).replace('MANIFESTO_SOURCE', json.dumps(manifesto)).replace('ART_SOURCE', art)
assert '</script' not in source.lower()
(TARGET / 'live-update.js').write_text(source)
snippet = {'title': 'Ayoba — movement copy and interactive art study', 'general': '<script id="ayoba-live-update">\n' + source + '</script>', 'general_position': 'footer', 'goal': '', 'goal_position': 'footer'}
(TARGET / 'netlify-snippet.json').write_text(json.dumps(snippet, ensure_ascii=False, indent=2) + '\n')
print('Prepared', len(snippet['general'].encode()), 'bytes for the Netlify live update.')
