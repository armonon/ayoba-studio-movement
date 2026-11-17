/* The supplied artwork stays intact. Motion is entirely in the presentation layer. */
(() => {
  if (document.body.dataset.backgroundReady) return;
  document.body.dataset.backgroundReady = 'true';
  document.body.classList.add('ayoba-tropical');
  const backdrop = document.createElement('div');
  backdrop.id = 'ayoba-background';
  backdrop.className = 'tropical-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  const plane = document.createElement('div');
  plane.className = 'tropical-plane';
  plane.dataset.artPlane = '';
  plane.dataset.artDepth = '0.35';
  const image = document.createElement('img');
  image.className = 'tropical-image';
  image.src = '/assets/ayoba-tropical-background.jpg';
  image.alt = '';
  image.width = 1800;
  image.height = 1800;
  plane.append(image); backdrop.append(plane); document.body.prepend(backdrop);

  const planes = Array.from(document.querySelectorAll('[data-art-plane]'));
  const hero = document.querySelector('[data-art-hero], [data-video-hero]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  let wantsMotion = !reduced.matches && !navigator.connection?.saveData;
  let frame = 0;
  let x = 0, y = 0;
  function update() {
    document.body.dataset.motion = wantsMotion && !document.hidden ? 'running' : 'paused';
    if (!wantsMotion && frame) { cancelAnimationFrame(frame); frame = 0; }
  }
  function moveArtwork() {
    frame = 0;
    if (!wantsMotion || document.hidden) return;
    planes.forEach(element => {
      const depth = Number(element.dataset.artDepth || 1);
      element.style.setProperty('--pointer-x', (x * 12 * depth).toFixed(2) + 'px');
      element.style.setProperty('--pointer-y', (y * 9 * depth).toFixed(2) + 'px');
    });
  }
  window.addEventListener('pointermove', event => {
    if (!finePointer.matches || !wantsMotion || document.hidden) return;
    x = (event.clientX / innerWidth - 0.5) * 2;
    y = (event.clientY / innerHeight - 0.5) * 2;
    if (!frame) frame = requestAnimationFrame(moveArtwork);
  }, {passive:true});
  document.addEventListener('visibilitychange', update);
  reduced.addEventListener('change', () => {
    wantsMotion = !reduced.matches && !navigator.connection?.saveData;
    update();
  });
  // Keep hero visibility available to the existing presentation styles.
  document.body.dataset.heroInView = hero ? 'true' : 'false';
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      document.body.dataset.heroInView = String(entries[0].isIntersecting);
    }, {threshold:0}).observe(hero);
  } else if (hero) {
    document.body.dataset.heroInView = 'false';
  }
  update();
})();
