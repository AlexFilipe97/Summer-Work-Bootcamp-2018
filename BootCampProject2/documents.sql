DROP DATABASE IF EXISTS documents;
CREATE DATABASE documents;

\c documents;

CREATE TABLE docs (
	ID SERIAL PRIMARY KEY,
	title VARCHAR,
	content VARCHAR
);

INSERT INTO docs (title, content)
	VALUES('Vacation', 'It would be really good to go on a vacation');
