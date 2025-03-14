mathjaxr: Using Mathjax in Rd Files
===================================

[![R build status](https://github.com/wviechtb/mathjaxr/workflows/R-CMD-check/badge.svg)](https://github.com/wviechtb/mathjaxr/actions)
[![CRAN Version](https://www.r-pkg.org/badges/version/mathjaxr)](https://cran.r-project.org/package=mathjaxr)
![devel Version](https://img.shields.io/badge/devel-1.7--2-brightgreen.svg)

## Description

The `mathjaxr` package allows for easy inclusion of [MathJax](https://www.mathjax.org/) equations in Rd files. Package authors wanting to make use of the package and its functionality need to:

1. install the `mathjaxr` package,
2. add `mathjaxr` to `Imports` in the `DESCRIPTION` file of their package,
3. add `mathjaxr` to `RdMacros` in the `DESCRIPTION` file of their package (or add `RdMacros: mathjaxr` if the `DESCRIPTION` file does not yet contain a `RdMacros` entry),
4. add `BuildManual: TRUE` to the `DESCRIPTION` file,
5. add `import(mathjaxr)` in the `NAMESPACE` file of their package.

One can then enable the use of MathJax by calling the `\loadmathjax` macro (that is provided by the `mathjaxr` package) within the `\description{}` section of an Rd file (or within the `@description` section when using `roxygen2`).

An inline equation can then be added with the `\mjeqn{latex}{ascii}` macro, with the LaTeX commands for the equation given between the first set of curly brackets (which will be rendered in the HTML and PDF help pages) and the plain-text version of the equation given between the second set of curly brackets (which will be shown in the plain text help). With the `\mjdeqn{latex}{ascii}` macro, one can add 'displayed equations' (as in LaTeX's `displaymath` environment).

Single argument versions of these macros, `\mjseqn{latexascii}` and `\mjsdeqn{latexascii}`, are also available. For the relatively rare case that one must specify different LaTeX commands for the PDF and HTML pages, there are also triple argument versions of these macros, namely `\mjteqn{pdflatex}{htmllatex}{ascii}` and `\mjtdeqn{pdflatex}{htmllatex}{ascii}`.

## Details

The Javascript code for MathJax is contained in this package. If a user viewing a help page has `mathjaxr` installed, it will be retrieved from there, otherwise it will be retrieved from the CDN site https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js. To force use of the CDN site, the user can set the environment variable `MATHJAXR_USECDN` to any non-blank value (e.g., `Sys.setenv(MATHJAXR_USECDN=TRUE)`). The URL for a diferent CDN can be specified via the environment variable `MATHJAXR_CDN`.

## Notes/Issues

- Care must be taken when using the less-than and greater-than symbols in equations as these might get interpreted by the browser as HTML tags. See [here](https://docs.mathjax.org/en/latest/input/tex/html.html) for further details. Adding space around these symbols should solve this problem (e.g., instead of writing `\mjseqn{i<j}`, write `\mjseqn{i < j}`). Do not use the `\lt` and `\gt` macros provided by MathJax as these will cause problems when rendering the PDF help pages.
- Curly braces/brackets in equations also cause problems. Using `\lbrace` and `\rbrace` (possibly in combination with `\left` and `\right` to make them sufficiently large) is a solution (e.g., `\mjeqn{\left\lbrace ... \right\rbrace}{\{...\}}` should render nicely in the PDF/HTML help pages and the plain-text version).
- Using the percent symbol (i.e., %) inside of equations is also problematic. The percent symbol needs to be 'escaped' by using a backslash, but backslashes need to be escaped as well. For this to work, we need to use the correct number of backslashes, which works slightly differently when producing the PDF, HTML, and plain-text help pages. The equation `\mjteqn{100\\\%}{100\\\\\\\%}{100\\%}` should be rendered correctly in all three help pages.
- While MathJax supports a large number of LaTeX commands, only the math-mode commands are implemented. See [here](https://docs.mathjax.org/en/latest/input/tex/macros/index.html) for a list of the supported commands.
- When using R via an RStudio Server, MathJax equations in the help files are not automatically rendered (this is not a problem on RStudio Desktop). A solution to get the rendering to work in RStudio Server is to add `server-add-header=X-Content-Type-Options:` to `/etc/rstudio/rserver.conf` (and then restarting the server). This of course requires admin rights on the machine running the server.

## Example

The probability density function of a normal distribution is given by $$f(x) = \frac{1}{\sqrt{2\pi} \sigma} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$$ where $\mu$ denotes the mean of the distribution and $\sigma$ its standard deviation.

## Installation

The current official (i.e., [CRAN](https://cran.r-project.org/package=mathjaxr)) release can be installed within R with:

```r
install.packages("mathjaxr")
```

The development version of the package can be installed with:

```r
install.packages("remotes")
remotes::install_github("wviechtb/mathjaxr")
```

This builds the package from source based on the current version on [GitHub](https://github.com/wviechtb/mathjaxr). Note that Windows users must have [Rtools](https://cran.r-project.org/bin/windows/Rtools/rtools40.html) installed for this to work.

## Meta

The `mathjaxr` package is licensed under the [GNU General Public License Version 3](https://www.gnu.org/licenses/gpl-3.0.txt), while MathJax itself is licensed under the [Apache License, Version 2.0](https://github.com/mathjax/MathJax/blob/master/LICENSE). To report any issues or bugs, please go [here](https://github.com/wviechtb/mathjaxr/issues).
