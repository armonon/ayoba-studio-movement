/* Section links stay ordinary URLs: keyboard navigation, history and deep links work. */
(() => {
  const header = document.querySelector('body > header');
  const nav = document.querySelector('#navlinks');
  if (!header || !nav || header.dataset.sectionsReady) return;
  header.dataset.sectionsReady = 'true';
  header.setAttribute('data-section-header', '');
  const home = (location.pathname.replace(/\/+$/, '') || '/') === '/';
  document.body.classList.add('ayoba-simple');
  document.body.classList.toggle('ayoba-simple-home', home);
  const menu = document.querySelector('.menu-button');
  nav.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    menu?.setAttribute('aria-expanded', 'false');
    nav.dataset.open = 'false';
  });
  const links = Array.from(nav.querySelectorAll('a[href*="#"]'));
  const targets = links.map(link => document.getElementById(new URL(link.href).hash.slice(1)));
  let scheduled = false;
  function update() {
    scheduled = false;
    const height = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--section-header-height', height + 'px');
    if (!home) return;
    let current = -1;
    targets.forEach((target, index) => {
      if (target && target.getBoundingClientRect().top <= height + 90) current = index;
    });
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', schedule, {passive: true});
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(header);
  update();
  if (!home) {
    const section = {'/about':'about', '/private-sessions':'sessions', '/group-journeys':'sessions', '/contact':'book', '/faq':'book'}[location.pathname.replace(/\/+$/, '')];
    links.find(link => new URL(link.href).hash === '#' + section)?.setAttribute('aria-current','location');
  }
  // Snippet layout can move the requested target after the browser's first hash jump.
  if (home && location.hash && !document.documentElement.dataset.sectionHashRestored) {
    const target = document.getElementById(location.hash.slice(1));
    if (target) {
      document.documentElement.dataset.sectionHashRestored = 'true';
      const requestedHash = location.hash;
      let interrupted = false;
      const cancel = () => { interrupted = true; };
      ['pointerdown','wheel','touchstart','keydown'].forEach(type => window.addEventListener(type, cancel, {once:true, passive:true}));
      function alignHash() {
        requestAnimationFrame(() => {
          if (interrupted || location.hash !== requestedHash) return;
          update(); target.scrollIntoView({behavior:'instant', block:'start'});
        });
      }
      alignHash();
      if (document.readyState !== 'complete') window.addEventListener('load', alignHash, {once:true});
      document.fonts?.ready.then(alignHash);
    }
  }
})();
