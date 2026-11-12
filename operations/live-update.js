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
      if (!document.querySelector('link[href*="/assets/video-hero.css"], #ayoba-video-design')) {
        const style = document.createElement('style');
        style.id = 'ayoba-video-design';
        style.textContent = "/* A moving image within Ayoba's existing olive, butter and cream palette. */\n.hero-canvas.video-hero{min-height:660px;min-height:min(780px,calc(100svh - 98px));isolation:isolate;background:#263023;color:#f2ddaa}\n.video-hero .hero-video-poster,.video-hero .hero-video{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;object-position:66% 80%;z-index:-3}\n.video-hero .hero-video{opacity:0;transition:opacity .65s ease;pointer-events:none}\n.video-hero.is-video-ready .hero-video{opacity:1}\n.video-hero-shade{position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,#182116ed 0%,#25301dc9 31%,#20291c55 62%,#20291c12 100%),linear-gradient(0deg,#1b2318b3,transparent 35%,transparent 70%,#1b231850)}\n.video-hero-content{position:relative;min-height:inherit;display:flex;flex-direction:column;padding-block:30px 24px}\n.video-hero-top,.video-hero-bottom{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:9px;letter-spacing:1.6px;text-transform:uppercase}\n.video-hero-top p{margin:0}.video-hero-top span{color:#fff9e6}\n.video-hero-main{padding-block:55px 45px;flex:1;display:flex;flex-direction:column;justify-content:center}\n.video-hero h1{font:600 clamp(76px,8.4vw,128px)/.92 Bricolage,Arial,sans-serif;letter-spacing:-.065em;max-width:750px;margin:0 0 30px}\n.video-hero h1 em{font:italic 1.12em/1.03 Instrument,Georgia,serif;letter-spacing:-.04em;padding:0;display:block;margin-left:.35em}\n.video-hero-main>p{color:#fff9e6;font-size:14px;line-height:1.7;max-width:320px;margin:0 0 28px}\n.video-hero-actions{display:flex;align-items:center;gap:30px;flex-wrap:wrap}.video-hero-actions .button{padding:16px 22px;font-size:12px;gap:28px}\n.video-film-link{display:inline-flex;align-items:center;gap:10px;font-size:12px;letter-spacing:0;border-bottom:1px solid #f2ddaa80;padding:9px 0;color:#fff9e6}\n.video-play-icon{font:24px/1 Arial,sans-serif}.video-film-link:hover{color:var(--butter)}\n.video-hero-bottom{padding-top:20px;border-top:1px solid #f2ddaa48;font-size:9px;letter-spacing:1.1px}\n.video-hero-bottom>a{display:inline-flex;gap:30px;align-items:center}.video-hero-bottom>a span{font-size:20px;line-height:1}\n.video-hero [data-hero-toggle]{display:inline-flex;gap:9px;align-items:center;min-height:40px;border:1px solid #f2ddaa80;border-radius:30px;padding:8px 14px;background:#26302366;color:#fff9e6;font:10px/1.3 DM,Arial,sans-serif;letter-spacing:.2px;text-transform:none;backdrop-filter:blur(5px)}\n.video-hero [data-hero-toggle-icon]{font:15px/1 Arial,sans-serif;width:12px;text-align:center}\n.video-hero a:focus-visible,.video-hero button:focus-visible{outline:3px solid var(--butter);outline-offset:5px}\n.video-hero [data-hero-toggle]:disabled{opacity:.65;cursor:default}\n.studio-film{padding-block:70px 90px;scroll-margin-top:35px}.studio-film-heading{display:flex;justify-content:space-between;align-items:end;gap:50px;margin-bottom:32px}.studio-film-heading .eyebrow{margin-bottom:18px}.studio-film h2{font:600 clamp(42px,5vw,72px)/1.05 Bricolage,Arial,sans-serif;letter-spacing:-.05em;margin:0}.studio-film h2 em{font-size:1.15em}.studio-film-heading>p{font-size:13px;line-height:1.7;margin:0;max-width:300px}.studio-film>video{display:block;width:100%;height:auto;aspect-ratio:16/9;background:#263023;object-fit:contain;border:0}.studio-film-caption{display:flex;justify-content:space-between;gap:20px;font-size:9px;text-transform:uppercase;letter-spacing:1.2px;padding-top:15px}\n@media(max-width:900px){.hero-canvas.video-hero{min-height:680px}.video-hero-main{padding-block:55px 42px}.video-hero h1{font-size:clamp(76px,10vw,110px)}.video-hero .hero-video-poster,.video-hero .hero-video{object-position:75% 80%}.video-hero-shade{background:linear-gradient(90deg,#182116e6 0%,#25301cb8 32%,#20291c40 100%),linear-gradient(0deg,#1b2318b0,transparent 45%)}.video-hero-actions{gap:22px}}\n@media(max-width:560px){.hero-canvas.video-hero{min-height:700px;min-height:max(700px,calc(100svh - 78px))}.video-hero-content{width:calc(100% - 40px);padding-block:23px 16px}.video-hero-top{font-size:7px;letter-spacing:1px;gap:18px;align-items:start}.video-hero-top p{max-width:175px}.video-hero-top span{white-space:nowrap;font-size:7px}.video-hero-main{justify-content:flex-start;padding-block:60px 150px}.video-hero h1{font-size:clamp(66px,16.5vw,89px);letter-spacing:-.06em;margin-bottom:22px}.video-hero h1 em{margin-left:.18em}.video-hero-main>p{font-size:12px;max-width:255px;margin-bottom:23px}.video-hero-actions{align-items:flex-start;gap:13px;flex-direction:column}.video-hero-actions .button{font-size:10px;min-height:48px;padding:13px 17px;gap:25px}.video-film-link{font-size:11px;padding:5px 0}.video-play-icon{font-size:22px}.video-hero .hero-video-poster,.video-hero .hero-video{object-position:80% bottom}.video-hero-shade{background:linear-gradient(180deg,#182116cc 0%,#20291c85 33%,#20291c15 71%,#182116b3 100%),linear-gradient(90deg,#1821168c,transparent 90%)}.video-hero-bottom{font-size:7px;letter-spacing:1px;gap:10px;padding-top:12px}.video-hero-bottom>a{gap:14px}.video-hero [data-hero-toggle]{min-height:40px;font-size:9px;padding:8px 11px}.studio-film{padding-block:40px 55px}.studio-film-heading{display:block;margin-bottom:24px}.studio-film-heading .eyebrow{font-size:8px}.studio-film h2{font-size:43px;margin-bottom:20px}.studio-film-heading>p{font-size:12px}.studio-film-caption{font-size:7px;letter-spacing:.8px;gap:10px}}\n@media(prefers-reduced-motion:reduce){.video-hero .hero-video{transition:none}.studio-film{scroll-behavior:auto}}\n";
        document.head.append(style);
      }
      const previousHero = document.querySelector('.hero-canvas');
      if (previousHero && !previousHero.hasAttribute('data-video-hero')) {
        const booking = document.querySelector('.navlinks .button')?.getAttribute('href') || '/contact/#intro-call';
        const template = document.createElement('template');
        template.innerHTML = "<section class=\"hero-canvas video-hero\" data-video-hero aria-labelledby=\"hero-title\">\n  <img class=\"hero-video-poster\" src=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-video-poster.0bc303a2e700.jpg\" alt=\"Sophie dancing in a sunlit grassy field.\" width=\"1280\" height=\"720\" fetchpriority=\"high\">\n  <video class=\"hero-video\" data-hero-video data-src=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-hero.bc859e57d99b.mp4\" poster=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-video-poster.0bc303a2e700.jpg\" muted playsinline loop preload=\"none\" aria-hidden=\"true\" tabindex=\"-1\"></video>\n  <div class=\"video-hero-shade\" aria-hidden=\"true\"></div>\n  <div class=\"video-hero-content shell\">\n    <div class=\"video-hero-top\"><p>Somatic movement &amp; ecstatic dance</p><span>Online, with Sophie</span></div>\n    <div class=\"video-hero-main\"><h1 id=\"hero-title\">Movement<br><em>as play.</em></h1><p>Private sessions &amp; group journeys.<br>A practice you can make your own.</p><div class=\"video-hero-actions\"><a class=\"button light\" href=\"/contact/#intro-call\">Book a free intro call <span aria-hidden=\"true\">\u2197</span></a><a class=\"video-film-link\" href=\"#studio-film\"><span class=\"video-play-icon\" aria-hidden=\"true\">\u25b7</span> Watch the film</a></div></div>\n    <div class=\"video-hero-bottom\"><a href=\"#philosophy\">Explore the practice <span aria-hidden=\"true\">\u2193</span></a><button type=\"button\" data-hero-toggle aria-label=\"Play background video\" aria-pressed=\"false\"><span data-hero-toggle-icon aria-hidden=\"true\">\u25b7</span><span data-hero-toggle-label>Play motion</span></button></div>\n  </div>\n</section>\n";
        template.content.querySelector('a[href="/contact/#intro-call"]').setAttribute('href', booking);
        previousHero.replaceWith(template.content.firstElementChild);
      }
      const previousFilm = document.querySelector('.film-section');
      if (previousFilm && !previousFilm.classList.contains('studio-film')) {
        const template = document.createElement('template');
        template.innerHTML = "<section class=\"film-section studio-film shell\" id=\"studio-film\" aria-labelledby=\"studio-film-title\">\n  <div class=\"studio-film-heading\"><div><p class=\"eyebrow\">A movement film</p><h2 id=\"studio-film-title\">Dance as <em>art.</em></h2></div><p>A glimpse into Sophie\u2019s practice,<br>filmed outdoors.</p></div>\n  <video data-studio-film controls playsinline preload=\"none\" poster=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-video-poster.0bc303a2e700.jpg\" aria-label=\"Sophie\u2019s 36-second movement film, without audio\"><source src=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-film.0d5c62839b0b.mp4\" type=\"video/mp4\"><p><a href=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-film.0d5c62839b0b.mp4\">Watch Sophie\u2019s movement film</a>.</p></video>\n  <div class=\"studio-film-caption\"><span>Ayoba Studio \u00b7 Movement study</span><span>00:36 \u00b7 No audio</span></div>\n</section>\n";
        previousFilm.replaceWith(template.content.firstElementChild);
      }
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

    // Video enhancement is deliberately independent of booking data and form delivery.
(() => {
  const hero = document.querySelector('[data-video-hero]');
  if (!hero || hero.dataset.ready) return;
  hero.dataset.ready = 'true';
  const video = hero.querySelector('[data-hero-video]');
  const toggle = hero.querySelector('[data-hero-toggle]');
  const label = hero.querySelector('[data-hero-toggle-label]');
  const icon = hero.querySelector('[data-hero-toggle-icon]');
  const film = document.querySelector('[data-studio-film]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let wantsMotion = !reduced.matches && !navigator.connection?.saveData;
  let inView = true;
  let failed = false;
  let pending = false;
  let queuedResume = false;
  video.muted = true;
  video.defaultMuted = true;
  function update() {
    const playing = !video.paused && !video.ended;
    toggle.setAttribute('aria-pressed', String(playing));
    toggle.setAttribute('aria-label', failed ? 'Background video unavailable' : playing ? 'Pause background video' : 'Play background video');
    label.textContent = failed ? 'Still image' : playing ? 'Pause motion' : 'Play motion';
    icon.textContent = playing ? 'Ⅱ' : '▷';
    toggle.disabled = failed;
  }
  function canResume() {
    return !failed && wantsMotion && inView && !document.hidden && (!film || film.paused);
  }
  async function resume() {
    if (!canResume()) return;
    if (pending) { queuedResume = true; return; }
    if (!video.getAttribute('src')) video.src = video.dataset.src;
    pending = true;
    queuedResume = false;
    let interrupted = false;
    try {
      await video.play();
      if (!canResume()) pause();
    } catch (error) {
      interrupted = error?.name === 'AbortError';
      // Autoplay restrictions leave the poster and manual Play control usable.
    } finally {
      pending = false;
      const retry = interrupted && queuedResume && canResume();
      queuedResume = false;
      update();
      if (retry) resume();
    }
  }
  function pause() { queuedResume = false; video.pause(); update(); }
  toggle.addEventListener('click', () => {
    wantsMotion = video.paused;
    if (wantsMotion) resume(); else pause();
  });
  video.addEventListener('playing', () => {hero.classList.add('is-video-ready'); update();});
  video.addEventListener('pause', update);
  video.addEventListener('error', () => {
    failed = true;
    wantsMotion = false;
    hero.classList.remove('is-video-ready');
    pause();
  });
  document.addEventListener('visibilitychange', () => {if (document.hidden) pause(); else resume();});
  reduced.addEventListener('change', () => {if (reduced.matches) {wantsMotion = false; pause();}});
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      if (inView) resume(); else pause();
    }, {threshold: 0.05}).observe(hero);
  }
  if (film) {
    film.addEventListener('play', pause);
    film.addEventListener('pause', resume);
    film.addEventListener('ended', resume);
  }
  update();
  resume();
})();

  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once: true});
  else apply();
})();
