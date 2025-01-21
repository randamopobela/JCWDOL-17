-- Active: 1736651086879@@aws-0-ap-southeast-1.pooler.supabase.com@5432@jcwdol17@public
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary NUMERIC(10,2),
    hire_date DATE
) -- buat table employees

DROP TABLE employees;

ALTER TABLE employees
ADD COLUMN department VARCHAR(50) -- tambah kolom department ke table employees

INSERT INTO employees (name, salary, hire_date, department) -- tambah data ke table employees
VALUES
    ('John Doe', 50000.00, '2022-01-01', 'Sales'),
    ('Jane Smith', 60000.00, '2022-02-01', 'IT'),
    ('Bob Johnson', 70000.00, '2022-03-01', 'Marketing');

SELECT * FROM employees;

SELECT name, salary FROM employees;

UPDATE employees set salary = 60000 WHERE id = 3; -- ubah data di table employees

INSERT INTO employees (name, salary, hire_date, department) -- tambah data ke table employees
VALUES
    ('Tom Haye', 50000.00, '2022-01-01', 'Sales');

SELECT count(salary) as Total, salary FROM employees GROUP BY salary ORDER BY salary;
-- mengelompokkan data berdasarkan salary dan menghitung jumlahnya

SELECT * FROM employees LIMIT 2 OFFSET 0;
-- mengambil 2 data pertama dari table employees

SELECT * FROM employees LIMIT 2 OFFSET 2;
-- mengambil 2 data selanjutnya dari table employees

