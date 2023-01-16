CREATE TABLE people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    employed BOOLEAN,
    image TEXT
);

-- sample seed data
INSERT INTO people (name, employed, image) VALUES ('Bob', TRUE, 'https://i.imgur.com/ug33FQ9.jpg');
INSERT INTO people (name, employed, image) VALUES ('Jane', FALSE, '/jane.jpg');
