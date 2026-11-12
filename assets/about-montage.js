// A silent edit of Sophie's public video journal, scoped to About.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/about'].includes(route) || document.body.dataset.aboutMontageReady) return;
  const section = route === '/' ? document.querySelector('#about') : document.querySelector('main.page');
  if (!section) return;
  document.body.dataset.aboutMontageReady = 'true';
  const fullPage = route === '/about';
  if (fullPage) document.body.classList.add('about-montage-page');
  else section.classList.add('about-montage-section');

  const backdrop = document.createElement('div');
  backdrop.className = 'about-film-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  const poster = document.createElement('img');
  poster.src = matchMedia('(max-width:700px)').matches
    ? '/assets/ayoba-about-montage-mobile-poster.jpg'
    : '/assets/ayoba-about-montage-poster.jpg';
  poster.alt = '';
  poster.width = 1280;
  poster.height = 720;
  poster.loading = fullPage ? 'eager' : 'lazy';
  poster.decoding = 'async';
  const video = document.createElement('video');
  video.dataset.aboutMontage = '';
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'none';
  video.tabIndex = -1;
  video.disablePictureInPicture = true;
  video.disableRemotePlayback = true;
  backdrop.append(poster, video);
  if (fullPage) document.body.prepend(backdrop);
  else section.prepend(backdrop);

  const credit = document.createElement('a');
  credit.className = 'about-film-credit';
  credit.href = 'https://www.youtube.com/@sophiesky999';
  credit.target = '_blank';
  credit.rel = 'noopener noreferrer';
  credit.innerHTML = 'From Sophie’s video journal <span aria-hidden="true">↗</span>';
  const heading = section.querySelector(fullPage ? 'h1' : '.founder-copy h2');
  heading?.insertAdjacentElement('afterend', credit);

  let visible = fullPage;
  let pending = false;
  let resumeQueued = false;
  const shouldPlay = () => visible && !document.hidden && document.body.dataset.motion === 'running';
  function sync() {
    if (!shouldPlay()) { resumeQueued = false; video.pause(); return; }
    // Reduced motion, save-data, and the shared Pause button prevent video loading.
    if (!video.getAttribute('src')) {
      video.src = matchMedia('(max-width:700px)').matches
        ? '/assets/ayoba-about-montage-mobile.mp4'
        : '/assets/ayoba-about-montage.mp4';
    }
    if (pending) { resumeQueued = true; return; }
    if (!video.paused) return;
    pending = true;
    resumeQueued = false;
    const attempt = video.play();
    if (attempt?.then) {
      let failure = null;
      attempt.catch(error => {
        failure = error;
        if (error.name !== 'AbortError') backdrop.dataset.playback = 'poster';
      }).finally(() => {
        pending = false;
        const retry = resumeQueued && (!failure || failure.name === 'AbortError');
        resumeQueued = false;
        if (!shouldPlay()) video.pause();
        else if (retry) sync();
      });
    } else pending = false;
  }
  video.addEventListener('playing', () => {
    backdrop.dataset.filmReady = 'true';
    backdrop.dataset.playback = 'playing';
    if (!shouldPlay()) video.pause();
  });
  video.addEventListener('pause', () => { backdrop.dataset.playback = 'paused'; });
  video.addEventListener('error', () => {
    backdrop.dataset.filmReady = 'false';
    backdrop.dataset.playback = 'poster';
  });
  new MutationObserver(sync).observe(document.body, {attributes:true, attributeFilter:['data-motion']});
  document.addEventListener('visibilitychange', sync);
  if (!fullPage && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }, {rootMargin:'120px'}).observe(section);
  } else {
    visible = true;
  }
  sync();
})();
