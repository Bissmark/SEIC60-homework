CREATE TABLE IF NOT EXISTS moves (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    image TEXT,
    description TEXT
);

-- sample seed data
INSERT INTO moves (name, type, description) VALUES ('Hanamichi Sakuragi', 'Shohoku','Power Forward');

-- sqlite3 database.sqlite3 < create_moves.sql
-- sqlite3 database.sqlite3
-- .schema