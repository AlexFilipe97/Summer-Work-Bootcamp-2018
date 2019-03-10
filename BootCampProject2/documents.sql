\c documents;

CREATE TABLE docs (
	ID SERIAL PRIMARY KEY,
	title VARCHAR,
	content VARCHAR
);

INSERT INTO docs (title, content) VALUES
	('Vacation', 'It would be really good to go on a vacation'),
	('Docker', 'Very usefull tool to have in your resume'),
	('University','I have to stop playing FF14 soon TM');
