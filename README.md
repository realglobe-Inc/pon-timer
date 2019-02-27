 <img src="assets/images/pon-timer-banner.png" alt="Title Banner"
                    height="148"
                    style="height:148px"
/>


<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/pon-timer
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/pon-timer
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/pon-timer.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/pon-timer
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/pon-timer.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/pon-timer/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/pon-timer
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/pon-timer.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/pon-timer.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/pon-timer
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/pon-timer.svg
[bd_npm_url]: http://www.npmjs.org/package/pon-timer
[bd_npm_shield_url]: http://img.shields.io/npm/v/pon-timer.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Timer for pon

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install pon-timer --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const ponTimer = require('pon-timer')

async function tryExample () {
  const timer = ponTimer()
  timer.tick('project:your-task-name') // Start tick to measure
  /* ... */
  const took = timer.tick('project:your-task-name') // Measure from last tick
  console.log(`The task took ${took}ms`)
}

tryExample()

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/10.API Guide.md.hbs" Start -->

<a name="section-doc-guides-10-api-guide-md"></a>

API Guide
-----

+ [pon-timer@2.0.6](./doc/api/api.md)
  + [create(args)](./doc/api/api.md#pon-timer-function-create)
  + [PonTimer](./doc/api/api.md#pon-timer-class)


<!-- Section from "doc/guides/10.API Guide.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/pon-timer/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [Pon][pon_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[pon_url]: https://github.com/realglobe-Inc/pon
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
