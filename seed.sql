CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT
);

INSERT INTO posts (name, description) VALUES
('Aliens', 'A message board discussing all things about Aliens from Abuctions to Unindetified Flying Objects.'),
('Supernatural', 'A message board talking about all things Supernatural ranging from ghosts to Ouija boards and everything inbetween.'),
('Cryptids', 'A message board debating all the varying kinds of Crpytids from the Chupacabra to Skinwalkers and anything else fully known.');