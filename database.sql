-- ለ Mendida TVET College ተማሪዎች
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    department VARCHAR(50),
    phone_number VARCHAR(15) UNIQUE
);

-- ለ Tele ክፍያ መረጃዎች
CREATE TABLE tele_payments (
    payment_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(student_id),
    amount DECIMAL(10, 2),
    transaction_id VARCHAR(50) UNIQUE,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);