// The Facade design pattern provides a simplified interface to a complex subsystem. In the context of an educational platform, we can create a facade to manage various subsystems such as student enrollment, course management, and grade reporting. 

// Subsystem 1: Student Management
class Student {
    constructor(public id: number, public name: string) {}

    enroll(courseId: number): void {
        console.log(`Enrolling student ${this.name} (ID: ${this.id}) in course ID ${courseId}`);
    }
}

// Subsystem 2: Course Management
class Course {
    constructor(public id: number, public title: string) {}

    addStudent(studentId: number): void {
        console.log(`Adding student ID ${studentId} to course ${this.title} (ID: ${this.id})`);
    }
}

// Subsystem 3: Grade Reporting
class GradeReport {
    reportGrade(studentId: number, courseId: number, grade: string): void {
        console.log(`Reporting grade ${grade} for student ID ${studentId} in course ID ${courseId}`);
    }
}

// Facade
class EducationFacade {
    private students: { [id: number]: Student } = {};
    private courses: { [id: number]: Course } = {};
    private gradeReport: GradeReport = new GradeReport();

    registerStudent(id: number, name: string): void {
        if (!this.students[id]) {
            this.students[id] = new Student(id, name);
            console.log(`Registered student ${name} with ID ${id}`);
        } else {
            console.log(`Student with ID ${id} is already registered`);
        }
    }

    addCourse(id: number, title: string): void {
        if (!this.courses[id]) {
            this.courses[id] = new Course(id, title);
            console.log(`Added course ${title} with ID ${id}`);
        } else {
            console.log(`Course with ID ${id} is already added`);
        }
    }

    enrollStudentInCourse(studentId: number, courseId: number): void {
        const student = this.students[studentId];
        const course = this.courses[courseId];
        if (student && course) {
            student.enroll(courseId);
            course.addStudent(studentId);
        } else {
            console.log(`Either student ID ${studentId} or course ID ${courseId} does not exist`);
        }
    }

    reportGrade(studentId: number, courseId: number, grade: string): void {
        this.gradeReport.reportGrade(studentId, courseId, grade);
    }
}

// Usage
function main() {
    const facade = new EducationFacade();

    // Register students
    facade.registerStudent(1, "Alice");
    facade.registerStudent(2, "Bob");

    // Add courses
    facade.addCourse(101, "Math");
    facade.addCourse(102, "Science");

    // Enroll students in courses
    facade.enrollStudentInCourse(1, 101);
    facade.enrollStudentInCourse(2, 102);

    // Report grades
    facade.reportGrade(1, 101, "A");
    facade.reportGrade(2, 102, "B");
}

main();
