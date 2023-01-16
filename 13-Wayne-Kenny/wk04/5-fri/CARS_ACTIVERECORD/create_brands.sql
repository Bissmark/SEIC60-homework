CREATE TABLE brands (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    origin TEXT,
    logo TEXT
);
-- sample seed data to start
INSERT INTO brands (name, origin) VALUES ('Nissan', 'South Korea');
INSERT INTO brands (name, origin) VALUES ('Toyota', 'Japan');
INSERT INTO brands (name, origin) VALUES ('Renault', 'France');
INSERT INTO brands (name, origin) VALUES ('Ford', 'USA');
INSERT INTO brands (name, origin) VALUES ('BMW', 'Germany');
INSERT INTO brands (name, origin) VALUES ('Ferrari', 'Italy');
INSERT INTO brands (name, origin) VALUES ('Volkswagen', 'Germany');
INSERT INTO brands (name, origin) VALUES ('Mini', 'UK');
INSERT INTO brands (name, origin) VALUES ('Land Rover', 'UK');