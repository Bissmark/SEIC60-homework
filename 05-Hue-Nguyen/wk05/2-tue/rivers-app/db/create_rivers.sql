CREATE TABLE IF NOT EXISTS rivers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    length INTEGER,
    basin_size INTEGER,
    continent TEXT,
    countries TEXT,
    sources TEXT,
    mouth TEXT
);
