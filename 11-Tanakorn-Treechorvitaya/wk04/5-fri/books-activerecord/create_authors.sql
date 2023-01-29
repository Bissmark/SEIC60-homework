CREATE TABLE IF NOT EXISTS authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT
);

-- simple seed data
INSERT INTO authors (name) VALUES ('Yann Martel');
INSERT INTO authors (name) VALUES ('Toni Morrison');