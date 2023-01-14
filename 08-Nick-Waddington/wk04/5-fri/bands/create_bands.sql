CREATE TABLE IF NOT EXISTS bands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    members INTEGER,
    genre TEXT,
    formed INTEGER,
    active BOOLEAN, 
    image TEXT
);

INSERT INTO bands (name, members, genre) VALUES ('Red Hot Chili Peppers', 4, "Rock");
INSERT INTO bands (name, members, genre) VALUES ('Queens of the Stone Age', 5, "Alternative rock");