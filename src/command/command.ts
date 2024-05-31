// The Command pattern is used to encapsulate a request as an object, turns a request into a stand-alone object that contains all information about the request

// Command Interface
interface Command {
    execute(): void;
    undo(): void;
}

// Receiver class: Student Management System
class StudentManagementSystem {
    private students: { [id: string]: string[] } = {};

    addStudent(id: string): void {
        if (!this.students[id]) {
            this.students[id] = [];
            console.log(`Student with ID: ${id} added.`);
        } else {
            console.log(`Student with ID: ${id} already exists.`);
        }
    }

    removeStudent(id: string): void {
        if (this.students[id]) {
            delete this.students[id];
            console.log(`Student with ID: ${id} removed.`);
        } else {
            console.log(`Student with ID: ${id} does not exist.`);
        }
    }

    enrollStudentInCourse(id: string, course: string): void {
        if (this.students[id]) {
            this.students[id].push(course);
            console.log(`Student with ID: ${id} enrolled in course: ${course}.`);
        } else {
            console.log(`Student with ID: ${id} does not exist.`);
        }
    }

    unenrollStudentFromCourse(id: string, course: string): void {
        if (this.students[id]) {
            const courseIndex = this.students[id].indexOf(course);
            if (courseIndex !== -1) {
                this.students[id].splice(courseIndex, 1);
                console.log(`Student with ID: ${id} unenrolled from course: ${course}.`);
            } else {
                console.log(`Student with ID: ${id} is not enrolled in course: ${course}.`);
            }
        } else {
            console.log(`Student with ID: ${id} does not exist.`);
        }
    }
}

// Concrete Command classes
class AddStudentCommand implements Command {
    private studentManagementSystem: StudentManagementSystem;
    private id: string;

    constructor(studentManagementSystem: StudentManagementSystem, id: string) {
        this.studentManagementSystem = studentManagementSystem;
        this.id = id;
    }

    execute(): void {
        this.studentManagementSystem.addStudent(this.id);
    }

    undo(): void {
        this.studentManagementSystem.removeStudent(this.id);
    }
}

class RemoveStudentCommand implements Command {
    private receiver: StudentManagementSystem;
    private id: string;

    constructor(receiver: StudentManagementSystem, id: string) {
        this.receiver = receiver;
        this.id = id;
    }

    execute(): void {
        this.receiver.removeStudent(this.id);
    }

    undo(): void {
        this.receiver.addStudent(this.id);
    }
}

class EnrollStudentCommand implements Command {
    private receiver: StudentManagementSystem;
    private id: string;
    private course: string;

    constructor(receiver: StudentManagementSystem, id: string, course: string) {
        this.receiver = receiver;
        this.id = id;
        this.course = course;
    }

    execute(): void {
        this.receiver.enrollStudentInCourse(this.id, this.course);
    }

    undo(): void {
        this.receiver.unenrollStudentFromCourse(this.id, this.course);
    }
}

class UnenrollStudentCommand implements Command {
    private receiver: StudentManagementSystem;
    private id: string;
    private course: string;

    constructor(receiver: StudentManagementSystem, id: string, course: string) {
        this.receiver = receiver;
        this.id = id;
        this.course = course;
    }

    execute(): void {
        this.receiver.unenrollStudentFromCourse(this.id, this.course);
    }

    undo(): void {
        this.receiver.enrollStudentInCourse(this.id, this.course);
    }
}

// Invoker class
class CommandInvoker {
    private history: Command[] = [];

    executeCommand(command: Command): void {
        command.execute();
        this.history.push(command);
    }

    undoLastCommand(): void {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}

// Client code
function main() {
    const studentManagementSystem = new StudentManagementSystem();
    const invoker = new CommandInvoker();

    const addStudentCommand = new AddStudentCommand(studentManagementSystem, "1234");
    const enrollStudentCommand = new EnrollStudentCommand(studentManagementSystem, "1234", "Math");
    const removeStudentCommand = new RemoveStudentCommand(studentManagementSystem, "1234");

    invoker.executeCommand(addStudentCommand);
    invoker.executeCommand(enrollStudentCommand);
    invoker.executeCommand(removeStudentCommand);

    console.log("\nUndoing last command:");
    invoker.undoLastCommand();
}

main();
