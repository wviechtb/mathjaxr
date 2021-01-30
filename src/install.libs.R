srcdir  <- "../src"
destdir <- "../inst/doc"

jsfiles   <- list.files(srcdir, pattern = "[.]js$",   recursive = TRUE)
fontfiles <- list.files(srcdir, pattern = "[.]woff$", recursive = TRUE)

minify <- requireNamespace("js", quietly = TRUE)

for (f in jsfiles) {
   dir <- file.path(destdir, dirname(f))
   if (!dir.exists(dir))
      dir.create(dir, recursive = TRUE)
   if (minify) {
      mini <- js::uglify_files(file.path(srcdir, f), unused = FALSE)
      writeLines(mini, file.path(dir, basename(f)))
   } else {
      file.copy(file.path(srcdir, f), file.path(destdir, f))
   }
}

for (f in fontfiles) {
   dir <- file.path(destdir, dirname(f))
   if (!dir.exists(dir))
      dir.create(dir, recursive = TRUE)
   file.copy(file.path(srcdir, f), file.path(destdir, f))
}
