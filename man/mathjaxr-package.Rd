\name{mathjaxr-package}
\alias{mathjaxr-package}
\alias{mathjaxr}
\docType{package}
\title{Using MathJax in Rd Files}
\description{
   \loadmathjax
   The \pkg{mathjaxr} package allows for easy inclusion of \href{https://www.mathjax.org/}{MathJax} equations in Rd files. To make use of the package and its functionality, one needs to:

   \enumerate{
      \item add \verb{mathjaxr} to \verb{Suggests} or \verb{Imports}  in the \file{DESCRIPTION} file,
      \item add \verb{mathjaxr} to \verb{RdMacros} in the \file{DESCRIPTION} file (or add \verb{RdMacros: mathjaxr} if the \file{DESCRIPTION} file does not yet contain a \verb{RdMacros} entry)
   }

   One can then enable the use of MathJax by calling the \code{\\loadmathjax} macro (that is provided by the \pkg{mathjaxr} package) within the \code{\\description{}} section of an \code{.Rd} file.

   An inline equation can then be added with the \code{\\mjeqn{latex}{ascii}} macro, with the \LaTeX commands for the equation given between the first set of curly brackets (which will be rendered in the HTML and PDF help pages) and the plain-text version of the equation given between the second set of curly brackets (which will be shown in the plain text help). With the \code{\\mjdeqn{latex}{ascii}} macro, one can add \sQuote{displayed equations} (as in \LaTeX's \code{displaymath} environment).

   Note that (at the moment) one must always specify both arguments (i.e., the \code{latex} and the \code{ascii} versions of an equation).
}
\section{Example}{
   The probability density function of a normal distribution is given by \mjdeqn{f(x) = \frac{1}{\sqrt{2\pi} \sigma} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2},}{f(x) = 1/(sqrt(2 pi) sigma) e^-((x - mu)^2/(2 sigma^2)),} where \mjeqn{\mu}{mu} denotes the mean of the distribution and \mjeqn{\sigma}{sigma} its standard deviation.
}
\details{
The Javascript code for MathJax is contained in this
package.  If a user viewing a help page has \pkg{mathjaxr}
installed, it will be retrieved from there, otherwise
it will be retrieved from the CDN site 
\url{https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js}.
To force use of the CDN site, the user can set the 
environment variable \env{MATHJAXR.USECDN} to any
non-blank value.
}
\author{
   Wolfgang Viechtbauer \email{wvb@wvbauer.com} \url{http://www.wvbauer.com/}
}
\keyword{package}
