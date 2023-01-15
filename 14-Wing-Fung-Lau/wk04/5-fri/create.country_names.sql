CREATE TABLE country_names (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    aka TEXT
);

-- sample seed data
INSERT INTO country_names (name, aka) VALUES ("Hong Kong", "HK");
INSERT INTO country_names (name, aka) VALUES ("United Kingdom", "UK");
INSERT INTO country_names (name, aka) VALUES ("United States", "US");

-- sqlite3 database.sqlite3 < create.country_names.sql
-- sqlite3 database.sqlite3
-- .schema