CREATE TABLE cats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    breed TEXT,
    sex TEXT,
    image TEXT
);
-- sample seed data
INSERT INTO cats (name, breed, sex) VALUES ('Charlie', 'Moggy', 'Male');
INSERT INTO cats (name, breed, sex) VALUES ('Princess', 'Ragdoll', 'Female');