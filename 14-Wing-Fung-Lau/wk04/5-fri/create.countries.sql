CREATE TABLE countries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    official_name TEXT,
    native_official_name TEXT,
    number_of_sanctions INTEGER,
    flag TEXT
);

-- sample seed data
INSERT INTO countries (name, official_name) VALUES ("China", "People's Republic of China");
INSERT INTO countries (name, official_name) VALUES ("Hong Kong", "Hong Kong Special Administrative Region of the People's Republic of China");
INSERT INTO countries (name, official_name) VALUES ("Iran", "Islamic Republic of Iran");

-- sqlite3 database.sqlite3 < create.countries.sql
-- sqlite3 database.sqlite3
-- .schema