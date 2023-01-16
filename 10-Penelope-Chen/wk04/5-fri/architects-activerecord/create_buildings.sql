CREATE TABLE IF NOT EXISTS buildings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO buildings (name) VALUES ('Guangzhou Opera House');
INSERT INTO buildings (name) VALUES ('Church of the Light');