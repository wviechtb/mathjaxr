mathjaxr: Using Mathjax in Rd Files
===================================

[![Build Status](https://travis-ci.org/wviechtb/mathjaxr.svg?branch=master)](https://travis-ci.org/wviechtb/mathjaxr)
![CRAN Version](https://www.r-pkg.org/badges/version/mathjaxr)
![devel Version](https://img.shields.io/badge/devel-0.2--0-brightgreen.svg)

## Description

The `mathjaxr` package allows for easy inclusion of [MathJax](https://www.mathjax.org/) equations in Rd files. Package authors wanting to make use of the package and its functionality need to:

1. install the `mathjaxr` package,
2. add `mathjaxr` to `Suggests` or `Imports` in the `DESCRIPTION` file of their package,
3. add `mathjaxr` to `RdMacros` in the `DESCRIPTION` file of their package (or add `RdMacros: mathjaxr` if the `DESCRIPTION` file does not yet contain a `RdMacros` entry),

One can then enable the use of MathJax by calling the `\loadmathjax` macro (that is provided by the `mathjaxr` package) within the `\description{}` section of an `.Rd` file.

An inline equation can then be added with the `\mjeqn{latex}{ascii}` macro, with the LaTeX commands for the equation given between the first set of curly brackets (which will be rendered in the HTML and PDF help pages) and the plain-text version of the equation given between the second set of curly brackets (which will be shown in the plain text help). With the `\mjdeqn{latex}{ascii}` macro, one can add 'displayed equations' (as in LaTeX's `displaymath` environment).

Note that (at the moment) one must always specify both arguments (i.e., the `latex` and the `ascii` versions of an equation).

## Details

The Javascript code for MathJax is contained in this package. If a user viewing a help page has `mathjaxr` installed, it will be retrieved from there, otherwise it will be retrieved from the CDN site https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js. To force use of the CDN site, the user can set the environment variable `MATHJAXR.USECDN` to any non-blank value.

## Installation

After installing the [remotes](https://cran.r-project.org/package=remotes) package with ```install.packages("remotes")```, the development version of the `mathjaxr` package can be installed with:
```r
remotes::install_github("wviechtb/mathjaxr")
```

## Meta

The `mathjaxr` package is licensed under the [GNU General Public License Version 3](https://www.gnu.org/licenses/gpl-3.0.txt), while MathJax itself is licensed under the [Apache License, Version 2.0.](https://github.com/mathjax/MathJax/blob/master/LICENSE). To report any issues or bugs, please go [here](https://github.com/wviechtb/mathjaxr/issues).
