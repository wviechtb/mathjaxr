\name{myfun}
\alias{myfun}
\title{Example Help File}
\description{An example help file illustrating the use of MathJax.}
\usage{
myfun(x, \dots)
}
\arguments{
   \item{x}{an object.}
   \item{\dots}{other arguments.}
}
\details{
\if{html}{\out{
<script id="MathJax-script" async
  src="../mathjax/es5/tex-mml-chtml.js">
</script>
}}

   Stuff ...

   \if{html}{\out{\(B_{x(a,b)} = \int_0^x t^{a-1} (1-t)^{b-1} dt\)}}

}
\value{
   The function returns object \code{x}.
}
\author{
   Wolfgang Viechtbauer \email{wvb@metafor-project.org} \url{http://www.metafor-project.org/}
}
\examples{
myfun(1:5)
}
\keyword{utilities}
