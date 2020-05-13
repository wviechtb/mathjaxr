\name{preview_rd}
\alias{preview_rd}
\title{Preview HTML version of an Rd file}
\description{
   Function to preview the HTML version of an Rd file.
}
\usage{
preview_rd(Rdfile, view=TRUE)
}
\arguments{
   \item{Rdfile}{Character string with the name of the Rd file to preview (either with or without the \code{.Rd} or \code{.rd} extension).}
   \item{view}{Logical indicating whether the generated HTML version should be loaded with the \code{\link{browseURL}} function (default is \code{TRUE}).}
}
\details{
   The function is useful when writing a help file that contains one or multiple MathJax equations. Instead of having to reinstall the package under development to check if the equations are being rendered correctly, one can just set the current working directory to the root of the package (or its \code{man} directory) and then use \code{preview_rd()} to preview the HTML version of an Rd file on the fly.

   By default (i.e., when \code{view=TRUE}), the HTML page will be opened in the browser with the \code{\link{browseURL}} function. When making further changes to the Rd file, reopening the page each time \code{preview_rd()} is called is inconvenient as this will usually open up a new tab in the browser. Setting \code{view=FALSE} prevents this. Reloading the page in the open tab should then reflect the updates.

   Due to some limitations as to how MathJax can be loaded via the \pkg{mathjaxr} package, MathJax must be loaded via the CDN. Hence, rendering of equations will only work with an active internet connection.
}
\author{
   Wolfgang Viechtbauer \email{wvb@wvbauer.com} \url{http://www.wvbauer.com/}
}
\keyword{utilities}
