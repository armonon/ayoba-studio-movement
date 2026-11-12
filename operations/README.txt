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
