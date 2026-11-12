// The supplied pendants act as quiet section markers, separate from the dancing cast.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  const routes = ['/', '/about', '/private-sessions', '/group-journeys', '/contact', '/faq', '/participant-agreement', '/cancellation-refund-policy', '/privacy-policy'];
  if (!routes.includes(route) || document.body.dataset.pendantsReady) return;
  document.body.dataset.pendantsReady = 'true';

  // Literal asset paths let the publication script map each image to immutable media.
  const motifs = {
    cross: {name:'spoke-cross', src:'/assets/motifs/spoke-cross.webp'},
    disc: {name:'horned-disc', src:'/assets/motifs/horned-disc.webp'},
    arrow: {name:'crescent-arrow', src:'/assets/motifs/crescent-arrow.webp'},
    sun: {name:'wavy-sun', src:'/assets/motifs/wavy-sun.webp'},
    wheel: {name:'spoked-wheel', src:'/assets/motifs/spoked-wheel.webp'},
    tassel: {name:'radiant-tassel', src:'/assets/motifs/radiant-tassel.webp'},
    curls: {name:'curled-sun', src:'/assets/motifs/curled-sun.webp'},
    sunCross: {name:'sun-cross', src:'/assets/motifs/sun-cross.webp'},
    star: {name:'crescent-star', src:'/assets/motifs/crescent-star.webp'},
  };
  const ornaments = [];
  function pendant(motif, eager = false) {
    const wrap = document.createElement('span');
    wrap.className = 'pendant-motif';
    wrap.dataset.pendant = motif.name;
    wrap.setAttribute('aria-hidden', 'true');
    wrap.style.setProperty('--pendant-delay', `${ornaments.length * -.7}s`);
    const img = document.createElement('img');
    img.src = motif.src;
    img.alt = '';
    img.width = 96;
    img.height = 112;
    img.loading = eager ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.draggable = false;
    wrap.append(img);
    ornaments.push(wrap);
    return wrap;
  }
  function caption(selector, motif) {
    const target = document.querySelector(selector);
    if (!target) return;
    target.classList.add('pendant-caption');
    target.append(pendant(motif));
  }
  if (route === '/') {
    const hero = document.querySelector('.video-hero-top');
    if (hero) {
      const mark = pendant(motifs.cross, true);
      mark.classList.add('pendant-hero');
      hero.insertBefore(mark, hero.lastElementChild);
    }
    caption('#philosophy .eyebrow', motifs.disc);
    caption('#sessions .section-heading > .eyebrow', motifs.arrow);
    caption('#play .section-heading > .eyebrow', motifs.sun);
    caption('#about .founder-copy > .eyebrow', motifs.wheel);
    caption('#studio-film .eyebrow', motifs.tassel);
    caption('#book .booking-heading > .eyebrow', motifs.curls);
  } else {
    const pageMotif = {
      '/about': motifs.wheel, '/private-sessions': motifs.arrow,
      '/group-journeys': motifs.sun, '/contact': motifs.curls,
      '/faq': motifs.disc, '/participant-agreement': motifs.cross,
      '/cancellation-refund-policy': motifs.tassel, '/privacy-policy': motifs.star,
    };
    caption('main > .eyebrow', pageMotif[route]);
  }
  const footer = document.querySelector('.footer > .shell');
  if (footer) {
    const divider = document.createElement('div');
    divider.className = 'pendant-divider';
    divider.setAttribute('aria-hidden', 'true');
    divider.append(pendant(motifs.sunCross), pendant(motifs.star));
    footer.prepend(divider);
  }

  // The shared Pause motion control also freezes these gently hanging ornaments.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { entry.target.dataset.pendantVisible = String(entry.isIntersecting); });
    }, {rootMargin:'40px'});
    ornaments.forEach(mark => observer.observe(mark));
  } else {
    ornaments.forEach(mark => { mark.dataset.pendantVisible = 'true'; });
  }
})();
