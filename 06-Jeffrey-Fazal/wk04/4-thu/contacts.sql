CREATE TABLE contacts (
	id INTEGER PRIMARY KEY,
	fullName TEXT,
	photo TEXT,
	preferredName TEXT,
	city TEXT,
	employer TEXT,
	valueEstimate INTEGER
);

INSERT INTO contacts (fullName, preferredName, photo, city, employer, valueEstimate) VALUES("John Howard", "Jonh", "/richguy.jpeg", "Posh Place", "The Goverment", 300000);
INSERT INTO contacts (fullName, preferredName, city, photo, employer, valueEstimate) VALUES("Steven", "Stevo", "Mt Druit", "", "Center Link", 657);