AYOBA LIVE PAGE UPDATES — NOVEMBER 11, 2026

The requested copy, interactive art, and video hero changes are live at
https://ayoba-studio-movement.netlify.app

HOW THE LIVE UPDATE WORKS
Netlify injects the named "Ayoba — movement copy and interactive art study"
snippet into static pages as they are served. It updates the nine public pages; studio and API routes are excluded. The video hero loads optimized public
media from a dedicated Netlify media site; the full film loads when played.
The page scripts use no analytics. A user-selected background-motion pause is
remembered in sessionStorage for the current browser tab. The existing studio function, data, authentication, contact delivery,
deployment, and security headers remain in place.

This avoids rebuilding the original studio backend, whose source is absent
from this repository. It does not recover that backend's source code.

SOURCE AND MAINTENANCE
The HTML files, assets/art-direction.*, and assets/video-hero.* contain the
same changes in ordinary site source. index.html holds the canonical public section markup. The video templates in
operations/ mirror those sections. The generator reads the homepage,
operations/section-layout.js, and assets/section-navigation.* along with the
art and video assets to build the live snippet:

  python3 operations/generate-snippet.py
  node --check operations/live-update.js
  python3 operations/publish-live-update.py

The publisher uses NETLIFY_AUTH_TOKEN from the environment, or this Mac's
existing Netlify CLI login. It never prints or saves the credential. It updates
only the named snippet and verifies the stored content. Always verify the
affected public pages and the studio API after publishing.

The current live snippet ID is 0. It is managed in Netlify under Project
configuration > Developer settings > Post processing > Snippet injection.

The script checks for existing markup and initialized controls, so a later
deployment of the updated HTML does not duplicate the movement study or its
event handlers. It does not overwrite future headings with different wording.
After a complete native deployment, the named snippet can be removed in Netlify.

LIMITS
The current live copy changes require JavaScript. Visitors with JavaScript
disabled see the original deployed HTML. The studio's restrictive CSP remains
intact and may block the inline snippet there; the public update does not need
to execute on studio pages.

Do not deploy this repository as a replacement for the complete application:
netlify.toml still references the missing original build and functions folders.
The live-update publisher does not invoke that build or replace any function.

VERIFICATION
Browser: homepage copy, class-intention passage, About heading, shortened Private
Sessions introduction, drawing, Add a gesture, and Clear all verified live.
API: /api/studio/public remains 200 with the same response; /api/studio/state
remains 401 without authentication. Studio JavaScript and security headers match
the pre-update versions. Production deployment ID and studio function digest
are unchanged.

Netlify reference:
https://docs.netlify.com/build/post-processing/snippet-injection/

VIDEO MEDIA — NOVEMBER 11, 2026
The supplied 35.6-second video has an effectively silent audio track. The hero
uses a continuous 7.7–15.6-second segment; the complete film is available in
its own native-controls player. The original attachment is unchanged.

Optimized files in assets/:
  ayoba-hero.mp4          H.264 / 720p / 24fps / no audio / 471 KB
  ayoba-film.mp4          H.264 / 720p / 24fps / no audio / 2.49 MB
  ayoba-video-poster.jpg  Poster from 11 seconds / 78 KB

A separate media-only Netlify site hosts hash-named files, with a published
production deploy so ordinary draft-retention cleanup will not expire them.
The host, deployment ID, and file URLs are recorded in operations/media-host.json.
Do not replace or delete that published media deploy while its URLs are live.
The main studio site has not been redeployed.

  python3 operations/publish-media.py status

The hero defaults to silent playback, with a visible pause control. It pauses
outside the viewport, in hidden tabs, and while the full film plays. Reduced
motion and save-data preferences start with the poster and a manual Play
control. The full film does not autoplay. Failed or denied playback leaves
the poster usable.

BOOKING STATUS
The existing contact form has a founder email notification configured in
Netlify. It is an inquiry form, not an availability calendar, and no visitor
auto-confirmation is configured. The studio records appointments and manual
email tasks; it does not send those emails or synchronize provider bookings.

Both-party booking confirmations require a real Sophie-owned scheduling link
and verified delivery. The existing public runtime supports calendarUrl and
calendarVerified settings. Do not mark the calendar verified until actual
availability, time zones, conflicts, joining links, and both-party confirmation
delivery have been checked. No booking provider is connected yet. The agreed schedule is Monday–Friday,
Pacific local time: free 20-minute consultations noon–3 p.m.; 45-minute paid
sessions 10 a.m.–6 p.m., $45 first session and $65 thereafter. Both-party
automated booking email delivery remains unverified.

SECTION NAVIGATION — NOVEMBER 12, 2026
The homepage now has seven sections: the opening video, Practice, Sessions,
Play, About, Film, and Book. The wordmark returns to the opening; each other
section has a persistent navigation link. These are ordinary anchor URLs,
with browser history, keyboard support, mobile horizontal navigation and an
active-section underline. Layout is cream and olive with restrained spacing,
photography and fewer repeated introductory sections.

The live layout moves existing interactive nodes so their listeners survive.
It preserves the contact form, form submission script, public studio runtime,
legal copy and backend. The first paid session duration now states 45 minutes.
Book displays the confirmed hours and inquiry links, not an unconnected calendar.
Contact copy explains the inquiry flow without exposing implementation details.

Verification: live-equivalent desktop and 390px mobile previews; section links
and cross-page deep links; active navigation and font-load positioning; mood
selection, Add a gesture and Clear; preserved form and private-topic prefilling.
No test inquiry or notification was sent. Backend preservation is verified
separately before and after publishing the snippet.

DYNAMIC ART BACKGROUND — NOVEMBER 12, 2026
The user-supplied “that was easy.jpeg” is copied byte-for-byte to
assets/ayoba-tropical-background.jpg (1800 × 1800, 645 KB). It now fills the
opening hero and appears at lower opacity behind the other public sections.
The supplied full movement film remains in the Film section. The previous
hero video is retained as a media asset but is no longer loaded by the page.

assets/dynamic-background.css and .js provide a slow 24-second drift/zoom and
small cursor-responsive offsets on fine-pointer devices. Pause controls are
available in the hero and farther down the page. User pause persists across
pages in the same tab. Reduced-motion and save-data settings start still;
a visitor can explicitly play. Motion pauses in hidden documents, and the
hero’s animation pauses when it leaves the viewport. There is no animation
loop in JavaScript; pointer changes are limited to one pending animation frame.

The media publisher now supports an additive update mode that verifies the
existing media deployment and preserves all existing file paths and hashes.
The same media-only site hosts the new image; the main studio site has not
been redeployed. For future additions:

  python3 operations/publish-media.py update
  python3 operations/publish-media.py status

After media is verified, generate and publish the usual public-page snippet.
The homepage HTML is canonical; operations/video-hero.html mirrors its new
art hero markup despite the historical filename.

Verification: desktop and 390px mobile visual review, image loading, cursor
offsets, frozen animation transforms after Pause, resume, pause carried to
another page, and full-film URL/markup preserved. Controller checks cover
reduced motion, save data, hidden documents, unavailable storage, pointer
cancellation and bounded offsets. The form, application scripts and studio
runtime remain unchanged.

INDEPENDENT SCROLL CHARACTERS — NOVEMBER 12, 2026
The supplied manuscript-style sheet is separated into ten transparent cutouts:
candle devil, snail, sun dancer, ghost, crow with key, mandrake, mermaid,
trumpet lion, moon wizard, and walking eye. Built-in imagegen produced the
isolated PNG assets; the supplied 10-second video guided the differing motion
rhythms. It is a reference, not a flattened video overlay.

assets/characters/ retains the full-resolution PNGs and 512px WebP delivery
copies. The WebP files preserve alpha and total 1,084,516 bytes. Each figure has
its own image element, phase, path, and dance timing in assets/characters.js.
Figures float at rest and hop, sway, flutter or step while the page scrolls.
They occupy reserved spaces inside existing sections; no new navigation
section is added. Decorative stages are aria-hidden and ignore pointer events.
The booking section and forms contain no character overlays.

The shared Pause motion button now stops both artwork and characters. Reduced
motion and save-data preferences start still unless the visitor explicitly
plays. Offscreen figures pause. Scroll updates use at most one pending frame,
read geometry before writes, and have bounded travel and dance strength.

Verification: all 10 hosted assets, independent DOM nodes, visible-only dance
updates, actual scroll-triggered animation names, frozen character transforms
after Pause, resume, reduced-motion/controller checks, and 320px mobile layout.
The existing film, contact form and studio runtime are unchanged. A ZIP with
all original PNG cutouts, webcopies, and final prompts is provided separately.

PENDANT MOTIFS — NOVEMBER 12, 2026
Nine separate transparent ink ornaments are derived from the user-supplied
pendant reference with built-in imagegen. Full-resolution PNGs and lossless
384px WebP delivery copies (169,532 bytes total) are in assets/motifs/. The source prompts and an asset
archive are provided separately in the workspace output.

assets/pendant-motifs.js adds one small hero ornament, six individual section
markers, and two footer ornaments. Detailed public pages use one heading
ornament and the same footer pair. No new navigation section is added. The
ornaments reserve their own space, are hidden from assistive technology, and
ignore pointer events. Forms and existing controls are not replaced.

A slow three-degree sway follows the shared motion setting. Paused, hidden,
and offscreen ornaments stay still; reduced-motion and save-data preferences
are inherited from the existing background controller. There is no new
scroll handler or animation loop. The script is idempotent and explicitly
limited to the same nine public routes as the live presentation snippet.

The media publisher discovers motifs/*.webp alongside the existing character
assets, retaining every existing immutable media URL. Only the existing
public presentation snippet is updated on the main site; the original studio
deployment, function, authentication, and contact form remain in place.

Verification: desktop and 320px mobile visual review, all nine assets loaded,
no horizontal page overflow, shared Pause/Play behavior, and footer/contact
page placement. The contact form subtree is byte-for-byte unchanged.

ABOUT VIDEO MONTAGE — NOVEMBER 12, 2026
The user-supplied public channel https://www.youtube.com/@sophiesky999
(Roze) contains 38 public uploads: 17 Videos and 21 Shorts. A silent edit
includes an excerpt from each upload. The desktop version interleaves
landscape scenes with seven portrait triptychs; a separate phone version
presents all 38 sequentially with landscape footage contained over a soft
fill. The source inventory and edit timing are recorded in
operations/about-montage-sources.json. No private or authenticated media
was accessed, and no source audio is included.

assets/about-montage.css and .js add the montage behind the homepage About
section and the full /about/ page. Text sits over a cream wash and readable
panels. The tropical art remains on the other sections and public pages.
A quiet link leads to Sophie's original channel. Existing content, forms,
photographs, characters, pendants, navigation, and studio runtime remain.

Video loading is deferred until About is near the viewport and motion is
enabled. The shared Pause motion control pauses the video as well as the
other animation. Reduced-motion/save-data visitors initially receive only
the poster; they can explicitly opt in. Hidden and offscreen videos pause.
Only one video is loaded: the phone edit is selected below 701px on first
play, and the source remains stable across resizing to avoid extra downloads.
Playback rejection retains the poster. Interrupted play attempts recover
without retrying autoplay-denial errors indefinitely.

Publish the four new assets additively to the existing media-only host,
then generate and update the existing public-page snippet. Never rebuild
the main site from this snapshot: the original backend source is absent.

Final files: desktop 63 seconds at 1280 × 720 (7,059,219 bytes); mobile
66.5 seconds at 540 × 960 (4,744,539 bytes), both 24fps silent H.264 with
faststart. Both variants have verified coverage of all 38 source videos,
exact frame counts, clean full decoding, and cyclic end-to-start dissolves.
Desktop, 390px and 320px browser previews confirm readable text, no page
overflow, motion controls, preserved section navigation and lazy video loading.
Focused checks cover paused defaults, visibility, device selection, source
stability, and interrupted play promise recovery.

RESTORED ORIGINAL VIDEO HERO — NOVEMBER 12, 2026
The original 7.916667-second ayoba-hero.mp4 loop and poster return to the
homepage hero, using the earlier dark olive overlay and light typography.
The current copy, section navigation, characters, pendants, tropical
background elsewhere, and both About montage variants are retained.

The video now follows the shared body motion state, including Pause/Play,
reduced-motion and save-data defaults, hidden/offscreen pause, and pausing
while the full Film is playing. This reuses existing immutable hosted media;
no media deployment is needed. Publish only the existing presentation snippet.

ACTUAL DANCING BACKGROUNDS — NOVEMBER 12, 2026
This supersedes the still-cutout character presentation described above.
Nine characters are isolated from the user's supplied 10-second dancing
video. The mermaid appears only in the reference image, not in that video.
The website reuses the nine actual clips as 36 independent background
instances across the six sections below the hero, at varied sizes and phases.
The hero contains no dancing character layer; its original film remains.
The old reserved character bands and CSS puppet dances are removed.

Transparent WebP frame atlases and first-frame posters live in
assets/dancing-clips/. Canvas displays the original recorded poses in
sequence, reversing at each end for a continuous loop. Scrolling gently
increases playback pace. No new dance poses are generated.

The six absolute canvases add no page height and sit behind the content.
They are hidden from assistive technology, receive no pointer events or
keyboard focus, and fade further under reading areas. The original hero
video, About montage, pendants, text, navigation and booking links remain.

One shared animation loop draws only visible sections, at most 15fps.
The existing Pause motion control freezes the current pose. Hidden pages
and wholly offscreen canvases stop drawing. Reduced motion, save-data or
an initial saved pause load only the small static posters until Play.
Decoded atlases are reused across all instances; canvas resolution is
capped at 1.5x. Failed clip loads leave a static poster or empty decoration.

Publish new media additively with operations/publish-media.py update;
retain every existing media file. Then regenerate and publish only the
existing live presentation snippet. Do not rebuild the main site.
