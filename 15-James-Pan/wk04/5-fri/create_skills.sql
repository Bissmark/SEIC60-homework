CREATE TABLE IF NOT EXISTS skills (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO skills (name) VALUES ('Burst');
INSERT INTO skills (name) VALUES ('Attack');