% macro to load MathJax
\newcommand{\loadmathjax}{\if{html}{\Sexpr[results=rd,stage=render]{if (nchar(system.file("doc/mathjax/es5/tex-chtml-full.js", package="mathjaxr")) && !nzchar(Sys.getenv("MATHJAXR.USECDN"))) '\\\\\\out{<script id="MathJax-script" async src="../../mathjaxr/doc/mathjax/es5/tex-chtml-full.js"></script>}' else '\\\\\\out{<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"></script>}'}}}

% two-argument macros \mjeqn{latex}{ascii} and \mjdeqn{latex}{ascii}
%\newcommand{\mjeqn}{\ifelse{latex}{\eqn{#1}}{\ifelse{html}{\out{\(#1\)}}{\eqn{#2}}}}
%\newcommand{\mjdeqn}{\ifelse{latex}{\deqn{#1}}{\ifelse{html}{\out{\[#1\]}}{\deqn{#2}}}}
\newcommand{\mjeqn}{\ifelse{html}{\out{\(#1\)}}{\eqn{#1}{#2}}}
\newcommand{\mjdeqn}{\ifelse{html}{\out{\[#1\]}}{\deqn{#1}{#2}}}

% one-argument macros \mjseqn{latexascii} and \mjsdeqn{latexascii}
\newcommand{\mjseqn}{\ifelse{html}{\out{\(#1\)}}{\eqn{#1}}}
\newcommand{\mjsdeqn}{\ifelse{html}{\out{\[#1\]}}{\deqn{#1}}}
