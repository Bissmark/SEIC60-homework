CREATE TABLE IF NOT EXISTS albums (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    band TEXT,
    release INTEGER,
    tracks INTEGER,
    length INTEGER,
    genre TEXT, 
    image TEXT
);



INSERT INTO albums (name, band) VALUES ("Mothers milk", "RHCP");