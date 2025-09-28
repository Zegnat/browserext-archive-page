# ![](images/icon-32.png) Archive Page (Firefox Add-on)

![GitHub manifest version](https://img.shields.io/github/manifest-json/v/Zegnat/browserext-archive-page)
![GitHub License](https://img.shields.io/github/license/Zegnat/browserext-archive-page)
![Mozilla Add-on Version](https://img.shields.io/amo/v/archive-page)

> Archive webpage with archive.today

* [Archive Page by John Navas on AMO][AMO].
* [Official GitHub repository][GitHub].

## This repository is a mirror

This repository contains a single commit for each version of the add-on that has
been published for Firefox. This way changes to the add-on can easily be
reviewed before installation.

There is also a mirror repository for the Chrome version:
[karlhorky/mirror-jnavas2-archive-page][mirror].

## Notes on historic releases

When the add-on was reinstated on AMO with version 1.2.1, all versions prior to
it were removed from its version history. Exactly when this happened is unknown
but at the latest [on 2025-08-06][d980b69]

Versions prior to 0.9.0 were already removed from AMO and also untracked by the
official repository. They are mirrored here for posterity.

All old versions were obtained through [the Wayback Machine][IA]. The exact URLs
are available in each separate version commit. See [the history of the “version
history” page][history] on archive.today.

## Notes on the licence

The add-on licence has been distributed inside the XPI file from version 0.3 to
0.9.0 as copyright.txt. On AMO it has been identified as “MIT/X11 License”,
“The MIT License” and “MIT License”.

From version 0.9.1 onward the licence has not been packaged with the add-on,
instead this repository includes the licence that could be found in the official
repository at the time of publication. No origin for these licences has been
identified, nor do they seem to have an SPDX identifier.

[On 2025-07-04][84409be] the official repository relicensed under a standard
MIT licence text. This mirror repository copied this on [2025-09-28][dbe628d],
when adding version 1.2.1 from AMO. The release [was listed on AMO][snapshot] as having its “code released under [MIT License][spdx]”.

[AMO]: https://addons.mozilla.org/firefox/addon/archive-page/
[GitHub]: https://github.com/JNavas2/Archive-Page
[mirror]: https://github.com/karlhorky/mirror-jnavas2-archive-page
[IA]: https://web.archive.org/
[history]: https://archive.today/https://addons.mozilla.org/en-US/firefox/addon/archive-page/versions/
[d980b69]: https://github.com/JNavas2/Archive-Page/commit/d980b694700565a5c0f2f617693a864306d64f03
[84409be]: https://github.com/JNavas2/Archive-Page/commit/84409be0b749971f42af225fe9b3af9bd374350f
[dbe628d]: https://github.com/Zegnat/browserext-archive-page/commit/dbe628d9afc7b88cbd674ee297665380409cb536
[snapshot]: https://web.archive.org/web/20250928185938/https://addons.mozilla.org/en-US/firefox/addon/archive-page/versions/
[spdx]: https://spdx.org/licenses/MIT.html
