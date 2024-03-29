
export type Book = {
  name: string;
  author: string;
  comment?: string;
  grUrl?: string;
  amznUrl?: string;
  pdfUrl?: string;
  stars?: number;
}

export const jobMap: Record<string, Book> = {
  "Mathematician": {
    name: "Categories for the Working Mathematician",
    author: "Saunders Mac Lane",
    comment: `This book is a true classic by Category Theory's inventor, which introduced Category Theory to the world stage.
      Best suited for experienced pure mathematicians looking to generalize their understanding of 
      different fields of mathematics.`,
    stars: 4.37,
    grUrl: "https://www.goodreads.com/book/show/1088482.Categories_for_the_Working_Mathematician",
    amznUrl: "https://amzn.to/3o0ucQa",
  },
  "Programmer": {
    name: "Category Theory for Programmers",
    author: "Bartosz Milewski",
    comment: `A highly regarded introduction to Category Theory for programmers. It is 
      especially thorough in relating Category Theory to its computational interpretation as a basis for
      Haskell-style Functional Programming.`,
    stars: 4.22,
    grUrl: "https://www.goodreads.com/book/show/33618151-category-theory-for-programmers",
    amznUrl: "https://amzn.to/3mt6JXs",
    pdfUrl: "https://github.com/hmemcpy/milewski-ctfp-pdf/releases/download/v1.3.0/category-theory-for-programmers.pdf",
  },
  "Philosopher": {
    name: "Categories for the Working Philosopher",
    author: "Elaine Landry",
    comment: `A series of essays on Category Theory in a philosophical context. In particular, it discusses 
      Categories and Type Theories as foundations for logics, connections with Structuralism and Semiotics, 
      and the philosophical implications of categorical models of science.`,
    stars: 4.33,
    grUrl: "https://www.goodreads.com/book/show/35553023-categories-for-the-working-philosopher",
    amznUrl: "https://amzn.to/3zWuz18",
  },
  "Scientist": {
    name: "Category Theory for the Sciences",
    author: "David Spivak",
    comment: `An introduction to methods for applying Categorical methods to scientific knowledge. It is deeply inspired
      by Spivak's extensive work relating Categories to Databases, and unusually for an introductory work, contains a
      discussion of Operads (which are usually encountered much later, despite being very useful.) An early, incomplete preprint of this book is also available on arxiv.`,
    stars: 4.00,
    grUrl: "https://www.goodreads.com/book/show/22104593-category-theory-for-the-sciences",
    amznUrl: "https://amzn.to/3zVfFIs",
  },
  "Computer Scientist": {
    name: "Basic Category Theory for Computer Scientists",
    author: "Benjamin Pierce",
    comment: `A short survey of Category-Theoretic constructions and their applications in computer science.
      In particular, it tries to introduce the applications and implications of Category Theory to the 
      formulation and solution of various problems inj theoretical computers science.`,
    stars: 3.55,
    grUrl: "https://www.goodreads.com/book/show/1810837.Basic_Category_Theory_for_Computer_Scientists",
    amznUrl: "https://amzn.to/3nY1dwn",
  },
  "Software Engineer": {
    name: "Categories for Software Engineering",
    author: "José Fiadeiro",
    comment: `A general introduction to Category Theory with an emphasis on applications to software engineering.
      It is distinguished from the similar-sounding introductions for "Computer Scientists" and "Programmers" by 
      the special care taken to describing Categorical approaches to data modelling 
      and software architecture design.`,
    stars: 3.40,
    grUrl: "https://www.goodreads.com/book/show/2063692.Categories_for_Software_Engineering",
    amznUrl: "https://amzn.to/3o8bZjT",
  },
  "Baker": {
    name: "How to Bake Pi: An Edible Exploration of the Mathematics of Mathematics",
    author: "Eugenia Cheng",
    comment: `An extremely accessible introduction to Category Theory for a general audience, with examples drawing
      on recipes for baking, cooking, and other kitchen activities. Along with Eugenia's other works, this is 
      probably the most understandable book on Category Theory, requiring only basic arithmetic as a prerequisite.`,
    stars: 3.61,
    grUrl: "https://www.goodreads.com/book/show/23360039-how-to-bake-pi",
    amznUrl: "https://amzn.to/41h2r4w",
  },
  "Quantum Theorist": {
    name: "Categories for Quantum Theory",
    author: "Chris Heunen, Jamie Vicary",
    comment: `A thorough introduction to monoidal categories, dagger categories, and their relation
      to Categorical models of quantum mechanics.`,
    stars: 4.17,
    grUrl: "https://www.goodreads.com/book/show/45913254-categories-for-quantum-theory",
    amznUrl: "https://amzn.to/407yPp3",
  },
  "Musician": {
    name: "Cool Math for Hot Music: A First Introduction to Mathematics for Music Theorists",
    author: "Guerino Mazzola, Maria Mannone, Yan Pang",
    comment: `A much less imposing read than the rest of Mazzola's infamous music-theoretical work,
      this book only lightly delves comparatively lightly into Categories, preferring to spend more
      time on prerequesites and musical compositions.`,
    stars: 3.8,
    grUrl: "https://www.goodreads.com/book/show/33638876-cool-math-for-hot-music",
    amznUrl: "https://amzn.to/43qS3Jc",
  },
  "Physicist": {
    name: "Categories for the Practising Physicist",
    author: "Bob Coecke, Éric Paquette",
    comment: `This work has been published as a paper only. Rapidly introduces monoidal categories, 
      diagrammatic models of quantum mechanics, and cobordism theory, along with the ways that each
      manifests in physical phenomena.`,
    pdfUrl: "https://arxiv.org/pdf/0905.3010.pdf",
  },
  "Designer": {
    name: "An invitation to Category Theory for Designers",
    author: "Edmund Harriss, Rhett Gayle",
    comment: `This is a non-technical poster. It attempts to structure various aspects of physical and graphical design
      according to Categorical principles and motivations.`,
    pdfUrl: "https://www.antiatlas-journal.net/03-an-invitation-to-category-theory-for-designers",
  },
  "Artist": {
    name: "cARTegory Theory: Framing Aesthetics of Mathematics",
    author: "Maria Mannone",
    comment: `This was published as a paper only. It mainly concerns philosophical applications of Categorical thinking to the 
      process of brainstorming artworks`,
    pdfUrl: "https://scholarship.claremont.edu/cgi/viewcontent.cgi?article=1519&context=jhm",
  },
  "Engineer": {
    name: "Category Theory: a Foundation for Engineering Modelling",
    author: "Henson Graves",
    comment: `This was published as a paper only. Discusses Category Theory in relation to UML and other
      languages used in engineering modelling.`,
    pdfUrl: "https://www.omgwiki.org/MBSE/lib/exe/fetch.php?media=mbse:mathemataical_foundation_engineering.pdf",
  },
  "Geneticist": {
    name: "Category Theory for Genetics",
    author: "Rémy Tuyéras",
    comment: `This was published as a paper only. Contains a lot of extremely specific examples and renamings
      which make this far more understandable to biologists.`,
    pdfUrl: "https://arxiv.org/pdf/1708.05255.pdf",
  },
  "Hacker": {
    name: "Categories for the Working Hacker",
    author: "Philip Wadler",
    comment: "This was a conference presentation at Strange loop 2018. The name fits the theme of this site so it stays.",
    pdfUrl: "https://www.thestrangeloop.com/2018/categories-for-the-working-hacker.html",
  },
  "Dummy": {
    name: "Category Theory for Dummies",
    author: "James Cheney",
    comment: "This was published as a slideshow only.",
    pdfUrl: "https://homepages.inf.ed.ac.uk/jcheney/presentations/ct4d1.pdf",
  },
  "Logician": {
    name: "Category Theory for Linear Logicians",
    author: "Richard Blute, Philip Scott",
    comment: `This was published as a paper only. As suggested by the title, it is primarily concerned with building up 
      the prerequisites for understanding Categorical models of Linear Logic.`,
    pdfUrl: "https://www.site.uottawa.ca/~phil/papers/catsurv.web.pdf",
  }
}