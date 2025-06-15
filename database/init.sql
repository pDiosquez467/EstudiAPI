
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    license VARCHAR(20) UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE professors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    cellphone VARCHAR(50)
);

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(50) NOT NULL,
    professor_id INT,
    CONSTRAINT courses_professors_fk FOREIGN KEY (professor_id) REFERENCES professors(id)
);

CREATE TABLE courses_students (
    course_id INT,
    student_id INT,
    PRIMARY KEY (course_id, student_id),
    CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES courses(id),
    CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES students(id)
);
