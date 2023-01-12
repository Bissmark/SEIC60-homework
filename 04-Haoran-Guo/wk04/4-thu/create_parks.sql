CREATE TABLE parks(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    location text,
    image text,
    recommend bool DEFAULT 0
);

INSERT INTO parks (name, location, image, recommend) VALUES ("Kamay Botany Bay National Park","The Old Cable Station, 1542 Anzac Parade, La Perouse NSW 2036","https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/kamay-botany-bay-national-park/la-perouse-area/bare-island-fort/bare-island-fort-02.jpg", TRUE);
INSERT INTO parks (name, location, image) VALUES ("Hat Head National Park","247 Old Station Rd, Verges Creek NSW 2440","https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/hat-head-national-park/hat-head-np.jpg");