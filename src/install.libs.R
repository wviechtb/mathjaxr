message(getwd())
srcdir <- "../javascript"
destdir <- "../inst/doc"
jsfiles <- list.files(srcdir, pattern = "[.]js$",
                      recursive = TRUE)
fontfiles <- list.files(srcdir, pattern = "[.]woff$",
                        recursive = TRUE)
for (f in jsfiles) {
  mini <- js::uglify_files(file.path(srcdir, f), unused = FALSE)
  dir <- file.path(destdir, dirname(f))
  if (!dir.exists(dir))
    dir.create(dir, recursive = TRUE)
  writeLines(mini, file.path(dir, basename(f)))
}
for (f in fontfiles) {
  dir <- file.path(destdir, dirname(f))
  if (!dir.exists(dir))
    dir.create(dir, recursive = TRUE)
  file.copy(file.path(srcdir, f),
            file.path(destdir, f))
}