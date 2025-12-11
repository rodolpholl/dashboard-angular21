// In-memory database for authors
let authors = [
  {
    id: 1,
    name: 'Clarice Lispector',
    email: 'clarice@example.com',
    estiloPredominante: 'ficção científica', // Mantido conforme original, embora seja incomum
    books: [
      {
        id: 101,
        nome: 'A Hora da Estrela',
        isbn: '978-8532530499',
        estilo: 'romance',
        numPaginas: 88,
        dataLancamento: '1977-10-26',
        sinopse: 'A história de Macabéa, uma nordestina órfã, virgem e inculta que vem para o Rio de Janeiro.',
        publicAlvo: 'Adulto'
      },
      {
        id: 102,
        nome: 'Perto do Coração Selvagem',
        isbn: '978-8532506043',
        estilo: 'romance',
        numPaginas: 224,
        dataLancamento: '1943-12-01',
        sinopse: 'Romance de estreia que revolucionou a literatura brasileira com seu fluxo de consciência.',
        publicAlvo: 'Adulto'
      },
      {
        id: 103,
        nome: 'Laços de Família',
        isbn: '978-8532503257',
        estilo: 'arte',
        numPaginas: 168,
        dataLancamento: '1960-01-01',
        sinopse: 'Coletânea de contos que dissecam as relações familiares e o cotidiano.',
        publicAlvo: 'Adulto'
      },
      {
        id: 104,
        nome: 'A Paixão Segundo G.H.',
        isbn: '978-8532512907',
        estilo: 'filosofia',
        numPaginas: 176,
        dataLancamento: '1964-01-01',
        sinopse: 'Uma mulher, após demitir a empregada, encontra uma barata em seu quarto e vive uma epifania existencial.',
        publicAlvo: 'Adulto'
      }
    ]
  },
  {
    id: 2,
    name: 'Jorge Amado',
    email: 'jorge@example.com',
    estiloPredominante: 'romance',
    books: [
      {
        id: 201,
        nome: 'Capitães da Areia',
        isbn: '978-8535911874',
        estilo: 'romance',
        numPaginas: 280,
        dataLancamento: '1937-01-01',
        sinopse: 'A vida de um grupo de menores abandonados, os Capitães da Areia, na Salvador dos anos 30.',
        publicAlvo: 'Jovem Adulto'
      },
      {
        id: 202,
        nome: 'Gabriela, Cravo e Canela',
        isbn: '978-8535921828',
        estilo: 'romance',
        numPaginas: 344,
        dataLancamento: '1958-01-01',
        sinopse: 'Um romance urbano que se passa em Ilhéus durante os anos 20, com foco na mudança de costumes.',
        publicAlvo: 'Adulto'
      },
      {
        id: 203,
        nome: 'Dona Flor e Seus Dois Maridos',
        isbn: '978-8535911706',
        estilo: 'romance',
        numPaginas: 504,
        dataLancamento: '1966-01-01',
        sinopse: 'A história de Florípedes e seus dois casamentos: um com o boêmio Vadinho e outro com o farmacêutico Teodoro.',
        publicAlvo: 'Adulto'
      },
      {
        id: 204,
        nome: 'Tieta do Agreste',
        isbn: '978-8535914080',
        estilo: 'romance',
        numPaginas: 656,
        dataLancamento: '1977-01-01',
        sinopse: 'Tieta retorna rica à sua cidade natal para se vingar da hipocrisia de sua família e vizinhos.',
        publicAlvo: 'Adulto'
      }
    ]
  },
  {
    id: 3,
    name: 'Paulo Coelho',
    email: 'paulo@example.com',
    estiloPredominante: 'auto-ajuda',
    books: [
      {
        id: 301,
        nome: 'O Alquimista',
        isbn: '978-0062315007',
        estilo: 'aventura',
        numPaginas: 208,
        dataLancamento: '1988-01-01',
        sinopse: 'A jornada de um pastor andaluz em busca de um tesouro nas pirâmides do Egito.',
        publicAlvo: 'Geral'
      },
      {
        id: 302,
        nome: 'O Diário de um Mago',
        isbn: '978-8575421570',
        estilo: 'auto-ajuda',
        numPaginas: 272,
        dataLancamento: '1987-01-01',
        sinopse: 'Relato da peregrinação do autor pelo Caminho de Santiago de Compostela.',
        publicAlvo: 'Adulto'
      },
      {
        id: 303,
        nome: 'Brida',
        isbn: '978-8575423857',
        estilo: 'romance',
        numPaginas: 272,
        dataLancamento: '1990-01-01',
        sinopse: 'A história de uma jovem irlandesa e sua busca pelo conhecimento e magia.',
        publicAlvo: 'Jovem Adulto'
      },
      {
        id: 304,
        nome: 'Veronika Decide Morrer',
        isbn: '978-8575423611',
        estilo: 'romance',
        numPaginas: 256,
        dataLancamento: '1998-01-01',
        sinopse: 'Veronika, aparentemente com tudo na vida, decide cometer suicídio, mas falha e acorda em um hospital psiquiátrico.',
        publicAlvo: 'Adulto'
      }
    ]
  },
  {
    id: 4,
    name: 'Machado de Assis',
    email: 'machado@example.com',
    estiloPredominante: 'documentário', // Mantido original
    books: [
      {
        id: 401,
        nome: 'Dom Casmurro',
        isbn: '978-8572325086',
        estilo: 'romance',
        numPaginas: 256,
        dataLancamento: '1899-01-01',
        sinopse: 'A duvida de Bentinho sobre a traição de Capitu.',
        publicAlvo: 'Adulto'
      },
      {
        id: 402,
        nome: 'Memórias Póstumas de Brás Cubas',
        isbn: '978-8596005834',
        estilo: 'romance',
        numPaginas: 320,
        dataLancamento: '1881-01-01',
        sinopse: 'Brás Cubas narra sua própria vida após a morte, com ironia e pessimismo.',
        publicAlvo: 'Adulto'
      },
      {
        id: 403,
        nome: 'O Alienista',
        isbn: '978-8525410972',
        estilo: 'ficção científica', // Sátira, mas pode aproximar
        numPaginas: 96,
        dataLancamento: '1882-01-01',
        sinopse: 'O Dr. Simão Bacamarte funda um hospício e começa a internar toda a cidade de Itaguaí.',
        publicAlvo: 'Geral'
      },
      {
        id: 404,
        nome: 'Quincas Borba',
        isbn: '978-8508170889',
        estilo: 'romance',
        numPaginas: 240,
        dataLancamento: '1891-01-01',
        sinopse: 'A trajetória de Rubião, um professor que herda uma fortuna e a filosofia "Humanitismo".',
        publicAlvo: 'Adulto'
      }
    ]
  },
  {
    id: 5,
    name: 'Cecília Meireles',
    email: 'cecilia@example.com',
    estiloPredominante: 'poesia',
    books: [
      {
        id: 501,
        nome: 'Romanceiro da Inconfidência',
        isbn: '978-8526019556',
        estilo: 'poesia',
        numPaginas: 336,
        dataLancamento: '1953-01-01',
        sinopse: 'Poema épico-lírico sobre a Inconfidência Mineira.',
        publicAlvo: 'Geral'
      },
      {
        id: 502,
        nome: 'Ou Isto ou Aquilo',
        isbn: '978-8526015589',
        estilo: 'poesia',
        numPaginas: 64,
        dataLancamento: '1964-01-01',
        sinopse: 'Clássico da poesia infantil brasileira.',
        publicAlvo: 'Infantil'
      },
      {
        id: 503,
        nome: 'Viagem',
        isbn: '978-8520935579',
        estilo: 'poesia',
        numPaginas: 152,
        dataLancamento: '1939-01-01',
        sinopse: 'Obra que consagrou a autora, com temas de efemeridade e espiritualidade.',
        publicAlvo: 'Adulto'
      }
    ]
  },
  {
    id: 6,
    name: 'João Guimarães Rosa',
    email: 'joao@example.com',
    estiloPredominante: 'ação', // Mantido original
    books: [
      {
        id: 601,
        nome: 'Grande Sertão: Veredas',
        isbn: '978-8520925709',
        estilo: 'romance',
        numPaginas: 600,
        dataLancamento: '1956-01-01',
        sinopse: 'Riobaldo narra sua vida de jagunço e seu amor por Diadorim no sertão mineiro.',
        publicAlvo: 'Adulto'
      },
      {
        id: 602,
        nome: 'Sagarana',
        isbn: '978-8520923057',
        estilo: 'aventura',
        numPaginas: 384,
        dataLancamento: '1946-01-01',
        sinopse: 'Coletânea de contos que retratam o sertão com linguagem inovadora.',
        publicAlvo: 'Adulto'
      },
      {
        id: 603,
        nome: 'Primeiras Estórias',
        isbn: '978-8520923064',
        estilo: 'arte',
        numPaginas: 224,
        dataLancamento: '1962-01-01',
        sinopse: 'Contos curtos que exploram a essência humana e o misticismo.',
        publicAlvo: 'Adulto'
      }
    ]
  },
  {
    id: 7,
    name: 'Carlos Drummond de Andrade',
    email: 'carlos@example.com',
    estiloPredominante: 'arte',
    books: [
      {
        id: 701,
        nome: 'Sentimento do Mundo',
        isbn: '978-8535919658',
        estilo: 'poesia',
        numPaginas: 88,
        dataLancamento: '1940-01-01',
        sinopse: 'Poemas que refletem as angústias da Segunda Guerra e a realidade brasileira.',
        publicAlvo: 'Adulto'
      },
      {
        id: 702,
        nome: 'Alguma Poesia',
        isbn: '978-8535922320',
        estilo: 'poesia',
        numPaginas: 96,
        dataLancamento: '1930-01-01',
        sinopse: 'Obra de estreia do autor, com o famoso "Poema de Sete Faces".',
        publicAlvo: 'Geral'
      },
      {
        id: 703,
        nome: 'Claro Enigma',
        isbn: '978-8535921866',
        estilo: 'poesia',
        numPaginas: 128,
        dataLancamento: '1951-01-01',
        sinopse: 'Fase mais filosófica e formal do poeta.',
        publicAlvo: 'Adulto'
      },
      {
        id: 704,
        nome: 'A Rosa do Povo',
        isbn: '978-8535921873',
        estilo: 'poesia',
        numPaginas: 248,
        dataLancamento: '1945-01-01',
        sinopse: 'Engajamento social e político através da poesia.',
        publicAlvo: 'Adulto'
      }
    ]
  },
  {
    id: 8,
    name: 'Olavo de Carvalho',
    email: 'olavo@example.com',
    estiloPredominante: 'filosofia',
    books: [
      {
        id: 801,
        nome: 'O Mínimo que Você Precisa Saber para não Ser um Idiota',
        isbn: '978-8501100173',
        estilo: 'filosofia',
        numPaginas: 616,
        dataLancamento: '2013-08-14',
        sinopse: 'Coletânea de artigos cobrindo filosofia, política e religião.',
        publicAlvo: 'Adulto'
      },
      {
        id: 802,
        nome: 'O Jardim das Aflições',
        isbn: '978-8595070086',
        estilo: 'filosofia',
        numPaginas: 464,
        dataLancamento: '1995-01-01',
        sinopse: 'Ensaio sobre materialismo e a história da filosofia acidental.',
        publicAlvo: 'Adulto'
      },
      {
        id: 803,
        nome: 'A Aristóteles em Nova Perspectiva',
        isbn: '978-8580331048',
        estilo: 'filosofia',
        numPaginas: 176,
        dataLancamento: '1996-01-01',
        sinopse: 'Introdução à leitura dos escritos de Aristóteles.',
        publicAlvo: 'Adulto'
      }
    ]
  },
  {
    id: 9,
    name: 'J. R. R. Tolkien',
    email: 'tolkien@example.com',
    estiloPredominante: 'fantasia',
    books: [
      {
        id: 901,
        nome: 'O Senhor dos Anéis: A Sociedade do Anel',
        isbn: '978-8595084742',
        estilo: 'fantasia',
        numPaginas: 576,
        dataLancamento: '1954-07-29',
        sinopse: 'Frodo bolseiro recebe a missão de destruir o Um Anel.',
        publicAlvo: 'Geral'
      },
      {
        id: 902,
        nome: 'O Hobbit',
        isbn: '978-8595084743',
        estilo: 'fantasia',
        numPaginas: 336,
        dataLancamento: '1937-09-21',
        sinopse: 'Bilbo Bolseiro é arrastado para uma aventura com anões e um dragão.',
        publicAlvo: 'Infanto-juvenil'
      },
      {
        id: 903,
        nome: 'O Silmarillion',
        isbn: '978-8595084744',
        estilo: 'fantasia',
        numPaginas: 496,
        dataLancamento: '1977-09-15',
        sinopse: 'Mitos e lendas da Terra Média, desde a criação do mundo.',
        publicAlvo: 'Geral'
      },
      {
        id: 904,
        nome: 'Os Filhos de Húrin',
        isbn: '978-8595084745',
        estilo: 'fantasia',
        numPaginas: 288,
        dataLancamento: '2007-04-17',
        sinopse: 'A trágica história de Túrin Turambar na Primeira Era.',
        publicAlvo: 'Adulto'
      }
    ]
  }
];

let nextId = 10;

// GET all authors
function getAuthors(req, res) {
  res.json(authors);
}

// GET author by id
function getAuthorById(req, res) {
  const id = parseInt(req.params.id);
  const author = authors.find(a => a.id === id);

  if (!author) {
    return res.status(404).json({ error: 'Author not found' });
  }

  res.json(author);
}

// POST - Create new author
function createAuthor(req, res) {
  const { name, email, estiloPredominante } = req.body;

  // Validation
  if (!name || !email || !estiloPredominante) {
    return res.status(400).json({ error: 'Missing required fields: name, email, estiloPredominante' });
  }

  // Check for duplicate email
  if (authors.some(a => a.email === email)) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  const newAuthor = {
    id: nextId++,
    name,
    email,
    estiloPredominante
  };

  authors.push(newAuthor);
  res.status(201).json(newAuthor);
}

// PUT - Update author
function updateAuthor(req, res) {
  const id = parseInt(req.params.id);
  const { name, email, estiloPredominante } = req.body;

  const authorIndex = authors.findIndex(a => a.id === id);
  if (authorIndex === -1) {
    return res.status(404).json({ error: 'Author not found' });
  }

  // Validation
  if (!name && !email && !estiloPredominante) {
    return res.status(400).json({ error: 'At least one field must be provided' });
  }

  // Check for duplicate email (excluding current author)
  if (email && authors.some(a => a.id !== id && a.email === email)) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  const author = authors[authorIndex];

  if (name) author.name = name;
  if (email) author.email = email;
  if (estiloPredominante) author.estiloPredominante = estiloPredominante;

  res.json(author);
}

// DELETE - Delete author
function deleteAuthor(req, res) {
  const id = parseInt(req.params.id);
  const authorIndex = authors.findIndex(a => a.id === id);

  if (authorIndex === -1) {
    return res.status(404).json({ error: 'Author not found' });
  }

  const [deletedAuthor] = authors.splice(authorIndex, 1);
  res.json({ message: 'Author deleted successfully', author: deletedAuthor });
}

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
};
