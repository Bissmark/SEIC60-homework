CREATE TABLE IF NOT EXISTS plants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    family TEXT NOT NULL,
    state TEXT,
    image TEXT,
    conservation_status TEXT
);

-- SEED DATA ------------------------------------
INSERT INTO plants (name, family, state, image, conservation_status) VALUES ('E. abdita', 'Myrtaceae', 'WA', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Eucalyptus_stricta_-_Woodford.jpg/480px-Eucalyptus_stricta_-_Woodford.jpg', 'p2');
INSERT INTO plants (name, family, state, image, conservation_status) VALUES ('E. acaciiformis', 'Myrtaceae', 'NSW', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Eucalyptus_acaciiformis.jpg/330px-Eucalyptus_acaciiformis.jpg', 'p2');
INSERT INTO plants (name, family, state, image, conservation_status) VALUES ('E. accedens', 'Myrtaceae', 'WA', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Avon_vally_gnangarra-42.jpg/330px-Avon_vally_gnangarra-42.jpg', 'p2');
