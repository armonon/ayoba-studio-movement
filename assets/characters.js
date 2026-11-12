/* Actual isolated frames from the supplied dance film, drawn behind the page. */
(() => {
  if (!document.body.classList.contains('ayoba-simple-home') || document.body.dataset.charactersReady) return;
  document.body.dataset.charactersReady = 'true';
  const clips = [
    {name:'candle-devil', src:'/assets/dancing-clips/candle-devil.webp', poster:'/assets/dancing-clips/candle-devil-poster.webp'},
    {name:'snail', frames:16, src:'/assets/dancing-clips/snail.webp', poster:'/assets/dancing-clips/snail-poster.webp'},
    {name:'sun-dancer', src:'/assets/dancing-clips/sun-dancer.webp', poster:'/assets/dancing-clips/sun-dancer-poster.webp'},
    {name:'ghost', src:'/assets/dancing-clips/ghost.webp', poster:'/assets/dancing-clips/ghost-poster.webp'},
    {name:'crow-key', src:'/assets/dancing-clips/crow-key.webp', poster:'/assets/dancing-clips/crow-key-poster.webp'},
    {name:'mandrake', frames:24, src:'/assets/dancing-clips/mandrake.webp', poster:'/assets/dancing-clips/mandrake-poster.webp'},
    {name:'trumpet-lion', frames:24, src:'/assets/dancing-clips/trumpet-lion.webp', poster:'/assets/dancing-clips/trumpet-lion-poster.webp'},
    {name:'moon-wizard', src:'/assets/dancing-clips/moon-wizard.webp', poster:'/assets/dancing-clips/moon-wizard-poster.webp'},
    {name:'walking-eye', frames:16, src:'/assets/dancing-clips/walking-eye.webp', poster:'/assets/dancing-clips/walking-eye-poster.webp'},
  ].map(clip => ({width:160, height:160, columns:8, frames:48, fps:12, ...clip}));
  // Every instance has its own size, position, phase and playback pace.
  const layouts = [
    ['home', [[2,72,25,138],[3,91,44,94],[7,77,73,162],[0,60,91,62],[8,95,83,76],[4,96,13,48]]],
    ['philosophy', [[1,7,18,126],[4,92,29,156],[5,53,13,58],[8,24,84,92],[0,75,92,66],[2,97,72,116]]],
    ['sessions', [[8,4,28,106],[3,94,16,150],[1,49,47,64],[6,92,87,140],[7,8,92,78],[5,70,6,52]]],
    ['play', [[5,7,17,158],[6,92,27,118],[0,47,12,56],[2,14,88,104],[4,71,91,72],[8,98,72,92]]],
    ['about', [[3,7,19,130],[7,94,69,160],[4,36,91,68],[5,91,15,62],[1,4,82,90],[8,61,8,48]]],
    ['studio-film', [[0,9,14,138],[2,90,13,178],[1,48,7,62],[6,9,92,108],[3,91,93,76],[5,67,96,48]]],
    ['book', [[7,3,21,148],[8,95,19,90],[4,4,63,118],[5,95,81,140],[6,42,94,58],[0,76,7,68]]],
  ];
  const fields = [];
  const images = new Map();
  let raf = 0, elapsed = 0, previousTime = null, lastPaint = -Infinity;
  let dirty = true, scrollEnergy = 0, lastScroll = window.scrollY;
  const running = () => document.body.dataset.motion === 'running' && !document.hidden;
  const visibleFields = () => fields.filter(field => field.visible);
  function imageFor(src) {
    if (!images.has(src)) {
      const image = new Image();
      const entry = {image, ready:false, failed:false};
      images.set(src, entry);
      image.decoding = 'async';
      image.onload = () => { entry.ready = true; paint(); schedule(); };
      image.onerror = () => { entry.failed = true; };
      image.src = src;
    }
    return images.get(src);
  }
  layouts.forEach(([id, instances], sectionIndex) => {
    const section = document.getElementById(id);
    if (!section) return;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return;
    canvas.className = 'dance-background';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.dataset.dancerCount = String(instances.length);
    canvas.dataset.source = 'isolated-video-frames';
    section.classList.add('dance-field');
    section.append(canvas);
    fields.push({section, canvas, context, visible:false, width:0, height:0,
      people:instances.map(([clip, x, y, size], index) => ({clip:clips[clip], x, y, size,
        phase:(index * 11 + sectionIndex * 7), rate:0.88 + ((index + sectionIndex) % 4) * 0.06,
        mirror:(index + sectionIndex) % 3 === 0, alpha:0.42, drawSize:size})),
    });
  });
  if (!fields.length) return;
  function measure() {
    dirty = false;
    const mobile = innerWidth <= 700;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    // Batch layout reads; measure again only after a size change.
    const geometry = fields.map(field => {
      const box = field.section.getBoundingClientRect();
      const protectedBoxes = Array.from(field.section.querySelectorAll('h1,h2,h3,p,.button,.textlink,.mood-buttons,.movement-study,.booking-option,.video-hero-bottom'))
        .map(element => element.getBoundingClientRect());
      return {field, box, protectedBoxes};
    });
    geometry.forEach(({field, box, protectedBoxes}) => {
      field.width = box.width; field.height = box.height;
      field.canvas.width = Math.max(1, Math.round(box.width * ratio));
      field.canvas.height = Math.max(1, Math.round(box.height * ratio));
      field.context.setTransform(ratio,0,0,ratio,0,0);
      field.people.forEach(person => {
        const size = person.size * (mobile ? 0.68 : 1);
        person.drawSize = size;
        person.px = person.x / 100 * box.width;
        person.py = person.y / 100 * box.height;
        const left = box.left + person.px - size * 0.36;
        const top = box.top + person.py - size * 0.42;
        const overText = protectedBoxes.some(rect => left < rect.right && left + size * 0.72 > rect.left && top < rect.bottom && top + size * 0.84 > rect.top);
        // Fade whole figures under reading areas, without clipping their bodies.
        person.alpha = overText ? (field.section.id === 'home' ? 0.16 : 0.13) : (mobile ? 0.32 : 0.46);
      });
    });
  }
  function loadVisible() {
    visibleFields().forEach(field => field.people.forEach(person => {
      imageFor(person.clip.poster);
      if (running()) imageFor(person.clip.src);
    }));
  }
  function paint() {
    if (dirty) measure();
    visibleFields().forEach(field => {
      const ctx = field.context;
      ctx.clearRect(0,0,field.width,field.height);
      field.people.forEach(person => {
        const clip = person.clip;
        const atlas = images.get(clip.src);
        const poster = images.get(clip.poster);
        // A late network response must not change a pose after Pause was pressed.
        if (running() && atlas?.ready) person.usingAtlas = true;
        const useAtlas = atlas?.ready && person.usingAtlas;
        const entry = useAtlas ? atlas : poster;
        if (!entry?.ready) return;
        // Reverse at each end of the actual clip to avoid a hard loop seam.
        const cycle = Math.max(1, (clip.frames - 1) * 2);
        const step = Math.floor(elapsed / 1000 * clip.fps * person.rate + person.phase) % cycle;
        const frame = useAtlas ? (step < clip.frames ? step : cycle - step) : 0;
        const sx = useAtlas ? frame % clip.columns * clip.width : 0;
        const sy = useAtlas ? Math.floor(frame / clip.columns) * clip.height : 0;
        const size = person.drawSize;
        ctx.save();
        ctx.globalAlpha = person.alpha;
        ctx.translate(person.px, person.py);
        ctx.scale(person.mirror ? -1 : 1, 1);
        ctx.drawImage(entry.image, sx, sy, clip.width, clip.height, -size/2, -size/2, size, size);
        ctx.restore();
      });
      field.canvas.dataset.playhead = String(Math.floor(elapsed));
    });
  }
  function tick(time) {
    raf = 0;
    if (!running() || !visibleFields().length) { previousTime = null; return; }
    if (previousTime !== null) elapsed += Math.min(120, time - previousTime) * (1 + scrollEnergy);
    previousTime = time;
    if (time - lastPaint >= 1000 / 15) {
      lastPaint = time;
      scrollEnergy *= 0.88;
      paint();
    }
    schedule();
  }
  function schedule() {
    if (!raf && running() && visibleFields().length) raf = requestAnimationFrame(tick);
  }
  function sync() {
    if (!running()) {
      if (raf) cancelAnimationFrame(raf);
      raf = 0; previousTime = null; scrollEnergy = 0;
    }
    loadVisible(); schedule();
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const field = fields.find(item => item.section === entry.target);
        field.visible = entry.isIntersecting;
      });
      loadVisible(); paint(); schedule();
      if (!visibleFields().length && raf) { cancelAnimationFrame(raf); raf = 0; previousTime = null; }
    }, {threshold:0});
    fields.forEach(field => observer.observe(field.section));
  } else {
    fields.forEach(field => { field.visible = true; });
  }
  const resize = () => { dirty = true; paint(); schedule(); };
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(resize);
    fields.forEach(field => observer.observe(field.section));
  }
  window.addEventListener('resize', resize, {passive:true});
  window.addEventListener('scroll', () => {
    const distance = Math.abs(window.scrollY - lastScroll);
    lastScroll = window.scrollY;
    if (running()) scrollEnergy = Math.min(0.45, scrollEnergy + distance / 1600);
  }, {passive:true});
  document.addEventListener('visibilitychange', sync);
  new MutationObserver(sync).observe(document.body, {attributes:true, attributeFilter:['data-motion']});
  document.fonts?.ready.then(resize);
  sync();
})();
