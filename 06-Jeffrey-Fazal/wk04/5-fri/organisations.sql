CREATE TABLE organisations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    company TEXT,
    workEmail TEXT,
    phone INTEGER
);

-- sample seed data
INSERT INTO organisations (name, company, workEmail, phone) VALUES ('Bob Junior', 'The Rocks Pty Ltd', 'bobby@rocks.com', '0411111111');
INSERT INTO organisations (name, company, workEmail, phone) VALUES ('Joane', 'The Firm', 'joane@thefirm.com', '0411111111');