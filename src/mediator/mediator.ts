// Mediator design pattern allows objects to communicate with each other through a mediator rather than directly. This reduces the dependencies between communicating objects, making the system more maintainable and scalable.

// Course acts as the mediator between Student and Instructor. This scenario is common in educational platforms where students enroll in courses and instructors manage them.

// Mediator Interface
interface CourseMediator {
    notify(sender: Participant, event: string): void;
}

// Abstract Participant class
abstract class Participant {
    protected mediator: CourseMediator;

    constructor(mediator: CourseMediator) {
        this.mediator = mediator;
    }
}

// Concrete Participant classes
class Student extends Participant {
    constructor(mediator: CourseMediator, public name: string) {
        super(mediator);
    }

    askQuestion(question: string): void {
        console.log(`${this.name} asks: ${question}`);
        this.mediator.notify(this, "question");
    }

    receiveAnswer(answer: string): void {
        console.log(`${this.name} receives answer: ${answer}`);
    }
}

class Instructor extends Participant {
    constructor(mediator: CourseMediator, public name: string) {
        super(mediator);
    }

    provideAnswer(answer: string): void {
        console.log(`${this.name} provides answer: ${answer}`);
        this.mediator.notify(this, "answer");
    }
}

// Concrete Mediator class
class Course implements CourseMediator {
    private students: Student[] = [];
    private instructor: Instructor | null = null;

    addStudent(student: Student): void {
        this.students.push(student);
    }

    setInstructor(instructor: Instructor): void {
        this.instructor = instructor;
    }

    notify(sender: Participant, event: string): void {
        if (event === "question" && this.instructor) {
            console.log(`Mediator notifies the instructor about the question.`);
            // In a real system, you'd pass the question details here
        } else if (event === "answer") {
            console.log(`Mediator notifies all students about the answer.`);
            this.students.forEach(student => {
                if (student !== sender) {
                    student.receiveAnswer("Answer from the instructor.");
                }
            });
        }
    }
}

// Usage
function main() {
    const course = new Course();

    const student1 = new Student(course, "Alice");
    const student2 = new Student(course, "Bob");
    const instructor = new Instructor(course, "Dr. Smith");

    course.addStudent(student1);
    course.addStudent(student2);
    course.setInstructor(instructor);

    student1.askQuestion("What is polymorphism?");
    instructor.provideAnswer("Polymorphism is the ability of an object to take on many forms.");
}

main();
