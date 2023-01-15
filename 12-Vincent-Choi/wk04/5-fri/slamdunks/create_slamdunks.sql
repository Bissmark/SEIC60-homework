CREATE TABLE IF NOT EXISTS slamdunks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    team TEXT,
    position TEXT,
    number INTEGER,
    quote TEXT,
    image TEXT 
);

-- sample seed data
INSERT INTO slamdunks (name, team, position, number, quote) VALUES ('Hanamichi Sakuragi', 'Shohoku','Power Forward', '10', "I'm tensai Sakuragi Hanamichi. I'm going to play basketball, because I'm the best basketball player");
INSERT INTO slamdunks (name, team, position, number, quote) VALUES ('Kaede Rukawa', 'Shohoku','Small Forward', '11', "No matter what, I will be #1, and I'll beat anyone who stops me from achieving that");
INSERT INTO slamdunks (name, team, position, number, quote) VALUES ('Takenori Akagi', 'Shohoku','Centre', '1', "The one who controls the rebound controls the game");
INSERT INTO slamdunks (name, team, position, number, quote) VALUES ('Ryota Miyagi', 'Shohoku','Point Guard', '7', "Keep practicing, never let somebody tell you you're too small or too slow");
INSERT INTO slamdunks (name, team, position, number, quote) VALUES ('Hisashi Mitsui', 'Shohoku','Shooting Guard', '14', "My goal is to lead Shohoku High to dominate the National Championship! And be the best basketball player in Japan!");


-- sqlite3 database.sqlite3 < create_slamdunks.sql
-- sqlite3 database.sqlite3
-- .schema

