CREATE TABLE volleyballs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    position TEXT,
    number INTEGER,
    image TEXT 
);

-- sample seed data
INSERT INTO volleyballs (name, country, position, number) VALUES ('Yuji Nishida', 'Japan','Opposite', '11');
INSERT INTO volleyballs (name, country, position, number) VALUES ('Earvin Ngapeth', 'France','Outside', '9');
INSERT INTO volleyballs (name, country, position, number) VALUES ('Bruno Rezende', 'Brazil','Setter', '1');
INSERT INTO volleyballs (name, country, position, number) VALUES ('Robertyland Simon Aties', 'Cubar','Middle', '13');
INSERT INTO volleyballs (name, country, position, number) VALUES ('Sergio Dutra Santos ', 'Brazil','Libero', '10');

-- sqlite3 database.sqlite3 < create_volleyballs.sql
-- sqlite3 database.sqlite3
-- .schema

