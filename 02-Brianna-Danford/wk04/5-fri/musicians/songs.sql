CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    album TEXT, 
    image TEXT
);

INSERT INTO songs (name) VALUES ('Karma');
INSERT INTO songs (name) VALUES ('At My Worst');