CREATE TABLE IF NOT EXISTS spices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    country_origin TEXT NOT NULL,
    is_organic INTEGER NOT NULL,
    price FLOAT(3) NOT NULL
);

---SEED DATA ----------------------------------------------------------------
INSERT INTO spices (name, country_origin, is_organic, price) VALUES ('Tumeric Power', 'Vietnam', 1, 3.45);
INSERT INTO spices (name, country_origin, is_organic, price) VALUES ('Dry Garlic', 'Vietnam', 1, 4.65);
INSERT INTO spices (name, country_origin, is_organic, price) VALUES ('Whole Black Pepper', 'Sri Lanka', 0, 5.76);

