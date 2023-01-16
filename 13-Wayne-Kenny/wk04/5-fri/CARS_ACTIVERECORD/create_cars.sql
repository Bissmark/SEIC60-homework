CREATE TABLE cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    parent_brand TEXT,
    image TEXT
);
-- sample seed data to start
INSERT INTO cars (name, parent_brand) VALUES ('Doulis', 'Nissan');
INSERT INTO cars (name, parent_brand) VALUES ('Micra', 'Nissan');
INSERT INTO cars (name, parent_brand) VALUES ('Yaris', 'Toyota');
INSERT INTO cars (name, parent_brand) VALUES ('Camry', 'Toyota');
INSERT INTO cars (name, parent_brand) VALUES ('Supra', 'Toyota');
INSERT INTO cars (name, parent_brand) VALUES ('Golf', 'Volkswagon');
INSERT INTO cars (name, parent_brand) VALUES ('Tiguan', 'Volkswagon');
INSERT INTO cars (name, parent_brand) VALUES ('Escort', 'Ford');
INSERT INTO cars (name, parent_brand) VALUES ('Focus', 'Ford');