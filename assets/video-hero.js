// The original hero follows the site's shared motion setting.
(() => {
  const hero = document.querySelector('[data-video-hero]');
  if (!hero || hero.dataset.ready) return;
  const video = hero.querySelector('[data-hero-video]');
  if (!video) return;
  hero.dataset.ready = 'true';
  const film = document.querySelector('[data-studio-film]');
  let inView = !('IntersectionObserver' in window);
  let failed = false;
  let pending = false;
  let queuedResume = false;
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'none';
  function canResume() {
    return !failed && document.body.dataset.motion === 'running' && inView &&
      !document.hidden && (!film || film.paused || film.ended);
  }
  function pause() {
    queuedResume = false;
    video.pause();
  }
  function settled(error) {
    pending = false;
    // Only an interrupted or successful attempt may service a queued resume.
    // Autoplay rejection waits for a later shared-motion or visibility change.
    const retry = queuedResume && (!error || error.name === 'AbortError');
    queuedResume = false;
    if (!canResume()) pause();
    else if (retry) sync();
  }
  function sync() {
    if (!canResume()) { pause(); return; }
    if (pending) { queuedResume = true; return; }
    if (!video.paused && !video.ended) return;
    // Shared reduced-motion/save-data preferences prevent even loading the film.
    if (!video.getAttribute('src')) {
      if (!video.dataset.src) return;
      video.src = video.dataset.src;
    }
    pending = true;
    queuedResume = false;
    try {
      Promise.resolve(video.play()).then(() => settled(null), settled);
    } catch (error) {
      settled(error);
    }
  }
  video.addEventListener('playing', () => {
    if (!failed) hero.classList.add('is-video-ready');
    if (!canResume()) pause();
  });
  video.addEventListener('error', () => {
    failed = true;
    hero.classList.remove('is-video-ready');
    pause();
  });
  new MutationObserver(sync).observe(document.body, {attributes:true, attributeFilter:['data-motion']});
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      sync();
    }, {threshold: 0.05}).observe(hero);
  }
  if (film) {
    film.addEventListener('play', pause);
    film.addEventListener('pause', sync);
    film.addEventListener('ended', sync);
  }
  sync();
})();
