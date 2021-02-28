\name{preview_rd}
\alias{preview_rd}
\title{Preview rendered version of an Rd file}
\description{
   Function to preview the rendered version of an Rd file.
}
\usage{
preview_rd(Rdfile, view = TRUE, type = "html", verbose = FALSE, dark = FALSE)
}
\arguments{
   \item{Rdfile}{character string with the name of the Rd file to preview (either with or without the \code{.Rd} or \code{.rd} extension).}
   \item{view}{logical indicating whether the rendered version of the help file should be displayed.}
   \item{type}{character string indicating which version should be rendered (either \code{"html"}, \code{"txt"}, or \code{"pdf"}).}
   \item{verbose}{logical indicating whether diagnostic output will be shown.}
   \item{dark}{logical indicating whether the rendererd HTML page should use a dark mode.}
}
\details{
   The function is useful when writing a help file that contains MathJax equations. Instead of having to reinstall the package under development to check if the equations are being rendered correctly, one can just set the current working directory to the root of the package (or its \code{man} directory) and then use \code{preview_rd()} to preview the HTML, plain-text, or PDF version of an Rd file on the fly.

   For \code{type="html"}, the HTML page will be opened in the browser with the \code{\link{browseURL}} function. When making further changes to the Rd file, reopening the page each time \code{preview_rd()} is called is inconvenient as this will usually open up a new tab in the browser. Setting \code{view=FALSE} prevents this. Reloading the page in the open tab should then reflect the updates. In RStudio, the generated HTML version will be displayed in the \sQuote{Viewer} pane and the \code{view} argument is then irrelevant.

   Setting \code{dark=TRUE} (in combination with \code{type="html"}) renders the HTML page in dark mode. Unfortunately, this does not work in RStudio.

   For \code{type="txt"} (or \code{type="text"}), the plain-text version of the help file will be shown (using the \code{\link{file.show}} function and directly on the console in RStudio).

   For \code{type="pdf"}, the PDF is generated using \command{R CMD Rd2pdf} and should open up in the default PDF viewer.
}
\note{
   Due to some limitations as to how MathJax can be loaded via the \pkg{mathjaxr} package, MathJax must be loaded via the CDN when using the \code{preview_rd()} function. Hence, rendering of equations in HTML will only work in the preview with an active internet connection.
}
\author{
   Wolfgang Viechtbauer \email{wvb@wvbauer.com} \url{https://www.wvbauer.com/}
}
\examples{
\dontrun{
setwd("/path/to/root/of/package")
preview_rd("someRdfile")
}
}
\keyword{utilities}
