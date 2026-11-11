AYOBA LIVE PAGE UPDATES — NOVEMBER 11, 2026

The requested copy and interactive art changes are live at
https://ayoba-studio-movement.netlify.app

HOW THE LIVE UPDATE WORKS
Netlify injects the named "Ayoba — movement copy and interactive art study"
snippet into static pages as they are served. It changes only the homepage,
About, and Private Sessions pages. It uses no analytics, storage, or network
requests. The existing studio function, data, authentication, contact delivery,
deployment, and security headers remain in place.

This avoids rebuilding the original studio backend, whose source is absent
from this repository. It does not recover that backend's source code.

SOURCE AND MAINTENANCE
The HTML files and assets/art-direction.* contain the same changes in ordinary
site source. The live snippet is generated from those files:

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
