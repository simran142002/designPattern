// Observer interface defining the update method
interface Observer {
    update(message: string): void;
}

// Subject interface defining methods to attach, detach, and notify observers
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

// Concrete observer class representing a Student
class Student implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
        console.log(`${this.name} received update: ${message}`);
    }
}

// Concrete subject class representing a Course
class Course implements Subject {
    private interestedStudnets: Observer[] = [];
    private lessons: string[] = [];

    attach(student: Observer): void {
        this.interestedStudnets.push(student);
    }

    detach(student: Observer): void {
        const index = this.interestedStudnets.indexOf(student);
        if (index > -1) {
            this.interestedStudnets.splice(index, 1);
        }
    }

    notify(): void {
        for (const student of this.interestedStudnets) {
            student.update(`New lesson added: ${this.lessons[this.lessons.length - 1]}`);
        }
    }

    addLesson(lesson: string): void {
        this.lessons.push(lesson);
        this.notify();
    }

    getLessons(): string[] {
        return this.lessons;
    }
}

// Client code demonstrating the observer pattern
function main() {
    const course = new Course();

    const student1 = new Student("Alice");
    const student2 = new Student("Bob");

    // Students subscribe to course updates
    course.attach(student1);
    course.attach(student2);

    // Adding lessons to the course and notifying students
    course.addLesson("Lesson 1: Introduction to TypeScript");
    course.addLesson("Lesson 2: Understanding Types");

    // Detaching a student and adding another lesson
    course.detach(student1);
    course.addLesson("Lesson 3: Classes and Interfaces");

    // Display all lessons
    console.log("All lessons in the course:");
    console.log(course.getLessons());
}

main();
