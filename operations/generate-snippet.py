import json
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TARGET = REPO / 'operations'
TARGET.mkdir(exist_ok=True)
home = (TARGET / 'home-redesign.html').read_text()
css = (REPO / 'assets/movement-studio.css').read_text()
shared = (REPO / 'assets/site-redesign.js').read_text()
engine = (REPO / 'assets/movement-engine.js').read_text()
source = r'''// Ayoba public redesign. No backend deployment or data changes.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/about', '/private-sessions', '/group-journeys', '/contact', '/faq', '/privacy-policy', '/participant-agreement', '/cancellation-refund-policy'].includes(route)) return;
  function apply() {
    if (!document.querySelector('link[href*="/assets/movement-studio.css"], #ayoba-movement-studio')) {
      const style = document.createElement('style');
      style.id = 'ayoba-movement-studio';
      style.textContent = CSS_SOURCE;
      document.head.append(style);
    }
    if (route === '/' && document.querySelector('main')?.dataset.motionVersion !== '2') {
      const template = document.createElement('template');
      template.innerHTML = HOME_SOURCE;
      document.querySelector('main')?.replaceWith(template.content.firstElementChild);
      if (['#philosophy', '#sessions', '#movement-lab'].includes(location.hash)) {
        requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior: 'instant'}));
      }
    }
    SHARED_SOURCE
    ENGINE_SOURCE
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once: true});
  else apply();
})();
'''.replace('CSS_SOURCE', json.dumps(css)).replace('HOME_SOURCE', json.dumps(home)).replace('SHARED_SOURCE', shared).replace('ENGINE_SOURCE', engine)
assert '</script' not in source.lower()
(TARGET / 'live-update.js').write_text(source)
snippet = {'title': 'Ayoba — movement copy and interactive art study', 'general': '<script id="ayoba-live-update">\n' + source + '</script>', 'general_position': 'footer', 'goal': '', 'goal_position': 'footer'}
(TARGET / 'netlify-snippet.json').write_text(json.dumps(snippet, ensure_ascii=False, indent=2) + '\n')
print('Prepared', len(snippet['general'].encode()), 'bytes for the Netlify live update.')
