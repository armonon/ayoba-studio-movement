// Reorganize only the public presentation; preserve bound controls and form nodes.
const publicNav = document.querySelector('#navlinks');
const previousBooking = publicNav?.querySelector('.button')?.getAttribute('href');
if (publicNav && !publicNav.querySelector('a[href="#sessions"], a[href="/#sessions"]')) {
  publicNav.replaceChildren(fragment(NAV_SOURCE));
}
if (route !== '/') {
  publicNav?.querySelectorAll('a[href^="#"]').forEach(link => link.setAttribute('href', '/' + link.getAttribute('href')));
}
if (route === '/') {
  const main = document.querySelector('main');
  if (main && !main.dataset.sectionLayout) {
    const controls = main.querySelector('.play-controls');
    const study = main.querySelector('[data-movement-study]') || fragment(STUDY_SOURCE).firstElementChild;
    const play = main.querySelector('.playground');
    if (controls && study && play) {
      const playTemplate = fragment(PLAY_SOURCE);
      playTemplate.querySelector('.play-controls').replaceWith(controls);
      playTemplate.querySelector('[data-movement-study]').replaceWith(study);
      play.replaceWith(playTemplate);
    }
    main.querySelector('.intro-band')?.remove();
    main.querySelector('.reassurance')?.remove();
    main.querySelector('.ways')?.replaceWith(fragment(SESSIONS_SOURCE));
    main.querySelector('.founder')?.replaceWith(fragment(ABOUT_SOURCE));
    if (!main.querySelector('#book')) main.append(fragment(BOOK_SOURCE));
    document.querySelector('body > .cta')?.remove();
    main.dataset.sectionLayout = 'true';
  }
  const logo = document.querySelector('header a[aria-label="Ayoba Studio home"]');
  if (logo) logo.setAttribute('href','#home');
  // Preserve a verified calendar if the existing public runtime finished first.
  if (previousBooking?.startsWith('https://')) {
    document.querySelector('#book a[href="/contact/#intro-call"]')?.setAttribute('href',previousBooking);
  }
}
if (route === '/private-sessions') {
  const first = Array.from(document.querySelectorAll('.price-row')).find(row => row.textContent.includes('First paid private session'));
  if (first?.querySelector('small')?.textContent === 'One-time introductory offer') first.querySelector('small').textContent = '45 minutes · Introductory offer';
  document.querySelectorAll('.panel p').forEach(p => {
    p.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) node.textContent = node.textContent.replace(' Confirm the introductory paid session’s duration with Sophie.', '');
    });
  });
}
if (route === '/contact') {
  const heading = document.querySelector('main h1');
  if (heading?.textContent.includes('A little hello.')) heading.textContent = 'Let’s connect.';
  const lede = document.querySelector('main .lede');
  if (lede?.textContent.includes('Questions, curiosities')) lede.textContent = 'Ask about a call, a session, or a group journey.';
  const notice = document.querySelector('#intro-call .notice');
  if (notice?.textContent.includes('Calendar awaiting configuration.')) notice.textContent = 'To arrange a time, send your availability using this form. Sophie will confirm the date, time zone, and call link. Sending an inquiry does not reserve a session.';
}
