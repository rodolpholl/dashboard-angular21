# Mock Server

Mock server for the Dashboard application with in-memory data storage.

## Setup

```bash
cd mock
npm install
npm start
```

The server will run on `http://localhost:3000`

## Endpoints

### GET /api/authors
Fetch all authors

```bash
curl http://localhost:3000/api/authors
```

### GET /api/authors/:id
Fetch a specific author by ID

```bash
curl http://localhost:3000/api/authors/1
```

### POST /api/authors
Create a new author

```bash
curl -X POST http://localhost:3000/api/authors \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Author",
    "email": "author@example.com",
    "estiloPredominante": "ficção científica"
  }'
```

### PUT /api/authors/:id
Update an existing author

```bash
curl -X PUT http://localhost:3000/api/authors/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Name",
    "email": "newemail@example.com",
    "estiloPredominante": "aventura"
  }'
```

### DELETE /api/authors/:id
Delete an author

```bash
curl -X DELETE http://localhost:3000/api/authors/1
```

### GET /health
Health check endpoint

```bash
curl http://localhost:3000/health
```

## Data Structure

Each author object has:
- `id` (number): Unique identifier
- `name` (string): Author's name
- `email` (string): Author's email (unique)
- `estiloPredominante` (string): Predominant style

## Default Authors

The server comes with 7 pre-populated authors for testing purposes.

## Development

For development with auto-restart on file changes:

```bash
npm run dev
```

This requires `nodemon` to be installed.
