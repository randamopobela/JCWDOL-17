CREATE DATABASE purwadhika;

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL
);

ALTER TABLE students
ADD COLUMN email VARCHAR(255) NOT NULL;

ALTER TABLE students
ADD COLUMN gender ENUM ('Male', 'Female') NOT NULL;
ADD COLUMN batch_code VARCHAR(255) NOT NULL,
ADD COLUMN phone_number BIGINT NOT NULL,
ADD COLUMN alternative_phone_number BIGINT NOT NULL;

ALTER TABLE students
RENAME COLUMN alternative_phone_number TO description;

ALTER TABLE students
ALTER COLUMN description TYPE VARCHAR(255);

ALTER TABLE students
DROP COLUMN gender;

CREATE TABLE branch(
    id SERIAL PRIMARY KEY,
    branch_name VARCHAR(255) NOT NULL,
    pic VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    province VARCHAR(255)
);

INSERT INTO branch (branch_name, pic, address, city, province)
VALUES
    ('BSD', 'Thomas', 'Green Office Park 9', 'BSD', 'Tangerang'),
    ('JKT', 'Budi', 'MSIG Tower', 'Jakarta Selatan', 'Jakarta'),
    ('BTM', 'Angel', 'Nongsa', 'Batam', 'Kep. Riau');

UPDATE branch SET pic = 'Dono' WHERE city = 'BSD';

INSERT INTO branch (branch_name, pic, address, city, province)
VALUES
    ('BLI', 'Tono', 'Gianyar', 'Gianyar', 'Bali');

SELECT * FROM students;

SELECT * FROM branch;