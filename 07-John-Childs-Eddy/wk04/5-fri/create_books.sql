CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT
);

-- sampe seed data

INSERT INTO books (name) VALUES ('Harry Potter');
INSERT INTO books (name) VALUES ('Alice in Wonderland');