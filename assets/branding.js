// Public presentation name; existing domains, forms and Studio identifiers stay stable.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/about', '/private-sessions', '/group-journeys', '/contact', '/faq', '/participant-agreement', '/cancellation-refund-policy', '/privacy-policy'].includes(route)) return;
  const rename = value => value.replace(/Ayoba Studio|\bAyoba\b|paypaya lane/gi, 'the dance page');
  // The previous name's origin is not an origin story for the new name.
  document.querySelectorAll('main p').forEach(p => {
    if (p.textContent.startsWith('Ayoba is a South African slang expression')) p.remove();
  });
  document.querySelectorAll('main h2').forEach(h => {
    if (h.textContent === 'A name with a personal thread.') h.textContent = 'a personal thread.';
  });
  document.querySelectorAll('.wordmark').forEach(mark => {
    const page = document.createElement('small');
    page.textContent = 'page';
    mark.replaceChildren(document.createTextNode('the dance'), page);
  });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest('script,style,textarea,input,select,template,[contenteditable]')
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) walker.currentNode.nodeValue = rename(walker.currentNode.nodeValue);
  document.title = rename(document.title);
  document.querySelectorAll('[aria-label],[alt],[data-brand]').forEach(el => {
    ['aria-label','alt','data-brand'].forEach(attribute => {
      if (el.hasAttribute(attribute)) el.setAttribute(attribute, rename(el.getAttribute(attribute)));
    });
  });
  document.querySelectorAll('meta[name=description],meta[property="og:title"],meta[property="og:description"],meta[property="og:image:alt"],meta[name="twitter:title"],meta[name="twitter:description"]').forEach(meta => {
    meta.content = rename(meta.content);
  });
  document.querySelector('link[rel=icon]')?.setAttribute('href', '/assets/dance-page-favicon.svg');
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', '/assets/dance-page-social-preview.png');
  document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content', 'the dance page — movement as play.');
  if (route === '/about') {
    function updatePortrait(image) {
      if (!image) return;
      image.setAttribute('src', '/assets/sophie-portrait-2026.jpg');
      image.setAttribute('alt', 'Portrait of Sophie with dark curls, looking to the side.');
      image.setAttribute('width', '1194');
      image.setAttribute('height', '1248');
    }
    document.querySelectorAll('main .about-photo img').forEach(updatePortrait);
    function updateArtistPage() {
      const artist = document.getElementById('sophie-artist');
      if (!artist) return false;
      updatePortrait(artist.querySelector('.sa-about-image > img'));
      const studioLabel = artist.querySelector('.sa-studio > span');
      if (studioLabel) studioLabel.textContent = 'the dance page';
      const returnLink = artist.querySelector('.sa-footer > div > a[href="/"]');
      if (returnLink) returnLink.textContent = 'back to the dance page ↗';
      return true;
    }
    // The independent artist snippet appends its page after this presentation runs.
    if (!updateArtistPage() && !document.body.dataset.dancePortraitWatching) {
      document.body.dataset.dancePortraitWatching = 'true';
      const observer = new MutationObserver(() => {
        if (!updateArtistPage()) return;
        observer.disconnect();
        delete document.body.dataset.dancePortraitWatching;
      });
      observer.observe(document.body, {childList:true});
    }
  }
})();
