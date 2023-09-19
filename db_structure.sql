CREATE SCHEMA library_schema

USE library_db
GO

BEGIN TRANSACTION
	CREATE TABLE library_schema.books (
		id INT PRIMARY KEY IDENTITY,
		title VARCHAR(45) NOT NULL,
		description VARCHAR(255) NOT NULL,
		cover VARCHAR(45) NOT NULL,
		price INT NOT NULL
	);
COMMIT TRANSACTION

SELECT * FROM library_schema.books;

BEGIN TRANSACTION
	INSERT INTO library_schema.books(title, description, cover) VALUES ('test title', 'description', 'cover.png');
COMMIT TRANSACTION

SELECT * FROM library_schema.books;