// Session films loop silently when visible, following the site's motion preferences.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/group-journeys', '/private-sessions'].includes(route)) return;
  document.querySelectorAll('[data-group-video], [data-private-video]').forEach(video => {
    if (video.dataset.sessionVideoReady) return;
    video.dataset.sessionVideoReady = 'true';
    let inView = !('IntersectionObserver' in window);
    let failed = false;
    let pending = false;
    let queuedResume = false;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'none';
    video.autoplay = false;
    const shouldPlay = () => !failed && inView && !document.hidden &&
      document.body.dataset.motion === 'running';
    function load() {
      if (!video.getAttribute('src') && video.dataset.src) video.src = video.dataset.src;
    }
    function pause() {
      video.autoplay = false;
      queuedResume = false;
      video.pause();
    }
    function settled(error) {
      pending = false;
      const retry = queuedResume && (!error || error.name === 'AbortError');
      queuedResume = false;
      if (!shouldPlay()) pause();
      else if (retry) sync();
    }
    function sync() {
      if (!shouldPlay()) { pause(); return; }
      video.autoplay = true;
      if (pending) { queuedResume = true; return; }
      if (!video.paused && !video.ended) return;
      // Reduced motion and save-data prevent automatic loading of the full film.
      load();
      if (!video.getAttribute('src')) return;
      pending = true;
      queuedResume = false;
      try {
        Promise.resolve(video.play()).then(() => settled(null), settled);
      } catch (error) {
        settled(error);
      }
    }
    video.addEventListener('playing', () => {
      if (!inView || document.hidden) pause();
    });
    // Native controls still offer deliberate playback with reduced motion enabled.
    const prepareManualPlayback = () => { if (inView && !document.hidden) load(); };
    video.addEventListener('pointerdown', prepareManualPlayback);
    video.addEventListener('keydown', prepareManualPlayback);
    video.addEventListener('error', () => { failed = true; pause(); });
    new MutationObserver(sync).observe(document.body, {attributes:true, attributeFilter:['data-motion']});
    document.addEventListener('visibilitychange', sync);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
        sync();
      }, {threshold:0.05}).observe(video);
    }
    sync();
  });
})();
