CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    genre TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO books (name, genre) VALUES ('Jaws', 'horror');
INSERT INTO books (name, genre) VALUES ('Vintage Beloved', 'Classics');