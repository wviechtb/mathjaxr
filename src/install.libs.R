message(getwd())

mjdir <- "../inst/doc/mathjax"

jsfiles <- list.files(mjdir, pattern = "[.]js$",   recursive = TRUE)

minify <- requireNamespace("js", quietly = TRUE)

if (minify) {
   for (f in jsfiles) {
      dir <- file.path(mjdir, dirname(f))
      mini <- js::uglify_files(file.path(mjdir, f), unused = FALSE)
      writeLines(mini, file.path(dir, basename(f)))
   }
}
