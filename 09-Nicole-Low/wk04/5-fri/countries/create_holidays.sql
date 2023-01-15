CREATE TABLE IF NOT EXISTS holidays (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    date TEXT,
    image TEXT
);

-- sample seed data
INSERT INTO holidays (name, date, image) VALUES ('Hari Merdeka', '31 August', 'https://blog.flyspaces.com/hubfs/merdeka%201.jpg');
INSERT INTO holidays (name, date, image) VALUES ('Anzac Day', '25 April', 'https://static.officeholidays.com/images/935x475c/australia-anzac-day.jpg');

