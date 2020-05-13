preview_rd <- function(Rdfile, view = TRUE) {

   # need to load MathJax from the CDN since the \mathjaxr macro
   # won't be able to load MathJax from the local installation
   mjcdn <- Sys.getenv("MATHJAXR.USECDN")
   on.exit(Sys.setenv(MATHJAXR.USECDN = mjcdn))
   Sys.setenv(MATHJAXR.USECDN = "TRUE")

   # list all .Rd and .rd files in the current dir
   Rdfiles <- list.files(pattern = ".*\\.Rd$")
   rdfiles <- list.files(pattern = ".*\\.rd$")

   # do the same for all files in the man subdir
   Rdfiles.man <- list.files(path = "man", pattern = ".*\\.Rd$")
   rdfiles.man <- list.files(path = "man", pattern = ".*\\.rd$")

   # check if Rdfile has an .Rd or .rd extension
   noext <- !is.element(substr(Rdfile, nchar(Rdfile)-2, nchar(Rdfile)), c(".Rd", ".rd"))

   # try to find Rdfile first in the man subdir and then in the current dir
   if (paste0(Rdfile, ifelse(noext, ".Rd", "")) %in% Rdfiles.man) {
      Rdfile.loc <- paste0("man/", Rdfile, ifelse(noext, ".Rd", ""))
   } else if (paste0(Rdfile, ifelse(noext, ".rd", "")) %in% rdfiles.man) {
      Rdfile.loc <- paste0("man/", Rdfile, ifelse(noext, ".rd", ""))
   } else if (paste0(Rdfile, ifelse(noext, ".Rd", "")) %in% Rdfiles) {
      Rdfile.loc <- paste0(Rdfile, ifelse(noext, ".Rd", ""))
      in.man <- FALSE
   } else if (paste0(Rdfile, ifelse(noext, ".rd", "")) %in% rdfiles) {
      Rdfile.loc <- paste0(Rdfile, ifelse(noext, ".rd", ""))
      in.man <- FALSE
   } else {
      stop(paste0("Cannot find the specified Rdfile in the current directory or in the 'man' subdirectory."))
   }

   # get environments with the mathjaxr and system macros and 'merge' them
   env.mathjaxr <- tools::loadPkgRdMacros(system.file("", package = "mathjaxr"))
   env.system <- tools::loadRdMacros(file.path(R.home("share"), "Rd", "macros", "system.Rd"))
   parent.env(env.mathjaxr) <- env.system

   # generate name of temp file
   outfile <- paste0(file.path(tempdir(), Rdfile), ".html")

   # convert Rd to HTML
   html <- tools::Rd2HTML(Rdfile.loc, outfile,
      macros = env.mathjaxr,
      stylesheet = system.file("html/R.css", package = "mathjaxr"),
      permissive = TRUE)

   if (view)
      utils::browseURL(html)

}
