AYOBA — PLAYFUL MOVEMENT STUDIO REDESIGN

Live site: https://ayoba-studio-movement.netlify.app

DESIGN
Butter yellow, cobalt blue, oversized type, and overlapping photographic
studies. The homepage includes a manual photo sequence with optional playback,
session disclosures, a drawing playground with Flow/Pulse/Still gestures,
and selectable movement invitations. The other public pages share the type,
color, navigation, and footer design. Requested copy edits are retained.

SOURCE
operations/home-redesign.html is the canonical homepage main element; index.html
contains the same markup for a future complete native deployment.
assets/movement-studio.css supplies the design and responsive layouts.
assets/movement-engine.js handles photos, drawing, and progressive reveals.
assets/site-redesign.js applies shared copy/presentation and movement prompts.
The ordinary public HTML files also contain the updated copy and asset links.

LIVE DELIVERY
Netlify injects the named "Ayoba — movement copy and interactive art study"
snippet into static pages as they are served. This updates the nine public
routes without rebuilding or replacing the existing studio backend. The
snippet contains its CSS, markup, and JavaScript; all photos and fonts already
exist in the published deployment. No added network requests, storage,
analytics, or dependencies are used by the redesign scripts.

The studio function, authentication, contact delivery, published schedules,
and security headers remain in place. Existing app.js and public-runtime.js
are unchanged. The snippet does not execute on /studio or /api routes.

MAINTENANCE
After editing assets or the canonical homepage, synchronize index.html and
other affected native pages, then run:

  python3 operations/generate-snippet.py
  node --check operations/live-update.js
  python3 operations/publish-live-update.py

The publisher uses NETLIFY_AUTH_TOKEN from the environment, or this Mac's
existing Netlify CLI login. It never prints or saves the credential. It updates
only the named snippet and verifies the stored content. Keep a copy of the
previous snippet before publishing so it can be restored if needed.

The current live snippet ID is 0. It is managed in Netlify under Project
configuration > Developer settings > Post processing > Snippet injection.

The script checks the homepage version and per-control initialization to avoid
duplicating markup or listeners. After a complete native deployment, remove
the named snippet so future native changes are not overridden.

LIMITS
Live presentation changes require JavaScript. Visitors with JavaScript disabled
see the previous deployed HTML. The updated native HTML in this repository
contains the new copy without that dependency. The studio's restrictive CSP
remains intact and may block the inline snippet there, as intended.

The original backend source is absent from this repository. Do not deploy this
export as a replacement for the complete application: netlify.toml references
the original build/functions folders on another computer. This approach does
not recover that source. Use [skip ci] for source-only commits while the
existing build configuration remains unavailable.

VERIFICATION
Check public-page rendering, photo selection/play/pause, session disclosures,
Flow/Pulse/Still, drawing/Add/Clear, movement prompts, responsive navigation,
and contact/booking links. Drawing includes keyboard button alternatives;
reduced-motion settings disable playback and transitions. Contact form markup,
policy content, app.js, public-runtime.js, and netlify.toml remain unchanged
apart from public presentation around them.

After publication, verify /api/studio/public, unauthenticated 401 at
/api/studio/state, studio script integrity and security headers, and unchanged
published deployment ID and studio function digest.

Netlify reference:
https://docs.netlify.com/build/post-processing/snippet-injection/
