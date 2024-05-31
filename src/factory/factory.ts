// The Factory Design Pattern is a creational design pattern that provides an interface or abstract class for creating objects in a superclass

// Define an interface representing the abstract product: Course
interface Course {
    enroll(student: string): void;
}

// Define concrete product classes: MathCourse and ScienceCourse
class MathCourse implements Course {
    enroll(student: string): void {
        console.log(`Enrolling ${student} in a Math course.`);
    }
}

class ScienceCourse implements Course {
    enroll(student: string): void {
        console.log(`Enrolling ${student} in a Science course.`);
    }
}

// Factory class responsible for creating courses
class CourseFactory {
    static createCourse(type: string): Course {
        // The factory method creates and returns instances of concrete product classes based on the given type.
        if (type.toLowerCase() === "math") {
            return new MathCourse();
        } else if (type.toLowerCase() === "science") {
            return new ScienceCourse();
        } else {
            throw new Error("Invalid course type: " + type);
        }
    }
}

// Function to simulate a scenario where students enroll in courses
function simulateEnrollment() {
    // Creating a Math course using the factory method
    const mathCourse: Course = CourseFactory.createCourse("math");
    // Enrolling students in the Math course
    mathCourse.enroll("Alice");
    mathCourse.enroll("Bob");

    // Creating a Science course using the factory method
    const scienceCourse: Course = CourseFactory.createCourse("science");
    // Enrolling students in the Science course
    scienceCourse.enroll("Charlie");
    scienceCourse.enroll("Diana");
}

// Executing the simulation
simulateEnrollment();

