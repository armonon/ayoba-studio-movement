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
