const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authorsDb = require('./authors-db');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes for authors
app.get('/api/authors', authorsDb.getAuthors);
app.get('/api/authors/:id', authorsDb.getAuthorById);
app.post('/api/authors', authorsDb.createAuthor);
app.put('/api/authors/:id', authorsDb.updateAuthor);
app.delete('/api/authors/:id', authorsDb.deleteAuthor);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Mock server running', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✓ Mock Server running on http://localhost:${PORT}`);
  console.log(`✓ GET    http://localhost:${PORT}/api/authors`);
  console.log(`✓ GET    http://localhost:${PORT}/api/authors/:id`);
  console.log(`✓ POST   http://localhost:${PORT}/api/authors`);
  console.log(`✓ PUT    http://localhost:${PORT}/api/authors/:id`);
  console.log(`✓ DELETE http://localhost:${PORT}/api/authors/:id`);
  console.log(`✓ Health http://localhost:${PORT}/health\n`);
});
