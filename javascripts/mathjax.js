window.MathJax = {
    loader: {load: ['[tex]/cancel']},
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true,
      
      packages: {'[+]': ['cancel']}
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };
  
  document$.subscribe(() => { 
    MathJax.typesetPromise()
  })

