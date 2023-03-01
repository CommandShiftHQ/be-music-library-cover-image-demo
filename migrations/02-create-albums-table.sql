CREATE TABLE Albums (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  year SMALLINT NOT NULL,
  artist_id INT REFERENCES Artists(id) NOT NULL
);