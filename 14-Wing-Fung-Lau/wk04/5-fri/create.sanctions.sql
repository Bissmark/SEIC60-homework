CREATE TABLE sanctions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    title TEXT,
    nationality TEXT,
    risk TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO sanctions (name, title, nationality, risk) VALUES ("Carrie LAM", "Chief Executive of the Hong Kong Special Administrative Region", "Hong Kong", "pursuant to the Hong Kong Autonomy");
INSERT INTO sanctions (name, title, nationality, risk) VALUES ("Chris TANG", "Commissioner of Police", "Hong Kong", "pursuant to the Hong Kong Autonomy");
INSERT INTO sanctions (name, title, nationality, risk) VALUES ("Teresa CHENG", "Secretary for Justice", "Hong Kong", "pursuant to the Hong Kong Autonomy");

-- sqlite3 database.sqlite3 < create.sanctions.sql
-- sqlite3 database.sqlite3
-- .schema