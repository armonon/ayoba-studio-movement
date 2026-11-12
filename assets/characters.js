/* Ten independent cutouts. Scroll changes each flight path and dance rhythm. */
(() => {
  if (!document.body.classList.contains('ayoba-simple-home') || document.body.dataset.charactersReady) return;
  document.body.dataset.charactersReady = 'true';
  const cast = [
    {name:'sun-dancer', src:'/assets/characters/sun-dancer.webp', stage:'hero', x:26, y:20, size:154, phase:0.2, travel:32, dance:'hop', duration:0.78},
    {name:'ghost', src:'/assets/characters/ghost.webp', stage:'hero', x:78, y:43, size:137, phase:2.4, travel:38, dance:'sway', duration:1.05},
    {name:'moon-wizard', src:'/assets/characters/moon-wizard.webp', stage:'hero', x:43, y:80, size:164, phase:4.3, travel:26, dance:'sway', duration:1.3},
    {name:'snail', src:'/assets/characters/snail.webp', stage:'practice', x:27, y:53, size:153, phase:0.8, travel:51, dance:'step', duration:0.9},
    {name:'crow-key', src:'/assets/characters/crow-key.webp', stage:'practice', x:73, y:48, size:146, phase:3.2, travel:62, dance:'flutter', duration:0.72},
    {name:'walking-eye', src:'/assets/characters/walking-eye.webp', stage:'sessions', x:76, y:50, size:118, phase:1.3, travel:85, dance:'step', duration:0.56},
    {name:'mandrake', src:'/assets/characters/mandrake.webp', stage:'play', x:28, y:53, size:143, phase:0.5, travel:43, dance:'hop', duration:0.62},
    {name:'trumpet-lion', src:'/assets/characters/trumpet-lion.webp', stage:'play', x:72, y:51, size:162, phase:2.6, travel:49, dance:'step', duration:0.84},
    {name:'mermaid', src:'/assets/characters/mermaid.webp', stage:'about', x:61, y:50, size:173, phase:1.9, travel:48, dance:'sway', duration:1.12},
    {name:'candle-devil', src:'/assets/characters/candle-devil.webp', stage:'film', x:23, y:50, size:159, phase:3.7, travel:58, dance:'hop', duration:0.68},
  ];
  const mounts = {
    hero:document.querySelector('[data-art-hero], [data-video-hero]'),
    practice:document.querySelector('#philosophy .manifesto-layout'),
    sessions:document.querySelector('#sessions'),
    play:document.querySelector('#play > .shell'),
    about:document.querySelector('#about .founder-photo'),
    film:document.querySelector('#studio-film'),
  };
  const stages = [];
  const dancers = [];
  Object.entries(mounts).forEach(([name, parent]) => {
    if (!parent) return;
    const stage = document.createElement('div');
    stage.className = 'cast-stage cast-' + name;
    stage.dataset.castStage = name;
    stage.dataset.visible = 'false';
    stage.setAttribute('aria-hidden', 'true');
    parent.append(stage);
    stages.push(stage);
    cast.filter(character => character.stage === name).forEach(character => {
      const flight = document.createElement('div');
      flight.className = 'character-flight';
      flight.dataset.character = character.name;
      flight.style.setProperty('--cast-x', character.x + '%');
      flight.style.setProperty('--cast-y', character.y + '%');
      flight.style.setProperty('--cast-size', character.size + 'px');
      const puppet = document.createElement('div');
      puppet.className = 'character-puppet dance-' + character.dance;
      puppet.style.setProperty('--idle-duration', (4.2 + character.phase * 0.7) + 's');
      puppet.style.setProperty('--dance-duration', character.duration + 's');
      puppet.style.setProperty('--cast-delay', (-character.phase) + 's');
      const image = document.createElement('img');
      image.src = character.src;
      image.alt = '';
      image.draggable = false;
      image.decoding = 'async';
      image.loading = name === 'hero' ? 'eager' : 'lazy';
      image.width = 1024; image.height = 1536;
      // Fixed artwork boxes keep late image loads from moving anchor targets.
      puppet.append(image); flight.append(puppet); stage.append(flight);
      dancers.push({...character, flight, stage});
    });
  });
  if (!stages.length) return;
  let pending = 0;
  let settleTimer = 0;
  let lastScroll = window.scrollY;
  let strength = 0.6;
  let scrolling = false;
  const running = () => document.body.dataset.motion === 'running' && !document.hidden;
  function draw() {
    pending = 0;
    if (!running()) return;
    const small = innerWidth <= 700;
    const bounds = new Map(stages.map(stage => [stage, stage.getBoundingClientRect()]));
    dancers.forEach(character => {
      if (character.stage.dataset.visible !== 'true') return;
      const box = bounds.get(character.stage);
      const progress = Math.max(-0.3, Math.min(1.3, (innerHeight - box.top) / (innerHeight + box.height)));
      const angle = progress * Math.PI * 2 + character.phase;
      const distance = small ? Math.min(character.travel * 0.4, 25) : character.travel;
      const x = Math.sin(angle) * distance;
      const y = Math.cos(angle * 1.3) * (small ? 8 : 17);
      const turn = Math.sin(angle * 1.7) * (character.dance === 'flutter' ? 11 : 6);
      character.flight.style.setProperty('--flight-x', x.toFixed(2) + 'px');
      character.flight.style.setProperty('--flight-y', y.toFixed(2) + 'px');
      character.flight.style.setProperty('--flight-turn', turn.toFixed(2) + 'deg');
      character.stage.dataset.dancing = String(scrolling);
      character.stage.style.setProperty('--dance-strength', strength.toFixed(2));
    });
  }
  function schedule() { if (running() && !pending) pending = requestAnimationFrame(draw); }
  function settle() {
    scrolling = false;
    stages.forEach(stage => { stage.dataset.dancing = 'false'; });
  }
  window.addEventListener('scroll', () => {
    const delta = Math.abs(window.scrollY - lastScroll);
    lastScroll = window.scrollY;
    if (!running() || delta < 0.5) return;
    strength = Math.min(1, 0.45 + delta / 70);
    scrolling = true;
    clearTimeout(settleTimer);
    settleTimer = setTimeout(settle, 650);
    schedule();
  }, {passive:true});
  window.addEventListener('resize', schedule, {passive:true});
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { entry.target.dataset.visible = String(entry.isIntersecting); });
      schedule();
    }, {rootMargin:'80px 0px', threshold:0});
    stages.forEach(stage => observer.observe(stage));
  } else {
    stages.forEach(stage => {stage.dataset.visible = 'true';});
  }
  new MutationObserver(() => {
    if (!running()) {
      if (pending) cancelAnimationFrame(pending);
      pending = 0;
      clearTimeout(settleTimer);
      // Keep the current dance pose frozen until motion is enabled again.
    } else {
      lastScroll = window.scrollY;
      settle();
      schedule();
    }
  }).observe(document.body, {attributes:true, attributeFilter:['data-motion']});
  schedule();
})();
