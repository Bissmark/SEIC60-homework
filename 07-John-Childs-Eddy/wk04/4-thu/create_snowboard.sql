CREATE TABLE IF NOT EXISTS snowboard (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    trick TEXT,
    photo TEXT
);

INSERT INTO snowboard (name, trick) VALUES ("Jason", "Method");
INSERT INTO snowboard (name, trick) VALUES ("Gerry", "Backflip");
INSERT INTO snowboard (name, trick) VALUES ("Aaron", "Rodeo");