% macro to load MathJax
%\newcommand{\loadmathjax}{\if{html}{\Sexpr[results=rd,stage=render]{if (nchar(system.file("doc/mathjax/es5/tex-chtml-full.js", package="mathjaxr")) && !nzchar(Sys.getenv("MATHJAXR_USECDN"))) '\\\\\\out{<script id="MathJax-script" async src="../../mathjaxr/doc/mathjax/es5/tex-chtml-full.js"></script>}' else '\\\\\\out{<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"></script>}'}}}
%\newcommand{\loadmathjax}{\if{html}{\Sexpr[results=rd,stage=render]{MATHJAXR_USECDN <- Sys.getenv("MATHJAXR_USECDN"); MATHJAXR_CDN <- Sys.getenv("MATHJAXR_CDN"); if (!nzchar(MATHJAXR_CDN)) MATHJAXR_CDN <- "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"; PATH <- system.file('doc/mathjax/es5/tex-chtml-full.js', package='mathjaxr'); TEXT <- paste0("if (nchar(\"", PATH, "\") && !nzchar(\"", MATHJAXR_USECDN, "\")) '\\\\\\\\\\\\\\out{<script id=\"MathJax-script\" async src=\"../../mathjaxr/doc/mathjax/es5/tex-chtml-full.js\"></script>}' else '\\\\\\\\\\\\\\out{<script id=\"MathJax-script\" async src=\"", MATHJAXR_CDN, "\"></script>}'"); eval(str2expression(TEXT))}}}
\newcommand{\loadmathjax}{\if{html}{\Sexpr[results=rd,stage=render]{MATHJAXR_USECDN <- Sys.getenv("MATHJAXR_USECDN"); MATHJAXR_CDN <- Sys.getenv("MATHJAXR_CDN"); if (!nzchar(MATHJAXR_CDN)) MATHJAXR_CDN <- "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"; PATH <- system.file("doc/mathjax/es5/tex-chtml-full.js", package="mathjaxr"); if (nchar(PATH) && !nzchar(MATHJAXR_USECDN)) '\\\\\\out{<script id="MathJax-script" async src="../../mathjaxr/doc/mathjax/es5/tex-chtml-full.js"></script>}' else paste0('\\\\\\out{<script id=\"MathJax-script\" async src=\"', MATHJAXR_CDN, '\"></script>}')}}}

% two-argument macros \mjeqn{latex}{ascii} and \mjdeqn{latex}{ascii}
\newcommand{\mjeqn}{\ifelse{html}{\emph{}\out{\(#1\)}}{\eqn{#1}{#2}}}
\newcommand{\mjdeqn}{\ifelse{html}{\out{\[#1\]}}{\deqn{#1}{#2}}}

% single-argument macros \mjseqn{latexascii} and \mjsdeqn{latexascii}
\newcommand{\mjseqn}{\ifelse{html}{\emph{}\out{\(#1\)}}{\eqn{#1}}}
\newcommand{\mjsdeqn}{\ifelse{html}{\out{\[#1\]}}{\deqn{#1}}}

% tripple-argument macros \mjteqn{pdflatex}{htmllatex}{ascii} and \mjtdeqn{pdflatex}{htmllatex}{ascii}
% \newcommand{\mjteqn}{\ifelse{latex}{\eqn{#1}}{\ifelse{html}{\out{\(#2\)}}{\eqn{#3}}}}
% \newcommand{\mjtdeqn}{\ifelse{latex}{\deqn{#1}}{\ifelse{html}{\out{\[#2\]}}{\deqn{#3}}}}
\newcommand{\mjteqn}{\if{latex}{\eqn{#1}}\if{html}{\emph{}\out{\(#2\)}}\if{text}{\eqn{#3}}}
\newcommand{\mjtdeqn}{\if{latex}{\deqn{#1}}\if{html}{\out{\[#2\]}}\if{text}{\deqn{#3}}}
