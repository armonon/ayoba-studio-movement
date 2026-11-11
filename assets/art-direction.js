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
