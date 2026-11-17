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
    style('ayoba-section-design','section-navigation.css',"/* A quieter, section-led Ayoba. Keep the film, photographs and play in focus. */\nhtml:has(body.ayoba-simple){scroll-padding-top:0}\nbody.ayoba-simple{--paper:#f5f3eb;--line:#55583a38;background:var(--paper)}\nbody.ayoba-simple .shell{width:min(1180px,calc(100% - 96px))}\nbody.ayoba-simple [data-section-header]{position:sticky;top:0;z-index:60;background:var(--paper);border-bottom:0}\nbody.ayoba-simple .nav{height:68px;gap:24px}\nbody.ayoba-simple .nav .wordmark{font-size:40px;letter-spacing:-3px;color:var(--olive)}\nbody.ayoba-simple .nav .wordmark small{font-size:8px;letter-spacing:1.2px;margin-left:10px}\nbody.ayoba-simple .menu-button{display:none}\nbody.ayoba-simple .navlinks{position:static;display:flex;flex-direction:row;align-items:center;gap:28px;padding:0;margin:0;border:0;background:transparent;min-width:0}\nbody.ayoba-simple .navlinks>a{flex:none;font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:1.15px;white-space:nowrap;min-height:44px;display:inline-flex;align-items:center;justify-content:center}\nbody.ayoba-simple .navlinks>a:not(.button){padding:11px 0}\nbody.ayoba-simple .navlinks>a:not(.button):after{bottom:6px;background:var(--olive)}\nbody.ayoba-simple .navlinks>a[aria-current=location]:after{right:0}\nbody.ayoba-simple .navlinks>.button{padding:10px 17px;margin:0;min-height:40px;border-radius:0;font-size:10px;letter-spacing:1.15px;gap:12px}\nbody.ayoba-simple .navlinks>.button[aria-current=location]{background:var(--ink);outline:1px solid var(--olive);outline-offset:3px}\nbody.ayoba-simple .button:hover{transform:none}\nbody.ayoba-simple .button{border-radius:0}\nbody.ayoba-simple-home main>section[id]{scroll-margin-top:calc(var(--section-header-height,78px) + 22px)}\nbody.ayoba-simple-home main>#home{scroll-margin-top:var(--section-header-height,78px)}\nbody.ayoba-simple-home .eyebrow{font-size:10px;letter-spacing:1.7px;margin-bottom:23px}\nbody.ayoba-simple-home .section,body.ayoba-simple-home .studio-film{padding-block:52px}\nbody.ayoba-simple-home .section h2,body.ayoba-simple-home .studio-film h2{font:600 clamp(42px,4.6vw,64px)/1.07 Bricolage,Arial,sans-serif;letter-spacing:-2.7px;margin:0 0 18px}\nbody.ayoba-simple-home .section-heading{display:block;margin-bottom:24px}\nbody.ayoba-simple-home .section-heading>.eyebrow{padding:0;margin:0 0 22px}\nbody.ayoba-simple-home .section-heading>h2{margin:0}\nbody.ayoba-simple-home .section-heading>p:last-child:not(.eyebrow){display:block;justify-self:start;font-size:14px;max-width:440px;margin:14px 0 0;line-height:1.8}\nbody.ayoba-simple-home .hero-canvas.video-hero{min-height:clamp(500px,calc(82svh - 68px),620px)}\nbody.ayoba-simple-home .video-hero-content{padding-block:20px 16px}\nbody.ayoba-simple-home .video-hero-top{font-size:9px;letter-spacing:1.4px}\nbody.ayoba-simple-home .video-hero h1{font-size:clamp(80px,8.5vw,122px);letter-spacing:-.06em}\nbody.ayoba-simple-home .video-hero h1 em{margin-left:.16em}\nbody.ayoba-simple-home .video-hero-main{padding-block:28px 32px}\nbody.ayoba-simple-home .video-hero-main>p{font-size:14px;line-height:1.75;margin-bottom:20px}\nbody.ayoba-simple-home .video-hero-actions .button{font-size:12px;padding:15px 22px}\nbody.ayoba-simple-home .video-hero-bottom{font-size:9px;padding-top:8px;border-top:0}\nbody.ayoba-simple-home .movement-manifesto{background:transparent;border:0;padding-block:100px 88px}\nbody.ayoba-simple-home .movement-manifesto:before{content:none}\nbody.ayoba-simple-home .movement-manifesto h2{font-size:clamp(34px,4.2vw,57px);font-weight:600;letter-spacing:-1.8px;line-height:1.19;max-width:1080px;margin-bottom:45px;text-wrap:pretty}\nbody.ayoba-simple-home .movement-manifesto h2 em{font-size:1.15em;line-height:1;transform:none;padding:0;color:var(--olive)}\nbody.ayoba-simple-home .intention-layout{display:block}\nbody.ayoba-simple-home .intention-copy{max-width:none;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px 36px}\nbody.ayoba-simple-home .intention-copy p{font-size:14px;line-height:1.85;margin:0}\nbody.ayoba-simple-home .intention-copy .textlink{grid-column:1/-1;justify-self:start;margin-top:0}\nbody.ayoba-simple-home .ways{border-top:1px solid var(--line)}\nbody.ayoba-simple-home .simple-session-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}\nbody.ayoba-simple-home .journey{display:flex;flex-direction:column;background:transparent;min-height:0;margin:0}\nbody.ayoba-simple-home .journey-photo{min-height:0;height:auto;aspect-ratio:4/3;overflow:hidden}\nbody.ayoba-simple-home .journey-photo img{width:100%;height:100%;object-fit:cover;object-position:center 43%}\nbody.ayoba-simple-home .private-photo img{object-position:center 58%}\nbody.ayoba-simple-home .journey-copy{padding:18px 0 0;flex:1}\nbody.ayoba-simple-home .journey-copy .index{font-size:9px;letter-spacing:1.5px;margin:0 0 12px}\nbody.ayoba-simple-home .journey h3{font:600 clamp(29px,3vw,34px)/1.12 Bricolage,Arial,sans-serif;letter-spacing:-1.4px;margin:0 0 12px}\nbody.ayoba-simple-home .journey-copy>p{font-size:14px;line-height:1.8;max-width:460px;margin-bottom:12px}\nbody.ayoba-simple-home .journey-copy .journey-detail{font-size:10px;line-height:1.8;letter-spacing:.7px;margin:0 0 14px}\nbody.ayoba-simple-home .journey-link{font-size:12px;font-weight:500;border-top:0;padding-top:6px}\nbody.ayoba-simple-home .playground{background:transparent;color:var(--ink);padding-block:0}\nbody.ayoba-simple-home .playground>.shell{border-block:1px solid var(--line);padding-block:88px}\nbody.ayoba-simple-home .simple-play-grid{display:grid;grid-template-columns:1fr 1fr;gap:65px;align-items:start}\nbody.ayoba-simple-home .play-controls{padding:0}\nbody.ayoba-simple-home .play-intro{color:var(--ink);font-size:14px;max-width:440px}\nbody.ayoba-simple-home .mood-buttons{gap:10px}\nbody.ayoba-simple-home .mood-buttons button{border:1px solid #55583a80;color:var(--olive);border-radius:0;padding:14px 17px;min-height:50px;font-size:13px;background:transparent}\nbody.ayoba-simple-home .mood-buttons button:hover,body.ayoba-simple-home .mood-buttons button[aria-pressed=true]{color:var(--paper);background:var(--olive)}\nbody.ayoba-simple-home .mood-buttons button:focus-visible{outline-color:var(--berry)}\nbody.ayoba-simple-home .mood-answer{padding:27px 0 15px;min-height:156px}\nbody.ayoba-simple-home .mood-answer p{font:400 25px/1.4 Instrument,Georgia,serif;max-width:460px}\nbody.ayoba-simple-home .play-controls>.tiny{font-size:10px;opacity:1;color:#666955;display:block;max-width:430px}\nbody.ayoba-simple-home .movement-study{transform:none;background:#eeece2;color:var(--olive);padding:19px 22px 16px;margin:0;border:1px solid var(--line)}\nbody.ayoba-simple-home .study-heading .eyebrow{font-size:9px;margin:0}\nbody.ayoba-simple-home .study-footer{gap:12px;padding-top:12px}\nbody.ayoba-simple-home .study-footer p{font-size:10px}\nbody.ayoba-simple-home .study-footer button{font-size:11px;min-height:40px}\nbody.ayoba-simple-home .founder{background:transparent}\nbody.ayoba-simple-home .founder-grid{gap:40px;grid-template-columns:1fr 1fr;align-items:center}\nbody.ayoba-simple-home .founder-photo img{aspect-ratio:1.08;object-fit:cover}\nbody.ayoba-simple-home .founder-photo figcaption{font:11px/1.6 DM,Arial,sans-serif;letter-spacing:.4px;padding:13px 0 0}\nbody.ayoba-simple-home .founder-copy p{font-size:14px;line-height:1.85}\nbody.ayoba-simple-home .founder-copy .eyebrow{font-size:10px;line-height:1.6}\nbody.ayoba-simple-home .founder-copy .textlink{margin-top:6px}\nbody.ayoba-simple-home .studio-film{border-block:1px solid var(--line)}\nbody.ayoba-simple-home .studio-film-heading{align-items:end;margin-bottom:34px;gap:40px}\nbody.ayoba-simple-home .studio-film-heading h2{margin:0}\nbody.ayoba-simple-home .studio-film-heading>p{font-size:13px;line-height:1.8}\nbody.ayoba-simple-home .studio-film-caption{font-size:9px;letter-spacing:1px;padding-top:17px}\nbody.ayoba-simple-home .booking-heading{display:grid;grid-template-columns:1fr 1fr;gap:0 36px;align-items:start;margin-bottom:24px}\nbody.ayoba-simple-home .booking-heading>.eyebrow{grid-column:1/-1}\nbody.ayoba-simple-home .booking-heading h2{margin:0}\nbody.ayoba-simple-home .booking-heading>p:not(.eyebrow){font-size:14px;line-height:1.85;max-width:430px;margin:0}\nbody.ayoba-simple-home .booking-options{border-top:0}\nbody.ayoba-simple-home .booking-option{display:grid;grid-template-columns:minmax(0,1fr) 130px 190px;gap:24px;align-items:center;padding:18px 0;border-bottom:1px solid #55583a20}\nbody.ayoba-simple-home .booking-service h3{font:600 23px/1.25 Bricolage,Arial,sans-serif;letter-spacing:-.6px;margin:0 0 6px}\nbody.ayoba-simple-home .booking-service p{font-size:12px;line-height:1.8;margin:0}\nbody.ayoba-simple-home .booking-price strong{display:block;font:400 32px/1.15 Instrument,Georgia,serif}\nbody.ayoba-simple-home .booking-price span{display:block;font-size:11px;margin-top:4px}\nbody.ayoba-simple-home .booking-option .textlink{font-size:12px;justify-self:end;gap:16px;white-space:nowrap}\nbody.ayoba-simple-home .booking-note{font-size:12px;line-height:1.85;max-width:740px;margin:16px 0 0;color:#595e49}\nbody.ayoba-simple-home .booking-note a{text-decoration:underline;text-underline-offset:3px}\nbody.ayoba-simple .footer{background:var(--paper);color:var(--ink);border-top:0;padding:32px 0 20px}\nbody.ayoba-simple .footer-top{grid-template-columns:1.5fr 1fr 1fr;gap:32px;padding-bottom:24px}\nbody.ayoba-simple .footer .wordmark{font-size:58px;letter-spacing:-4px;color:var(--olive);margin-bottom:20px}\nbody.ayoba-simple .footer .wordmark small{font-size:8px;letter-spacing:1.1px;margin-left:12px}\nbody.ayoba-simple .footer p{font-size:11px;color:#595e49}\nbody.ayoba-simple .footer-links{font-size:11px;gap:8px}\nbody.ayoba-simple .footer-links h4{font-size:9px;color:var(--olive);letter-spacing:1.2px;margin:5px 0 10px}\nbody.ayoba-simple .footer-bottom{border-top:0;padding-top:12px;color:#595e49;font-size:9px}\nbody.ayoba-simple .media-credit{color:#595e49;font-size:9px}\n@media(max-width:1000px){\n  body.ayoba-simple .shell{width:calc(100% - 56px)}\n  body.ayoba-simple .navlinks{gap:19px}\n  body.ayoba-simple .navlinks>a{font-size:9px;letter-spacing:.85px}\n  body.ayoba-simple-home .simple-session-grid{gap:24px}\n  body.ayoba-simple-home .simple-play-grid{gap:35px}\n  body.ayoba-simple-home .founder-grid{gap:30px}\n  body.ayoba-simple-home .intention-copy{gap:26px}\n  body.ayoba-simple-home .booking-option{grid-template-columns:minmax(0,1fr) 100px 170px;gap:20px}\n}\n@media(max-width:700px){\n  body.ayoba-simple .shell{width:calc(100% - 40px)}\n  body.ayoba-simple .nav{height:auto;min-height:96px;display:flex;flex-wrap:wrap;align-content:center;gap:4px;padding-top:10px;padding-bottom:0}\n  body.ayoba-simple .nav>a{display:block}\n  body.ayoba-simple .nav .wordmark{font-size:34px;letter-spacing:-2.5px}\n  body.ayoba-simple .nav .wordmark small{font-size:7px}\n  body.ayoba-simple .navlinks{display:flex;width:100%;flex:0 1 100%;gap:16px;overflow-x:auto;overscroll-behavior-x:contain;padding:0 2px 5px;margin:0;scrollbar-width:thin;border:0;scroll-padding-inline:10px}\n  body.ayoba-simple .navlinks>a{min-height:40px;font-size:9px;letter-spacing:.7px}\n  body.ayoba-simple .navlinks>.button{font-size:9px;min-height:32px;align-self:center;padding:5px 12px;letter-spacing:.7px}\n  body.ayoba-simple .navlinks>a:not(.button):after{bottom:5px}\n  body.ayoba-simple-home main>section[id]{scroll-margin-top:calc(var(--section-header-height,108px) + 24px)}\n  body.ayoba-simple-home main>#home{scroll-margin-top:var(--section-header-height,108px)}\n  body.ayoba-simple-home .section,body.ayoba-simple-home .studio-film{padding-block:36px}\n  body.ayoba-simple-home .eyebrow{font-size:9px;letter-spacing:1.3px;margin-bottom:19px}\n  body.ayoba-simple-home .section h2,body.ayoba-simple-home .studio-film h2{font-size:43px;letter-spacing:-1.8px;line-height:1.08}\n  body.ayoba-simple-home .section-heading{margin-bottom:20px}\n  body.ayoba-simple-home .section-heading>.eyebrow{margin-bottom:18px}\n  body.ayoba-simple-home .section-heading>p:last-child:not(.eyebrow){font-size:13px;margin-top:16px}\n  body.ayoba-simple-home .hero-canvas.video-hero{min-height:480px}\n  body.ayoba-simple-home .video-hero-content{padding-block:16px 14px}\n  body.ayoba-simple-home .video-hero h1{font-size:clamp(64px,15.5vw,91px);letter-spacing:-.055em;margin-bottom:18px}\n  body.ayoba-simple-home .video-hero h1 em{margin-left:.08em}\n  body.ayoba-simple-home .video-hero-main{justify-content:center;padding-block:22px 24px}\n  body.ayoba-simple-home .video-hero-main>p{font-size:12px;line-height:1.8;max-width:260px;margin-bottom:18px}\n  body.ayoba-simple-home .video-hero-top,body.ayoba-simple-home .video-hero-top span{font-size:7px;letter-spacing:.9px}\n  body.ayoba-simple-home .video-hero-actions .button{font-size:11px;padding:13px 18px}\n  body.ayoba-simple-home .video-hero-bottom{font-size:8px;letter-spacing:.65px}\n  body.ayoba-simple-home .movement-manifesto{padding-block:60px}\n  body.ayoba-simple-home .movement-manifesto h2{font-size:33px;line-height:1.22;letter-spacing:-1px;margin-bottom:30px}\n  body.ayoba-simple-home .intention-copy{grid-template-columns:1fr;gap:20px;max-width:520px}\n  body.ayoba-simple-home .intention-copy p{font-size:14px;line-height:1.8}\n  body.ayoba-simple-home .simple-session-grid{grid-template-columns:1fr;gap:28px}\n  body.ayoba-simple-home .journey-copy{padding-top:16px}\n  body.ayoba-simple-home .journey h3{font-size:31px;letter-spacing:-1px;margin-bottom:10px}\n  body.ayoba-simple-home .journey-copy>p{font-size:14px}\n  body.ayoba-simple-home .journey-copy .journey-detail{font-size:10px;margin-bottom:12px}\n  body.ayoba-simple-home .playground{padding-block:0}\n  body.ayoba-simple-home .playground>.shell{padding-block:58px}\n  body.ayoba-simple-home .simple-play-grid{grid-template-columns:1fr;gap:34px}\n  body.ayoba-simple-home .mood-buttons button{font-size:13px;min-height:50px}\n  body.ayoba-simple-home .mood-answer{min-height:135px;padding-top:23px}\n  body.ayoba-simple-home .movement-study{padding:17px 18px 13px}\n  body.ayoba-simple-home .study-footer>div{gap:18px}\n  body.ayoba-simple-home .founder-grid{grid-template-columns:1fr;gap:22px}\n  body.ayoba-simple-home .founder-copy p{font-size:14px}\n  body.ayoba-simple-home .founder-copy .eyebrow{font-size:9px}\n  body.ayoba-simple-home .studio-film-heading{display:block;margin-bottom:25px}\n  body.ayoba-simple-home .studio-film-heading h2{margin-bottom:20px}\n  body.ayoba-simple-home .studio-film-heading>p{font-size:12px}\n  body.ayoba-simple-home .studio-film-caption{font-size:8px;letter-spacing:.5px;gap:15px}\n  body.ayoba-simple-home .booking-heading{display:block;margin-bottom:20px}\n  body.ayoba-simple-home .booking-heading h2{margin-bottom:14px}\n  body.ayoba-simple-home .booking-heading>p:not(.eyebrow){font-size:13px}\n  body.ayoba-simple-home .booking-option{grid-template-columns:minmax(0,1fr) auto;gap:12px;padding-block:18px}\n  body.ayoba-simple-home .booking-service h3{font-size:22px;letter-spacing:-.5px}\n  body.ayoba-simple-home .booking-service p{font-size:11px}\n  body.ayoba-simple-home .booking-price{text-align:right}\n  body.ayoba-simple-home .booking-price strong{font-size:30px}\n  body.ayoba-simple-home .booking-price span{font-size:10px}\n  body.ayoba-simple-home .booking-option .textlink{grid-column:1/-1;justify-self:start;font-size:12px}\n  body.ayoba-simple-home .booking-note{font-size:11px;margin-top:14px}\n  body.ayoba-simple .footer{padding-top:26px}\n  body.ayoba-simple .footer-top{grid-template-columns:1fr 1fr;gap:20px;padding-bottom:20px}\n  body.ayoba-simple .footer-brand{grid-column:1/-1}\n  body.ayoba-simple .footer .wordmark{font-size:50px;letter-spacing:-3px;margin-bottom:15px}\n  body.ayoba-simple .footer-links{font-size:10px}\n  body.ayoba-simple .footer-links h4{font-size:8px}\n  body.ayoba-simple .footer-bottom{flex-direction:column;gap:7px;font-size:8px}\n  body.ayoba-simple .media-credit{font-size:8px}\n}\n@media(prefers-reduced-motion:reduce){html:has(body.ayoba-simple){scroll-behavior:auto}}\n\nbody.ayoba-simple main:not([data-section-layout]) [id]{scroll-margin-top:calc(var(--section-header-height,78px) + 24px)}\n\n/* One light, lowercase voice across the public pages. These typography-only\n   overrides also cover legacy component styles loaded after this stylesheet. */\nbody.ayoba-simple,\nbody.ayoba-simple :where(*),\nbody.ayoba-simple :where(*)::before,\nbody.ayoba-simple :where(*)::after{\n  font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif!important;\n  font-weight:300!important;\n  font-style:normal!important;\n  text-transform:lowercase!important;\n}\n/* Preserve exactly how a visitor types their name, email, or message. */\nbody.ayoba-simple :where(input:not([type=button]):not([type=submit]):not([type=reset]),textarea,[contenteditable=true],[contenteditable=true] *){\n  text-transform:none!important;\n}\nbody.ayoba-simple .contact-layout>*,\nbody.ayoba-simple .form-row>*{min-width:0}\nbody.ayoba-simple .contact-email{overflow-wrap:anywhere}\nbody.ayoba-simple .navlinks>a,\nbody.ayoba-simple .navlinks>.button{font-size:12px;letter-spacing:.15px}\nbody.ayoba-simple :is(.eyebrow,.index,.footer-links h4){letter-spacing:.7px}\nbody.ayoba-simple .nav .wordmark,\nbody.ayoba-simple .footer .wordmark{letter-spacing:-.045em}\nbody.ayoba-simple-home .video-hero h1{letter-spacing:-.045em;line-height:1;margin-bottom:20px}\nbody.ayoba-simple-home .video-hero h1 em{margin-left:0;font-size:1em;letter-spacing:inherit;line-height:inherit}\nbody.ayoba-simple-home .movement-manifesto h2 em{font-size:1em}\n@media(max-width:700px){\n  body.ayoba-simple .navlinks>a,\n  body.ayoba-simple .navlinks>.button{font-size:11px;letter-spacing:0}\n}\n\n/* Sessions and the practice share one compact, continuous box. */\nbody.ayoba-simple-home .ways{\n  border:1px solid var(--line);\n  background:#f8f4e5b3;\n  padding:32px;\n  margin-block:36px 12px;\n}\nbody.ayoba-simple-home .ways .movement-manifesto{\n  border-top:0;\n  margin-top:28px;\n  padding:0;\n  scroll-margin-top:calc(var(--section-header-height,78px) + 24px);\n}\nbody.ayoba-simple-home .ways .movement-manifesto:before{content:none}\nbody.ayoba-simple-home .ways .manifesto-layout{width:auto;margin:0}\nbody.ayoba-simple-home .ways .movement-manifesto h2{font-size:clamp(28px,3.3vw,42px);line-height:1.22;margin-bottom:24px}\nbody.ayoba-simple-home .ways .intention-copy{gap:16px 24px}\nbody.ayoba-simple-home .ways .journey-photo{aspect-ratio:16/9}\nbody.ayoba-simple-home .ways .journey-photo.group-video video{\n  display:block;\n  width:100%;\n  height:100%;\n  object-fit:contain;\n  background:var(--ink);\n}\nbody.ayoba-simple .session-photo.group-video video{\n  display:block;\n  width:100%;\n  height:auto;\n  aspect-ratio:16/9;\n  object-fit:contain;\n  background:var(--ink);\n}\nbody.ayoba-simple .session-photo.group-video figcaption{font-size:12px;line-height:1.7;padding-top:12px}\n\n/* Keep both words of the current name together at every viewport size. */\nbody.ayoba-simple .wordmark{white-space:nowrap}\nbody.ayoba-simple .nav .wordmark small,\nbody.ayoba-simple .footer .wordmark small{\n  font-size:inherit;\n  letter-spacing:inherit;\n  line-height:inherit;\n  writing-mode:horizontal-tb;\n  max-width:none;\n  margin-left:.22em;\n  align-self:auto;\n}\nbody.ayoba-simple .footer .wordmark{font-size:clamp(38px,5vw,58px)}\n@media(max-width:1000px){\n  body.ayoba-simple-home .ways{padding:28px}\n}\n@media(max-width:900px){\n  body.ayoba-simple-home .ways .intention-copy{grid-template-columns:1fr;max-width:680px}\n}\n@media(max-width:700px){\n  body.ayoba-simple-home .ways{padding:22px;margin-block:24px 8px}\n  body.ayoba-simple-home .ways .movement-manifesto{margin-top:20px;padding-top:0;scroll-margin-top:calc(var(--section-header-height,108px) + 24px)}\n  body.ayoba-simple-home .ways .movement-manifesto h2{font-size:28px;line-height:1.25;letter-spacing:-.9px;margin-bottom:20px}\n  body.ayoba-simple-home .ways .intention-copy{gap:16px}\n}\n@media(max-width:360px){\n  body.ayoba-simple-home .ways{padding-inline:18px}\n  body.ayoba-simple-home .ways .section-heading h2{font-size:38px}\n  body.ayoba-simple-home .ways .journey h3{font-size:29px}\n  body.ayoba-simple-home .ways .movement-manifesto h2{font-size:27px}\n}\n\n/* Pendants stay as small accents, without decorative rules or empty bands. */\nbody.ayoba-simple main .eyebrow.pendant-caption{min-height:48px;gap:12px;margin-top:0;margin-bottom:12px}\nbody.ayoba-simple main .pendant-caption>.pendant-motif{width:40px;height:48px}\nbody.ayoba-simple .pendant-caption:after,\nbody.ayoba-simple .pendant-divider:after{content:none}\nbody.ayoba-simple .footer .pendant-divider{gap:16px;margin:0 auto 18px}\nbody.ayoba-simple .footer .pendant-divider>.pendant-motif{width:44px;height:56px}\nbody.ayoba-simple-home .founder.about-montage-section .founder-copy{padding:22px;border:0}\nbody.ayoba-simple-home .founder.about-montage-section .pendant-caption{margin-top:0}\n\n/* Match the denser homepage rhythm on the public detail pages. */\nbody.ayoba-simple .page{padding-top:36px;padding-bottom:48px;min-height:0;border-top:0}\nbody.ayoba-simple .page h1{margin-bottom:24px}\nbody.ayoba-simple .page .lede{margin-bottom:28px}\nbody.ayoba-simple .page h2{margin-top:28px;margin-bottom:14px}\nbody.ayoba-simple .content-columns{gap:40px;padding-top:24px;border-top:0}\nbody.ayoba-simple .contact-layout{gap:40px;padding-top:24px;border-top:0}\nbody.ayoba-simple .contact-form{gap:18px}\nbody.ayoba-simple .panel{padding:24px;border-top:0}\nbody.ayoba-simple .panel h2{margin-top:0}\nbody.ayoba-simple .photo-essay{padding-top:36px}\nbody.ayoba-simple .photo-essay-grid{gap:18px}\nbody.ayoba-simple .photo-essay-grid figure:nth-child(2){padding-top:0}\nbody.ayoba-simple.about-montage-page .content-columns>div:first-child{padding:24px;border:0}\nbody.ayoba-simple.about-montage-page .photo-essay{padding:24px;margin-top:32px}\nbody.ayoba-simple .cta{padding-block:40px 44px}\nbody.ayoba-simple .cta h2{font-size:clamp(38px,4.5vw,60px);margin-bottom:16px}\n@media(max-width:700px){\n  body.ayoba-simple main .eyebrow.pendant-caption{min-height:40px;gap:10px;margin-bottom:10px}\n  body.ayoba-simple main .pendant-caption>.pendant-motif{width:34px;height:40px}\n  body.ayoba-simple .footer .pendant-divider{margin-bottom:14px}\n  body.ayoba-simple .footer .pendant-divider>.pendant-motif{width:36px;height:46px}\n  body.ayoba-simple-home .founder.about-montage-section .founder-copy{padding:18px}\n  body.ayoba-simple .page{padding-block:26px 36px}\n  body.ayoba-simple .page .lede{margin-bottom:22px}\n  body.ayoba-simple .content-columns,\n  body.ayoba-simple .contact-layout{gap:26px;padding-top:16px}\n  body.ayoba-simple .panel,\n  body.ayoba-simple.about-montage-page .content-columns>div:first-child{padding:20px}\n  body.ayoba-simple.about-montage-page .photo-essay{padding:20px;margin-top:24px}\n  body.ayoba-simple .cta{padding-block:30px 34px}\n}\n");
    style('ayoba-background-design','dynamic-background.css',"/* Supplied tropical artwork, gently moving behind the existing page content. */\nbody.ayoba-tropical{\n  --paper:#f8f4e5;\n  --ink:#303322;\n  --line:#55583a40;\n  position:relative;\n  isolation:isolate;\n  background:var(--paper);\n}\nbody.ayoba-tropical #ayoba-background{\n  position:fixed;\n  inset:0;\n  z-index:-1;\n  overflow:hidden;\n  pointer-events:none;\n  opacity:.2;\n  contain:paint;\n}\nbody.ayoba-tropical .tropical-plane{\n  position:absolute;\n  inset:-5%;\n  transform:translate3d(var(--pointer-x,0px),var(--pointer-y,0px),0);\n  transition:transform .9s ease-out;\n  pointer-events:none;\n}\nbody.ayoba-tropical .tropical-image{\n  display:block;\n  width:100%;\n  height:100%;\n  max-width:none;\n  object-fit:cover;\n  object-position:center 47%;\n  transform:scale(1.025);\n  animation:ayoba-tropical-drift 24s ease-in-out infinite alternate;\n  animation-play-state:paused;\n}\nbody.ayoba-tropical[data-motion=running] .tropical-image{animation-play-state:running}\nbody.ayoba-tropical[data-motion=paused] .tropical-image{animation-play-state:paused}\nbody.ayoba-tropical[data-motion=paused] .tropical-plane{transition:none}\nbody.ayoba-tropical[data-hero-in-view=false] .art-hero .tropical-image{animation-play-state:paused!important}\nbody.ayoba-tropical [data-section-header]{background:#f8f4e5}\nbody.ayoba-tropical .footer{background:transparent;padding-bottom:24px}\nbody.ayoba-tropical main{background:transparent}\nbody.ayoba-tropical.ayoba-simple-home .movement-study{background:#f8f4e5e8}\nbody.ayoba-tropical .panel{background:#f1efdfec}\nbody.ayoba-tropical .contact-form input,\nbody.ayoba-tropical .contact-form select,\nbody.ayoba-tropical .contact-form textarea{background:#f8f4e580}\nbody.ayoba-tropical .hero-canvas.art-hero{\n  background:#f7edc9;\n  color:var(--ink);\n  isolation:isolate;\n}\nbody.ayoba-tropical .art-hero .hero-art-wrap{\n  position:absolute;\n  inset:0;\n  overflow:hidden;\n  z-index:-3;\n  pointer-events:none;\n}\nbody.ayoba-tropical .art-hero .video-hero-shade{\n  background:linear-gradient(90deg,#fbf5e5f2 0%,#fbf5e5d9 23%,#fbf5e59c 42%,#fbf5e526 65%,#fbf5e500 100%),linear-gradient(0deg,#fbf5e54d,transparent 34%);\n}\nbody.ayoba-tropical .art-hero h1{color:#303322;max-width:760px}\nbody.ayoba-tropical .art-hero h1 em{color:#414a2b}\nbody.ayoba-tropical .art-hero .video-hero-top,\nbody.ayoba-tropical .art-hero .video-hero-top span,\nbody.ayoba-tropical .art-hero .video-hero-main>p,\nbody.ayoba-tropical .art-hero .video-hero-bottom,\nbody.ayoba-tropical .art-hero .video-film-link{color:#303322}\nbody.ayoba-tropical .art-hero .video-hero-main>p{max-width:340px}\nbody.ayoba-tropical .art-hero .video-hero-actions .button{\n  background:var(--olive);\n  border-color:var(--olive);\n  color:#fffbed;\n}\nbody.ayoba-tropical .art-hero .video-hero-actions .button:hover{background:var(--ink);border-color:var(--ink)}\nbody.ayoba-tropical .art-hero .video-film-link{border-color:#55583a70}\nbody.ayoba-tropical .art-hero .video-film-link:hover{color:#596438}\nbody.ayoba-tropical .art-hero .video-hero-bottom{border-color:#55583a4d}\nbody.ayoba-tropical .art-hero a:focus-visible,\nbody.ayoba-tropical .art-hero button:focus-visible{outline-color:#7b3543}\nbody.ayoba-tropical [data-background-toggle]{\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  gap:9px;\n  min-height:40px;\n  border:1px solid #55583a70;\n  border-radius:24px;\n  padding:9px 14px;\n  background:#f8f4e5eb;\n  color:#303322;\n  font:11px/1.3 DM,Arial,sans-serif;\n  letter-spacing:.1px;\n  text-transform:none;\n  cursor:pointer;\n}\nbody.ayoba-tropical [data-background-toggle]:hover{background:#fff9e8;border-color:var(--olive)}\nbody.ayoba-tropical [data-background-toggle]:focus-visible{outline:3px solid #7b3543;outline-offset:4px}\nbody.ayoba-tropical [data-background-icon]{display:inline-block;width:12px;text-align:center;font:14px/1 Arial,sans-serif}\nbody.ayoba-tropical .background-control{\n  position:fixed;\n  right:max(18px,env(safe-area-inset-right));\n  bottom:max(18px,env(safe-area-inset-bottom));\n  z-index:50;\n  box-shadow:0 2px 12px #30332212;\n  font-size:12px;\n  opacity:1;\n  visibility:visible;\n}\nbody.ayoba-tropical[data-hero-in-view=true] .background-control{opacity:0;visibility:hidden;pointer-events:none}\n@keyframes ayoba-tropical-drift{\n  from{transform:scale(1.025) translate3d(-.6%,.3%,0)}\n  to{transform:scale(1.06) translate3d(.6%,-.5%,0)}\n}\n@media(max-width:700px){\n  body.ayoba-tropical #ayoba-background{opacity:.17}\n  body.ayoba-tropical .tropical-image{object-position:60% center}\n  body.ayoba-tropical .art-hero .video-hero-shade{\n    background:linear-gradient(90deg,#fbf5e5dc 0%,#fbf5e5b3 38%,#fbf5e538 100%),linear-gradient(180deg,#fbf5e540 0%,transparent 48%,#fbf5e54d 100%);\n  }\n  body.ayoba-tropical .art-hero .video-hero-main>p{max-width:265px}\n  body.ayoba-tropical .art-hero [data-background-toggle]{font-size:9px;padding:8px 11px;min-height:40px}\n  body.ayoba-tropical .background-control{right:max(12px,env(safe-area-inset-right));bottom:max(12px,env(safe-area-inset-bottom));min-height:40px;font-size:11px;padding:9px 12px}\n}\n@media(prefers-reduced-motion:reduce){\n  body.ayoba-tropical .tropical-plane{transition:none}\n  body.ayoba-tropical:not([data-motion=running]) .tropical-plane{transform:none}\n  body.ayoba-tropical:not([data-motion=running]) .tropical-image{animation:none!important;transform:scale(1.025)}\n  /* Motion starts only when the visitor explicitly opts in through the control. */\n  body.ayoba-tropical[data-motion=running] .tropical-image{animation:ayoba-tropical-drift 24s ease-in-out infinite alternate!important}\n}\n");
    style('ayoba-pendant-design','pendant-motifs.css',"/* Nine individual ink pendants, set in their own space above the section titles. */\n.pendant-motif{display:block;flex:none;width:76px;height:90px;pointer-events:none;user-select:none}\n.pendant-motif img{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;-webkit-user-drag:none;transform-origin:50% 8%;animation:pendant-sway 7s ease-in-out var(--pendant-delay,0s) infinite;animation-play-state:paused}\nbody[data-motion=running] .pendant-motif[data-pendant-visible=true] img{animation-play-state:running}\nbody[data-motion=paused] .pendant-motif img{animation-play-state:paused}\nbody.ayoba-simple .eyebrow.pendant-caption{display:flex;align-items:center;gap:24px;min-height:90px;margin-bottom:24px;max-width:none}\n.pendant-caption:after{content:\"\";height:1px;background:var(--line,#55583a40);flex:1;order:1}\n.pendant-caption>.pendant-motif{order:2}\n.pendant-hero{width:32px;height:48px;margin-inline:16px}\nbody.ayoba-simple .video-hero-top{align-items:center}\n.pendant-divider{display:flex;align-items:center;justify-content:center;gap:32px;margin:-10px auto 42px;pointer-events:none}\n.pendant-divider:after{content:\"\";width:120px;height:1px;order:1;background:var(--line,#55583a40)}\n.pendant-divider>.pendant-motif:last-child{order:2}\n.pendant-divider>.pendant-motif{height:106px;width:84px}\n@keyframes pendant-sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}\n@media(max-width:700px){\n  .pendant-motif{width:60px;height:78px}\n  body.ayoba-simple .eyebrow.pendant-caption{min-height:78px;gap:18px;margin-bottom:22px}\n  .pendant-hero{width:24px;height:38px;margin-inline:8px}\n  .pendant-divider{gap:24px;margin:-6px auto 30px}\n  .pendant-divider:after{width:70px}\n  .pendant-divider>.pendant-motif{width:64px;height:88px}\n}\n@media(max-width:360px){\n  .pendant-hero{width:20px;height:34px;margin-inline:5px}\n}\n@media(prefers-reduced-motion:reduce){\n  body:not([data-motion=running]) .pendant-motif img{animation:none;transform:none}\n  body[data-motion=running] .pendant-motif img{animation:pendant-sway 7s ease-in-out var(--pendant-delay,0s) infinite!important;animation-play-state:paused!important}\n  body[data-motion=running] .pendant-motif[data-pendant-visible=true] img{animation-play-state:running!important}\n}\n");
    if (route === '/' || route === '/about') style('ayoba-about-film-design','about-montage.css',"/* The film is a backdrop; the words always sit over a calm cream wash. */\n.about-film-backdrop{position:absolute;inset:0;z-index:-1;overflow:hidden;pointer-events:none;background:#d7dbbc}\n.about-film-backdrop>img,.about-film-backdrop>video{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;object-position:center}\n.about-film-backdrop>video{opacity:0}\n.about-film-backdrop[data-film-ready=true]>video{opacity:1}\n.about-film-backdrop:after{content:\"\";position:absolute;inset:0;background:linear-gradient(90deg,#f8f4e5b3,#f8f4e5de 60%,#f8f4e5e8)}\nbody.ayoba-simple-home .about-montage-section{position:relative;isolation:isolate;overflow:hidden;background:#d7dbbc}\nbody.ayoba-simple-home .about-montage-section .founder-grid{position:relative}\nbody.ayoba-simple-home .about-montage-section .founder-photo>img{height:auto;aspect-ratio:1.08;object-fit:cover}\nbody.ayoba-simple-home .about-montage-section .founder-copy{background:#f8f4e5c7;padding:30px;border:1px solid #f8f4e5b3}\nbody.ayoba-simple-home .about-montage-section .pendant-caption{margin-top:-12px}\nbody.about-montage-page>#ayoba-background{display:none}\nbody.about-montage-page>.about-film-backdrop{position:fixed}\nbody.about-montage-page>.about-film-backdrop:after{background:linear-gradient(90deg,#f8f4e5c7 0%,#f8f4e5a3 60%,#f8f4e570 100%)}\nbody.about-montage-page .content-columns>div:first-child{background:#f8f4e5ed;padding:30px;border:1px solid #f8f4e5cc}\nbody.about-montage-page .about-photo figcaption{background:#f8f4e5ed;padding:12px 16px}\nbody.about-montage-page .photo-essay{background:#f8f4e5e8;padding:30px;margin-top:65px}\nbody.about-montage-page .footer{background:#f8f4e5e8}\nbody.ayoba-simple .about-film-credit{display:inline-flex;align-items:center;gap:18px;font:11px/1.7 DM,Arial,sans-serif;letter-spacing:.1px;border-bottom:1px solid #55583a80;padding-bottom:5px;margin:0 0 26px;color:var(--ink)}\nbody.ayoba-simple .about-film-credit:hover{color:var(--berry);border-color:currentColor}\nbody.about-montage-page .page h1{margin-bottom:24px}\n@media(max-width:700px){\n  body.ayoba-simple-home .about-montage-section .founder-copy{padding:22px}\n  body.about-montage-page .content-columns>div:first-child{padding:24px 20px}\n  body.about-montage-page>.about-film-backdrop:after{background:#f8f4e5b8}\n  body.about-montage-page .photo-essay{padding:20px;margin-top:45px}\n  .about-film-backdrop:after{background:#f8f4e5b8}\n  body.ayoba-simple .about-film-credit{font-size:10px;margin-bottom:22px}\n}\n");
    if (route === '/') {
      style('ayoba-character-design','characters.css',"/* Decorative film fragments, behind the content and outside the reading order. */\nbody.ayoba-simple-home .dance-field{position:relative;isolation:isolate}\n.dance-background{position:absolute;inset:0;z-index:-1;display:block;width:100%;height:100%;pointer-events:none;user-select:none;contain:strict}\n/* The About film has its own background stacking layer. */\nbody.ayoba-simple-home #about>.dance-background{z-index:0}\nbody.ayoba-simple-home #about .founder-grid{z-index:1}\n/* Canvas pixels cannot receive clicks, focus, or create additional page height. */\n@media(max-width:360px){\n body.ayoba-tropical.ayoba-simple-home [data-video-hero] h1{font-size:56px}\n body.ayoba-tropical.ayoba-simple-home .navlinks{gap:9px}\n body.ayoba-tropical.ayoba-simple-home .navlinks>.button{padding-inline:9px;gap:7px}\n}\n");
      style('ayoba-video-design','video-hero.css',"/* A moving image within Ayoba's existing olive, butter and cream palette. */\n.hero-canvas.video-hero{min-height:660px;min-height:min(780px,calc(100svh - 98px));isolation:isolate;background:#263023;color:#f2ddaa}\n.video-hero .hero-video-poster,.video-hero .hero-video{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;object-position:66% 80%;z-index:-3}\n.video-hero .hero-video{opacity:0;transition:opacity .65s ease;pointer-events:none}\n.video-hero.is-video-ready .hero-video{opacity:1}\n.video-hero-shade{position:absolute;inset:0;z-index:-2;background:linear-gradient(90deg,#182116ed 0%,#25301dc9 31%,#20291c55 62%,#20291c12 100%),linear-gradient(0deg,#1b2318b3,transparent 35%,transparent 70%,#1b231850)}\n.video-hero-content{position:relative;min-height:inherit;display:flex;flex-direction:column;padding-block:30px 24px}\n.video-hero-top,.video-hero-bottom{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:9px;letter-spacing:1.6px;text-transform:uppercase}\n.video-hero-top p{margin:0}.video-hero-top span{color:#fff9e6}\n.video-hero-main{padding-block:55px 45px;flex:1;display:flex;flex-direction:column;justify-content:center}\n.video-hero h1{font:600 clamp(76px,8.4vw,128px)/.92 Bricolage,Arial,sans-serif;letter-spacing:-.065em;max-width:750px;margin:0 0 30px}\n.video-hero h1 em{font:italic 1.12em/1.03 Instrument,Georgia,serif;letter-spacing:-.04em;padding:0;display:block;margin-left:.35em}\n.video-hero-main>p{color:#fff9e6;font-size:14px;line-height:1.7;max-width:320px;margin:0 0 28px}\n.video-hero-actions{display:flex;align-items:center;gap:30px;flex-wrap:wrap}.video-hero-actions .button{padding:16px 22px;font-size:12px;gap:28px}\n.video-film-link{display:inline-flex;align-items:center;gap:10px;font-size:12px;letter-spacing:0;border-bottom:1px solid #f2ddaa80;padding:9px 0;color:#fff9e6}\n.video-play-icon{font:24px/1 Arial,sans-serif}.video-film-link:hover{color:var(--butter)}\n.video-hero-bottom{padding-top:20px;border-top:1px solid #f2ddaa48;font-size:9px;letter-spacing:1.1px}\n.video-hero-bottom>a{display:inline-flex;gap:30px;align-items:center}.video-hero-bottom>a span{font-size:20px;line-height:1}\n.video-hero [data-hero-toggle]{display:inline-flex;gap:9px;align-items:center;min-height:40px;border:1px solid #f2ddaa80;border-radius:30px;padding:8px 14px;background:#26302366;color:#fff9e6;font:10px/1.3 DM,Arial,sans-serif;letter-spacing:.2px;text-transform:none;backdrop-filter:blur(5px)}\n.video-hero [data-hero-toggle-icon]{font:15px/1 Arial,sans-serif;width:12px;text-align:center}\n.video-hero a:focus-visible,.video-hero button:focus-visible{outline:3px solid var(--butter);outline-offset:5px}\n.video-hero [data-hero-toggle]:disabled{opacity:.65;cursor:default}\n.studio-film{padding-block:70px 90px;scroll-margin-top:35px}.studio-film-heading{display:flex;justify-content:space-between;align-items:end;gap:50px;margin-bottom:32px}.studio-film-heading .eyebrow{margin-bottom:18px}.studio-film h2{font:600 clamp(42px,5vw,72px)/1.05 Bricolage,Arial,sans-serif;letter-spacing:-.05em;margin:0}.studio-film h2 em{font-size:1.15em}.studio-film-heading>p{font-size:13px;line-height:1.7;margin:0;max-width:300px}.studio-film>video{display:block;width:100%;height:auto;aspect-ratio:16/9;background:#263023;object-fit:contain;border:0}.studio-film-caption{display:flex;justify-content:space-between;gap:20px;font-size:9px;text-transform:uppercase;letter-spacing:1.2px;padding-top:15px}\n@media(max-width:900px){.hero-canvas.video-hero{min-height:680px}.video-hero-main{padding-block:55px 42px}.video-hero h1{font-size:clamp(76px,10vw,110px)}.video-hero .hero-video-poster,.video-hero .hero-video{object-position:75% 80%}.video-hero-shade{background:linear-gradient(90deg,#182116e6 0%,#25301cb8 32%,#20291c40 100%),linear-gradient(0deg,#1b2318b0,transparent 45%)}.video-hero-actions{gap:22px}}\n@media(max-width:560px){.hero-canvas.video-hero{min-height:700px;min-height:max(700px,calc(100svh - 78px))}.video-hero-content{width:calc(100% - 40px);padding-block:23px 16px}.video-hero-top{font-size:7px;letter-spacing:1px;gap:18px;align-items:start}.video-hero-top p{max-width:175px}.video-hero-top span{white-space:nowrap;font-size:7px}.video-hero-main{justify-content:flex-start;padding-block:60px 150px}.video-hero h1{font-size:clamp(66px,16.5vw,89px);letter-spacing:-.06em;margin-bottom:22px}.video-hero h1 em{margin-left:.18em}.video-hero-main>p{font-size:12px;max-width:255px;margin-bottom:23px}.video-hero-actions{align-items:flex-start;gap:13px;flex-direction:column}.video-hero-actions .button{font-size:10px;min-height:48px;padding:13px 17px;gap:25px}.video-film-link{font-size:11px;padding:5px 0}.video-play-icon{font-size:22px}.video-hero .hero-video-poster,.video-hero .hero-video{object-position:80% bottom}.video-hero-shade{background:linear-gradient(180deg,#182116cc 0%,#20291c85 33%,#20291c15 71%,#182116b3 100%),linear-gradient(90deg,#1821168c,transparent 90%)}.video-hero-bottom{font-size:7px;letter-spacing:1px;gap:10px;padding-top:12px}.video-hero-bottom>a{gap:14px}.video-hero [data-hero-toggle]{min-height:40px;font-size:9px;padding:8px 11px}.studio-film{padding-block:40px 55px}.studio-film-heading{display:block;margin-bottom:24px}.studio-film-heading .eyebrow{font-size:8px}.studio-film h2{font-size:43px;margin-bottom:20px}.studio-film-heading>p{font-size:12px}.studio-film-caption{font-size:7px;letter-spacing:.8px;gap:10px}}\n@media(prefers-reduced-motion:reduce){.video-hero .hero-video{transition:none}.studio-film{scroll-behavior:auto}}\n/* The restored film uses the site's shared motion control and decorative cast. */\nbody.ayoba-tropical [data-video-hero] [data-background-toggle]{background:#26302399;color:#fff9e6;border-color:#f2ddaa80}\nbody.ayoba-tropical [data-video-hero] [data-background-toggle]:hover{background:#263023dd;border-color:#f2ddaa}\nbody.ayoba-tropical [data-video-hero] [data-background-icon]{color:#fff9e6}\n[data-video-hero] .pendant-hero img{filter:invert(1) sepia(.3);opacity:.9}\n");
      // Keep section styles after video styles for predictable overrides.
      const sectionStyle = document.getElementById('ayoba-section-design');
      if (sectionStyle) document.head.append(sectionStyle);
      const backgroundStyle = document.getElementById('ayoba-background-design');
      if (backgroundStyle) document.head.append(backgroundStyle);
      const characterStyle = document.getElementById('ayoba-character-design');
      if (characterStyle) document.head.append(characterStyle);
      const previousHero = document.querySelector('.hero-canvas');
      if (previousHero && !previousHero.hasAttribute('data-shared-hero')) previousHero.replaceWith(fragment("<section class=\"hero-canvas video-hero\" id=\"home\" data-video-hero data-shared-hero aria-labelledby=\"hero-title\">\n  <img class=\"hero-video-poster\" src=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-video-poster.0bc303a2e700.jpg\" alt=\"Sophie dancing in a sunlit grassy field.\" width=\"1280\" height=\"720\" fetchpriority=\"high\">\n  <video class=\"hero-video\" data-hero-video data-src=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-hero.bc859e57d99b.mp4\" poster=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/ayoba-video-poster.0bc303a2e700.jpg\" muted playsinline loop preload=\"none\" aria-hidden=\"true\" tabindex=\"-1\"></video>\n  <div class=\"video-hero-shade\" aria-hidden=\"true\"></div>\n  <div class=\"video-hero-content shell\">\n    <div class=\"video-hero-top\"><p>Somatic movement &amp; ecstatic dance</p><span>Online, with Sophie</span></div>\n    <div class=\"video-hero-main\"><h1 id=\"hero-title\">Movement<br><em>as play.</em></h1><p>Private sessions &amp; group journeys.<br>A practice you can make your own.</p><div class=\"video-hero-actions\"><a class=\"button light\" href=\"#book\">Find a session <span aria-hidden=\"true\">\u2197</span></a></div></div>\n    <div class=\"video-hero-bottom\"><a href=\"#philosophy\">Explore the practice <span aria-hidden=\"true\">\u2193</span></a></div>\n  </div>\n</section>"));
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
      if (lede?.textContent.trim().startsWith('Your pace, your curiosity, your way of moving.')) lede.remove();
    }
    // Reorganize only the public presentation; preserve bound controls and form nodes.
const publicNav = document.querySelector('#navlinks');
const previousBooking = publicNav?.querySelector('.button')?.getAttribute('href');
if (publicNav && (publicNav.querySelectorAll('a').length !== 3 ||
    !publicNav.querySelector('a[href="#sessions"], a[href="/#sessions"]') ||
    publicNav.querySelector('a[href="#philosophy"], a[href="/#philosophy"], a[href="#play"], a[href="/#play"], a[href="#studio-film"], a[href="/#studio-film"]'))) {
  publicNav.replaceChildren(fragment("<a href=\"#sessions\">sessions / practice</a><a class=\"button\" href=\"#book\">book <span aria-hidden=\"true\">\u2197</span></a><a href=\"#about\">meet sophie</a>"));
}
if (route !== '/') {
  publicNav?.querySelectorAll('a[href^="#"]').forEach(link => link.setAttribute('href', '/' + link.getAttribute('href')));
}
if (route === '/') {
  const main = document.querySelector('main');
  main?.querySelectorAll('.playground, .film-section').forEach(section => section.remove());
  document.querySelectorAll('a[href="#studio-film"], a[href="/#studio-film"], a[href="#play"], a[href="/#play"]').forEach(link => link.remove());
  if (main && !main.dataset.sectionLayout) {
    main.querySelector('.intro-band')?.remove();
    main.querySelector('.reassurance')?.remove();
    main.querySelector('#philosophy')?.remove();
    main.querySelector('.ways')?.replaceWith(fragment("<section class=\"section shell ways\" id=\"sessions\" aria-labelledby=\"sessions-title\">\n  <div class=\"section-heading\"><p class=\"eyebrow\">01 / sessions / practice</p><h2 id=\"sessions-title\">Ways to move.</h2><p>Online. No dance experience needed.</p></div>\n  <div class=\"simple-session-grid\">\n    <article class=\"journey journey-private\"><div class=\"journey-photo private-photo\"><img src=\"/assets/grounded-movement.jpg\" alt=\"A dancer leaning toward the grass with one arm lifted.\" width=\"930\" height=\"1100\" loading=\"lazy\"></div><div class=\"journey-copy\"><span class=\"index\">One to one</span><h3>Private sessions.</h3><p class=\"journey-detail\">45 MINUTES \u00b7 $45 FIRST SESSION \u00b7 $65 THEREAFTER</p><a class=\"journey-link\" href=\"/private-sessions/\">About private sessions <span aria-hidden=\"true\">\u2197</span></a></div></article>\n    <article class=\"journey journey-group\"><div class=\"journey-photo group-video\"><video data-group-video data-src=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/paypaya-group-victory.2d627019002c.mp4\" autoplay muted loop controls playsinline preload=\"none\" poster=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/paypaya-group-victory-poster.4ba6b4e4e082.jpg\" aria-label=\"Victory \u2014 a film by Sophie\"><p><a href=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/paypaya-group-victory.2d627019002c.mp4\">play victory</a></p></video></div><div class=\"journey-copy\"><span class=\"index\">Together</span><h3>Group journeys.</h3><p class=\"journey-detail\">60 MINUTES \u00b7 $15\u2013$35 SLIDING SCALE</p><a class=\"journey-link\" href=\"/group-journeys/\">About group journeys <span aria-hidden=\"true\">\u2197</span></a></div></article>\n  </div>\n<div class=\"manifesto movement-manifesto\" id=\"philosophy\"><div class=\"manifesto-layout\">\n\n<h2>Movement as <em>play,</em> as a tool, as a practice, as a meditation, as a way to connect to your body and embrace the motions of life.</h2>\n<div class=\"intention-layout\"><div class=\"intention-copy\">\n<p>The intention for class can be whatever you make it. You can simply just want to experience it. Just show up as you are.</p>\n<p>If you want to just play, let\u2019s play. If you wish to move with stuck energy and emotions, with the intention to release and let go, let\u2019s do it.</p>\n<p>If you want to get more grounded in your body and embrace the energy of embodiment, play, love\u2026 let\u2019s do it all.</p>\n<a class=\"textlink\" href=\"#sessions\">Explore the sessions <span aria-hidden=\"true\">\u2197</span></a>\n</div>\n</div></div></div>\n</section>"));
    main.querySelector('.founder')?.replaceWith(fragment("<section class=\"founder section\" id=\"about\" aria-labelledby=\"about-title\"><div class=\"shell founder-grid\"><figure class=\"founder-photo\"><img src=\"/assets/embrace.jpg\" alt=\"A person wrapping their arms around their shoulders in a grassy field.\" width=\"1100\" height=\"865\" loading=\"lazy\"><figcaption>paypaya lane \u00b7 Sophie</figcaption></figure><div class=\"founder-copy\"><p class=\"eyebrow\">03 / meet sophie</p><h2 id=\"about-title\">dance as <em>art.</em></h2><p>I\u2019m Sophie, a certified Somatic Movement &amp; Ecstatic Dance Facilitator and recording artist.</p><p>Dance, music, art, and nature are part of my practice. paypaya lane is a space to explore movement together, with room for curiosity and whatever you bring.</p><a class=\"textlink\" href=\"/about/\">More about Sophie <span aria-hidden=\"true\">\u2197</span></a></div></div></section>"));
    if (!main.querySelector('#book')) main.append(fragment("<section class=\"booking-section section shell\" id=\"book\" aria-labelledby=\"book-title\">\n  <div class=\"booking-heading\"><p class=\"eyebrow\">02 / book</p><h2 id=\"book-title\">tiers / booking options,<br>let\u2019s connect.</h2><p>Meet Sophie for a free intro call, or ask about a private session.</p></div>\n  <div class=\"booking-options\">\n    <article class=\"booking-option\"><div class=\"booking-service\"><h3>Intro consultation</h3><p>20 minutes \u00b7 Monday\u2013Friday, noon\u20133 p.m.</p></div><div class=\"booking-price\"><strong>Free</strong><span>Online</span></div><a class=\"textlink\" href=\"/contact/#intro-call\">Request a call <span aria-hidden=\"true\">\u2197</span></a></article>\n    <article class=\"booking-option\"><div class=\"booking-service\"><h3>First private session</h3><p>45 minutes \u00b7 Monday\u2013Friday, 10 a.m.\u20136 p.m.</p></div><div class=\"booking-price\"><strong>$45</strong><span>Introductory session</span></div><a class=\"textlink\" href=\"/contact/?topic=private\">Request a first session <span aria-hidden=\"true\">\u2197</span></a></article>\n    <article class=\"booking-option\"><div class=\"booking-service\"><h3>Private session</h3><p>45 minutes \u00b7 Monday\u2013Friday, 10 a.m.\u20136 p.m.</p></div><div class=\"booking-price\"><strong>$65</strong><span>Returning movers</span></div><a class=\"textlink\" href=\"/contact/?topic=private\">Request a session <span aria-hidden=\"true\">\u2197</span></a></article>\n  </div>\n  <div class=\"booking-note\"><p>All hours are Pacific time. Send your preferred time to Sophie; an inquiry does not reserve a session. Paid sessions are confirmed after payment is verified.</p><a class=\"textlink\" href=\"/faq/\">Questions &amp; answers <span aria-hidden=\"true\">\u2197</span></a></div>\n</section>"));
    document.querySelector('body > .cta')?.remove();
    main.dataset.sectionLayout = 'true';
  }
  // Keep the agreed order: sessions/practice, booking, then meet Sophie.
  ['sessions','book','about'].forEach(id => {
    const section = main?.querySelector('#' + id);
    if (section) main.append(section);
  });
  const bookTitle = document.querySelector('#book-title');
  if (bookTitle?.textContent === 'Start with a conversation.') bookTitle.innerHTML = 'tiers / booking options,<br>let’s connect.';
  const aboutNumber = document.querySelector('#about .eyebrow');
  if (['04 / About', '03 / About'].includes(aboutNumber?.textContent)) aboutNumber.textContent = '03 / meet sophie';
  const bookNumber = document.querySelector('#book .eyebrow');
  if (['06 / Book', '04 / Book'].includes(bookNumber?.textContent)) bookNumber.textContent = '02 / book';
  const logo = document.querySelector('header a[aria-label="Ayoba Studio home"], header a[aria-label="paypaya lane home"]');
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

if (route === '/group-journeys' && !document.querySelector('[data-group-video]')) {
  document.querySelector('.session-photo')?.replaceWith(fragment("<figure class=\"session-photo group-video\"><video data-group-video data-src=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/paypaya-group-victory.2d627019002c.mp4\" autoplay muted loop controls playsinline preload=\"none\" poster=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/paypaya-group-victory-poster.4ba6b4e4e082.jpg\" aria-label=\"Victory \u2014 a film by Sophie\"><p><a href=\"https://ayoba-studio-media-1aa56b.netlify.app/assets/paypaya-group-victory.2d627019002c.mp4\">play victory</a></p></video><figcaption>victory \u00b7 a film by sophie</figcaption></figure>\n"));
}

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

  const planes = Array.from(document.querySelectorAll('[data-art-plane]'));
  const hero = document.querySelector('[data-art-hero], [data-video-hero]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  let wantsMotion = !reduced.matches && !navigator.connection?.saveData;
  let frame = 0;
  let x = 0, y = 0;
  function update() {
    document.body.dataset.motion = wantsMotion && !document.hidden ? 'running' : 'paused';
    if (!wantsMotion && frame) { cancelAnimationFrame(frame); frame = 0; }
  }
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
    wantsMotion = !reduced.matches && !navigator.connection?.saveData;
    update();
  });
  // Keep hero visibility available to the existing presentation styles.
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

    // The original hero follows the site's shared motion setting.
(() => {
  const hero = document.querySelector('[data-video-hero]');
  if (!hero || hero.dataset.ready) return;
  const video = hero.querySelector('[data-hero-video]');
  if (!video) return;
  hero.dataset.ready = 'true';
  let inView = !('IntersectionObserver' in window);
  let failed = false;
  let pending = false;
  let queuedResume = false;
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'none';
  function canResume() {
    return !failed && document.body.dataset.motion === 'running' && inView &&
      !document.hidden;
  }
  function pause() {
    queuedResume = false;
    video.pause();
  }
  function settled(error) {
    pending = false;
    // Only an interrupted or successful attempt may service a queued resume.
    // Autoplay rejection waits for a later shared-motion or visibility change.
    const retry = queuedResume && (!error || error.name === 'AbortError');
    queuedResume = false;
    if (!canResume()) pause();
    else if (retry) sync();
  }
  function sync() {
    if (!canResume()) { pause(); return; }
    if (pending) { queuedResume = true; return; }
    if (!video.paused && !video.ended) return;
    // Shared reduced-motion/save-data preferences prevent even loading the film.
    if (!video.getAttribute('src')) {
      if (!video.dataset.src) return;
      video.src = video.dataset.src;
    }
    pending = true;
    queuedResume = false;
    try {
      Promise.resolve(video.play()).then(() => settled(null), settled);
    } catch (error) {
      settled(error);
    }
  }
  video.addEventListener('playing', () => {
    if (!failed) hero.classList.add('is-video-ready');
    if (!canResume()) pause();
  });
  video.addEventListener('error', () => {
    failed = true;
    hero.classList.remove('is-video-ready');
    pause();
  });
  new MutationObserver(sync).observe(document.body, {attributes:true, attributeFilter:['data-motion']});
  document.addEventListener('visibilitychange', sync);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      sync();
    }, {threshold: 0.05}).observe(hero);
  }
  sync();
})();

    // Victory loops silently when visible, following the site's motion preferences.
(() => {
  const route = location.pathname.replace(/\/+$/, '') || '/';
  if (!['/', '/group-journeys'].includes(route)) return;
  document.querySelectorAll('[data-group-video]').forEach(video => {
    if (video.dataset.groupVideoReady) return;
    video.dataset.groupVideoReady = 'true';
    let inView = !('IntersectionObserver' in window);
    let failed = false;
    let pending = false;
    let queuedResume = false;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'none';
    video.autoplay = false;
    const shouldPlay = () => !failed && inView && !document.hidden &&
      document.body.dataset.motion === 'running';
    function load() {
      if (!video.getAttribute('src') && video.dataset.src) video.src = video.dataset.src;
    }
    function pause() {
      video.autoplay = false;
      queuedResume = false;
      video.pause();
    }
    function settled(error) {
      pending = false;
      const retry = queuedResume && (!error || error.name === 'AbortError');
      queuedResume = false;
      if (!shouldPlay()) pause();
      else if (retry) sync();
    }
    function sync() {
      if (!shouldPlay()) { pause(); return; }
      video.autoplay = true;
      if (pending) { queuedResume = true; return; }
      if (!video.paused && !video.ended) return;
      // Reduced motion and save-data prevent automatic loading of the full film.
      load();
      if (!video.getAttribute('src')) return;
      pending = true;
      queuedResume = false;
      try {
        Promise.resolve(video.play()).then(() => settled(null), settled);
      } catch (error) {
        settled(error);
      }
    }
    video.addEventListener('playing', () => {
      if (!inView || document.hidden) pause();
    });
    // Native controls still offer deliberate playback with reduced motion enabled.
    const prepareManualPlayback = () => { if (inView && !document.hidden) load(); };
    video.addEventListener('pointerdown', prepareManualPlayback);
    video.addEventListener('keydown', prepareManualPlayback);
    video.addEventListener('error', () => { failed = true; pause(); });
    new MutationObserver(sync).observe(document.body, {attributes:true, attributeFilter:['data-motion']});
    document.addEventListener('visibilitychange', sync);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
        sync();
      }, {threshold:0.05}).observe(video);
    }
    sync();
  });
})();

    /* Actual isolated frames from the supplied dance film, drawn behind the page. */
(() => {
  if (!document.body.classList.contains('ayoba-simple-home') || document.body.dataset.charactersReady) return;
  document.body.dataset.charactersReady = 'true';
  const clips = [
    {name:'candle-devil', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/candle-devil.a5c89f040528.webp', poster:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/candle-devil-poster.890836e364d3.webp'},
    {name:'snail', frames:16, src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/snail.72a4b0d13978.webp', poster:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/snail-poster.03df3fb9e32f.webp'},
    {name:'sun-dancer', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/sun-dancer.53158cb521de.webp', poster:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/sun-dancer-poster.97d0172e8cb8.webp'},
    {name:'mandrake', frames:24, src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/mandrake.8188224093ee.webp', poster:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/mandrake-poster.a063bd692efe.webp'},
    {name:'trumpet-lion', frames:24, src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/trumpet-lion.3e8d7608982d.webp', poster:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/trumpet-lion-poster.61f6d96ebb18.webp'},
    {name:'moon-wizard', src:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/moon-wizard.c9b8e9100fd9.webp', poster:'https://ayoba-studio-media-1aa56b.netlify.app/assets/dancing-clips/moon-wizard-poster.d43598a5bfb6.webp'},
  ].map(clip => ({width:160, height:160, columns:8, frames:48, fps:12, ...clip}));
  // Final tuple values preserve each remaining figure's original timing index.
  // Every instance has its own size, position, phase and playback pace.
  const layouts = [
    ['philosophy', [[1,7,18,126,0],[3,53,13,58,2],[0,75,92,66,4],[2,97,72,116,5]], 1],
    ['sessions', [[1,49,47,64,2],[4,92,87,140,3],[5,8,92,78,4],[3,70,6,52,5]], 2],
    ['about', [[5,94,69,160,1],[3,91,15,62,3],[1,4,82,90,4]], 4],
    ['book', [[5,3,21,148,0],[3,95,81,140,3],[4,42,94,58,4],[0,76,7,68,5]], 6],
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
  layouts.forEach(([id, instances, sectionIndex]) => {
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
      people:instances.map(([clip, x, y, size, index]) => ({clip:clips[clip], x, y, size,
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
    caption('#about .founder-copy > .eyebrow', motifs.wheel);
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
  document.querySelector('link[rel=icon]')?.setAttribute('href', 'https://ayoba-studio-media-1aa56b.netlify.app/assets/paypaya-favicon.d07bc8ed5bb3.svg');
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', 'https://ayoba-studio-media-1aa56b.netlify.app/assets/paypaya-social-preview.0ba37126d241.png');
  document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content', 'paypaya lane — movement as play.');
})();

  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once:true});
  else apply();
})();
