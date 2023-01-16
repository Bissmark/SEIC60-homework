CREATE TABLE IF NOT EXISTS statuses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT
);

---- SEED DATA -------------------------------------------
INSERT INTO statuses (code, name, description) VALUES ('EX', 'Extinct', 'beyond reasonable doubt that the species is no longer extant');
INSERT INTO statuses (code, name, description) VALUES ('EW', 'Extinct in the wild', 'survives only in captivity, cultivation and/or outside native range, as presumed after exhaustive surveys');
