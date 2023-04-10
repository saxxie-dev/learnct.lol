
export type Book = {
  name: string;
  author: string;
  grUrl?: string;
  amznUrl?: string;
  pdfUrl?: string;
  stars?: number;
}

export const jobMap: Record<string, Book> = {
  "Programmer": {
    name: "Category Theory for Programmers",
    author: "Bartosz Milewski",
    stars: 4.22,
    grUrl: "https://www.goodreads.com/book/show/33618151-category-theory-for-programmers",
    amznUrl: "https://www.amazon.com/Category-Theory-Programmers-Bartosz-Milewski/dp/0464243874",
    pdfUrl: "https://github.com/hmemcpy/milewski-ctfp-pdf/releases/download/v1.3.0/category-theory-for-programmers.pdf",
  },
  "Philosopher": {
    name: "Categories for the Working Philosopher",
    author: "Elaine Landry",
    stars: 4.33,
    grUrl: "https://www.goodreads.com/book/show/35553023-categories-for-the-working-philosopher",
    amznUrl: "https://www.amazon.com/Categories-Working-Philosopher-Elaine-Landry/dp/019874899X",
  },
  "Mathematician": {
    name: "Categories for the Working Mathematician",
    author: "Saunders Mac Lane",
    stars: 4.37,
    grUrl: "https://www.goodreads.com/book/show/1088482.Categories_for_the_Working_Mathematician",
    amznUrl: "https://www.amazon.com/Categories-Working-Mathematician-Graduate-Mathematics/dp/0387984038",
  },
  "Scientist": {
    name: "Category Theory for the Sciences",
    author: "David Spivak",
    stars: 4.00,
    grUrl: "https://www.goodreads.com/book/show/22104593-category-theory-for-the-sciences",
    amznUrl: "https://www.amazon.com/Category-Theory-Sciences-MIT-Press/dp/0262028131",
    pdfUrl: "https://arxiv.org/pdf/1302.6946.pdf",
  },
  "Computer Scientist": {
    name: "Basic Category Theory for Computer Scientists",
    author: "Benjamin Pierce",
    stars: 3.55,
    grUrl: "https://www.goodreads.com/book/show/1810837.Basic_Category_Theory_for_Computer_Scientists",
    amznUrl: "https://www.amazon.com/Category-Computer-Scientists-Foundations-Computing/dp/0262660717",
  },
  "Software Engineer": {
    name: "Categories for Software Engineering",
    author: "Jose Fiadeiro",
    stars: 3.40,
    grUrl: "https://www.goodreads.com/book/show/2063692.Categories_for_Software_Engineering",
    amznUrl: "https://www.amazon.com/gp/product/3540209093",
  },
  "Baker": {
    name: "How to Bake Pi",
    author: "Eugenia Cheng",
    stars: 3.61,
    grUrl: "https://www.goodreads.com/book/show/23360039-how-to-bake-pi",
    amznUrl: "https://www.amazon.com/How-Bake-Pi-Exploration-Mathematics/dp/0465097677",
  },
  "Quantum Theorist": {
    name: "Categories for Quantum Theory",
    author: "Chris Heunen, Jamie Vicary",
    stars: 4.17,
    grUrl: "https://www.goodreads.com/book/show/45913254-categories-for-quantum-theory",
    amznUrl: "https://www.amazon.com/Categories-Quantum-Theory-Introduction-Mathematics/dp/0198739613",
  },
  "Music Theorist": {
    name: "Cool Math for Hot Music: A First Introduction to Mathematics for Music Theorists",
    author: "Guerino Mazzola, Maria Mannone, Yan Pang",
    stars: 3.8,
    grUrl: "https://www.goodreads.com/book/show/33638876-cool-math-for-hot-music",
    amznUrl: "https://www.amazon.com/Cool-Math-for-Hot-Music-A-First-Introduction-to-Mathematics-for-Music-Theorists-Computational-Music-Science/dp/3319429353",
  }
};

export const bonusMap: Record<string, Book> = {
  "Physicist": {
    name: "Categories for the Practising Physicist",
    author: "Bob Coecke, Eric Paquette",
    pdfUrl: "https://arxiv.org/pdf/0905.3010.pdf",
  },
  "Designer": {
    name: "An invitation to Category Theory for Designers",
    author: "Edmund Harriss, Rhett Gayle",
    pdfUrl: "https://www.antiatlas-journal.net/03-an-invitation-to-category-theory-for-designers",
  },
  "Artist": {
    name: "cARTegory Theory: Framing Aesthetics of Mathematics",
    author: "Maria Mannone",
    pdfUrl: "https://scholarship.claremont.edu/cgi/viewcontent.cgi?article=1519&context=jhm",
  },
  "Engineer": {
    name: "Category Theory: a Foundation for Engineering Modelling",
    author: "Henson Graves",
    pdfUrl: "https://www.omgwiki.org/MBSE/lib/exe/fetch.php?media=mbse:mathemataical_foundation_engineering.pdf",
  },
  "Geneticist": {
    name: "Category Theory for Genetics",
    author: "Remy Tuyeras",
    pdfUrl: "https://arxiv.org/pdf/1708.05255.pdf",
  },
  "Hacker": {
    name: "Categories for the Working Hacker",
    author: "Philip Wadler",
    pdfUrl: "https://www.thestrangeloop.com/2018/categories-for-the-working-hacker.html",
  },
  "Dummy": {
    name: "Category Theory for Dummies",
    author: "James Cheney",
    pdfUrl: "https://homepages.inf.ed.ac.uk/jcheney/presentations/ct4d1.pdf",
  },
  "Linear Logician": {
    name: "Category Theory for Linear Logicians",
    author: "Richard Blute, Philip Scott",
    pdfUrl: "https://www.site.uottawa.ca/~phil/papers/catsurv.web.pdf",
  }
}