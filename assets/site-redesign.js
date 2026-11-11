// Shared public presentation; contact delivery and studio runtime remain intact.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (/^\/(studio|api)(\/|$)/.test(route)) return;
  document.body.classList.add('motion-site');
  document.body.dataset.motionPage = route === '/' ? 'home' : route.slice(1);
  const theme = document.querySelector('meta[name="theme-color"]');
  if (theme) theme.content = '#F4E66A';
  const headings = {
    '/about': 'dance as <em>art.</em>',
    '/private-sessions': 'Private<br><em>sessions.</em>',
    '/group-journeys': 'Move<br><em>together.</em>',
    '/contact': 'Let’s <em>talk.</em>',
    '/faq': 'A few<br><em>questions.</em>'
  };
  const eyebrow = document.querySelector('main > .eyebrow');
  if (eyebrow && route === '/about') eyebrow.textContent = 'About Sophie';
  const heading = document.querySelector('main h1');
  if (heading && headings[route]) heading.innerHTML = headings[route];
  if (route === '/private-sessions') {
    const lede = document.querySelector('main .lede');
    if (lede) lede.textContent = 'Your pace, your curiosity, your way of moving.';
  }
  const navBooking = document.querySelector('.navlinks .button');
  const booking = navBooking?.getAttribute('href') || '/contact/#intro-call';
  if (navBooking) navBooking.innerHTML = 'Book an intro <span class="arrow" aria-hidden="true">↗</span>';
  if (route === '/contact') {
    const lede = document.querySelector('main .lede');
    if (lede) lede.textContent = 'Ask about private sessions, group journeys, or a free intro call.';
  }
  const cta = document.querySelector('section.cta');
  if (cta) {
    cta.className = 'ms-cta';
    cta.innerHTML = '<div class="ms-cta-inner"><div><p>A free 20-minute online introduction.</p><h2>Meet <em>Sophie.</em></h2></div><a class="button" href="/contact/#intro-call">Book an intro call <span aria-hidden="true">↗</span></a></div>';
    cta.querySelector('a').setAttribute('href', booking);
  }
  const footerNote = document.querySelector('.footer-brand p');
  if (footerNote) footerNote.innerHTML = 'Somatic movement &amp; ecstatic dance.<br>Online, with Sophie.';
  const practicalNote = document.querySelector('.footer-links:last-child p');
  if (practicalNote) practicalNote.innerHTML = 'Online sessions for adults.<br>Private sessions &amp; group journeys.';
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom) footerBottom.innerHTML = '<span>© 2026 Ayoba Studio.</span><span>Movement / Music / Expression</span>';
  const invitations = {
    Restless: 'Explore small or large movements. Let your feet, hands, or shoulders find a rhythm that feels comfortable.',
    Heavy: 'Notice the support beneath you. Try a small shift, a stretch, or a moment of stillness.',
    Joyful: 'Follow one movement that feels enjoyable and let it change naturally.',
    Disconnected: 'Notice your feet touching the floor or another point of support. Explore one small movement at your own pace.',
    Curious: 'Try a movement you don’t usually make, then notice how it feels.',
    Playful: 'Exaggerate a tiny movement. Try a different shape. Follow whatever feels interesting.'
  };
  document.querySelectorAll('[data-invitations]').forEach(group => {
    if (group.dataset.ready) return;
    group.dataset.ready = 'true';
    const buttons = [...group.querySelectorAll('[data-invitation]')];
    const answer = group.querySelector('.ms-invitation-answer');
    buttons.forEach(button => button.addEventListener('click', () => {
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      if (answer) answer.textContent = invitations[button.dataset.invitation];
    }));
  });
})();
