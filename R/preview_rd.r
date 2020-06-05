preview_rd <- function(Rdfile, view = TRUE, type = "html", verbose = FALSE) {

   if (missing(Rdfile))
      stop("Need to specify 'Rdfile' argument.")

   type <- match.arg(type, c("html", "txt", "text", "pdf"))

   if (type == "text")
      type <- "txt"

   # need to load MathJax from the CDN since the \mathjaxr macro
   # won't be able to load MathJax from the local installation
   mjcdn <- Sys.getenv("MATHJAXR_USECDN")
   on.exit(Sys.setenv(MATHJAXR_USECDN = mjcdn))
   Sys.setenv(MATHJAXR_USECDN = "TRUE")

   # list all .Rd and .rd files in the current dir
   Rdfiles <- list.files(pattern = ".*\\.Rd$")
   rdfiles <- list.files(pattern = ".*\\.rd$")

   # do the same for all files in the man subdir
   Rdfiles.man <- list.files(path = "man", pattern = ".*\\.Rd$")
   rdfiles.man <- list.files(path = "man", pattern = ".*\\.rd$")

   # check if Rdfile has an .Rd or .rd extension
   noext <- !is.element(substr(Rdfile, nchar(Rdfile)-2, nchar(Rdfile)), c(".Rd", ".rd"))

   # try to find the Rdfile first in the man subdir and then in the current dir
   if (paste0(Rdfile, ifelse(noext, ".Rd", "")) %in% Rdfiles.man) {
      Rdfile.loc <- paste0("man/", Rdfile, ifelse(noext, ".Rd", ""))
   } else if (paste0(Rdfile, ifelse(noext, ".rd", "")) %in% rdfiles.man) {
      Rdfile.loc <- paste0("man/", Rdfile, ifelse(noext, ".rd", ""))
   } else if (paste0(Rdfile, ifelse(noext, ".Rd", "")) %in% Rdfiles) {
      Rdfile.loc <- paste0(Rdfile, ifelse(noext, ".Rd", ""))
   } else if (paste0(Rdfile, ifelse(noext, ".rd", "")) %in% rdfiles) {
      Rdfile.loc <- paste0(Rdfile, ifelse(noext, ".rd", ""))
   } else {
      stop(paste0("Cannot find the specified Rd file in the current directory or in the 'man' subdirectory."))
   }

   if (verbose)
      message("Found Rd file: ", Rdfile.loc)

   # get environment with the mathjaxr and system macros
   # (might also want to check if package itself has/loads macros and merge these in as well)
   macros <- tools::loadPkgRdMacros(system.file(package = "mathjaxr"))
   macros <- tools::loadRdMacros(file.path(R.home("share"), "Rd", "macros", "system.Rd"), macros = macros)

   # generate name of temp file
   outfile <- paste0(file.path(tempdir(), Rdfile), ".", type)

   if (verbose)
      message("Creating preview file: ", outfile)

   if (type == "html") {

      # convert Rd to HTML version
      html <- tools::Rd2HTML(Rdfile.loc, outfile,
         macros = macros, permissive = TRUE,
         stylesheet = system.file("html/R.css", package = "mathjaxr"))

      # use viewer if available (as in RStudio); otherwise use browseURL()
      viewer <- getOption("viewer")
      if (!is.null(viewer)) {
         viewer(html)
      } else {
         if (view)
            utils::browseURL(html)
      }

   }

   if (type == "txt") {

      # convert Rd to text version and show file
      txt <- tools::Rd2txt(Rdfile.loc, outfile,
         macros = macros, permissive = TRUE)

      if (.Platform$GUI == "RStudio") {
         # RStudio tries to use its own pager for file.show(), but this doesn't work so well here
         # so we just brute-force the display on the console with readLines() and cat() ... :/
         out <- readLines(txt)
         for (i in seq_along(out)) {
            cat(out[i], "\n")
         }
      } else {
         if (view)
            file.show(txt)
      }

   }

   if (type == "pdf") {

      #cmd <- paste0("CMD Rd2pdf --no-index --no-description --force --batch --RdMacros=mathjaxr ", ifelse(view, "", "--no-preview"), " --output=", outfile, " ", Rdfile.loc)
      cmd <- paste0("CMD Rd2pdf --no-index --no-description --force --batch --RdMacros=mathjaxr --no-preview --output=", outfile, " ", Rdfile.loc)
      system2("R", cmd, wait=TRUE, stdout = ifelse(verbose >= 2, "", tempfile("stdout")))

      if (.Platform$OS.type == "windows") {
         shell.exec(outfile)
      } else {
         optb <- getOption("browser")
         if (is.function(optb)) {
            invisible(optb(outfile))
         } else {
            system(paste0(optb, " '", outfile, "'"))
         }
      }

   }

}
