CREATE TABLE ants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    colour TEXT,
    origin TEXT,
    bites BOOLEAN,
    image TEXT
);

-- SAMPLE ANTS

INSERT INTO ants (name, colour, origin, bites, image)  VALUES ('Bull ant', 'Red or Black', 'Australia', 1, 'https://tinyurl.com/4mp9b2es');
INSERT INTO ants (name, colour, origin, bites, image)  VALUES ('Tropical fire ant', 'Brown', 'Mexico', 1, 'https://tinyurl.com/ytw7kxh6');
INSERT INTO ants (name, colour, origin, bites, image)  VALUES ('Black house ant', 'Black', 'Australia', 0, 'https://tinyurl.com/2pcrdmbp'); 