CREATE TABLE characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    region TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO characters (name, region) VALUES ('Zhongli', 'Liyue');
INSERT INTO characters (name, region) VALUES ('Raiden Shogun', 'Inazuma');