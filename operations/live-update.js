// Ayoba public redesign. No backend deployment or data changes.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/about', '/private-sessions', '/group-journeys', '/contact', '/faq', '/privacy-policy', '/participant-agreement', '/cancellation-refund-policy'].includes(route)) return;
  function apply() {
    if (!document.querySelector('link[href*="/assets/movement-studio.css"], #ayoba-movement-studio')) {
      const style = document.createElement('style');
      style.id = 'ayoba-movement-studio';
      style.textContent = "/* Ayoba \u2014 a playful movement studio. */\nbody.motion-site{--ms-yellow:#f4e66a;--ms-blue:#293ccb;--ms-paper:#f7f3e8;--ms-ink:#292d22;--ms-pink:#e6abc3;--ms-line:#292d2235;--ink:var(--ms-ink);--paper:var(--ms-paper);background:var(--ms-paper);color:var(--ms-ink)}\n.motion-site{font-size:16px}.motion-site h1,.motion-site h2,.motion-site h3{text-wrap:balance}.motion-site a,.motion-site button{touch-action:manipulation}.motion-site a:focus-visible,.motion-site button:focus-visible,.motion-site summary:focus-visible{outline:3px solid var(--ms-blue);outline-offset:5px}.motion-site header{background:var(--ms-paper);position:relative;z-index:20}.motion-site .nav{height:104px;width:calc(100% - 80px);max-width:1600px;border-bottom:1px solid var(--ms-line)}.motion-site .wordmark{font-size:58px;letter-spacing:-4px;color:var(--ms-blue)}.motion-site .wordmark small{font-size:9px}.motion-site .navlinks{font-size:13px;gap:30px}.motion-site .navlinks .button{background:var(--ms-blue);border-color:var(--ms-blue);border-radius:0;color:var(--ms-paper);min-height:46px;font-size:12px}.motion-site .button{border-radius:0;background:var(--ms-blue);border-color:var(--ms-blue);color:var(--ms-paper)}.motion-site .button:hover{background:#192baf}.motion-site .textlink:hover,.motion-site .inline-link:hover{color:var(--ms-blue)}\n.motion-home{overflow:clip}.ms-hero{background:var(--ms-yellow);padding:28px 4vw 0;position:relative;isolation:isolate}.ms-hero-label,.ms-hero-foot,.ms-section-label{display:flex;align-items:center;justify-content:space-between;font:600 10px/1.5 DM,Arial,sans-serif;text-transform:uppercase;letter-spacing:1.4px;gap:25px}.ms-hero-label{color:var(--ms-blue)}.ms-hero-label>span:last-child{display:flex;gap:36px}.ms-hero-label>span:last-child>span{font-size:24px;line-height:1}.ms-hero-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:3vw;align-items:center;min-height:720px;padding:34px 0 50px;max-width:1550px;margin:auto}.ms-hero-copy{position:relative;align-self:center;z-index:2}.ms-hero h1{font:600 clamp(110px,15.6vw,235px)/.78 Bricolage,Arial,sans-serif;letter-spacing:-.075em;margin:0 0 42px;color:var(--ms-blue)}.ms-hero h1 em{font:italic 1.11em/.95 Instrument,Georgia,serif;letter-spacing:-.055em;display:inline-block;margin-left:9vw;transform:rotate(-7deg);padding-right:.12em}.ms-hero-copy>p{font-size:16px;line-height:1.6;margin:20px 0 25px;max-width:330px}.ms-link{display:inline-flex;gap:34px;align-items:center;border-bottom:1px solid currentColor;padding:7px 0;font:600 13px/1.5 DM,Arial,sans-serif}.ms-link>span{font-size:24px;font-weight:400;transition:transform .2s}.ms-link:hover>span{transform:translate(3px,-3px)}.ms-play-stamp{position:absolute;right:5%;bottom:20px;width:104px;height:104px;border:1px solid var(--ms-blue);border-radius:50%;color:var(--ms-blue);display:flex;align-items:center;justify-content:center;gap:10px;font:italic 24px/.95 Instrument,Georgia,serif;transform:rotate(12deg);transition:transform .2s}.ms-play-stamp>span:last-child{font:35px DM,Arial,sans-serif}.ms-play-stamp:hover{transform:rotate(0)}\n.ms-gallery{position:relative;padding:16px 24px 0;min-width:0;outline-offset:12px;color:var(--ms-blue);margin-right:18px}.ms-photo-stack{position:absolute;inset:18px 24px 82px;z-index:-1}.ms-photo-stack>div{position:absolute;inset:0;background:var(--ms-pink);border:1px solid var(--ms-ink);transform:rotate(-8deg)}.ms-photo-stack>div+div{background:var(--ms-blue);transform:rotate(7deg)}.ms-gallery-frame{position:relative;margin:0;border:1px solid var(--ms-ink);transform:rotate(-2deg);background:var(--ms-paper);isolation:isolate;box-shadow:0 10px 25px #292d2212}.ms-gallery-frame img{width:100%;aspect-ratio:1/1.03;object-fit:cover;object-position:center 42%;display:block}.ms-gallery-frame [data-motion-next]{position:absolute;left:0;top:0;opacity:0;pointer-events:none;transition:opacity .5s;z-index:1}.ms-gallery.is-changing .ms-gallery-frame [data-motion-next]{opacity:1}.ms-gallery figcaption{display:flex;justify-content:space-between;gap:20px;padding:16px 20px;font:11px/1.4 DM,Arial,sans-serif;text-transform:uppercase;letter-spacing:1px}.ms-gallery [data-motion-count]{font:italic 21px/1 Instrument,Georgia,serif;letter-spacing:0}.ms-gallery-controls{display:flex;justify-content:space-between;align-items:center;gap:15px;margin-top:28px}.ms-gallery-controls button{border:0;background:transparent;color:var(--ms-blue);min-width:34px;min-height:42px;padding:6px;font:12px DM,Arial,sans-serif}.ms-gallery-controls button:hover{background:#293ccb14}.ms-frames{display:flex}.ms-frames button[aria-pressed=true]{background:var(--ms-blue);color:var(--ms-yellow)}.ms-sequence-controls{display:flex;align-items:center}.ms-sequence-controls [data-motion-prev],.ms-sequence-controls [data-motion-next-button]{font-size:23px}.ms-gallery-note{font:11px/1.5 DM,Arial,sans-serif;margin:9px 0 0}.ms-hero-foot{border-top:1px solid #293ccb50;color:var(--ms-blue);padding:20px 0}.ms-hero-foot a{display:flex;gap:30px}.ms-hero-foot a span{font-size:19px;line-height:1}\n.ms-manifesto,.ms-sessions,.ms-lab,.ms-founder{padding:90px max(4vw,24px);position:relative}.ms-section-label{padding-bottom:24px;border-bottom:1px solid var(--ms-line);margin-bottom:48px}.ms-section-label>span[aria-hidden]{font-size:27px;line-height:1}.ms-manifesto{background:var(--ms-paper)}.ms-manifesto h2{font:500 clamp(31px,4.2vw,65px)/1.18 Bricolage,Arial,sans-serif;letter-spacing:-.035em;margin:0 0 70px;max-width:1280px;text-wrap:pretty}.ms-manifesto h2 em{color:var(--ms-blue);font-size:1.2em;line-height:.7}.ms-intention-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:10vw;max-width:1160px;margin:auto}.ms-margin-note{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding-left:2vw;color:var(--ms-blue)}.ms-note-title{font:italic 35px/1.1 Instrument,Georgia,serif;transform:rotate(-6deg)}.ms-margin-note svg{width:220px;max-width:80%;margin:20px 0}.ms-margin-note>span:last-child{font:10px DM,Arial,sans-serif;text-transform:uppercase;letter-spacing:1px}.ms-intention-copy{max-width:570px;font-size:17px;line-height:1.85}.ms-intention-copy p:last-child{margin-bottom:0}\n.ms-sessions{background:#e4e7df;padding-top:70px}.ms-sessions h2{font:500 clamp(52px,7vw,105px)/1 Bricolage,Arial,sans-serif;letter-spacing:-.06em;margin:0 0 55px}.ms-sessions h2 em{font-size:1.1em;color:var(--ms-blue)}.ms-session{border-top:1px solid var(--ms-ink)}.ms-session:last-child{border-bottom:1px solid var(--ms-ink)}.ms-session summary{display:grid;grid-template-columns:60px 1fr 210px 50px;gap:25px;align-items:center;padding:24px 0;list-style:none;cursor:pointer}.ms-session summary::-webkit-details-marker{display:none}.ms-session-index{font:italic 25px Instrument,Georgia,serif;color:var(--ms-blue)}.ms-session h3{font:500 clamp(36px,5.4vw,80px)/1.05 Bricolage,Arial,sans-serif;letter-spacing:-.06em;margin:0}.ms-session-format{font:11px/1.6 DM,Arial,sans-serif;text-transform:uppercase;letter-spacing:1px}.ms-session-plus{font:36px DM,Arial,sans-serif;justify-self:end;transition:transform .25s;color:var(--ms-blue)}.ms-session[open] .ms-session-plus{transform:rotate(45deg)}.ms-session summary:hover h3{color:var(--ms-blue)}.ms-session-content{display:grid;grid-template-columns:.65fr 1fr 60px;gap:8vw;align-items:center;padding:5px 30px 50px 85px}.ms-session-content figure{margin:0;transform:rotate(-3deg);max-width:320px}.ms-session-content img{width:100%;aspect-ratio:1.1;object-fit:cover}.ms-session:nth-of-type(2) figure{transform:rotate(3deg)}.ms-session-content>div{max-width:510px}.ms-session-lede{font:italic clamp(28px,3vw,43px)/1.15 Instrument,Georgia,serif;margin:0 0 23px}.ms-session-content p:not(.ms-session-lede){font-size:14px;line-height:1.8}.ms-session-content .ms-session-facts{font-size:10px!important;text-transform:uppercase;letter-spacing:1px;margin:25px 0}.ms-session-side{writing-mode:vertical-rl;font-size:9px;text-transform:uppercase;letter-spacing:1.4px;justify-self:end;color:var(--ms-blue)}\n.ms-lab{background:var(--ms-blue);color:var(--ms-paper);padding-bottom:70px}.ms-lab .ms-section-label{border-color:#f7f3e84d;color:var(--ms-yellow)}.ms-lab-grid{display:grid;grid-template-columns:.75fr 1.25fr;gap:6vw;align-items:center}.ms-lab h2{font:500 clamp(64px,8.5vw,130px)/.88 Bricolage,Arial,sans-serif;letter-spacing:-.06em;margin:0 0 35px;color:var(--ms-yellow)}.ms-lab h2 em{font-size:1.13em;line-height:1;display:inline-block;padding-left:25px}.ms-lab-intro p{font-size:14px;line-height:1.8}.ms-lab-arrow{font:100px/.9 Instrument,Georgia,serif;display:block;transform:rotate(13deg);color:var(--ms-yellow);padding-left:50px;margin-top:30px}.ms-drawing{background:var(--ms-paper);color:var(--ms-blue);padding:20px;transform:rotate(2deg);border:1px solid var(--ms-ink);box-shadow:12px 14px 0 #14239a;min-width:0}.ms-drawing-head,.ms-drawing-foot{display:flex;align-items:center;justify-content:space-between;gap:12px}.ms-drawing-head>span{font:10px DM,Arial,sans-serif;text-transform:uppercase;letter-spacing:1px}.ms-tools{display:flex;gap:2px}.ms-tools button{font-size:12px;border:1px solid transparent;background:none;color:var(--ms-blue);min-height:40px;padding:8px 13px}.ms-tools button[aria-pressed=true]{background:var(--ms-blue);color:var(--ms-paper)}.ms-tools button:hover{border-color:var(--ms-blue)}.ms-drawing svg{display:block;width:100%;aspect-ratio:5/3;touch-action:none;cursor:crosshair;margin:8px 0}.ms-drawing[data-tool=pulse]{color:#ac3e37}.ms-drawing[data-tool=still]{color:#456043}.ms-drawing-foot{border-top:1px solid var(--ms-line);padding-top:13px;font:10px/1.5 DM,Arial,sans-serif;color:var(--ms-blue)}.ms-drawing-foot>div{display:flex;gap:18px}.ms-drawing-foot button{font:11px DM,Arial,sans-serif;border:0;border-bottom:1px solid currentColor;color:inherit;background:transparent;min-height:40px;padding:8px 0}.ms-drawing .sr-only,.motion-site .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.ms-lab a:focus-visible,.ms-lab button:focus-visible{outline-color:var(--ms-yellow)}.ms-drawing button:focus-visible{outline-color:var(--ms-blue)}\n.ms-invitations{display:grid;grid-template-columns:.75fr 1.25fr;gap:6vw;margin-top:95px;border-top:1px solid #f7f3e84d;padding-top:45px}.ms-small-label{font:600 10px/1.5 DM,Arial,sans-serif;text-transform:uppercase;letter-spacing:1.5px;display:block}.ms-invitations h3{font:500 clamp(32px,3.5vw,50px)/1.1 Bricolage,Arial,sans-serif;letter-spacing:-.035em;margin:25px 0}.ms-invitations h3 em{font-size:1.2em;color:var(--ms-yellow)}.ms-feelings{display:flex;gap:8px;flex-wrap:wrap}.ms-feelings button{border:1px solid #f7f3e870;background:none;color:var(--ms-paper);padding:10px 16px;font-size:12px;min-height:42px}.ms-feelings button:hover,.ms-feelings button[aria-pressed=true]{background:var(--ms-yellow);color:var(--ms-blue);border-color:var(--ms-yellow)}.ms-invitation-answer{font:italic 30px/1.3 Instrument,Georgia,serif;max-width:600px;min-height:130px;padding:25px 0 0}.ms-invitation-answer p{margin-bottom:15px}.ms-invitation-note{font-size:10px;opacity:.8;margin:0}\n.ms-founder{display:grid;grid-template-columns:1fr .9fr;gap:12vw;align-items:center;padding-block:120px}.ms-founder-photo{position:relative;transform:rotate(-4deg);margin-inline:20px}.ms-founder-photo:before{content:\"\";position:absolute;inset:-15px 12px 10px -12px;border:1px solid var(--ms-blue);transform:rotate(7deg);z-index:-1}.ms-founder-photo img{width:100%;aspect-ratio:1;object-fit:cover}.ms-founder-label{display:flex;justify-content:space-between;font:11px/1.5 DM,Arial,sans-serif;color:var(--ms-blue);padding-top:18px}.ms-founder h2{font:500 clamp(54px,7vw,100px)/.95 Bricolage,Arial,sans-serif;letter-spacing:-.045em;margin:30px 0}.ms-founder h2 em{font-size:1.1em;color:var(--ms-blue)}.ms-founder>div:last-child{max-width:470px}.ms-founder p{font-size:16px;line-height:1.8}.ms-founder .ms-link{margin-top:15px}\n.motion-site .ms-cta{padding:65px 4vw;background:var(--ms-yellow);color:var(--ms-blue)}.ms-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:40px}.ms-cta h2{font:500 clamp(50px,8vw,120px)/1 Bricolage,Arial,sans-serif;letter-spacing:-.055em;margin:15px 0 0}.ms-cta p{margin:0;font-size:12px}.ms-cta .button{background:var(--ms-blue);border-color:var(--ms-blue);color:var(--ms-paper);font-size:14px;min-height:58px;gap:50px}.motion-site .footer{background:var(--ms-ink);padding:65px 4vw 25px;color:var(--ms-paper)}.motion-site .footer>.shell{width:100%;max-width:none}.motion-site .footer .wordmark{color:var(--ms-yellow);font-size:100px;letter-spacing:-7px}.motion-site .footer .wordmark small{font-size:11px}.motion-site .footer-links h4{color:var(--ms-yellow);font-size:10px}.motion-site .footer-links{font-size:13px}.motion-site .footer p{font-size:13px}.motion-site .footer-bottom{font-size:10px}.motion-site .media-credit{font-size:9px}\n.motion-site .page.shell{width:calc(100% - 8vw);max-width:1400px;border:0;padding-block:60px 100px}.motion-site .page>.eyebrow{color:var(--ms-blue);font-size:10px;margin-bottom:28px}.motion-site .page h1{font:500 clamp(64px,9.5vw,140px)/.96 Bricolage,Arial,sans-serif;letter-spacing:-.06em;color:var(--ms-blue);margin:0 0 45px;max-width:1200px}.motion-site .page h1 em{font-size:1.1em}.motion-site .page .lede{font-size:20px;max-width:780px;line-height:1.65}.motion-site .content-columns{grid-template-columns:minmax(0,1.3fr) minmax(0,.8fr);gap:8vw;padding-top:40px}.motion-site .content-columns>div>p{font-size:16px;line-height:1.85}.motion-site .page h2{font-size:42px;color:var(--ms-blue);margin-top:55px}.motion-site .panel{background:var(--ms-yellow);padding:32px;border-top:0;position:sticky;top:25px}.motion-site .panel h2{margin-top:0}.motion-site .panel p{font-size:13px}.motion-site .price-row{border-color:#293ccb44}.motion-site .price-row strong{color:var(--ms-blue)}.motion-site .session-photo img{aspect-ratio:1.6;max-height:520px;object-position:center 40%}.motion-site .session-photo{transform:rotate(-1deg);margin:10px 0 45px}.motion-site .about-photo{transform:rotate(3deg);margin:10px 10px 35px}.motion-site .about-photo img{aspect-ratio:1;object-fit:cover}.motion-site .about-photo figcaption{font-size:26px;color:var(--ms-blue)}.motion-site .about-name{font-size:44px!important;color:var(--ms-blue)}.motion-site .photo-essay{padding-top:100px}.motion-site .photo-essay-grid{grid-template-columns:1.05fr .8fr 1.1fr;gap:4vw;align-items:start}.motion-site .photo-essay-grid figure:first-child{transform:rotate(-4deg)}.motion-site .photo-essay-grid figure:nth-child(2){padding-top:80px;transform:rotate(3deg)}.motion-site .photo-essay-grid figure:last-child{transform:rotate(-2deg);padding-top:30px}.motion-site .schedule{background:var(--ms-yellow);border:0}.motion-site .faq-list{max-width:1000px}.motion-site .faq-list summary{font-size:21px}.motion-site .faq-list details[open]{background:#e4e7df;padding-inline:25px}.motion-site .contact-email{color:var(--ms-blue)}.motion-site .contact-form .field input,.motion-site .contact-form .field select,.motion-site .contact-form .field textarea{border-color:var(--ms-line);background:#fff9;border-radius:0}.motion-site .notice{border-left-color:var(--ms-blue);background:#e4e7df}.motion-site .policy{max-width:900px}.motion-site .policy h1{font-size:clamp(48px,7vw,95px);letter-spacing:-.045em}.motion-site .policy p,.motion-site .policy li{font-size:15px;line-height:1.85}\n.motion-ready [data-motion-reveal]{transition:opacity .65s ease,translate .65s ease;opacity:1}.motion-ready [data-motion-reveal]:not(.is-in-view){opacity:.2;translate:0 22px}\n@media(min-width:1600px){.ms-hero-grid{min-height:850px}.ms-gallery-frame img{max-height:650px}.ms-manifesto,.ms-sessions,.ms-lab,.ms-founder{padding-inline:max(4vw,calc((100vw - 1480px)/2))}}\n@media(max-width:1050px){.motion-site .nav{width:calc(100% - 48px)}.motion-site .navlinks{gap:20px}.ms-hero-grid{min-height:620px}.ms-hero h1{font-size:16vw}.ms-gallery{padding-inline:10px;margin-right:10px}.ms-gallery-frame img{aspect-ratio:1/1.15}.ms-gallery-controls{gap:3px}.ms-gallery-controls button{min-width:28px;padding-inline:3px}.ms-play-stamp{right:1%;bottom:0;width:85px;height:85px;font-size:20px}.ms-session-content{gap:5vw;padding-left:50px}.ms-session summary{grid-template-columns:35px 1fr 180px 35px}.ms-lab-grid,.ms-invitations{gap:4vw;grid-template-columns:.7fr 1.3fr}.ms-drawing{padding:15px}.ms-tools button{padding:8px}.ms-founder{gap:7vw}.motion-site .content-columns{gap:5vw}.motion-site .panel{padding:25px}.ms-hero-foot>span:last-child{display:none}}\n@media(max-width:900px){.motion-site .menu-button{display:block;color:var(--ms-blue);min-height:44px;font-size:14px}.motion-site .navlinks{position:absolute;top:88px;left:0;right:0;background:var(--ms-paper);padding:20px 24px 28px;border-bottom:1px solid var(--ms-line);z-index:30}.motion-site .navlinks[data-open=false]{display:none}.motion-site .nav{height:88px}.motion-site .navlinks[data-open=true]{display:flex;align-items:stretch;flex-direction:column;gap:14px}.motion-site .navlinks>a{font-size:17px}.ms-hero-grid{min-height:570px}.ms-hero-copy>p{font-size:14px;max-width:260px}.ms-play-stamp{display:none}.ms-manifesto,.ms-sessions,.ms-lab{padding-block:65px}.ms-intention-grid{gap:6vw}.ms-intention-copy{font-size:15px}.ms-session-format{font-size:9px}.ms-drawing-head{align-items:flex-start;flex-direction:column}.ms-drawing-foot{flex-wrap:wrap}.ms-drawing svg{margin:15px 0}.ms-invitations{grid-template-columns:.8fr 1.2fr;margin-top:65px}.ms-invitation-answer{font-size:26px;min-height:150px}.ms-founder{padding-block:85px}.motion-site .content-columns{grid-template-columns:1fr}.motion-site .content-columns aside{max-width:none;position:static}.motion-site .content-columns .panel{position:static}.motion-site .about-photo{max-width:600px;margin-inline:20px}.motion-site .page .lede{font-size:19px}.motion-site .footer .wordmark{font-size:85px}.ms-cta .button{font-size:12px;gap:22px}}\n@media(max-width:640px){.motion-site .nav{width:calc(100% - 36px);height:78px}.motion-site .wordmark{font-size:47px}.motion-site .navlinks{top:78px}.ms-hero{padding:22px 20px 0}.ms-hero-label{font-size:8px;align-items:flex-start;letter-spacing:1px;gap:20px}.ms-hero-label>span:first-child{max-width:170px}.ms-hero-label>span:last-child{gap:10px;max-width:120px;text-align:right}.ms-hero-label>span:last-child>span{display:none}.ms-hero-grid{display:block;min-height:0;padding:38px 0 25px}.ms-hero h1{font-size:clamp(105px,29vw,180px);line-height:.78;letter-spacing:-.08em;margin-bottom:20px}.ms-hero h1 em{margin-left:30vw;font-size:1.08em;line-height:.9}.ms-hero-copy>p{font-size:14px;line-height:1.65;max-width:260px;margin:24px 0 13px}.ms-link{font-size:12px;gap:25px}.ms-hero-copy .ms-link{margin-bottom:30px}.ms-gallery{margin:20px 18px 0;padding:8px 8px 0}.ms-gallery-frame img{aspect-ratio:1.1;object-position:center 42%}.ms-gallery figcaption{padding:12px;font-size:9px;letter-spacing:.5px}.ms-photo-stack{inset:10px 10px 85px}.ms-gallery-controls{margin-top:20px;gap:10px}.ms-gallery-controls button{min-width:30px;min-height:42px;font-size:11px}.ms-gallery-note{font-size:10px;margin-top:4px}.ms-hero-foot{font-size:8px;letter-spacing:.8px;padding:17px 0}.ms-hero-foot a{gap:15px}.ms-manifesto,.ms-sessions,.ms-lab,.ms-founder{padding:54px 22px}.ms-section-label{font-size:8px;letter-spacing:1px;margin-bottom:32px;padding-bottom:18px}.ms-manifesto h2{font-size:32px;letter-spacing:-.035em;margin-bottom:35px;line-height:1.23}.ms-intention-grid{grid-template-columns:1fr;gap:28px}.ms-margin-note{display:none}.ms-intention-copy{font-size:15px;line-height:1.8}.ms-sessions h2{font-size:56px;margin-bottom:35px;letter-spacing:-.06em}.ms-session summary{grid-template-columns:25px 1fr 30px;gap:13px;padding:23px 0}.ms-session h3{font-size:45px;letter-spacing:-.065em}.ms-session-format{grid-column:2;grid-row:2;font-size:9px;line-height:1;margin-top:-3px}.ms-session-plus{grid-column:3;grid-row:1/3;font-size:30px}.ms-session-index{font-size:21px}.ms-session-content{display:grid;grid-template-columns:1fr;padding:8px 8px 34px 38px;gap:28px}.ms-session-content figure{max-width:230px}.ms-session-content img{aspect-ratio:1.3}.ms-session-content>div{max-width:none}.ms-session-content p:not(.ms-session-lede){font-size:14px}.ms-session-lede{font-size:31px}.ms-session-side{display:none}.ms-session-content .ms-session-facts{font-size:9px!important;margin:20px 0}.ms-lab-grid{grid-template-columns:1fr;gap:28px}.ms-lab h2{font-size:78px;line-height:.88;margin-bottom:25px}.ms-lab-intro p{font-size:13px}.ms-lab-arrow{display:none}.ms-drawing{padding:13px;transform:rotate(1deg);box-shadow:7px 8px 0 #14239a;margin-right:6px}.ms-drawing-head{flex-direction:row;align-items:center;gap:5px}.ms-drawing-head>span{font-size:8px;letter-spacing:.7px;max-width:60px}.ms-tools{gap:1px}.ms-tools button{font-size:11px;padding:8px 10px;min-height:40px}.ms-drawing svg{aspect-ratio:5/3;margin:8px 0}.ms-drawing-foot{gap:6px;font-size:9px;align-items:center}.ms-drawing-foot>div{gap:14px}.ms-drawing-foot button{font-size:10px;min-height:42px}.ms-invitations{grid-template-columns:1fr;gap:20px;margin-top:55px;padding-top:35px}.ms-invitations h3{font-size:40px;margin:18px 0 0}.ms-invitations h3 br{display:none}.ms-small-label{font-size:9px}.ms-feelings{gap:7px}.ms-feelings button{font-size:11px;padding:10px 13px;min-height:42px}.ms-invitation-answer{font-size:27px;min-height:150px;line-height:1.3;padding-top:25px}.ms-invitation-note{font-size:9px}.ms-founder{grid-template-columns:1fr;gap:55px;padding-block:70px}.ms-founder-photo{margin-inline:15px}.ms-founder-photo img{aspect-ratio:1.2}.ms-founder h2{font-size:68px;margin:22px 0}.ms-founder p{font-size:15px}.ms-cta-inner{flex-direction:column;align-items:flex-start;gap:28px}.motion-site .ms-cta{padding:45px 22px}.ms-cta h2{font-size:59px;letter-spacing:-.06em}.ms-cta p{font-size:11px}.ms-cta .button{min-height:54px;font-size:12px;gap:40px}.motion-site .footer{padding:48px 22px 22px}.motion-site .footer .wordmark{font-size:88px}.motion-site .footer-links{font-size:12px}.motion-site .footer-links h4{font-size:8px}.motion-site .footer p{font-size:12px}.motion-site .footer-bottom{font-size:9px}.motion-site .media-credit{font-size:8px}.motion-site .page.shell{width:calc(100% - 44px);padding-block:42px 65px}.motion-site .page>.eyebrow{font-size:8px;margin-bottom:25px}.motion-site .page h1{font-size:clamp(54px,13vw,83px);letter-spacing:-.06em;line-height:1;margin-bottom:30px;overflow-wrap:normal}.motion-site .page .lede{font-size:17px;margin-bottom:35px}.motion-site .content-columns{gap:35px;padding-top:25px}.motion-site .content-columns>div>p{font-size:15px}.motion-site .page h2{font-size:35px;margin-top:38px}.motion-site .about-name{font-size:37px!important}.motion-site .session-photo{margin-bottom:30px}.motion-site .session-photo img{aspect-ratio:1.15}.motion-site .panel{padding:24px}.motion-site .panel h2{margin-top:0}.motion-site .panel p{font-size:13px}.motion-site .about-photo{margin-inline:8px}.motion-site .photo-essay{padding-top:45px}.motion-site .photo-essay-grid{grid-template-columns:1fr 1fr;gap:18px}.motion-site .photo-essay-grid figure:nth-child(2){padding-top:30px}.motion-site .photo-essay-grid figure:last-child{padding-top:0;width:75%;margin:10px auto 0;grid-column:1/-1}.motion-site .faq-list summary{font-size:18px}.motion-site .faq-list details[open]{padding-inline:15px}.motion-site .policy h1{font-size:clamp(45px,11vw,64px)}.motion-site .policy p,.motion-site .policy li{font-size:14px}}\n@media(prefers-reduced-motion:reduce){.motion-ready [data-motion-reveal]{opacity:1!important;translate:none!important}.motion-site *, .motion-site *:before,.motion-site *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}\n\n@media(max-width:900px){.motion-site .navlinks{display:none}.motion-site .navlinks[data-open=true]{display:flex}}\n\n.ms-gallery-frame img,.ms-session-content img,.ms-founder-photo img{height:auto}\n\n.motion-site .session-photo img{height:auto}\n";
      document.head.append(style);
    }
    if (route === '/' && document.querySelector('main')?.dataset.motionVersion !== '2') {
      const template = document.createElement('template');
      template.innerHTML = "<main id=\"main\" class=\"motion-home\" data-motion-version=\"2\">\n  <section class=\"ms-hero\" aria-labelledby=\"studio-title\">\n    <div class=\"ms-hero-label\"><span>Somatic movement &amp; ecstatic dance</span><span>Online, with Sophie <span aria-hidden=\"true\">\u2197</span></span></div>\n    <div class=\"ms-hero-grid\">\n      <div class=\"ms-hero-copy\">\n        <h1 id=\"studio-title\">move.<br><em>play.</em></h1>\n        <p>A space to explore movement,<br>expression, and your own way of dancing.</p>\n        <a class=\"ms-link\" href=\"#sessions\">Find your session <span aria-hidden=\"true\">\u2197</span></a>\n        <a class=\"ms-play-stamp\" href=\"#movement-lab\"><span>Make<br>a mark</span><span aria-hidden=\"true\">\u2198</span></a>\n      </div>\n      <div class=\"ms-gallery\" data-motion-gallery data-scene=\"2\" aria-label=\"Photographic movement studies\" tabindex=\"0\">\n        <div class=\"ms-photo-stack\" aria-hidden=\"true\"><div></div><div></div></div>\n        <figure class=\"ms-gallery-frame\">\n          <img data-motion-image src=\"/assets/sunlit-movement.jpg\" alt=\"A dancer reaches one arm overhead in a sunlit field.\" width=\"988\" height=\"1100\" fetchpriority=\"high\">\n          <img data-motion-next src=\"/assets/sunlit-movement.jpg\" alt=\"\" width=\"988\" height=\"1100\" aria-hidden=\"true\">\n          <figcaption><span data-motion-caption>Sunlit study</span><span data-motion-count>03 / 05</span></figcaption>\n        </figure>\n        <div class=\"ms-gallery-controls\"><div class=\"ms-frames\" role=\"group\" aria-label=\"Choose a photograph\"><button type=\"button\" data-motion-step=\"0\" aria-label=\"Show field study\" aria-pressed=\"false\">01</button><button type=\"button\" data-motion-step=\"1\" aria-label=\"Show grounded study\" aria-pressed=\"false\">02</button><button type=\"button\" data-motion-step=\"2\" aria-label=\"Show sunlit study\" aria-pressed=\"true\">03</button><button type=\"button\" data-motion-step=\"3\" aria-label=\"Show embrace study\" aria-pressed=\"false\">04</button><button type=\"button\" data-motion-step=\"4\" aria-label=\"Show movement study\" aria-pressed=\"false\">05</button></div><div class=\"ms-sequence-controls\"><button type=\"button\" data-motion-prev aria-label=\"Previous photograph\">\u2190</button><button type=\"button\" data-motion-play aria-pressed=\"false\">Play</button><button type=\"button\" data-motion-next-button aria-label=\"Next photograph\">\u2192</button></div></div>\n        <p class=\"ms-gallery-note\">Five photographs. Follow the movement.</p>\n      </div>\n    </div>\n    <div class=\"ms-hero-foot\"><span>No dance experience needed.</span><a href=\"#philosophy\">The practice <span aria-hidden=\"true\">\u2193</span></a><span>Ayoba / Movement studio</span></div>\n  </section>\n  <section class=\"ms-manifesto\" id=\"philosophy\" aria-labelledby=\"movement-statement\">\n    <div class=\"ms-section-label\"><span>01 / The practice</span><span aria-hidden=\"true\">\u2733</span></div>\n    <h2 id=\"movement-statement\" data-motion-reveal>Movement as <em>play,</em> as a tool, as a practice, as a meditation, as a way to connect to your body and embrace the motions of life.</h2>\n    <div class=\"ms-intention-grid\"><div class=\"ms-margin-note\"><span class=\"ms-note-title\">Your intention.<br>Your movement.</span><svg viewBox=\"0 0 250 160\" aria-hidden=\"true\" fill=\"none\"><path d=\"M20 115C130-55 237 31 194 109S20 152 48 67 228 124 226 42\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg><span>Begin wherever you are.</span></div><div class=\"ms-intention-copy\"><p>The intention for class can be whatever you make it. You can simply just want to experience it. Just show up as you are.</p><p>If you want to just play, let\u2019s play. If you wish to move with stuck energy and emotions, with the intention to release and let go, let\u2019s do it.</p><p>If you want to get more grounded in your body and embrace the energy of embodiment, play, love\u2026 let\u2019s do it all.</p></div></div>\n  </section>\n  <section class=\"ms-sessions\" id=\"sessions\" aria-labelledby=\"sessions-title\">\n    <div class=\"ms-section-label\"><span>02 / Find your way in</span><span>One to one or together.</span></div>\n    <h2 id=\"sessions-title\" data-motion-reveal>Room to <em>move.</em></h2>\n    <details class=\"ms-session\" name=\"session-path\" open><summary><span class=\"ms-session-index\">01</span><h3>Private.</h3><span class=\"ms-session-format\">One to one \u00b7 Online</span><span class=\"ms-session-plus\" aria-hidden=\"true\">+</span></summary><div class=\"ms-session-content\"><figure><img src=\"/assets/grounded-movement.jpg\" alt=\"A dancer leans toward the grass with one arm lifted, photographed in black and white.\" width=\"930\" height=\"1100\" loading=\"lazy\"></figure><div><p class=\"ms-session-lede\">Your pace, your curiosity,<br>your way of moving.</p><p>Music, guided invitations, and space to explore. Each session is shaped around what you want to bring to it.</p><p class=\"ms-session-facts\">Regular sessions / 45 minutes / $65 USD</p><a class=\"ms-link\" href=\"/private-sessions/\">Explore private sessions <span aria-hidden=\"true\">\u2197</span></a></div><span class=\"ms-session-side\" aria-hidden=\"true\">A practice of your own.</span></div></details>\n    <details class=\"ms-session\" name=\"session-path\"><summary><span class=\"ms-session-index\">02</span><h3>Together.</h3><span class=\"ms-session-format\">Group journeys \u00b7 Online</span><span class=\"ms-session-plus\" aria-hidden=\"true\">+</span></summary><div class=\"ms-session-content\"><figure><img src=\"/assets/movement-study.jpg\" alt=\"Layered photographs of arms and a light dress in outdoor movement.\" width=\"1000\" height=\"1100\" loading=\"lazy\"></figure><div><p class=\"ms-session-lede\">Shared music.<br>Individual expression.</p><p>Move alongside other people. Follow your own impulses, borrow a little energy, or pause and listen.</p><p class=\"ms-session-facts\">60 minutes / $15\u201335 USD sliding scale</p><a class=\"ms-link\" href=\"/group-journeys/\">Explore group journeys <span aria-hidden=\"true\">\u2197</span></a></div><span class=\"ms-session-side\" aria-hidden=\"true\">In good company.</span></div></details>\n  </section>\n  <section class=\"ms-lab\" id=\"movement-lab\" aria-labelledby=\"lab-title\">\n    <div class=\"ms-section-label\"><span>03 / A movement playground</span><span>Experiment here.</span></div>\n    <div class=\"ms-lab-grid\"><div class=\"ms-lab-intro\"><h2 id=\"lab-title\" data-motion-reveal>Make<br>a <em>mark.</em></h2><p>A small experiment in movement.<br>Draw a line. Change its rhythm.<br>See where your hand takes it.</p><span class=\"ms-lab-arrow\" aria-hidden=\"true\">\u219d</span></div>\n      <div class=\"ms-drawing\" data-motion-studio><div class=\"ms-drawing-head\"><span>Gesture study</span><div class=\"ms-tools\" role=\"group\" aria-label=\"Choose a gesture\"><button type=\"button\" data-motion-tool=\"flow\" aria-pressed=\"true\">Flow</button><button type=\"button\" data-motion-tool=\"pulse\" aria-pressed=\"false\">Pulse</button><button type=\"button\" data-motion-tool=\"still\" aria-pressed=\"false\">Still</button></div></div><svg data-motion-art viewBox=\"0 0 600 360\" role=\"img\" aria-label=\"Interactive drawing surface. Draw with a finger or cursor, or use Add a gesture.\"><g data-motion-lines fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g></svg><div class=\"ms-drawing-foot\"><span>Draw with a finger or cursor.</span><div><button type=\"button\" data-motion-add>Add a gesture <span aria-hidden=\"true\">\u2197</span></button><button type=\"button\" data-motion-clear>Clear</button></div></div><span class=\"sr-only\" data-motion-status role=\"status\" aria-live=\"polite\"></span></div>\n    </div>\n    <div class=\"ms-invitations\" data-invitations><div><span class=\"ms-small-label\">Take it off the page</span><h3>How are you<br><em>arriving?</em></h3></div><div><div class=\"ms-feelings\" role=\"group\" aria-label=\"Choose a feeling\"><button type=\"button\" data-invitation=\"Restless\" aria-pressed=\"false\">Restless</button><button type=\"button\" data-invitation=\"Heavy\" aria-pressed=\"false\">Heavy</button><button type=\"button\" data-invitation=\"Joyful\" aria-pressed=\"false\">Joyful</button><button type=\"button\" data-invitation=\"Disconnected\" aria-pressed=\"false\">Disconnected</button><button type=\"button\" data-invitation=\"Curious\" aria-pressed=\"false\">Curious</button><button type=\"button\" data-invitation=\"Playful\" aria-pressed=\"false\">Playful</button></div><div class=\"ms-invitation-answer\" aria-live=\"polite\" aria-atomic=\"true\"><p>Choose a feeling for a movement invitation.</p></div><p class=\"ms-invitation-note\">Adapt, pause, or stay still. It\u2019s your choice.</p></div></div>\n  </section>\n  <section class=\"ms-founder\" aria-labelledby=\"sophie-title\"><div class=\"ms-founder-photo\" data-motion-reveal><img src=\"/assets/embrace.jpg\" alt=\"Black-and-white close-up of arms wrapped gently around shoulders in a grassy field.\" width=\"1100\" height=\"865\" loading=\"lazy\"><span class=\"ms-founder-label\">The person behind Ayoba <span aria-hidden=\"true\">\u2197</span></span></div><div><span class=\"ms-small-label\">04 / Meet the facilitator</span><h2 id=\"sophie-title\">Hi, I\u2019m<br><em>Sophie.</em></h2><p>I\u2019m a certified Somatic Movement &amp; Ecstatic Dance Facilitator and recording artist.</p><p>Dance, music, art, and nature are part of how I explore movement. Ayoba is a place to share that practice.</p><a class=\"ms-link\" href=\"/about/\">About Sophie <span aria-hidden=\"true\">\u2197</span></a></div></section>\n</main>\n";
      document.querySelector('main')?.replaceWith(template.content.firstElementChild);
      if (['#philosophy', '#sessions', '#movement-lab'].includes(location.hash)) {
        requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior: 'instant'}));
      }
    }
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

  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once: true});
  else apply();
})();
