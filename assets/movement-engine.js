// Ayoba movement studies. Browser-local interactions; no storage or API calls.
(() => {
  if (/^\/(?:studio|api)(?:\/|$)/.test(location.pathname)) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const scenes = [
    {src: '/assets/golden-field.jpg', caption: 'Field study', alt: 'Golden sunlight over a grassy hillside, with a dancer at the edge of the frame.'},
    {src: '/assets/grounded-movement.jpg', caption: 'Ground study', alt: 'Black-and-white photograph of a dancer leaning toward the grass with one arm lifted.'},
    {src: '/assets/sunlit-movement.jpg', caption: 'Light study', alt: 'A dancer in a light dress reaches one arm overhead in a sunlit field.'},
    {src: '/assets/embrace.jpg', caption: 'Close study', alt: 'Black-and-white close-up of a person wrapping their arms around their shoulders in a grassy field.'},
    {src: '/assets/movement-study.jpg', caption: 'Motion study', alt: 'Layered photographic study of arms and a light dress in outdoor movement.'},
  ];

  function initializeGallery(gallery) {
    if (gallery.dataset.motionGalleryReady === 'true') return;
    const image = gallery.querySelector('[data-motion-image]');
    if (!image) return;
    gallery.dataset.motionGalleryReady = 'true';
    const outgoing = gallery.querySelector('[data-motion-next]');
    const caption = gallery.querySelector('[data-motion-caption]');
    const counter = gallery.querySelector('[data-motion-count]');
    const playButton = gallery.querySelector('[data-motion-play]');
    const steps = [...gallery.querySelectorAll('[data-motion-step]')];
    const initial = Number.parseInt(gallery.dataset.scene, 10);
    let current = Number.isInteger(initial) && initial >= 0 && initial < scenes.length ? initial : 0;
    let interval = null;
    let fadeTimer = null;
    let fadeFrame = null;
    let changeSequence = 0;
    let imageLoadHandler = null;
    let imageErrorHandler = null;

    if (!gallery.hasAttribute('role')) gallery.setAttribute('role', 'region');
    if (!gallery.hasAttribute('aria-label')) gallery.setAttribute('aria-label', 'Movement photographs');
    if (!gallery.hasAttribute('tabindex')) gallery.tabIndex = 0;
    if (outgoing) {
      outgoing.alt = '';
      outgoing.setAttribute('aria-hidden', 'true');
      outgoing.hidden = true;
      outgoing.style.display = 'none';
    }

    function endTransition() {
      clearTimeout(fadeTimer);
      if (fadeFrame !== null) cancelAnimationFrame(fadeFrame);
      fadeFrame = null;
      gallery.classList.remove('is-changing');
      if (outgoing) {
        outgoing.hidden = true;
        outgoing.style.display = 'none';
        outgoing.style.removeProperty('opacity');
        outgoing.style.removeProperty('transition');
      }
    }

    function updateLabels() {
      const scene = scenes[current];
      gallery.dataset.scene = String(current);
      if (caption) caption.textContent = scene.caption;
      if (counter) counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(scenes.length).padStart(2, '0')}`;
      steps.forEach(button => {
        const index = Number.parseInt(button.dataset.motionStep, 10);
        button.setAttribute('aria-pressed', String(index === current));
        if (!button.hasAttribute('aria-label') && scenes[index]) button.setAttribute('aria-label', `Show ${scenes[index].caption.toLowerCase()}`);
      });
    }

    function showScene(index, animate = true) {
      const next = (index + scenes.length) % scenes.length;
      const oldSource = image.getAttribute('src');
      const oldAlt = image.alt;
      const sequence = ++changeSequence;
      endTransition();
      if (imageLoadHandler) image.removeEventListener('load', imageLoadHandler);
      if (imageErrorHandler) image.removeEventListener('error', imageErrorHandler);
      current = next;
      const scene = scenes[current];
      updateLabels();
      if (outgoing && animate && !reducedMotion.matches && oldSource && oldSource !== scene.src) {
        outgoing.src = oldSource;
        outgoing.alt = '';
        outgoing.hidden = false;
        outgoing.style.removeProperty('display');
        outgoing.style.opacity = '1';
        outgoing.style.transition = 'none';
        gallery.classList.add('is-changing');
      }
      image.src = scene.src;
      image.alt = scene.alt;

      imageLoadHandler = () => {
        if (sequence !== changeSequence || !outgoing || outgoing.hidden) return;
        fadeFrame = requestAnimationFrame(() => {
          if (sequence !== changeSequence) return;
          outgoing.style.transition = reducedMotion.matches ? 'none' : 'opacity 600ms ease';
          outgoing.style.opacity = '0';
          fadeTimer = setTimeout(endTransition, reducedMotion.matches ? 0 : 650);
        });
      };
      if (image.complete && image.naturalWidth) imageLoadHandler();
      else image.addEventListener('load', imageLoadHandler, {once: true});
      imageErrorHandler = () => {
        if (sequence !== changeSequence) return;
        stopPlayback();
        endTransition();
        if (oldSource && oldSource !== scene.src) {
          image.src = oldSource;
          image.alt = oldAlt;
          const previous = scenes.findIndex(item => item.src === oldSource);
          if (previous >= 0) current = previous;
          updateLabels();
        }
      };
      image.addEventListener('error', imageErrorHandler, {once: true});
    }

    function updatePlaybackControls() {
      const playing = interval !== null;
      gallery.classList.toggle('is-playing', playing);
      if (caption) caption.setAttribute('aria-live', playing ? 'off' : 'polite');
      if (!playButton) return;
      playButton.textContent = playing ? 'Pause' : 'Play';
      playButton.setAttribute('aria-pressed', String(playing));
      playButton.setAttribute('aria-label', playing ? 'Pause photo sequence' : 'Play photo sequence');
      playButton.disabled = reducedMotion.matches;
      if (reducedMotion.matches) playButton.title = 'Automatic playback is off with reduced motion. Use the photo controls to explore.';
      else playButton.removeAttribute('title');
    }

    function stopPlayback() {
      if (interval !== null) clearInterval(interval);
      interval = null;
      updatePlaybackControls();
    }

    function choose(index) {
      stopPlayback();
      showScene(index);
    }

    steps.forEach(button => button.addEventListener('click', () => {
      const index = Number.parseInt(button.dataset.motionStep, 10);
      if (Number.isInteger(index) && scenes[index]) choose(index);
    }));
    gallery.querySelector('[data-motion-prev]')?.addEventListener('click', () => choose(current - 1));
    gallery.querySelector('[data-motion-next-button]')?.addEventListener('click', () => choose(current + 1));
    playButton?.addEventListener('click', () => {
      if (interval !== null || reducedMotion.matches || document.hidden) {
        stopPlayback();
        return;
      }
      interval = setInterval(() => showScene(current + 1), 4000);
      updatePlaybackControls();
    });
    gallery.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input, select, textarea, [contenteditable="true"]')) return;
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      choose(current + (event.key === 'ArrowRight' ? 1 : -1));
    });
    document.addEventListener('visibilitychange', () => { if (document.hidden) stopPlayback(); });
    reducedMotion.addEventListener('change', () => {
      stopPlayback();
      endTransition();
    });
    updatePlaybackControls();
    showScene(current, false);
  }

  function initializeArt(surface) {
    if (surface.dataset.motionArtReady === 'true') return;
    const lines = surface.querySelector('[data-motion-lines]');
    if (!lines) return;
    surface.dataset.motionArtReady = 'true';
    const studio = surface.closest('[data-motion-studio]') || surface.parentElement;
    const status = studio.querySelector('[data-motion-status]');
    const tools = [...studio.querySelectorAll('[data-motion-tool]')];
    const names = {flow: 'Flow', pulse: 'Pulse', still: 'Still'};
    let mode = names[surface.dataset.tool] ? surface.dataset.tool : 'flow';
    let active = null;
    let gestureCount = 0;
    const namespace = 'http://www.w3.org/2000/svg';
    const maximumPaths = 48;
    const maximumPoints = 600;
    surface.style.touchAction = 'none';
    if (!surface.hasAttribute('aria-label')) surface.setAttribute('aria-label', 'Draw a movement study with a cursor or finger. The Add a gesture button offers a keyboard alternative.');

    function announce(message) {
      if (status) status.textContent = message;
    }

    function updateTools() {
      surface.dataset.tool = mode;
      studio.dataset.tool = mode;
      tools.forEach(control => {
        if (control.tagName === 'SELECT') control.value = mode;
        else control.setAttribute('aria-pressed', String(control.dataset.motionTool === mode));
      });
    }

    function makePath(d) {
      while (lines.children.length >= maximumPaths) lines.firstElementChild.remove();
      const path = document.createElementNS(namespace, 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'currentColor');
      path.setAttribute('stroke-width', {flow: '2.2', pulse: '2.8', still: '1.6'}[mode]);
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.dataset.tool = mode;
      lines.append(path);
      gestureCount += 1;
      return path;
    }

    function gesturePath() {
      const phase = gestureCount * 1.7;
      const cx = 300 + Math.sin(phase) * 28;
      const cy = 180 + Math.cos(phase) * 16;
      if (mode === 'still') {
        return Array.from({length: 4}, (_, ring) => {
          const rx = 65 + ring * 37;
          const ry = 25 + ring * 20;
          return `M${cx - rx},${cy} C${cx - rx},${cy - ry * 1.4} ${cx + rx},${cy - ry * 1.1} ${cx + rx},${cy} C${cx + rx},${cy + ry * 1.25} ${cx - rx},${cy + ry * 1.4} ${cx - rx},${cy}`;
        }).join(' ');
      }
      return Array.from({length: 220}, (_, index) => {
        const t = index / 219 * Math.PI * 2;
        let x;
        let y;
        if (mode === 'pulse') {
          const radius = 112 + Math.sin(t * 9 + phase) * 41;
          x = cx + Math.cos(t) * radius * 1.25;
          y = cy + Math.sin(t) * radius * .82;
        } else {
          x = cx + Math.sin(t * 2 + phase) * 164 + Math.sin(t * 5) * 22;
          y = cy + Math.cos(t * 3 + phase * .25) * 114 + Math.sin(t * 2) * 17;
        }
        return `${index ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
      }).join(' ');
    }

    function addGesture(shouldAnnounce = true) {
      makePath(gesturePath());
      if (shouldAnnounce) announce(`${names[mode]} gesture added.`);
    }

    function chooseTool(value) {
      if (!names[value] || value === mode) return;
      mode = value;
      updateTools();
      addGesture();
    }

    function point(event) {
      let x;
      let y;
      const matrix = surface.getScreenCTM();
      if (matrix && typeof DOMPoint !== 'undefined') {
        const local = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
        x = local.x;
        y = local.y;
      } else {
        const bounds = surface.getBoundingClientRect();
        x = (event.clientX - bounds.left) / bounds.width * 600;
        y = (event.clientY - bounds.top) / bounds.height * 360;
      }
      return `${Math.max(0, Math.min(600, x)).toFixed(1)},${Math.max(0, Math.min(360, y)).toFixed(1)}`;
    }

    function finishStroke(event) {
      if (!active || (event && active.id !== event.pointerId)) return;
      const pointerId = active.id;
      active = null;
      if (surface.hasPointerCapture(pointerId)) surface.releasePointerCapture(pointerId);
      announce('Your gesture was added.');
    }

    surface.addEventListener('pointerdown', event => {
      if (!event.isPrimary || event.button !== 0 || active) return;
      event.preventDefault();
      surface.setPointerCapture(event.pointerId);
      const start = point(event);
      active = {id: event.pointerId, path: makePath(`M${start} l.1,.1`), points: 1, previous: start};
    });
    surface.addEventListener('pointermove', event => {
      if (!active || active.id !== event.pointerId) return;
      if (active.points >= maximumPoints) {
        finishStroke(event);
        return;
      }
      const next = point(event);
      if (next === active.previous) return;
      active.path.setAttribute('d', `${active.path.getAttribute('d')} L${next}`);
      active.previous = next;
      active.points += 1;
    });
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => surface.addEventListener(type, finishStroke));
    tools.forEach(control => {
      if (control.tagName === 'SELECT') control.addEventListener('change', () => chooseTool(control.value));
      else control.addEventListener('click', () => chooseTool(control.dataset.motionTool));
    });
    studio.querySelector('[data-motion-add]')?.addEventListener('click', () => addGesture());
    studio.querySelector('[data-motion-clear]')?.addEventListener('click', () => {
      finishStroke();
      lines.replaceChildren();
      gestureCount = 0;
      announce('Drawing cleared.');
    });
    updateTools();
    if (!lines.children.length) addGesture(false);
  }

  function initializeReveals() {
    const items = [...document.querySelectorAll('[data-motion-reveal]')].filter(item => item.dataset.motionRevealReady !== 'true');
    if (!items.length) return;
    items.forEach(item => { item.dataset.motionRevealReady = 'true'; });
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('is-in-view'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in-view');
        observer.unobserve(entry.target);
      });
    }, {threshold: .08, rootMargin: '0px 0px 30px 0px'});
    items.forEach(item => observer.observe(item));
    reducedMotion.addEventListener('change', () => {
      if (!reducedMotion.matches) return;
      items.forEach(item => item.classList.add('is-in-view'));
      observer.disconnect();
    });
  }

  function initialize() {
    document.querySelectorAll('[data-motion-gallery]').forEach(initializeGallery);
    document.querySelectorAll('[data-motion-art]').forEach(initializeArt);
    initializeReveals();
    document.documentElement.classList.add('motion-ready');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, {once: true});
  else initialize();
})();
