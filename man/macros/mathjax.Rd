\newcommand{\loadmathjax}{\if{html}{\out{<script id="MathJax-script" async src="../../mathjaxr/doc/mathjax/es5/tex-mml-chtml.js"></script>}}}
\newcommand{\mjeqn}{\ifelse{latex}{\out{$#1$}}{\ifelse{html}{\out{\(#1\)}}{#2}}}
\newcommand{\mjdeqn}{\ifelse{latex}{\out{$$#1$$}}{\ifelse{html}{\out{\[#1\]}}{#2}}}
