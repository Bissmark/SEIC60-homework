CREATE TABLE IF NOT EXISTS countries (
    id INTEGER PRIMARY KEY,
    name TEXT,
    continent TEXT,
    capital TEXT,
    flag_image TEXT
);

-- sample seed data
INSERT INTO countries (name, continent, capital, flag_image) VALUES ('Malaysia', 'Asia', 'Kuala Lumpur', 'https://www.sciencekids.co.nz/images/pictures/flags680/Malaysia.jpg');
INSERT INTO countries (name, continent, capital, flag_image) VALUES ('United Kingdom', 'Europe', 'London', 'https://www.sciencekids.co.nz/images/pictures/flags680/United_Kingdom.jpg');
