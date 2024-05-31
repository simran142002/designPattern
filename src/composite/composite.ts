// model a course structure where a course can contain multiple modules, and each module can contain lessons

// Composite pattern, we can treat individual lessons and groups of lessons (modules) uniformly, making the system more flexible and easier to extend. This structure allows for complex hierarchies of educational content to be managed and displayed in a consistent manner.

// EducationalComponent Interface
interface EducationalComponent {
    getName(): string;
    getDetails(indentation: string): string;
}

// Leaf Class representing a Lesson
class Lesson implements EducationalComponent {
    constructor(private name: string, private duration: number) {}

    getName(): string {
        return this.name;
    }

    getDetails(indentation: string = ""): string {
        return `${indentation}Lesson: ${this.name}, Duration: ${this.duration} mins\n`;
    }
}

// Composite Class representing a Module
class Module implements EducationalComponent {
    private components: EducationalComponent[] = [];

    constructor(private name: string) {}

    addComponent(component: EducationalComponent): void {
        this.components.push(component);
    }

    removeComponent(component: EducationalComponent): void {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    }

    getName(): string {
        return this.name;
    }

    getDetails(topic: string = ""): string {
        let details = `${topic}Module: ${this.name}\n`;
        for (const component of this.components) {
            details += component.getDetails(topic + "  ");
        }
        return details;
    }
}
// Course -> Modules -> Lessions
// Composite Class representing a Course
class Course implements EducationalComponent {
    private components: EducationalComponent[] = [];

    constructor(private name: string) {}

    addComponent(component: EducationalComponent): void {
        this.components.push(component);
    }

    removeComponent(component: EducationalComponent): void {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    }

    getName(): string {
        return this.name;
    }

    getDetails(indentation: string = ""): string {
        let details = `${indentation}Course: ${this.name}\n`;
        for (const component of this.components) {
            details += component.getDetails(indentation + "  ");
        }
        return details;
    }
}

// Usage
function main() {
    // Create lessons
    const lesson1 = new Lesson("Introduction to Programming", 60);
    const lesson2 = new Lesson("Variables and Data Types", 45);
    const lesson3 = new Lesson("Control Structures", 50);
    const lesson4 = new Lesson("Object-Oriented Programming", 70);
    const lesson5 = new Lesson("Advanced Topics", 90);

    // Create modules and add lessons to them
    const module1 = new Module("Basics of Programming");
    module1.addComponent(lesson1);
    module1.addComponent(lesson2);
    module1.addComponent(lesson3);

    const module2 = new Module("Advanced Programming");
    module2.addComponent(lesson4);
    module2.addComponent(lesson5);

    // Create a course and add modules to it
    const course = new Course("Computer Science 101");
    course.addComponent(module1);
    course.addComponent(module2);

    // Print course details
    console.log(course.getDetails());
}

main();
