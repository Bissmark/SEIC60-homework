CREATE TABLE shipwrecks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vessel TEXT,
    image TEXT,
    year INTEGER,
    incident_location TEXT,
    country TEXT,
    purpose TEXT,
    incident_cause TEXT
);

-- Don't seed in your SQL file anymore! Use seeds.rb