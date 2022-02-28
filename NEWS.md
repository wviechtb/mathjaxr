# mathjaxr 1.6-0 (2022-02-28)

* upgraded MathJax version to 3.2.0
* updated instructions for making use of the package
* fixed issue with `\mjeqn` coming first in a paragraph (issue #11)
* `preview_rd()` now shows links to local help pages (although they are non-functional) and displays figures (if there are any)

# mathjaxr 1.4-0 (2021-03-01)

* fixed issue with minifying the javascript files upon installation under Windows
* `preview_rd()` now loads package macros

# mathjaxr 1.2-0 (2021-01-30)

* upgraded MathJax version to 3.1.2
* MathJax is now bundled with non-minified javascript files; upon installation from the source package, the javascript files are minified if the `js` package is available
* `preview_rd()` now tries to load any package-specific macros before rendering a help page
* `preview_rd()` gains a `dark` argument (for the option to render HTML pages in dark mode)

# mathjaxr 1.0-1 (2020-06-25)

* added `\mjteqn` and `\mjtdeqn` macros (triple-argument versions)
* added `preview_rd()` function
* environment variable `MATHJAXR_CDN` can now be used to specify an alternative URL for a CDN
* changed name of environment variable from `MATHJAXR.USECDN` to `MATHJAXR_USECDN`
* expanded information provided under 'Issues'

# mathjaxr 0.8-3 (2020-05-08)

* first version released on CRAN
* simplified `ifelse` logic for the `\mjeqn` and `\mjdeqn` macros
* added `\mjseqn` and `\mjsdeqn` macros (single-argument versions)

# mathjaxr 0.8-0 (2020-05-03)

* first version
