// Ayoba public-page update, applied with Netlify snippet injection.
// Deliberately independent of the deployed studio backend.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/about', '/private-sessions'].includes(route)) return;
  function apply() {
    if (!document.querySelector('link[href*="/assets/art-direction.css"], #ayoba-art-direction')) {
      const style = document.createElement('style');
      style.id = 'ayoba-art-direction';
      style.textContent = "/* Ayoba: movement as an art practice. Additive styles preserve existing layouts. */\n.movement-manifesto{position:relative;background:#f0e9dc;border-bottom:1px solid var(--line)}\n.movement-manifesto:before{content:\"\";position:absolute;top:0;left:5%;width:90%;height:1px;background:var(--line)}\n.movement-manifesto h2{font-size:clamp(36px,4.65vw,70px);max-width:1160px;line-height:1.17;letter-spacing:-2px;font-weight:500;margin-bottom:66px;text-wrap:pretty}\n.movement-manifesto h2 em{display:inline-block;font-size:1.28em;line-height:.8;transform:rotate(-4deg);padding-inline:.06em;color:var(--berry)}\n.intention-layout{display:grid;grid-template-columns:1fr 1.1fr;gap:80px;align-items:center}\n.intention-copy{max-width:480px}.intention-copy p{font-size:15px;line-height:1.85;margin:0 0 20px}.intention-copy .textlink{margin-top:12px}\n.movement-study{background:#e5dfcd;color:var(--berry);border:1px solid #55583a40;transform:rotate(2deg);position:relative;padding:20px 23px 17px}\n.study-heading{display:flex;justify-content:space-between;align-items:center;color:var(--ink)}.study-heading .eyebrow{margin:0;font-size:9px}.study-number{font:italic 23px Instrument,Georgia,serif}\n.gesture-surface{display:block;width:100%;height:auto;aspect-ratio:5/3;touch-action:none;cursor:crosshair;overflow:hidden}\n.study-footer{border-top:1px solid #55583a40;color:var(--ink);padding-top:14px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:14px}.study-footer p{font-size:10px;line-height:1.6;margin:0;max-width:160px}.study-footer>div{display:flex;gap:15px}.study-footer button{font:11px DM,Arial,sans-serif;background:none;color:var(--ink);border:0;border-bottom:1px solid currentColor;min-height:38px;padding:4px 0;cursor:pointer}.study-footer button:hover{color:var(--berry)}\n.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.page .art-title{font-size:clamp(68px,10.5vw,150px);font-weight:500;letter-spacing:-6px;line-height:1.03;margin-bottom:55px}.art-title em{font-size:1.2em;color:var(--berry)}\n.art-title~.content-columns .about-photo{transform:rotate(2deg);margin:10px 10px 40px}.art-title~.photo-essay .photo-essay-grid figure:first-child{transform:rotate(-2deg)}.art-title~.photo-essay .photo-essay-grid figure:last-child{transform:rotate(2deg)}\n@media(hover:hover) and (prefers-reduced-motion:no-preference){.journey-photo img,.photo-essay-grid img{transition:transform .65s ease}.journey-photo{overflow:hidden}.journey-photo:hover img{transform:scale(1.035)}.photo-essay-grid figure:hover img{transform:translateY(-7px)}}\n@media(max-width:900px){.intention-layout{gap:40px}.movement-study{padding:16px}.study-footer>div{gap:20px}.movement-manifesto h2{margin-bottom:46px}.page .art-title{letter-spacing:-3px}}\n@media(max-width:640px){.intention-layout{grid-template-columns:1fr;gap:32px}.movement-manifesto{padding-block:60px}.movement-manifesto h2{font-size:clamp(32px,7.4vw,45px);letter-spacing:-1.2px;line-height:1.24;margin-bottom:32px}.movement-study{margin-inline:5px;transform:rotate(1deg)}.intention-copy p{font-size:14px}.study-footer p{max-width:130px}.page .art-title{font-size:clamp(60px,13.5vw,90px);letter-spacing:-2px;margin-bottom:40px}}\n";
      document.head.append(style);
    }
    if (route === '/') {
      const manifesto = document.querySelector('#philosophy');
      if (manifesto && !manifesto.classList.contains('movement-manifesto') && manifesto.querySelector('h2')?.textContent.includes('We were never meant')) {
        const template = document.createElement('template');
        template.innerHTML = "<section class=\"manifesto movement-manifesto\" id=\"philosophy\"><div class=\"shell manifesto-layout\">\n<p class=\"eyebrow\">01 \u2014 Movement</p>\n<h2>Movement as <em>play,</em> as a tool, as a practice, as a meditation, as a way to connect to your body and embrace the motions of life.</h2>\n<div class=\"intention-layout\"><div class=\"intention-copy\">\n<p>The intention for class can be whatever you make it. You can simply just want to experience it. Just show up as you are.</p>\n<p>If you want to just play, let\u2019s play. If you wish to move with stuck energy and emotions, with the intention to release and let go, let\u2019s do it.</p>\n<p>If you want to get more grounded in your body and embrace the energy of embodiment, play, love\u2026 let\u2019s do it all.</p>\n<a class=\"textlink\" href=\"/group-journeys/\">Explore Group Journeys <span aria-hidden=\"true\">\u2197</span></a>\n</div>\n<div class=\"movement-study\" data-movement-study>\n<div class=\"study-heading\"><span class=\"eyebrow\">Movement study</span><span class=\"study-number\" aria-hidden=\"true\">001</span></div>\n<svg class=\"gesture-surface\" viewBox=\"0 0 600 360\" role=\"img\" aria-label=\"An abstract line drawing. Draw with a cursor or finger, or use Add a gesture below.\"><g class=\"gesture-lines\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g></svg>\n<div class=\"study-footer\"><p>Draw with your cursor or finger.</p><div><button type=\"button\" data-add-gesture>Add a gesture <span aria-hidden=\"true\">\u2197</span></button><button type=\"button\" data-clear-gestures>Clear</button></div></div>\n<span class=\"study-status sr-only\" role=\"status\" aria-live=\"polite\"></span>\n</div></div></div></section>";
        manifesto.classList.add('movement-manifesto');
        manifesto.replaceChildren(...template.content.firstElementChild.childNodes);
        if (location.hash === '#philosophy') requestAnimationFrame(() => manifesto.scrollIntoView({behavior: 'instant'}));
      }
    }
    if (route === '/about') {
      const heading = document.querySelector('main h1');
      if (heading && heading.textContent.replace(/\s+/g, ' ').includes('Learning to move')) {
        heading.classList.add('art-title');
        heading.innerHTML = 'dance as <em>art.</em>';
      }
    }
    if (route === '/private-sessions') {
      const lede = document.querySelector('main .lede');
      const old = 'Your pace, your curiosity, your way of moving. An individualized space to explore without needing to get anywhere.';
      if (lede?.textContent.trim() === old) lede.textContent = 'Your pace, your curiosity, your way of moving.';
    }
    // Local drawing only. No storage, tracking, or network requests.
(() => {
  const study = document.querySelector('[data-movement-study]');
  if (!study || study.dataset.gestureReady === 'true') return;
  study.dataset.gestureReady = 'true';
  const surface = study.querySelector('.gesture-surface');
  const lines = study.querySelector('.gesture-lines');
  const status = study.querySelector('.study-status');
  const number = study.querySelector('.study-number');
  let active = null;
  let pointCount = 0;
  let count = 0;
  const namespace = 'http://www.w3.org/2000/svg';
  function newPath(d) {
    if (lines.children.length >= 48) lines.firstElementChild.remove();
    const path = document.createElementNS(namespace, 'path');
    path.setAttribute('d', d);
    lines.append(path);
    number.textContent = String(++count).padStart(3, '0');
    return path;
  }
  function addGesture(announce = true) {
    const phase = count * 1.8;
    const points = Array.from({length: 180}, (_, i) => {
      const t = i / 179 * Math.PI * 2;
      const x = 300 + Math.sin(t * 2 + phase) * 145 + Math.sin(t * 5) * 33;
      const y = 180 + Math.cos(t * 3 + phase * .25) * 110 + Math.sin(t * 2) * 19;
      return `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
    });
    newPath(points.join(' '));
    if (announce) status.textContent = 'A new gesture has been added.';
  }
  function point(event) {
    const bounds = surface.getBoundingClientRect();
    return `${((event.clientX - bounds.left) / bounds.width * 600).toFixed(1)},${((event.clientY - bounds.top) / bounds.height * 360).toFixed(1)}`;
  }
  surface.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    surface.setPointerCapture(event.pointerId);
    active = {id: event.pointerId, path: newPath(`M${point(event)} l.1,.1`)};
    pointCount = 0;
  });
  surface.addEventListener('pointermove', event => {
    if (!active || active.id !== event.pointerId) return;
    if (++pointCount > 320) { active = null; return; }
    active.path.setAttribute('d', `${active.path.getAttribute('d')} L${point(event)}`);
  });
  function end(event) {
    if (!active || active.id !== event.pointerId) return;
    active = null;
    status.textContent = 'Your gesture has been added.';
  }
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => surface.addEventListener(type, end));
  study.querySelector('[data-add-gesture]').addEventListener('click', () => addGesture());
  study.querySelector('[data-clear-gestures]').addEventListener('click', () => {
    active = null;
    lines.replaceChildren();
    count = 0;
    number.textContent = '000';
    status.textContent = 'Drawing cleared.';
  });
  addGesture(false);
})();

  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once: true});
  else apply();
})();
