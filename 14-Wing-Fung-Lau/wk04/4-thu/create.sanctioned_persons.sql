CREATE TABLE sanctioned_persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    title TEXT,
    nationality TEXT
    image TEXT
);

-- sample seed data
INSERT INTO sanctioned_persons (name, title, nationality) VALUES ("Carrie LAM", "Chief Executive of the Hong Kong Special Administrative Region", "Hong Kong");
INSERT INTO sanctioned_persons (name, title, nationality) VALUES ("Chris TANG", "Commissioner of Police", "Hong Kong");
INSERT INTO sanctioned_persons (name, title, nationality) VALUES ("Teresa CHENG", "Secretary for Justice", "Hong Kong");

-- sqlite3 database.sqlite3 < create.sanctioned_persons.sql
-- sqlite3 database.sqlite3
-- .schema