// Public presentation name; existing domains, forms and Studio identifiers stay stable.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/about', '/private-sessions', '/group-journeys', '/contact', '/faq', '/participant-agreement', '/cancellation-refund-policy', '/privacy-policy'].includes(route)) return;
  const rename = value => value.replace(/Ayoba Studio|\bAyoba\b/g, 'paypaya lane');
  // The previous name's origin is not an origin story for the new name.
  document.querySelectorAll('main p').forEach(p => {
    if (p.textContent.startsWith('Ayoba is a South African slang expression')) p.remove();
  });
  document.querySelectorAll('main h2').forEach(h => {
    if (h.textContent === 'A name with a personal thread.') h.textContent = 'a personal thread.';
  });
  document.querySelectorAll('.wordmark').forEach(mark => {
    const lane = document.createElement('small');
    lane.textContent = 'lane';
    mark.replaceChildren(document.createTextNode('paypaya'), lane);
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
  document.querySelector('link[rel=icon]')?.setAttribute('href', '/assets/paypaya-favicon.svg');
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', '/assets/paypaya-social-preview.png');
  document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content', 'paypaya lane — movement as play.');
})();
