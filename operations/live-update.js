// Ayoba public presentation; the studio backend is deliberately excluded.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/about', '/private-sessions', '/group-journeys', '/contact', '/faq', '/participant-agreement', '/cancellation-refund-policy', '/privacy-policy'].includes(route)) return;
  function fragment(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
  }
  function style(id, file, text) {
    if (document.getElementById(id) || document.querySelector('link[href*="/assets/' + file + '"]')) return;
    const element = document.createElement('style');
    element.id = id; element.textContent = text; document.head.append(element);
  }
  function apply() {
    style('ayoba-art-direction','art-direction.css',"/* Ayoba: movement as an art practice. Additive styles preserve existing layouts. */\n.movement-manifesto{position:relative;background:#f0e9dc;border-bottom:1px solid var(--line)}\n.movement-manifesto:before{content:\"\";position:absolute;top:0;left:5%;width:90%;height:1px;background:var(--line)}\n.movement-manifesto h2{font-size:clamp(36px,4.65vw,70px);max-width:1160px;line-height:1.17;letter-spacing:-2px;font-weight:500;margin-bottom:66px;text-wrap:pretty}\n.movement-manifesto h2 em{display:inline-block;font-size:1.28em;line-height:.8;transform:rotate(-4deg);padding-inline:.06em;color:var(--berry)}\n.intention-layout{display:grid;grid-template-columns:1fr 1.1fr;gap:80px;align-items:center}\n.intention-copy{max-width:480px}.intention-copy p{font-size:15px;line-height:1.85;margin:0 0 20px}.intention-copy .textlink{margin-top:12px}\n.movement-study{background:#e5dfcd;color:var(--berry);border:1px solid #55583a40;transform:rotate(2deg);position:relative;padding:20px 23px 17px}\n.study-heading{display:flex;justify-content:space-between;align-items:center;color:var(--ink)}.study-heading .eyebrow{margin:0;font-size:9px}.study-number{font:italic 23px Instrument,Georgia,serif}\n.gesture-surface{display:block;width:100%;height:auto;aspect-ratio:5/3;touch-action:none;cursor:crosshair;overflow:hidden}\n.study-footer{border-top:1px solid #55583a40;color:var(--ink);padding-top:14px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:14px}.study-footer p{font-size:10px;line-height:1.6;margin:0;max-width:160px}.study-footer>div{display:flex;gap:15px}.study-footer button{font:11px DM,Arial,sans-serif;background:none;color:var(--ink);border:0;border-bottom:1px solid currentColor;min-height:38px;padding:4px 0;cursor:pointer}.study-footer button:hover{color:var(--berry)}\n.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.page .art-title{font-size:clamp(68px,10.5vw,150px);font-weight:500;letter-spacing:-6px;line-height:1.03;margin-bottom:55px}.art-title em{font-size:1.2em;color:var(--berry)}\n.art-title~.content-columns .about-photo{transform:rotate(2deg);margin:10px 10px 40px}.art-title~.photo-essay .photo-essay-grid figure:first-child{transform:rotate(-2deg)}.art-title~.photo-essay .photo-essay-grid figure:last-child{transform:rotate(2deg)}\n@media(hover:hover) and (prefers-reduced-motion:no-preference){.journey-photo img,.photo-essay-grid img{transition:transform .65s ease}.journey-photo{overflow:hidden}.journey-photo:hover img{transform:scale(1.035)}.photo-essay-grid figure:hover img{transform:translateY(-7px)}}\n@media(max-width:900px){.intention-layout{gap:40px}.movement-study{padding:16px}.study-footer>div{gap:20px}.movement-manifesto h2{margin-bottom:46px}.page .art-title{letter-spacing:-3px}}\n@media(max-width:640px){.intention-layout{grid-template-columns:1fr;gap:32px}.movement-manifesto{padding-block:60px}.movement-manifesto h2{font-size:clamp(32px,7.4vw,45px);letter-spacing:-1.2px;line-height:1.24;margin-bottom:32px}.movement-study{margin-inline:5px;transform:rotate(1deg)}.intention-copy p{font-size:14px}.study-footer p{max-width:130px}.page .art-title{font-size:clamp(60px,13.5vw,90px);letter-spacing:-2px;margin-bottom:40px}}\n");
    style('ayoba-section-design','section-navigation.css',"/* A quieter, section-led Ayoba. Keep the film, photographs and play in focus. */\nhtml:has(body.ayoba-simple){scroll-padding-top:0}\nbody.ayoba-simple{--paper:#f5f3eb;--line:#55583a38;background:var(--paper)}\nbody.ayoba-simple .shell{width:min(1180px,calc(100% - 96px))}\nbody.ayoba-simple [data-section-header]{position:sticky;top:0;z-index:60;background:var(--paper);border-bottom:1px solid var(--line)}\nbody.ayoba-simple .nav{height:78px;gap:30px}\nbody.ayoba-simple .nav .wordmark{font-size:40px;letter-spacing:-3px;color:var(--olive)}\nbody.ayoba-simple .nav .wordmark small{font-size:8px;letter-spacing:1.2px;margin-left:10px}\nbody.ayoba-simple .menu-button{display:none}\nbody.ayoba-simple .navlinks{position:static;display:flex;flex-direction:row;align-items:center;gap:28px;padding:0;margin:0;border:0;background:transparent;min-width:0}\nbody.ayoba-simple .navlinks>a{flex:none;font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:1.15px;white-space:nowrap;min-height:44px;display:inline-flex;align-items:center;justify-content:center}\nbody.ayoba-simple .navlinks>a:not(.button){padding:11px 0}\nbody.ayoba-simple .navlinks>a:not(.button):after{bottom:6px;background:var(--olive)}\nbody.ayoba-simple .navlinks>a[aria-current=location]:after{right:0}\nbody.ayoba-simple .navlinks>.button{padding:10px 17px;margin:0;min-height:40px;border-radius:0;font-size:10px;letter-spacing:1.15px;gap:12px}\nbody.ayoba-simple .navlinks>.button[aria-current=location]{background:var(--ink);outline:1px solid var(--olive);outline-offset:3px}\nbody.ayoba-simple .button:hover{transform:none}\nbody.ayoba-simple .button{border-radius:0}\nbody.ayoba-simple-home main>section[id]{scroll-margin-top:calc(var(--section-header-height,78px) + 22px)}\nbody.ayoba-simple-home main>#home{scroll-margin-top:var(--section-header-height,78px)}\nbody.ayoba-simple-home .eyebrow{font-size:10px;letter-spacing:1.7px;margin-bottom:23px}\nbody.ayoba-simple-home .section,body.ayoba-simple-home .studio-film{padding-block:88px}\nbody.ayoba-simple-home .section h2,body.ayoba-simple-home .studio-film h2{font:600 clamp(42px,4.6vw,64px)/1.07 Bricolage,Arial,sans-serif;letter-spacing:-2.7px;margin:0 0 25px}\nbody.ayoba-simple-home .section-heading{display:block;margin-bottom:42px}\nbody.ayoba-simple-home .section-heading>.eyebrow{padding:0;margin:0 0 22px}\nbody.ayoba-simple-home .section-heading>h2{margin:0}\nbody.ayoba-simple-home .section-heading>p:last-child:not(.eyebrow){display:block;justify-self:start;font-size:14px;max-width:440px;margin:21px 0 0;line-height:1.8}\nbody.ayoba-simple-home .hero-canvas.video-hero{min-height:clamp(620px,calc(100svh - 78px),740px)}\nbody.ayoba-simple-home .video-hero-content{padding-block:27px 23px}\nbody.ayoba-simple-home .video-hero-top{font-size:9px;letter-spacing:1.4px}\nbody.ayoba-simple-home .video-hero h1{font-size:clamp(80px,8.5vw,122px);letter-spacing:-.06em}\nbody.ayoba-simple-home .video-hero h1 em{margin-left:.16em}\nbody.ayoba-simple-home .video-hero-main{padding-block:44px 48px}\nbody.ayoba-simple-home .video-hero-main>p{font-size:14px;line-height:1.75}\nbody.ayoba-simple-home .video-hero-actions .button{font-size:12px;padding:15px 22px}\nbody.ayoba-simple-home .video-hero-bottom{font-size:9px}\nbody.ayoba-simple-home .movement-manifesto{background:transparent;border:0;padding-block:100px 88px}\nbody.ayoba-simple-home .movement-manifesto:before{content:none}\nbody.ayoba-simple-home .movement-manifesto h2{font-size:clamp(34px,4.2vw,57px);font-weight:600;letter-spacing:-1.8px;line-height:1.19;max-width:1080px;margin-bottom:45px;text-wrap:pretty}\nbody.ayoba-simple-home .movement-manifesto h2 em{font-size:1.15em;line-height:1;transform:none;padding:0;color:var(--olive)}\nbody.ayoba-simple-home .intention-layout{display:block}\nbody.ayoba-simple-home .intention-copy{max-width:none;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px 36px}\nbody.ayoba-simple-home .intention-copy p{font-size:14px;line-height:1.85;margin:0}\nbody.ayoba-simple-home .intention-copy .textlink{grid-column:1/-1;justify-self:start;margin-top:0}\nbody.ayoba-simple-home .ways{border-top:1px solid var(--line)}\nbody.ayoba-simple-home .simple-session-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:46px}\nbody.ayoba-simple-home .journey{display:flex;flex-direction:column;background:transparent;min-height:0;margin:0}\nbody.ayoba-simple-home .journey-photo{min-height:0;height:auto;aspect-ratio:4/3;overflow:hidden}\nbody.ayoba-simple-home .journey-photo img{width:100%;height:100%;object-fit:cover;object-position:center 43%}\nbody.ayoba-simple-home .private-photo img{object-position:center 58%}\nbody.ayoba-simple-home .journey-copy{padding:28px 0 0;flex:1}\nbody.ayoba-simple-home .journey-copy .index{font-size:9px;letter-spacing:1.5px;margin:0 0 12px}\nbody.ayoba-simple-home .journey h3{font:600 clamp(29px,3vw,40px)/1.12 Bricolage,Arial,sans-serif;letter-spacing:-1.4px;margin:0 0 17px}\nbody.ayoba-simple-home .journey-copy>p{font-size:14px;line-height:1.8;max-width:460px;margin-bottom:18px}\nbody.ayoba-simple-home .journey-copy .journey-detail{font-size:10px;line-height:1.8;letter-spacing:.7px;margin:0 0 26px}\nbody.ayoba-simple-home .journey-link{font-size:12px;font-weight:500;border-top:1px solid var(--line);padding-top:16px}\nbody.ayoba-simple-home .playground{background:transparent;color:var(--ink);padding-block:0}\nbody.ayoba-simple-home .playground>.shell{border-block:1px solid var(--line);padding-block:88px}\nbody.ayoba-simple-home .simple-play-grid{display:grid;grid-template-columns:1fr 1fr;gap:65px;align-items:start}\nbody.ayoba-simple-home .play-controls{padding:0}\nbody.ayoba-simple-home .play-intro{color:var(--ink);font-size:14px;max-width:440px}\nbody.ayoba-simple-home .mood-buttons{gap:10px}\nbody.ayoba-simple-home .mood-buttons button{border:1px solid #55583a80;color:var(--olive);border-radius:0;padding:14px 17px;min-height:50px;font-size:13px;background:transparent}\nbody.ayoba-simple-home .mood-buttons button:hover,body.ayoba-simple-home .mood-buttons button[aria-pressed=true]{color:var(--paper);background:var(--olive)}\nbody.ayoba-simple-home .mood-buttons button:focus-visible{outline-color:var(--berry)}\nbody.ayoba-simple-home .mood-answer{padding:27px 0 15px;min-height:156px}\nbody.ayoba-simple-home .mood-answer p{font:400 25px/1.4 Instrument,Georgia,serif;max-width:460px}\nbody.ayoba-simple-home .play-controls>.tiny{font-size:10px;opacity:1;color:#666955;display:block;max-width:430px}\nbody.ayoba-simple-home .movement-study{transform:none;background:#eeece2;color:var(--olive);padding:19px 22px 16px;margin:0;border:1px solid var(--line)}\nbody.ayoba-simple-home .study-heading .eyebrow{font-size:9px;margin:0}\nbody.ayoba-simple-home .study-footer{gap:12px;padding-top:12px}\nbody.ayoba-simple-home .study-footer p{font-size:10px}\nbody.ayoba-simple-home .study-footer button{font-size:11px;min-height:40px}\nbody.ayoba-simple-home .founder{background:transparent}\nbody.ayoba-simple-home .founder-grid{gap:80px;grid-template-columns:1fr 1fr;align-items:center}\nbody.ayoba-simple-home .founder-photo img{aspect-ratio:1.08;object-fit:cover}\nbody.ayoba-simple-home .founder-photo figcaption{font:11px/1.6 DM,Arial,sans-serif;letter-spacing:.4px;padding:13px 0 0}\nbody.ayoba-simple-home .founder-copy p{font-size:14px;line-height:1.85}\nbody.ayoba-simple-home .founder-copy .eyebrow{font-size:10px;line-height:1.6}\nbody.ayoba-simple-home .founder-copy .textlink{margin-top:6px}\nbody.ayoba-simple-home .studio-film{border-block:1px solid var(--line)}\nbody.ayoba-simple-home .studio-film-heading{align-items:end;margin-bottom:34px;gap:40px}\nbody.ayoba-simple-home .studio-film-heading h2{margin:0}\nbody.ayoba-simple-home .studio-film-heading>p{font-size:13px;line-height:1.8}\nbody.ayoba-simple-home .studio-film-caption{font-size:9px;letter-spacing:1px;padding-top:17px}\nbody.ayoba-simple-home .booking-heading{display:grid;grid-template-columns:1fr 1fr;gap:0 70px;align-items:start;margin-bottom:36px}\nbody.ayoba-simple-home .booking-heading>.eyebrow{grid-column:1/-1}\nbody.ayoba-simple-home .booking-heading h2{margin:0}\nbody.ayoba-simple-home .booking-heading>p:not(.eyebrow){font-size:14px;line-height:1.85;max-width:430px;margin:0}\nbody.ayoba-simple-home .booking-options{border-top:1px solid var(--line)}\nbody.ayoba-simple-home .booking-option{display:grid;grid-template-columns:minmax(0,1fr) 130px 190px;gap:32px;align-items:center;padding:28px 0;border-bottom:1px solid var(--line)}\nbody.ayoba-simple-home .booking-service h3{font:600 25px/1.25 Bricolage,Arial,sans-serif;letter-spacing:-.6px;margin:0 0 8px}\nbody.ayoba-simple-home .booking-service p{font-size:12px;line-height:1.8;margin:0}\nbody.ayoba-simple-home .booking-price strong{display:block;font:400 32px/1.15 Instrument,Georgia,serif}\nbody.ayoba-simple-home .booking-price span{display:block;font-size:11px;margin-top:4px}\nbody.ayoba-simple-home .booking-option .textlink{font-size:12px;justify-self:end;gap:16px;white-space:nowrap}\nbody.ayoba-simple-home .booking-note{font-size:12px;line-height:1.85;max-width:740px;margin:23px 0 0;color:#595e49}\nbody.ayoba-simple-home .booking-note a{text-decoration:underline;text-underline-offset:3px}\nbody.ayoba-simple .footer{background:var(--paper);color:var(--ink);border-top:1px solid var(--line);padding:54px 0 22px}\nbody.ayoba-simple .footer-top{grid-template-columns:1.5fr 1fr 1fr;gap:45px;padding-bottom:38px}\nbody.ayoba-simple .footer .wordmark{font-size:58px;letter-spacing:-4px;color:var(--olive);margin-bottom:20px}\nbody.ayoba-simple .footer .wordmark small{font-size:8px;letter-spacing:1.1px;margin-left:12px}\nbody.ayoba-simple .footer p{font-size:11px;color:#595e49}\nbody.ayoba-simple .footer-links{font-size:11px;gap:8px}\nbody.ayoba-simple .footer-links h4{font-size:9px;color:var(--olive);letter-spacing:1.2px;margin:5px 0 10px}\nbody.ayoba-simple .footer-bottom{border-color:var(--line);color:#595e49;font-size:9px}\nbody.ayoba-simple .media-credit{color:#595e49;font-size:9px}\n@media(max-width:1000px){\n  body.ayoba-simple .shell{width:calc(100% - 56px)}\n  body.ayoba-simple .navlinks{gap:19px}\n  body.ayoba-simple .navlinks>a{font-size:9px;letter-spacing:.85px}\n  body.ayoba-simple-home .simple-session-grid{gap:30px}\n  body.ayoba-simple-home .simple-play-grid{gap:35px}\n  body.ayoba-simple-home .founder-grid{gap:45px}\n  body.ayoba-simple-home .intention-copy{gap:26px}\n  body.ayoba-simple-home .booking-option{grid-template-columns:minmax(0,1fr) 100px 170px;gap:20px}\n}\n@media(max-width:700px){\n  body.ayoba-simple .shell{width:calc(100% - 40px)}\n  body.ayoba-simple .nav{height:auto;min-height:108px;display:flex;flex-wrap:wrap;align-content:center;gap:7px;padding-top:14px;padding-bottom:0}\n  body.ayoba-simple .nav>a{display:block}\n  body.ayoba-simple .nav .wordmark{font-size:34px;letter-spacing:-2.5px}\n  body.ayoba-simple .nav .wordmark small{font-size:7px}\n  body.ayoba-simple .navlinks{display:flex;width:100%;flex:0 1 100%;gap:16px;overflow-x:auto;overscroll-behavior-x:contain;padding:0 2px 5px;margin:0;scrollbar-width:thin;border:0;scroll-padding-inline:10px}\n  body.ayoba-simple .navlinks>a{min-height:40px;font-size:9px;letter-spacing:.7px}\n  body.ayoba-simple .navlinks>.button{font-size:9px;min-height:32px;align-self:center;padding:5px 12px;letter-spacing:.7px}\n  body.ayoba-simple .navlinks>a:not(.button):after{bottom:5px}\n  body.ayoba-simple-home main>section[id]{scroll-margin-top:calc(var(--section-header-height,108px) + 24px)}\n  body.ayoba-simple-home main>#home{scroll-margin-top:var(--section-header-height,108px)}\n  body.ayoba-simple-home .section,body.ayoba-simple-home .studio-film{padding-block:58px}\n  body.ayoba-simple-home .eyebrow{font-size:9px;letter-spacing:1.3px;margin-bottom:19px}\n  body.ayoba-simple-home .section h2,body.ayoba-simple-home .studio-film h2{font-size:43px;letter-spacing:-1.8px;line-height:1.08}\n  body.ayoba-simple-home .section-heading{margin-bottom:30px}\n  body.ayoba-simple-home .section-heading>.eyebrow{margin-bottom:18px}\n  body.ayoba-simple-home .section-heading>p:last-child:not(.eyebrow){font-size:13px;margin-top:16px}\n  body.ayoba-simple-home .hero-canvas.video-hero{min-height:630px}\n  body.ayoba-simple-home .video-hero-content{padding-block:21px 16px}\n  body.ayoba-simple-home .video-hero h1{font-size:clamp(64px,15.5vw,91px);letter-spacing:-.055em;margin-bottom:22px}\n  body.ayoba-simple-home .video-hero h1 em{margin-left:.08em}\n  body.ayoba-simple-home .video-hero-main{justify-content:flex-start;padding-block:52px 115px}\n  body.ayoba-simple-home .video-hero-main>p{font-size:12px;line-height:1.8;max-width:260px}\n  body.ayoba-simple-home .video-hero-top,body.ayoba-simple-home .video-hero-top span{font-size:7px;letter-spacing:.9px}\n  body.ayoba-simple-home .video-hero-actions .button{font-size:11px;padding:13px 18px}\n  body.ayoba-simple-home .video-hero-bottom{font-size:8px;letter-spacing:.65px}\n  body.ayoba-simple-home .movement-manifesto{padding-block:60px}\n  body.ayoba-simple-home .movement-manifesto h2{font-size:33px;line-height:1.22;letter-spacing:-1px;margin-bottom:30px}\n  body.ayoba-simple-home .intention-copy{grid-template-columns:1fr;gap:20px;max-width:520px}\n  body.ayoba-simple-home .intention-copy p{font-size:14px;line-height:1.8}\n  body.ayoba-simple-home .simple-session-grid{grid-template-columns:1fr;gap:43px}\n  body.ayoba-simple-home .journey-copy{padding-top:23px}\n  body.ayoba-simple-home .journey h3{font-size:33px;letter-spacing:-1px;margin-bottom:14px}\n  body.ayoba-simple-home .journey-copy>p{font-size:14px}\n  body.ayoba-simple-home .journey-copy .journey-detail{font-size:10px;margin-bottom:23px}\n  body.ayoba-simple-home .playground{padding-block:0}\n  body.ayoba-simple-home .playground>.shell{padding-block:58px}\n  body.ayoba-simple-home .simple-play-grid{grid-template-columns:1fr;gap:34px}\n  body.ayoba-simple-home .mood-buttons button{font-size:13px;min-height:50px}\n  body.ayoba-simple-home .mood-answer{min-height:135px;padding-top:23px}\n  body.ayoba-simple-home .movement-study{padding:17px 18px 13px}\n  body.ayoba-simple-home .study-footer>div{gap:18px}\n  body.ayoba-simple-home .founder-grid{grid-template-columns:1fr;gap:32px}\n  body.ayoba-simple-home .founder-copy p{font-size:14px}\n  body.ayoba-simple-home .founder-copy .eyebrow{font-size:9px}\n  body.ayoba-simple-home .studio-film-heading{display:block;margin-bottom:25px}\n  body.ayoba-simple-home .studio-film-heading h2{margin-bottom:20px}\n  body.ayoba-simple-home .studio-film-heading>p{font-size:12px}\n  body.ayoba-simple-home .studio-film-caption{font-size:8px;letter-spacing:.5px;gap:15px}\n  body.ayoba-simple-home .booking-heading{display:block;margin-bottom:29px}\n  body.ayoba-simple-home .booking-heading h2{margin-bottom:20px}\n  body.ayoba-simple-home .booking-heading>p:not(.eyebrow){font-size:13px}\n  body.ayoba-simple-home .booking-option{grid-template-columns:minmax(0,1fr) auto;gap:16px;padding-block:25px}\n  body.ayoba-simple-home .booking-service h3{font-size:22px;letter-spacing:-.5px}\n  body.ayoba-simple-home .booking-service p{font-size:11px}\n  body.ayoba-simple-home .booking-price{text-align:right}\n  body.ayoba-simple-home .booking-price strong{font-size:30px}\n  body.ayoba-simple-home .booking-price span{font-size:10px}\n  body.ayoba-simple-home .booking-option .textlink{grid-column:1/-1;justify-self:start;font-size:12px}\n  body.ayoba-simple-home .booking-note{font-size:11px;margin-top:20px}\n  body.ayoba-simple .footer{padding-top:40px}\n  body.ayoba-simple .footer-top{grid-template-columns:1fr 1fr;gap:26px 20px;padding-bottom:28px}\n  body.ayoba-simple .footer-brand{grid-column:1/-1}\n  body.ayoba-simple .footer .wordmark{font-size:50px;letter-spacing:-3px;margin-bottom:15px}\n  body.ayoba-simple .footer-links{font-size:10px}\n  body.ayoba-simple .footer-links h4{font-size:8px}\n  body.ayoba-simple .footer-bottom{flex-direction:column;gap:7px;font-size:8px}\n  body.ayoba-simple .media-credit{font-size:8px}\n}\n@media(prefers-reduced-motion:reduce){html:has(body.ayoba-simple){scroll-behavior:auto}}\n\nbody.ayoba-simple main:not([data-section-layout]) [id]{scroll-margin-top:calc(var(--section-header-height,78px) + 24px)}\n");
    style('ayoba-background-design','dynamic-background.css',"/* Supplied tropical artwork, gently moving behind the existing page content. */\nbody.ayoba-tropical{\n  --paper:#f8f4e5;\n  --ink:#303322;\n  --line:#55583a40;\n  position:relative;\n  isolation:isolate;\n  background:var(--paper);\n}\nbody.ayoba-tropical #ayoba-background{\n  position:fixed;\n  inset:0;\n  z-index:-1;\n  overflow:hidden;\n  pointer-events:none;\n  opacity:.2;\n  contain:paint;\n}\nbody.ayoba-tropical .tropical-plane{\n  position:absolute;\n  inset:-5%;\n  transform:translate3d(var(--pointer-x,0px),var(--pointer-y,0px),0);\n  transition:transform .9s ease-out;\n  pointer-events:none;\n}\nbody.ayoba-tropical .tropical-image{\n  display:block;\n  width:100%;\n  height:100%;\n  max-width:none;\n  object-fit:cover;\n  object-position:center 47%;\n  transform:scale(1.025);\n  animation:ayoba-tropical-drift 24s ease-in-out infinite alternate;\n  animation-play-state:paused;\n}\nbody.ayoba-tropical[data-motion=running] .tropical-image{animation-play-state:running}\nbody.ayoba-tropical[data-motion=paused] .tropical-image{animation-play-state:paused}\nbody.ayoba-tropical[data-motion=paused] .tropical-plane{transition:none}\nbody.ayoba-tropical[data-hero-in-view=false] .art-hero .tropical-image{animation-play-state:paused!important}\nbody.ayoba-tropical [data-section-header]{background:#f8f4e5}\nbody.ayoba-tropical .footer{background:transparent;padding-bottom:76px}\nbody.ayoba-tropical main{background:transparent}\nbody.ayoba-tropical.ayoba-simple-home .movement-study{background:#f8f4e5e8}\nbody.ayoba-tropical .panel{background:#f1efdfec}\nbody.ayoba-tropical .contact-form input,\nbody.ayoba-tropical .contact-form select,\nbody.ayoba-tropical .contact-form textarea{background:#f8f4e580}\nbody.ayoba-tropical .hero-canvas.art-hero{\n  background:#f7edc9;\n  color:var(--ink);\n  isolation:isolate;\n}\nbody.ayoba-tropical .art-hero .hero-art-wrap{\n  position:absolute;\n  inset:0;\n  overflow:hidden;\n  z-index:-3;\n  pointer-events:none;\n}\nbody.ayoba-tropical .art-hero .video-hero-shade{\n  background:linear-gradient(90deg,#fbf5e5f2 0%,#fbf5e5d9 23%,#fbf5e59c 42%,#fbf5e526 65%,#fbf5e500 100%),linear-gradient(0deg,#fbf5e54d,transparent 34%);\n}\nbody.ayoba-tropical .art-hero h1{color:#303322;max-width:760px}\nbody.ayoba-tropical .art-hero h1 em{color:#414a2b}\nbody.ayoba-tropical .art-hero .video-hero-top,\nbody.ayoba-tropical .art-hero .video-hero-top span,\nbody.ayoba-tropical .art-hero .video-hero-main>p,\nbody.ayoba-tropical .art-hero .video-hero-bottom,\nbody.ayoba-tropical .art-hero .video-film-link{color:#303322}\nbody.ayoba-tropical .art-hero .video-hero-main>p{max-width:340px}\nbody.ayoba-tropical .art-hero .video-hero-actions .button{\n  background:var(--olive);\n  border-color:var(--olive);\n  color:#fffbed;\n}\nbody.ayoba-tropical .art-hero .video-hero-actions .button:hover{background:var(--ink);border-color:var(--ink)}\nbody.ayoba-tropical .art-hero .video-film-link{border-color:#55583a70}\nbody.ayoba-tropical .art-hero .video-film-link:hover{color:#596438}\nbody.ayoba-tropical .art-hero .video-hero-bottom{border-color:#55583a4d}\nbody.ayoba-tropical .art-hero a:focus-visible,\nbody.ayoba-tropical .art-hero button:focus-visible{outline-color:#7b3543}\nbody.ayoba-tropical [data-background-toggle]{\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  gap:9px;\n  min-height:40px;\n  border:1px solid #55583a70;\n  border-radius:24px;\n  padding:9px 14px;\n  background:#f8f4e5eb;\n  color:#303322;\n  font:11px/1.3 DM,Arial,sans-serif;\n  letter-spacing:.1px;\n  text-transform:none;\n  cursor:pointer;\n}\nbody.ayoba-tropical [data-background-toggle]:hover{background:#fff9e8;border-color:var(--olive)}\nbody.ayoba-tropical [data-background-toggle]:focus-visible{outline:3px solid #7b3543;outline-offset:4px}\nbody.ayoba-tropical [data-background-icon]{display:inline-block;width:12px;text-align:center;font:14px/1 Arial,sans-serif}\nbody.ayoba-tropical .background-control{\n  position:fixed;\n  right:max(18px,env(safe-area-inset-right));\n  bottom:max(18px,env(safe-area-inset-bottom));\n  z-index:50;\n  box-shadow:0 2px 12px #30332212;\n  font-size:12px;\n  opacity:1;\n  visibility:visible;\n}\nbody.ayoba-tropical[data-hero-in-view=true] .background-control{opacity:0;visibility:hidden;pointer-events:none}\n@keyframes ayoba-tropical-drift{\n  from{transform:scale(1.025) translate3d(-.6%,.3%,0)}\n  to{transform:scale(1.06) translate3d(.6%,-.5%,0)}\n}\n@media(max-width:700px){\n  body.ayoba-tropical #ayoba-background{opacity:.17}\n  body.ayoba-tropical .tropical-image{object-position:60% center}\n  body.ayoba-tropical .art-hero .video-hero-shade{\n    background:linear-gradient(90deg,#fbf5e5dc 0%,#fbf5e5b3 38%,#fbf5e538 100%),linear-gradient(180deg,#fbf5e540 0%,transparent 48%,#fbf5e54d 100%);\n  }\n  body.ayoba-tropical .art-hero .video-hero-main>p{max-width:265px}\n  body.ayoba-tropical .art-hero [data-background-toggle]{font-size:9px;padding:8px 11px;min-height:40px}\n  body.ayoba-tropical .background-control{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));min-height:40px;font-size:11px;padding:9px 12px}\n}\n@media(prefers-reduced-motion:reduce){\n  body.ayoba-tropical .tropical-plane{transition:none}\n  body.ayoba-tropical:not([data-motion=running]) .tropical-plane{transform:none}\n  body.ayoba-tropical:not([data-motion=running]) .tropical-image{animation:none!important;transform:scale(1.025)}\n  /* Motion starts only when the visitor explicitly opts in through the control. */\n  body.ayoba-tropical[data-motion=running] .tropical-image{animation:ayoba-tropical-drift 24s ease-in-out infinite alternate!important}\n}\n");
    style('ayoba-pendant-design','pendant-motifs.css',"/* Nine individual ink pendants, set in their own space above the section titles. */\n.pendant-motif{display:block;flex:none;width:76px;height:90px;pointer-events:none;user-select:none}\n.pendant-motif img{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;-webkit-user-drag:none;transform-origin:50% 8%;animation:pendant-sway 7s ease-in-out var(--pendant-delay,0s) infinite;animation-play-state:paused}\nbody[data-motion=running] .pendant-motif[data-pendant-visible=true] img{animation-play-state:running}\nbody[data-motion=paused] .pendant-motif img{animation-play-state:paused}\nbody.ayoba-simple .eyebrow.pendant-caption{display:flex;align-items:center;gap:24px;min-height:90px;margin-bottom:24px;max-width:none}\n.pendant-caption:after{content:\"\";height:1px;background:var(--line,#55583a40);flex:1;order:1}\n.pendant-caption>.pendant-motif{order:2}\n.pendant-hero{width:32px;height:48px;margin-inline:16px}\nbody.ayoba-simple .video-hero-top{align-items:center}\n.pendant-divider{display:flex;align-items:center;justify-content:center;gap:32px;margin:-10px auto 42px;pointer-events:none}\n.pendant-divider:after{content:\"\";width:120px;height:1px;order:1;background:var(--line,#55583a40)}\n.pendant-divider>.pendant-motif:last-child{order:2}\n.pendant-divider>.pendant-motif{height:106px;width:84px}\n@keyframes pendant-sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}\n@media(max-width:700px){\n  .pendant-motif{width:60px;height:78px}\n  body.ayoba-simple .eyebrow.pendant-caption{min-height:78px;gap:18px;margin-bottom:22px}\n  .pendant-hero{width:24px;height:38px;margin-inline:8px}\n  .pendant-divider{gap:24px;margin:-6px auto 30px}\n  .pendant-divider:after{width:70px}\n  .pendant-divider>.pendant-motif{width:64px;height:88px}\n}\n@media(max-width:360px){\n  .pendant-hero{width:20px;height:34px;margin-inline:5px}\n}\n@media(prefers-reduced-motion:reduce){\n  body:not([data-motion=running]) .pendant-motif img{animation:none;transform:none}\n  body[data-motion=running] .pendant-motif img{animation:pendant-sway 7s ease-in-out var(--pendant-delay,0s) infinite!important;animation-play-state:paused!important}\n  body[data-motion=running] .pendant-motif[data-pendant-visible=true] img{animation-play-state:running!important}\n}\n");
    if (route === '/' || route === '/about') style('ayoba-about-film-design','about-montage.css',"/* The film is a backdrop; the words always sit over a calm cream wash. */\n.about-film-backdrop{position:absolute;inset:0;z-index:-1;overflow:hidden;pointer-events:none;background:#d7dbbc}\n.about-film-backdrop>img,.about-film-backdrop>video{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;object-position:center}\n.about-film-backdrop>video{opacity:0}\n.about-film-backdrop[data-film-ready=true]>video{opacity:1}\n.about-film-backdrop:after{content:\"\";position:absolute;inset:0;background:linear-gradient(90deg,#f8f4e5b3,#f8f4e5de 60%,#f8f4e5e8)}\nbody.ayoba-simple-home .about-montage-section{position:relative;isolation:isolate;overflow:hidden;background:#d7dbbc}\nbody.ayoba-simple-home .about-montage-section .founder-grid{position:relative}\nbody.ayoba-simple-home .about-montage-section .founder-photo>img{height:auto;aspect-ratio:1.08;object-fit:cover}\nbody.ayoba-simple-home .about-montage-section .founder-copy{background:#f8f4e5c7;padding:30px;border:1px solid #f8f4e5b3}\nbody.ayoba-simple-home .about-montage-section .pendant-caption{margin-top:-12px}\nbody.about-montage-page>#ayoba-background{display:none}\nbody.about-montage-page>.about-film-backdrop{position:fixed}\nbody.about-montage-page>.about-film-backdrop:after{background:linear-gradient(90deg,#f8f4e5c7 0%,#f8f4e5a3 60%,#f8f4e570 100%)}\nbody.about-montage-page .content-columns>div:first-child{background:#f8f4e5ed;padding:30px;border:1px solid #f8f4e5cc}\nbody.about-montage-page .about-photo figcaption{background:#f8f4e5ed;padding:12px 16px}\nbody.about-montage-page .photo-essay{background:#f8f4e5e8;padding:30px;margin-top:65px}\nbody.about-montage-page .footer{background:#f8f4e5e8}\nbody.ayoba-simple .about-film-credit{display:inline-flex;align-items:center;gap:18px;font:11px/1.7 DM,Arial,sans-serif;letter-spacing:.1px;border-bottom:1px solid #55583a80;padding-bottom:5px;margin:0 0 26px;color:var(--ink)}\nbody.ayoba-simple .about-film-credit:hover{color:var(--berry);border-color:currentColor}\nbody.about-montage-page .page h1{margin-bottom:24px}\n@media(max-width:700px){\n  body.ayoba-simple-home .about-montage-section .founder-copy{padding:22px}\n  body.about-montage-page .content-columns>div:first-child{padding:24px 20px}\n  body.about-montage-page>.about-film-backdrop:after{background:#f8f4e5b8}\n  body.about-montage-page .photo-essay{padding:20px;margin-top:45px}\n  .about-film-backdrop:after{background:#f8f4e5b8}\n  body.ayoba-simple .about-film-credit{font-size:10px;margin-bottom:22px}\n}\n");
    if (route === '/') {
      style('ayoba-character-design','characters.css',"/* Separate figures live in clear spaces, never in front of text or form fields. */\n.cast-stage{position:relative;height:190px;margin-top:28px;isolation:isolate;pointer-events:none;user-select:none;contain:layout style}\n.character-flight{position:absolute;left:var(--cast-x);top:var(--cast-y);width:var(--cast-size);height:var(--cast-size);transform:translate(-50%,-50%) translate3d(var(--flight-x,0px),var(--flight-y,0px),0) rotate(var(--flight-turn,0deg));transition:transform .22s ease-out;pointer-events:none}\n.character-puppet{height:100%;width:100%;transform-origin:50% 78%;animation:cast-idle var(--idle-duration,5s) ease-in-out var(--cast-delay,0s) infinite;animation-play-state:paused}\n.character-puppet img{display:block;width:100%;height:100%;object-fit:contain;object-position:center;pointer-events:none;user-select:none;-webkit-user-drag:none}\nbody[data-motion=running] .character-puppet{animation-play-state:running}\nbody[data-motion=paused] .character-puppet{animation-play-state:paused}\nbody[data-motion=paused] .character-flight{transition:none}\n.cast-stage[data-visible=false] .character-puppet{animation-play-state:paused!important}\n.cast-stage[data-dancing=true] .character-puppet{animation-name:cast-step;animation-duration:var(--dance-duration,.8s)}\n.cast-stage[data-dancing=true] .dance-hop{animation-name:cast-hop}\n.cast-stage[data-dancing=true] .dance-sway{animation-name:cast-sway}\n.cast-stage[data-dancing=true] .dance-flutter{animation-name:cast-flutter}\nbody.ayoba-tropical .cast-hero{position:absolute;inset:14% 1.5% 13% 58%;height:auto;margin:0;z-index:0}\nbody.ayoba-tropical .art-hero .video-hero-content{z-index:1}\n.cast-practice{margin-top:40px;height:180px}\n.cast-sessions{height:120px;margin-top:28px;margin-bottom:-25px}\n.cast-play{height:190px;margin-top:24px}\n.cast-about{height:105px;margin-top:28px}\n.cast-about .character-flight{height:115px}\n.cast-film{height:170px;margin-top:10px;margin-bottom:-28px}\n@keyframes cast-idle{0%,100%{transform:translate3d(0,5px,0) rotate(-3deg)}50%{transform:translate3d(0,-8px,0) rotate(3deg)}}\n@keyframes cast-hop{0%,100%{transform:translateY(4px) rotate(-6deg) scale(1.035,.965)}45%{transform:translateY(calc(-17px * var(--dance-strength,.6))) rotate(7deg) scale(.97,1.04)}70%{transform:translateY(-5px) rotate(3deg)}}\n@keyframes cast-step{0%,100%{transform:translate(-5px,2px) rotate(-7deg)}25%{transform:translate(0,-9px) rotate(-2deg) scaleY(1.025)}50%{transform:translate(6px,2px) rotate(7deg)}75%{transform:translate(0,-7px) rotate(2deg) scaleY(1.025)}}\n@keyframes cast-sway{0%,100%{transform:translate(-8px,3px) rotate(-10deg)}50%{transform:translate(8px,-8px) rotate(10deg)}}\n@keyframes cast-flutter{0%,100%{transform:translateY(3px) rotate(-8deg) scaleX(.97)}50%{transform:translateY(-13px) rotate(10deg) scaleX(1.03)}}\n@media(min-width:1300px){body.ayoba-tropical .cast-hero{left:61%;right:3%}.cast-hero .character-flight{width:calc(var(--cast-size) * 1.15);height:calc(var(--cast-size) * 1.15)}}\n@media(max-width:1000px) and (min-width:701px){.cast-hero .character-flight{width:calc(var(--cast-size) * .8);height:calc(var(--cast-size) * .8)}body.ayoba-tropical .cast-hero{left:60%;right:0}}\n@media(max-width:700px){\n body.ayoba-tropical.ayoba-simple-home .hero-canvas.art-hero{min-height:790px}\n body.ayoba-tropical.ayoba-simple-home .art-hero .video-hero-main{padding-bottom:255px}\n body.ayoba-tropical .cast-hero{inset:auto 20px 88px;height:190px}\n .cast-hero .character-flight{width:calc(var(--cast-size) * .74);height:calc(var(--cast-size) * .74)}\n .cast-hero [data-character=sun-dancer]{left:22%;top:42%}\n .cast-hero [data-character=ghost]{left:82%;top:43%}\n .cast-hero [data-character=moon-wizard]{left:50%;top:65%}\n .cast-stage:not(.cast-hero){height:155px;margin-top:24px}\n .cast-stage:not(.cast-hero) .character-flight{width:calc(var(--cast-size) * .82);height:calc(var(--cast-size) * .82)}\n .cast-stage.cast-sessions{height:110px;margin-bottom:-16px}\n .cast-stage.cast-about{height:100px}\n .cast-about .character-flight{height:100px!important}\n .cast-stage.cast-film{height:145px;margin-bottom:-20px}\n}\n@media(prefers-reduced-motion:reduce){\n .character-flight{transition:none}\n body[data-motion=running] .character-puppet{animation:cast-idle var(--idle-duration,5s) ease-in-out var(--cast-delay,0s) infinite!important}\n body[data-motion=running] .cast-stage[data-dancing=true] .character-puppet{animation-name:cast-step!important;animation-duration:var(--dance-duration,.8s)!important}\n body[data-motion=running] .cast-stage[data-dancing=true] .dance-hop{animation-name:cast-hop!important}\n body[data-motion=running] .cast-stage[data-dancing=true] .dance-sway{animation-name:cast-sway!important}\n body[data-motion=running] .cast-stage[data-dancing=true] .dance-flutter{animation-name:cast-flutter!important}\n body[data-motion=running] .cast-stage[data-visible=false] .character-puppet{animation-play-state:paused!important}\n}\n@media(max-width:360px){\n body.ayoba-tropical.ayoba-simple-home .art-hero h1{font-size:56px}\n body.ayoba-tropical.ayoba-simple-home .navlinks{gap:9px}\n body.ayoba-tropical.ayoba-simple-home .navlinks>.button{padding-inline:9px;gap:7px}\n}\n");
      style('ayoba-video-design','video-hero.css',"/* A moving image within Ayoba's existing olive, butter and cream palette. */\n.hero-canvas.video-hero{min-height:660px;min-height:min(780px,calc(100svh - 98px));isolation:isolate;background:#263023;color:#f2ddaa}\n.video-hero .hero-video-poster,.video-hero .hero-video{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;object-position:66% 80%;z-index:-3}\n.video-hero .hero-video{opacity:0;transition:opacity .65s ease;pointer-events:none}\n.video-hero.is-video-ready .hero-video{opacity:1}\n.video-hero-shade{position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,#182116ed 0%,#25301dc9 31%,#20291c55 62%,#20291c12 100%),linear-gradient(0deg,#1b2318b3,transparent 35%,transparent 70%,#1b231850)}\n.video-hero-content{position:relative;min-height:inherit;display:flex;flex-direction:column;padding-block:30px 24px}\n.video-hero-top,.video-hero-bottom{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:9px;letter-spacing:1.6px;text-transform:uppercase}\n.video-hero-top p{margin:0}.video-hero-top span{color:#fff9e6}\n.video-hero-main{padding-block:55px 45px;flex:1;display:flex;flex-direction:column;justify-content:center}\n.video-hero h1{font:600 clamp(76px,8.4vw,128px)/.92 Bricolage,Arial,sans-serif;letter-spacing:-.065em;max-width:750px;margin:0 0 30px}\n.video-hero h1 em{font:italic 1.12em/1.03 Instrument,Georgia,serif;letter-spacing:-.04em;padding:0;display:block;margin-left:.35em}\n.video-hero-main>p{color:#fff9e6;font-size:14px;line-height:1.7;max-width:320px;margin:0 0 28px}\n.video-hero-actions{display:flex;align-items:center;gap:30px;flex-wrap:wrap}.video-hero-actions .button{padding:16px 22px;font-size:12px;gap:28px}\n.video-film-link{display:inline-flex;align-items:center;gap:10px;font-size:12px;letter-spacing:0;border-bottom:1px solid #f2ddaa80;padding:9px 0;color:#fff9e6}\n.video-play-icon{font:24px/1 Arial,sans-serif}.video-film-link:hover{color:var(--butter)}\n.video-hero-bottom{padding-top:20px;border-top:1px solid #f2ddaa48;font-size:9px;letter-spacing:1.1px}\n.video-hero-bottom>a{display:inline-flex;gap:30px;align-items:center}.video-hero-bottom>a span{font-size:20px;line-height:1}\n.video-hero [data-hero-toggle]{display:inline-flex;gap:9px;align-items:center;min-height:40px;border:1px solid #f2ddaa80;border-radius:30px;padding:8px 14px;background:#26302366;color:#fff9e6;font:10px/1.3 DM,Arial,sans-serif;letter-spacing:.2px;text-transform:none;backdrop-filter:blur(5px)}\n.video-hero [data-hero-toggle-icon]{font:15px/1 Arial,sans-serif;width:12px;text-align:center}\n.video-hero a:focus-visible,.video-hero button:focus-visible{outline:3px solid var(--butter);outline-offset:5px}\n.video-hero [data-hero-toggle]:disabled{opacity:.65;cursor:default}\n.studio-film{padding-block:70px 90px;scroll-margin-top:35px}.studio-film-heading{display:flex;justify-content:space-between;align-items:end;gap:50px;margin-bottom:32px}.studio-film-heading .eyebrow{margin-bottom:18px}.studio-film h2{font:600 clamp(42px,5vw,72px)/1.05 Bricolage,Arial,sans-serif;letter-spacing:-.05em;margin:0}.studio-film h2 em{font-size:1.15em}.studio-film-heading>p{font-size:13px;line-height:1.7;margin:0;max-width:300px}.studio-film>video{display:block;width:100%;height:auto;aspect-ratio:16/9;background:#263023;object-fit:contain;border:0}.studio-film-caption{display:flex;justify-content:space-between;gap:20px;font-size:9px;text-transform:uppercase;letter-spacing:1.2px;padding-top:15px}\n@media(max-width:900px){.hero-canvas.video-hero{min-height:680px}.video-hero-main{padding-block:55px 42px}.video-hero h1{font-size:clamp(76px,10vw,110px)}.video-hero .hero-video-poster,.video-hero .hero-video{object-position:75% 80%}.video-hero-shade{background:linear-gradient(90deg,#182116e6 0%,#25301cb8 32%,#20291c40 100%),linear-gradient(0deg,#1b2318b0,transparent 45%)}.video-hero-actions{gap:22px}}\n@media(max-width:560px){.hero-canvas.video-hero{min-height:700px;min-height:max(700px,calc(100svh - 78px))}.video-hero-content{width:calc(100% - 40px);padding-block:23px 16px}.video-hero-top{font-size:7px;letter-spacing:1px;gap:18px;align-items:start}.video-hero-top p{max-width:175px}.video-hero-top span{white-space:nowrap;font-size:7px}.video-hero-main{justify-content:flex-start;padding-block:60px 150px}.video-hero h1{font-size:clamp(66px,16.5vw,89px);letter-spacing:-.06em;margin-bottom:22px}.video-hero h1 em{margin-left:.18em}.video-hero-main>p{font-size:12px;max-width:255px;margin-bottom:23px}.video-hero-actions{align-items:flex-start;gap:13px;flex-direction:column}.video-hero-actions .button{font-size:10px;min-height:48px;padding:13px 17px;gap:25px}.video-film-link{font-size:11px;padding:5px 0}.video-play-icon{font-size:22px}.video-hero .hero-video-poster,.video-hero .hero-video{object-position:80% bottom}.video-hero-shade{background:linear-gradient(180deg,#182116cc 0%,#20291c85 33%,#20291c15 71%,#182116b3 100%),linear-gradient(90deg,#1821168c,transparent 90%)}.video-hero-bottom{font-size:7px;letter-spacing:1px;gap:10px;padding-top:12px}.video-hero-bottom>a{gap:14px}.video-hero [data-hero-toggle]{min-height:40px;font-size:9px;padding:8px 11px}.studio-film{padding-block:40px 55px}.studio-film-heading{display:block;margin-bottom:24px}.studio-film-heading .eyebrow{font-size:8px}.studio-film h2{font-size:43px;margin-bottom:20px}.studio-film-heading>p{font-size:12px}.studio-film-caption{font-size:7px;letter-spacing:.8px;gap:10px}}\n@media(prefers-reduced-motion:reduce){.video-hero .hero-video{transition:none}.studio-film{scroll-behavior:auto}}\n");
      // Keep section styles after video styles for predictable overrides.
      const sectionStyle = document.getElementById('ayoba-section-design');
      if (sectionStyle) document.head.append(sectionStyle);
      const backgroundStyle = document.getElementById('ayoba-background-design');
      if (backgroundStyle) document.head.append(backgroundStyle);
      const characterStyle = document.getElementById('ayoba-character-design');
      if (characterStyle) document.head.append(characterStyle);
      const previousHero = document.querySelector('.hero-canvas');
      if (previousHero && !previousHero.hasAttribute('data-art-hero')) previousHero.replaceWith(fragment("<section class=\"hero-canvas video-hero art-hero\" id=\"home\" data-art-hero aria-labelledby=\"hero-title\">\n  <div class=\"hero-art-wrap\" aria-hidden=\"true\"><div class=\"tropical-plane\" data-art-plane data-art-depth=\"1\"><img class=\"tropical-image\" src=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-tropical-background.8bc2f47e0385.jpg\" alt=\"\" width=\"1800\" height=\"1800\" fetchpriority=\"high\"></div></div>\n  <div class=\"video-hero-shade\" aria-hidden=\"true\"></div>\n  <div class=\"video-hero-content shell\">\n    <div class=\"video-hero-top\"><p>Somatic movement &amp; ecstatic dance</p><span>Online, with Sophie</span></div>\n    <div class=\"video-hero-main\"><h1 id=\"hero-title\">Movement<br><em>as play.</em></h1><p>Private sessions &amp; group journeys.<br>A practice you can make your own.</p><div class=\"video-hero-actions\"><a class=\"button light\" href=\"#book\">Find a session <span aria-hidden=\"true\">\u2197</span></a><a class=\"video-film-link\" href=\"#studio-film\"><span class=\"video-play-icon\" aria-hidden=\"true\">\u25b7</span> Watch the film</a></div></div>\n    <div class=\"video-hero-bottom\"><a href=\"#philosophy\">Explore the practice <span aria-hidden=\"true\">\u2193</span></a><button type=\"button\" data-background-toggle aria-label=\"Play background motion\" aria-pressed=\"false\"><span data-background-icon aria-hidden=\"true\">\u25b7</span><span data-background-label>Play motion</span></button></div>\n  </div>\n</section>"));
      const previousFilm = document.querySelector('.film-section');
      if (previousFilm && !previousFilm.classList.contains('studio-film')) previousFilm.replaceWith(fragment("<section class=\"film-section studio-film shell\" id=\"studio-film\" aria-labelledby=\"studio-film-title\">\n  <div class=\"studio-film-heading\"><div><p class=\"eyebrow\">05 / Film</p><h2 id=\"studio-film-title\">In motion.</h2></div><p>A glimpse into Sophie\u2019s practice,<br>filmed outdoors.</p></div>\n  <video data-studio-film controls playsinline preload=\"none\" poster=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-video-poster.0bc303a2e700.jpg\" aria-label=\"Sophie\u2019s 36-second movement film, without audio\"><source src=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-film.0d5c62839b0b.mp4\" type=\"video/mp4\"><p><a href=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-film.0d5c62839b0b.mp4\">Watch Sophie\u2019s movement film</a>.</p></video>\n  <div class=\"studio-film-caption\"><span>Ayoba Studio \u00b7 Movement study</span><span>00:36 \u00b7 No audio</span></div>\n</section>"));
      const manifesto = document.querySelector('#philosophy');
      if (manifesto && !manifesto.classList.contains('movement-manifesto') && manifesto.querySelector('h2')?.textContent.includes('We were never meant')) manifesto.replaceWith(fragment("<section class=\"manifesto movement-manifesto\" id=\"philosophy\"><div class=\"shell manifesto-layout\">\n<p class=\"eyebrow\">01 / Practice</p>\n<h2>Movement as <em>play,</em> as a tool, as a practice, as a meditation, as a way to connect to your body and embrace the motions of life.</h2>\n<div class=\"intention-layout\"><div class=\"intention-copy\">\n<p>The intention for class can be whatever you make it. You can simply just want to experience it. Just show up as you are.</p>\n<p>If you want to just play, let\u2019s play. If you wish to move with stuck energy and emotions, with the intention to release and let go, let\u2019s do it.</p>\n<p>If you want to get more grounded in your body and embrace the energy of embodiment, play, love\u2026 let\u2019s do it all.</p>\n<a class=\"textlink\" href=\"#sessions\">Explore the sessions <span aria-hidden=\"true\">\u2197</span></a>\n</div>\n</div></div></section>"));
    }
    const aboutFilmStyle = document.getElementById('ayoba-about-film-design');
    if (aboutFilmStyle) document.head.append(aboutFilmStyle);
    if (route === '/about') {
      const heading = document.querySelector('main h1');
      if (heading && heading.textContent.replace(/\s+/g, ' ').includes('Learning to move')) {
        heading.classList.add('art-title'); heading.innerHTML = 'dance as <em>art.</em>';
      }
    }
    if (route === '/private-sessions') {
      const lede = document.querySelector('main .lede');
      if (lede?.textContent.trim() === 'Your pace, your curiosity, your way of moving. An individualized space to explore without needing to get anywhere.') lede.textContent = 'Your pace, your curiosity, your way of moving.';
    }
    // Reorganize only the public presentation; preserve bound controls and form nodes.
const publicNav = document.querySelector('#navlinks');
const previousBooking = publicNav?.querySelector('.button')?.getAttribute('href');
if (publicNav && !publicNav.querySelector('a[href="#sessions"], a[href="/#sessions"]')) {
  publicNav.replaceChildren(fragment("<a href=\"#philosophy\">Practice</a><a href=\"#sessions\">Sessions</a><a href=\"#play\">Play</a><a href=\"#about\">About</a><a href=\"#studio-film\">Film</a><a class=\"button\" href=\"#book\">Book <span aria-hidden=\"true\">\u2197</span></a>"));
}
if (route !== '/') {
  publicNav?.querySelectorAll('a[href^="#"]').forEach(link => link.setAttribute('href', '/' + link.getAttribute('href')));
}
if (route === '/') {
  const main = document.querySelector('main');
  if (main && !main.dataset.sectionLayout) {
    const controls = main.querySelector('.play-controls');
    const study = main.querySelector('[data-movement-study]') || fragment("<div class=\"movement-study\" data-movement-study>\n<div class=\"study-heading\"><span class=\"eyebrow\">Movement study</span><span class=\"study-number\" aria-hidden=\"true\">001</span></div>\n<svg class=\"gesture-surface\" viewBox=\"0 0 600 360\" role=\"img\" aria-label=\"An abstract line drawing. Draw with a cursor or finger, or use Add a gesture below.\"><g class=\"gesture-lines\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g></svg>\n<div class=\"study-footer\"><p>Draw with your cursor or finger.</p><div><button type=\"button\" data-add-gesture>Add a gesture <span aria-hidden=\"true\">\u2197</span></button><button type=\"button\" data-clear-gestures>Clear</button></div></div>\n<span class=\"study-status sr-only\" role=\"status\" aria-live=\"polite\"></span>\n</div>").firstElementChild;
    const play = main.querySelector('.playground');
    if (controls && study && play) {
      const playTemplate = fragment("<section class=\"playground section\" id=\"play\" aria-labelledby=\"play-title\"><div class=\"shell\"><div class=\"section-heading\"><p class=\"eyebrow\">03 / Play</p><h2 id=\"play-title\">A little experiment.</h2><p>Choose a feeling. Follow a line.<br>See where it takes you.</p></div><div class=\"simple-play-grid\"><div class=\"play-controls\"><div class=\"mood-buttons\" role=\"group\" aria-label=\"Choose a feeling\"><button type=\"button\" data-mood=\"Restless\" aria-pressed=\"false\">Restless<span aria-hidden=\"true\">\u2197</span></button><button type=\"button\" data-mood=\"Heavy\" aria-pressed=\"false\">Heavy<span aria-hidden=\"true\">\u2197</span></button><button type=\"button\" data-mood=\"Joyful\" aria-pressed=\"false\">Joyful<span aria-hidden=\"true\">\u2197</span></button><button type=\"button\" data-mood=\"Disconnected\" aria-pressed=\"false\">Disconnected<span aria-hidden=\"true\">\u2197</span></button><button type=\"button\" data-mood=\"Curious\" aria-pressed=\"false\">Curious<span aria-hidden=\"true\">\u2197</span></button><button type=\"button\" data-mood=\"Playful\" aria-pressed=\"false\">Playful<span aria-hidden=\"true\">\u2197</span></button></div><div class=\"mood-answer\" aria-live=\"polite\" aria-atomic=\"true\"><p>You don\u2019t have to change how you feel.<br>Just notice where you\u2019re beginning.</p></div><span class=\"tiny\">An invitation, not a prescription. Adapt, pause, or do nothing at all.</span></div><div class=\"movement-study\" data-movement-study>\n<div class=\"study-heading\"><span class=\"eyebrow\">Movement study</span><span class=\"study-number\" aria-hidden=\"true\">001</span></div>\n<svg class=\"gesture-surface\" viewBox=\"0 0 600 360\" role=\"img\" aria-label=\"An abstract line drawing. Draw with a cursor or finger, or use Add a gesture below.\"><g class=\"gesture-lines\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g></svg>\n<div class=\"study-footer\"><p>Draw with your cursor or finger.</p><div><button type=\"button\" data-add-gesture>Add a gesture <span aria-hidden=\"true\">\u2197</span></button><button type=\"button\" data-clear-gestures>Clear</button></div></div>\n<span class=\"study-status sr-only\" role=\"status\" aria-live=\"polite\"></span>\n</div></div></div></section>");
      playTemplate.querySelector('.play-controls').replaceWith(controls);
      playTemplate.querySelector('[data-movement-study]').replaceWith(study);
      play.replaceWith(playTemplate);
    }
    main.querySelector('.intro-band')?.remove();
    main.querySelector('.reassurance')?.remove();
    main.querySelector('.ways')?.replaceWith(fragment("<section class=\"section shell ways\" id=\"sessions\" aria-labelledby=\"sessions-title\">\n  <div class=\"section-heading\"><p class=\"eyebrow\">02 / Sessions</p><h2 id=\"sessions-title\">Ways to move.</h2><p>Online. No dance experience needed.</p></div>\n  <div class=\"simple-session-grid\">\n    <article class=\"journey journey-private\"><div class=\"journey-photo private-photo\"><img src=\"/assets/grounded-movement.jpg\" alt=\"A dancer leaning toward the grass with one arm lifted.\" width=\"930\" height=\"1100\" loading=\"lazy\"></div><div class=\"journey-copy\"><span class=\"index\">One to one</span><h3>Private sessions.</h3><p>Your pace, your curiosity, your way of moving.</p><p class=\"journey-detail\">45 MINUTES \u00b7 $45 FIRST SESSION \u00b7 $65 THEREAFTER</p><a class=\"journey-link\" href=\"/private-sessions/\">About private sessions <span aria-hidden=\"true\">\u2197</span></a></div></article>\n    <article class=\"journey journey-group\"><div class=\"journey-photo\"><img src=\"/assets/sunlit-movement.jpg\" alt=\"A dancer reaches one arm overhead in a sunlit field.\" width=\"988\" height=\"1100\" loading=\"lazy\"></div><div class=\"journey-copy\"><span class=\"index\">Together</span><h3>Group journeys.</h3><p>Music, guided movement, and space to explore alongside others.</p><p class=\"journey-detail\">60 MINUTES \u00b7 $15\u2013$35 SLIDING SCALE</p><a class=\"journey-link\" href=\"/group-journeys/\">About group journeys <span aria-hidden=\"true\">\u2197</span></a></div></article>\n  </div>\n</section>"));
    main.querySelector('.founder')?.replaceWith(fragment("<section class=\"founder section\" id=\"about\" aria-labelledby=\"about-title\"><div class=\"shell founder-grid\"><figure class=\"founder-photo\"><img src=\"/assets/embrace.jpg\" alt=\"A person wrapping their arms around their shoulders in a grassy field.\" width=\"1100\" height=\"865\" loading=\"lazy\"><figcaption>Ayoba Studio \u00b7 Sophie</figcaption></figure><div class=\"founder-copy\"><p class=\"eyebrow\">04 / About</p><h2 id=\"about-title\">dance as <em>art.</em></h2><p>I\u2019m Sophie, a certified Somatic Movement &amp; Ecstatic Dance Facilitator and recording artist.</p><p>Dance, music, art, and nature are part of my practice. Ayoba is a space to explore movement together, with room for curiosity and whatever you bring.</p><a class=\"textlink\" href=\"/about/\">More about Sophie <span aria-hidden=\"true\">\u2197</span></a></div></div></section>"));
    if (!main.querySelector('#book')) main.append(fragment("<section class=\"booking-section section shell\" id=\"book\" aria-labelledby=\"book-title\">\n  <div class=\"booking-heading\"><p class=\"eyebrow\">06 / Book</p><h2 id=\"book-title\">Start with a conversation.</h2><p>Meet Sophie for a free intro call, or ask about a private session.</p></div>\n  <div class=\"booking-options\">\n    <article class=\"booking-option\"><div class=\"booking-service\"><h3>Intro consultation</h3><p>20 minutes \u00b7 Monday\u2013Friday, noon\u20133 p.m.</p></div><div class=\"booking-price\"><strong>Free</strong><span>Online</span></div><a class=\"textlink\" href=\"/contact/#intro-call\">Request a call <span aria-hidden=\"true\">\u2197</span></a></article>\n    <article class=\"booking-option\"><div class=\"booking-service\"><h3>First private session</h3><p>45 minutes \u00b7 Monday\u2013Friday, 10 a.m.\u20136 p.m.</p></div><div class=\"booking-price\"><strong>$45</strong><span>Introductory session</span></div><a class=\"textlink\" href=\"/contact/?topic=private\">Request a first session <span aria-hidden=\"true\">\u2197</span></a></article>\n    <article class=\"booking-option\"><div class=\"booking-service\"><h3>Private session</h3><p>45 minutes \u00b7 Monday\u2013Friday, 10 a.m.\u20136 p.m.</p></div><div class=\"booking-price\"><strong>$65</strong><span>Returning movers</span></div><a class=\"textlink\" href=\"/contact/?topic=private\">Request a session <span aria-hidden=\"true\">\u2197</span></a></article>\n  </div>\n  <div class=\"booking-note\"><p>All hours are Pacific time. Send your preferred time to Sophie; an inquiry does not reserve a session. Paid sessions are confirmed after payment is verified.</p><a class=\"textlink\" href=\"/faq/\">Questions &amp; answers <span aria-hidden=\"true\">\u2197</span></a></div>\n</section>"));
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

    /* The supplied artwork stays intact. Motion is entirely in the presentation layer. */
(() => {
  if (document.body.dataset.backgroundReady) return;
  document.body.dataset.backgroundReady = 'true';
  document.body.classList.add('ayoba-tropical');
  const backdrop = document.createElement('div');
  backdrop.id = 'ayoba-background';
  backdrop.className = 'tropical-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  const plane = document.createElement('div');
  plane.className = 'tropical-plane';
  plane.dataset.artPlane = '';
  plane.dataset.artDepth = '0.35';
  const image = document.createElement('img');
  image.className = 'tropical-image';
  image.src = 'https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-tropical-background.8bc2f47e0385.jpg';
  image.alt = '';
  image.width = 1800;
  image.height = 1800;
  plane.append(image); backdrop.append(plane); document.body.prepend(backdrop);

  const control = document.createElement('button');
  control.type = 'button';
  control.className = 'background-control';
  control.dataset.backgroundToggle = '';
  control.innerHTML = '<span data-background-icon aria-hidden="true">Ⅱ</span><span data-background-label>Pause motion</span>';
  document.body.append(control);
  const controls = Array.from(document.querySelectorAll('[data-background-toggle]'));
  const planes = Array.from(document.querySelectorAll('[data-art-plane]'));
  const hero = document.querySelector('[data-art-hero]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  let saved;
  try { saved = sessionStorage.getItem('ayoba-background-motion'); } catch {/* Storage is optional. */}
  let wantsMotion = saved !== 'paused' && !reduced.matches && !navigator.connection?.saveData;
  let frame = 0;
  let x = 0, y = 0;
  function update() {
    document.body.dataset.motion = wantsMotion && !document.hidden ? 'running' : 'paused';
    controls.forEach(button => {
      button.setAttribute('aria-pressed', String(wantsMotion));
      button.setAttribute('aria-label', wantsMotion ? 'Pause all motion' : 'Play all motion');
      button.querySelector('[data-background-label]').textContent = wantsMotion ? 'Pause motion' : 'Play motion';
      button.querySelector('[data-background-icon]').textContent = wantsMotion ? 'Ⅱ' : '▷';
    });
    if (!wantsMotion && frame) { cancelAnimationFrame(frame); frame = 0; }
  }
  controls.forEach(button => button.addEventListener('click', () => {
    wantsMotion = !wantsMotion;
    try { sessionStorage.setItem('ayoba-background-motion', wantsMotion ? 'running' : 'paused'); } catch {/* Keep the control usable without storage. */}
    update();
  }));
  function moveArtwork() {
    frame = 0;
    if (!wantsMotion || document.hidden) return;
    planes.forEach(element => {
      const depth = Number(element.dataset.artDepth || 1);
      element.style.setProperty('--pointer-x', (x * 12 * depth).toFixed(2) + 'px');
      element.style.setProperty('--pointer-y', (y * 9 * depth).toFixed(2) + 'px');
    });
  }
  window.addEventListener('pointermove', event => {
    if (!finePointer.matches || !wantsMotion || document.hidden) return;
    x = (event.clientX / innerWidth - 0.5) * 2;
    y = (event.clientY / innerHeight - 0.5) * 2;
    if (!frame) frame = requestAnimationFrame(moveArtwork);
  }, {passive:true});
  document.addEventListener('visibilitychange', update);
  reduced.addEventListener('change', () => {
    if (reduced.matches) { wantsMotion = false; update(); }
  });
  // The hero has its own control; the compact control takes over farther down.
  document.body.dataset.heroInView = hero ? 'true' : 'false';
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      document.body.dataset.heroInView = String(entries[0].isIntersecting);
    }, {threshold:0}).observe(hero);
  } else if (hero) {
    document.body.dataset.heroInView = 'false';
  }
  update();
})();

    /* Ten independent cutouts. Scroll changes each flight path and dance rhythm. */
(() => {
  if (!document.body.classList.contains('ayoba-simple-home') || document.body.dataset.charactersReady) return;
  document.body.dataset.charactersReady = 'true';
  const cast = [
    {name:'sun-dancer', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/sun-dancer.1135b1c57bcb.webp', stage:'hero', x:26, y:20, size:154, phase:0.2, travel:32, dance:'hop', duration:0.78},
    {name:'ghost', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/ghost.f99caff2b64f.webp', stage:'hero', x:78, y:43, size:137, phase:2.4, travel:38, dance:'sway', duration:1.05},
    {name:'moon-wizard', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/moon-wizard.806bd85a1690.webp', stage:'hero', x:43, y:80, size:164, phase:4.3, travel:26, dance:'sway', duration:1.3},
    {name:'snail', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/snail.64518c9eb383.webp', stage:'practice', x:27, y:53, size:153, phase:0.8, travel:51, dance:'step', duration:0.9},
    {name:'crow-key', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/crow-key.8090664d3b76.webp', stage:'practice', x:73, y:48, size:146, phase:3.2, travel:62, dance:'flutter', duration:0.72},
    {name:'walking-eye', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/walking-eye.72f2683a8e69.webp', stage:'sessions', x:76, y:50, size:118, phase:1.3, travel:85, dance:'step', duration:0.56},
    {name:'mandrake', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/mandrake.83d83e15935a.webp', stage:'play', x:28, y:53, size:143, phase:0.5, travel:43, dance:'hop', duration:0.62},
    {name:'trumpet-lion', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/trumpet-lion.b9675b082ebf.webp', stage:'play', x:72, y:51, size:162, phase:2.6, travel:49, dance:'step', duration:0.84},
    {name:'mermaid', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/mermaid.fd667eb36832.webp', stage:'about', x:61, y:50, size:173, phase:1.9, travel:48, dance:'sway', duration:1.12},
    {name:'candle-devil', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/characters/candle-devil.8524e7667016.webp', stage:'film', x:23, y:50, size:159, phase:3.7, travel:58, dance:'hop', duration:0.68},
  ];
  const mounts = {
    hero:document.querySelector('[data-art-hero]'),
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

    // The supplied pendants act as quiet section markers, separate from the dancing cast.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  const routes = ['/', '/about', '/private-sessions', '/group-journeys', '/contact', '/faq', '/participant-agreement', '/cancellation-refund-policy', '/privacy-policy'];
  if (!routes.includes(route) || document.body.dataset.pendantsReady) return;
  document.body.dataset.pendantsReady = 'true';

  // Literal asset paths let the publication script map each image to immutable media.
  const motifs = {
    cross: {name:'spoke-cross', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/motifs/spoke-cross.704cbff7f6ec.webp'},
    disc: {name:'horned-disc', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/motifs/horned-disc.7f12b127e9f3.webp'},
    arrow: {name:'crescent-arrow', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/motifs/crescent-arrow.1ffcf43e4a85.webp'},
    sun: {name:'wavy-sun', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/motifs/wavy-sun.de251f4c4c59.webp'},
    wheel: {name:'spoked-wheel', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/motifs/spoked-wheel.201436210b1f.webp'},
    tassel: {name:'radiant-tassel', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/motifs/radiant-tassel.6883855829ae.webp'},
    curls: {name:'curled-sun', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/motifs/curled-sun.6cc4b3d9bd18.webp'},
    sunCross: {name:'sun-cross', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/motifs/sun-cross.8001f8ea9d77.webp'},
    star: {name:'crescent-star', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/motifs/crescent-star.b2ca88a87b90.webp'},
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

    // A silent edit of Sophie's public video journal, scoped to About.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/about'].includes(route) || document.body.dataset.aboutMontageReady) return;
  const section = route === '/' ? document.querySelector('#about') : document.querySelector('main.page');
  if (!section) return;
  document.body.dataset.aboutMontageReady = 'true';
  const fullPage = route === '/about';
  if (fullPage) document.body.classList.add('about-montage-page');
  else section.classList.add('about-montage-section');

  const backdrop = document.createElement('div');
  backdrop.className = 'about-film-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  const poster = document.createElement('img');
  poster.src = matchMedia('(max-width:700px)').matches
    ? 'https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-about-montage-mobile-poster.2a1dfe68af1c.jpg'
    : 'https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-about-montage-poster.639b6355a5ce.jpg';
  poster.alt = '';
  poster.width = 1280;
  poster.height = 720;
  poster.loading = fullPage ? 'eager' : 'lazy';
  poster.decoding = 'async';
  const video = document.createElement('video');
  video.dataset.aboutMontage = '';
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'none';
  video.tabIndex = -1;
  video.disablePictureInPicture = true;
  video.disableRemotePlayback = true;
  backdrop.append(poster, video);
  if (fullPage) document.body.prepend(backdrop);
  else section.prepend(backdrop);

  const credit = document.createElement('a');
  credit.className = 'about-film-credit';
  credit.href = 'https://www.youtube.com/@sophiesky999';
  credit.target = '_blank';
  credit.rel = 'noopener noreferrer';
  credit.innerHTML = 'From Sophie’s video journal <span aria-hidden="true">↗</span>';
  const heading = section.querySelector(fullPage ? 'h1' : '.founder-copy h2');
  heading?.insertAdjacentElement('afterend', credit);

  let visible = fullPage;
  let pending = false;
  let resumeQueued = false;
  const shouldPlay = () => visible && !document.hidden && document.body.dataset.motion === 'running';
  function sync() {
    if (!shouldPlay()) { resumeQueued = false; video.pause(); return; }
    // Reduced motion, save-data, and the shared Pause button prevent video loading.
    if (!video.getAttribute('src')) {
      video.src = matchMedia('(max-width:700px)').matches
        ? 'https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-about-montage-mobile.58561b3862f5.mp4'
        : 'https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-about-montage.22a8303b4ffd.mp4';
    }
    if (pending) { resumeQueued = true; return; }
    if (!video.paused) return;
    pending = true;
    resumeQueued = false;
    const attempt = video.play();
    if (attempt?.then) {
      let failure = null;
      attempt.catch(error => {
        failure = error;
        if (error.name !== 'AbortError') backdrop.dataset.playback = 'poster';
      }).finally(() => {
        pending = false;
        const retry = resumeQueued && (!failure || failure.name === 'AbortError');
        resumeQueued = false;
        if (!shouldPlay()) video.pause();
        else if (retry) sync();
      });
    } else pending = false;
  }
  video.addEventListener('playing', () => {
    backdrop.dataset.filmReady = 'true';
    backdrop.dataset.playback = 'playing';
    if (!shouldPlay()) video.pause();
  });
  video.addEventListener('pause', () => { backdrop.dataset.playback = 'paused'; });
  video.addEventListener('error', () => {
    backdrop.dataset.filmReady = 'false';
    backdrop.dataset.playback = 'poster';
  });
  new MutationObserver(sync).observe(document.body, {attributes:true, attributeFilter:['data-motion']});
  document.addEventListener('visibilitychange', sync);
  if (!fullPage && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      sync();
    }, {rootMargin:'120px'}).observe(section);
  } else {
    visible = true;
  }
  sync();
})();

  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once:true});
  else apply();
})();
