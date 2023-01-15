CREATE TABLE IF NOT EXISTS albums (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    band_id INTEGER,
    name TEXT,
    release INTEGER,
    tracks INTEGER,
    length FLOAT,
    genre TEXT,
    image TEXT
);

INSERT INTO albums (name) VALUES ("Mothers Milk");