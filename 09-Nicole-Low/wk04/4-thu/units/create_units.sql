CREATE TABLE units (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT,
    name TEXT,
    credit_points INTEGER,
    mark INTEGER,
    grade TEXT
);

-- data
INSERT INTO units (code, name, credit_points, mark, grade) VALUES ('INFO1110', 'Introduction to Programming', 6, 74, 'CR');
INSERT INTO units (code, name, credit_points, mark, grade) VALUES ('DECO2014', 'User Experience Design Studio', 12, 75, 'DI');
INSERT INTO units (code, name, credit_points, mark, grade) VALUES ('MUSC2653', 'Introduction to Digital Music Techniques', 6, 73, 'CR');
INSERT INTO units (code, name, credit_points, mark, grade) VALUES ('OLES2149', 'Experience the Spanish-Speaking World', 6, 80, 'DI');