// The State design pattern allows an object to change its behavior when its internal state changes. This can be particularly useful in an educational platform for managing student enrollment statuses.

// State Interface
interface EnrollmentState {
    accessCourse(): void;
    getGrades(): void;
}

// Concrete States
class EnrolledState implements EnrollmentState {
    private student: Student;

    constructor(student: Student) {
        this.student = student;
    }

    accessCourse(): void {
        console.log("Accessing course material.");
    }

    getGrades(): void {
        console.log("Here are your grades.");
    }
}

class SuspendedState implements EnrollmentState {
    private student: Student;

    constructor(student: Student) {
        this.student = student;
    }

    accessCourse(): void {
        console.log("Access denied. Your enrollment is suspended.");
    }

    getGrades(): void {
        console.log("Access denied. Your enrollment is suspended.");
    }
}

class GraduatedState implements EnrollmentState {
    private student: Student;

    constructor(student: Student) {
        this.student = student;
    }

    accessCourse(): void {
        console.log("Access denied. You have graduated.");
    }

    getGrades(): void {
        console.log("Here are your final grades. Congratulations on graduating!");
    }
}

// Context Class
class Student {
    private state: EnrollmentState;

    constructor() {
        // Default state is enrolled
        this.state = new EnrolledState(this);
    }

    setState(state: EnrollmentState): void {
        this.state = state;
    }

    accessCourse(): void {
        this.state.accessCourse();
    }

    getGrades(): void {
        this.state.getGrades();
    }
}

// Usage
function main() {
    const student = new Student();

    console.log("Student is enrolled:");
    student.accessCourse();
    student.getGrades();

    console.log("\nStudent is suspended:");
    student.setState(new SuspendedState(student));
    student.accessCourse();
    student.getGrades();

    console.log("\nStudent has graduated:");
    student.setState(new GraduatedState(student));
    student.accessCourse();
    student.getGrades();
}

main();
