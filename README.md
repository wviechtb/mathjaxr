mathjaxr: Using Mathjax in Rd Files
===================================

[![Build Status](https://travis-ci.org/wviechtb/mathjaxr.svg?branch=master)](https://travis-ci.org/wviechtb/mathjaxr)
![CRAN Version](https://www.r-pkg.org/badges/version/mathjaxr)
![devel Version](https://img.shields.io/badge/devel-0.2--0-brightgreen.svg)

## Description

The `mathjaxr` package allows for easy inclusion of [MathJax](https://www.mathjax.org/) equations in Rd files. To make use of the package and its functionality, one needs to:

1. add `mathjaxr` to `Imports` in the `DESCRIPTION` file,
2. add `mathjaxr` to `RdMacros` in the `DESCRIPTION` file (or add `RdMacros: mathjaxr` if the `DESCRIPTION` file does not yet contain a `RdMacros` entry),
3. add `import(mathjaxr)` to the `NAMESPACE` file.

One can then enable the use of MathJax by calling the `\loadmathjax` macro (that is provided by the `mathjaxr` package) within the `\description{}` section of an `.Rd` file.

An inline equation can then be added with the `\mjeqn{latex}{ascii}` macro, with the LaTeX commands for the equation given between the first set of curly brackets (which will be rendered in the HTML and PDF help pages) and the plain-text version of the equation given between the second set of curly brackets (which will be shown in the plain text help). With the `\mjdeqn{latex}{ascii}` macro, one can add 'displayed equations' (as in LaTeX's `displaymath` environment).

Note that (at the moment) one must always specify both arguments (i.e., the `latex` and the `ascii` versions of an equation).

## Installation

After installing the [remotes](https://cran.r-project.org/package=remotes) package with ```install.packages("remotes")```, the development version of the `mathjaxr` package can be installed with:
```r
remotes::install_github("wviechtb/mathjaxr")
```

## Meta

The `mathjaxr` package is licensed under the [GNU General Public License Version 2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt). To report any issues or bugs, please go [here](https://github.com/wviechtb/mathjaxr/issues).
