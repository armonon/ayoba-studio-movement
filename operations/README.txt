AYOBA LIVE PAGE UPDATES — NOVEMBER 11, 2026

The requested copy, interactive art, and video hero changes are live at
https://ayoba-studio-movement.netlify.app

HOW THE LIVE UPDATE WORKS
Netlify injects the named "Ayoba — movement copy and interactive art study"
snippet into static pages as they are served. It updates the nine public pages; studio and API routes are excluded. The video hero loads optimized public
media from a dedicated Netlify media site; the full film loads when played.
The page scripts use no analytics or browser storage. The existing studio function, data, authentication, contact delivery,
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
