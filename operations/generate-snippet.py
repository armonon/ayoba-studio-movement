"""Build the live presentation from the matching native public HTML and assets."""
import json
import re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TARGET = REPO / 'operations'
home = (REPO / 'index.html').read_text()
media = json.loads((TARGET / 'media-host.json').read_text())['files']
def section(css):
    return re.search(r'<section class="' + re.escape(css) + r'".*?</section>', home, re.S).group(0)
def asset(name):
    return (REPO / 'assets' / name).read_text()
def public_media(html):
    for name, data in media.items():
        html = html.replace('/assets/' + name, data['url'])
    return html
nav = re.search(r'<div class="navlinks" id="navlinks">(.*?)</div>', home, re.S).group(1)
play = section('playground section')
study = re.search(r'<div class="movement-study".*</div></div></div></section>', play, re.S).group(0).removesuffix('</div></div></section>')
layout = (TARGET / 'section-layout.js').read_text()
for name, value in {
    'NAV_SOURCE': nav, 'STUDY_SOURCE': study, 'PLAY_SOURCE': play,
    'SESSIONS_SOURCE': section('section shell ways'),
    'ABOUT_SOURCE': section('founder section'),
    'BOOK_SOURCE': section('booking-section section shell'),
}.items():
    layout = layout.replace(name, json.dumps(value))
source = r'''// Ayoba public presentation; the studio backend is deliberately excluded.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/about', '/private-sessions', '/group-journeys', '/contact', '/faq', '/participant-agreement', '/cancellation-refund-policy', '/privacy-policy'].includes(route)) return;
  function fragment(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
  }
  function style(id, file, text) {
    if (document.getElementById(id) || document.querySelector('link[href*="/assets/' + file + '"]')) return;
    const element = document.createElement('style');
    element.id = id; element.textContent = text; document.head.append(element);
  }
  function apply() {
    style('ayoba-art-direction','art-direction.css',ART_CSS_SOURCE);
    style('ayoba-section-design','section-navigation.css',SECTION_CSS_SOURCE);
    if (route === '/') {
      style('ayoba-video-design','video-hero.css',VIDEO_CSS_SOURCE);
      // Keep section styles after video styles for predictable overrides.
      const sectionStyle = document.getElementById('ayoba-section-design');
      if (sectionStyle) document.head.append(sectionStyle);
      const previousHero = document.querySelector('.hero-canvas');
      if (previousHero && !previousHero.hasAttribute('data-video-hero')) previousHero.replaceWith(fragment(VIDEO_HERO_SOURCE));
      const previousFilm = document.querySelector('.film-section');
      if (previousFilm && !previousFilm.classList.contains('studio-film')) previousFilm.replaceWith(fragment(VIDEO_FILM_SOURCE));
      const manifesto = document.querySelector('#philosophy');
      if (manifesto && !manifesto.classList.contains('movement-manifesto') && manifesto.querySelector('h2')?.textContent.includes('We were never meant')) manifesto.replaceWith(fragment(MANIFESTO_SOURCE));
    }
    if (route === '/about') {
      const heading = document.querySelector('main h1');
      if (heading && heading.textContent.replace(/\s+/g, ' ').includes('Learning to move')) {
        heading.classList.add('art-title'); heading.innerHTML = 'dance as <em>art.</em>';
      }
    }
    if (route === '/private-sessions') {
      const lede = document.querySelector('main .lede');
      if (lede?.textContent.trim() === 'Your pace, your curiosity, your way of moving. An individualized space to explore without needing to get anywhere.') lede.textContent = 'Your pace, your curiosity, your way of moving.';
    }
    SECTION_LAYOUT_SOURCE
    ART_SOURCE
    VIDEO_JS_SOURCE
    SECTION_JS_SOURCE
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once:true});
  else apply();
})();
'''
replacements = {
    'ART_CSS_SOURCE': json.dumps(asset('art-direction.css')),
    'VIDEO_CSS_SOURCE': json.dumps(asset('video-hero.css')),
    'SECTION_CSS_SOURCE': json.dumps(asset('section-navigation.css')),
    'VIDEO_HERO_SOURCE': json.dumps(public_media(section('hero-canvas video-hero'))),
    'VIDEO_FILM_SOURCE': json.dumps(public_media(section('film-section studio-film shell'))),
    'MANIFESTO_SOURCE': json.dumps(section('manifesto movement-manifesto')),
    'SECTION_LAYOUT_SOURCE': layout,
    'ART_SOURCE': asset('art-direction.js'),
    'VIDEO_JS_SOURCE': asset('video-hero.js'),
    'SECTION_JS_SOURCE': asset('section-navigation.js'),
}
for name, value in replacements.items():
    source = source.replace(name, value)
assert '</script' not in source.lower()
(TARGET / 'live-update.js').write_text(source)
snippet = {'title':'Ayoba — movement copy and interactive art study', 'general':'<script id="ayoba-live-update">\n' + source + '</script>', 'general_position':'footer', 'goal':'', 'goal_position':'footer'}
(TARGET / 'netlify-snippet.json').write_text(json.dumps(snippet,ensure_ascii=False,indent=2)+'\n')
print('Prepared',len(snippet['general'].encode()),'bytes for the Netlify live update.')
