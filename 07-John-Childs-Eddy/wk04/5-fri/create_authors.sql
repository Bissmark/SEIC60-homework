CREATE TABLE IF NOT EXISTS authors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT
);

-- sampe seed data

INSERT INTO authors (name) VALUES ('JK Rowling');
INSERT INTO authors (name) VALUES ('Lewis Carrol');