// In-memory database for authors
let authors = [
  {
    id: 1,
    name: 'Clarice Lispector',
    email: 'clarice@example.com',
    estiloPredominante: 'ficção científica'
  },
  {
    id: 2,
    name: 'Jorge Amado',
    email: 'jorge@example.com',
    estiloPredominante: 'romance'
  },
  {
    id: 3,
    name: 'Paulo Coelho',
    email: 'paulo@example.com',
    estiloPredominante: 'auto-ajuda'
  },
  {
    id: 4,
    name: 'Machado de Assis',
    email: 'machado@example.com',
    estiloPredominante: 'documentário'
  },
  {
    id: 5,
    name: 'Cecília Meireles',
    email: 'cecilia@example.com',
    estiloPredominante: 'poesia'
  },
  {
    id: 6,
    name: 'João Guimarães Rosa',
    email: 'joao@example.com',
    estiloPredominante: 'ação'
  },
  {
    id: 7,
    name: 'Carlos Drummond de Andrade',
    email: 'carlos@example.com',
    estiloPredominante: 'arte'
  },
  {
    id: 8,
    name: 'Olavo de Carvalho',
    email: 'olavo@example.com',
    estiloPredominante: 'filosofia'
  },
  {
    id: 9,
    name: 'J. R. R. Tolkien',
    email: 'tolkien@example.com',
    estiloPredominante: 'fantasia'
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
