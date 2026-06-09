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
  db.run(`CREATE TABLE IF NOT EXISTS favorites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
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
  const name = req.body.name;
  const color = req.body.color;
  if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
    return res.status(400).json({ error: 'Invalid name' });
  }
  if (!color || typeof color !== 'string' || color.trim().length === 0 || color.length > 100) {
    return res.status(400).json({ error: 'Invalid color' });
  }

  const trimmedName = name.trim();
  const trimmedColor = color.trim();

  db.run('INSERT INTO favorites (name, color) VALUES (?, ?)', [trimmedName, trimmedColor], function (err) {
    if (err) {
      console.error('SQLite insert error:', err);
      return res.status(500).json({ error: err.message || 'DB error' });
    }
    res.json({ id: this.lastID, name: trimmedName, color: trimmedColor });
  });
});

app.get('/colors', (req, res) => {
  db.all('SELECT id, name, color, created_at FROM favorites ORDER BY created_at DESC LIMIT 100', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
