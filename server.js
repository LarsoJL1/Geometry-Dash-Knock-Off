const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'colors.db');

const db = new sqlite3.Database(DB_FILE, (err) => {
  if (err) console.error('DB open error', err);
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS colors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    color TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Serve the main frontend at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website.html'));
});

app.post('/favorite-color', (req, res) => {
  const color = req.body.color;
  if (!color || typeof color !== 'string' || color.length > 100) {
    return res.status(400).json({ error: 'Invalid color' });
  }
  const stmt = db.prepare('INSERT INTO colors (color) VALUES (?)');
  stmt.run(color, function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ id: this.lastID, color });
  });
});

app.get('/colors', (req, res) => {
  db.all('SELECT id, color, created_at FROM colors ORDER BY created_at DESC LIMIT 100', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
