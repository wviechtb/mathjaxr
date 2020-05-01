\name{mathjaxr-package}
\alias{mathjaxr-package}
\alias{mathjaxr}
\docType{package}
\title{mathjaxr for MathJax in Rd}
\description{
   \loadmathjax
   The \pkg{mathjaxr} package allows for easy inclusion of MathJax equations in Rd files. To make use of the package and its functionality, one needs to:

   \enumerate{
      \item add \code{mathjaxr} to \code{Imports} in the \code{DESCRIPTION} file,
      \item add \code{mathjaxr} to \code{RdMacros} in the \code{DESCRIPTION} file (or add \code{RdMacros: mathjaxr} if the \code{DESCRIPTION} file does not yet contain a \code{RdMacros} line),
      \item add \code{import(mathjaxr)} to the \code{NAMESPACE} file.
   }

   At the beginning of the \code{\\details{}} section of an \code{.Rd} file, one can then enable the use of MathJax by calling the \code{\\loadmathjax} macro that is provided by the package. An inline equation can then be added with the \code{\\mjeqn{latex}{ascii}} macro, with the \LaTeX commands for the equation given between the first curly brackets and the plain-text version of the equation given between the second curly brackets. With the \code{\\mjdeqn{latex}{ascii}} macro, one can add \sQuote{displayed equations} (as in \LaTeX's \code{displaymath} environment).
}
\section{Example}{
   The probability density function of a normal distribution is given by \mjdeqn{f(x) = \frac{1}{\sqrt{2\pi} \sigma} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2},}{f(x) = 1/(sqrt(2 pi) sigma) e^-((x - mu)^2/(2 sigma^2)),} where \mjeqn{\mu}{mu} denotes the mean of the distribution and \mjeqn{\sigma}{sigma} its standard deviation.
}
\author{
   Wolfgang Viechtbauer \email{wvb@metafor-project.org} \url{http://www.metafor-project.org/}
}
\keyword{package}
