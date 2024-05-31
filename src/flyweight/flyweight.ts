// Flyweight Interface
// The Flyweight design pattern is used to minimize memory usage by sharing as much data as possible with similar objects. In the context of an educational platform, we can use the Flyweight pattern to manage large numbers of student objects efficiently, especially when many of them share common data.


interface Student {
    getDetails(): void;
}

// Concrete Flyweight
class SharedStudentData implements Student {
    private grade: string;
    private course: string;

    constructor(grade: string, course: string) {
        this.grade = grade;
        this.course = course;
    }

    getDetails(): void {
        console.log(`Grade: ${this.grade}, Course: ${this.course}`);
    }
}

// Unshared Concrete Flyweight
class UniqueStudentData {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getDetails(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}

// Flyweight Factory
class StudentFactory {
    private static sharedData: { [key: string]: SharedStudentData } = {};

    static getSharedData(grade: string, course: string): SharedStudentData {
        const key = `${grade}_${course}`;
        if (!this.sharedData[key]) {
            this.sharedData[key] = new SharedStudentData(grade, course);
        }
        return this.sharedData[key];
    }
}

// Client code
class StudentRecord {
    private uniqueData: UniqueStudentData;
    private sharedData: SharedStudentData;

    constructor(id: number, name: string, grade: string, course: string) {
        this.uniqueData = new UniqueStudentData(id, name);
        this.sharedData = StudentFactory.getSharedData(grade, course);
    }

    displayDetails(): void {
        this.uniqueData.getDetails();
        this.sharedData.getDetails();
    }
}

// Usage
function main() {
    const students = [
        new StudentRecord(1, "Alice", "A", "Math"),
        new StudentRecord(2, "Bob", "A", "Math"),
        new StudentRecord(3, "Charlie", "B", "Science"),
        new StudentRecord(4, "David", "A", "Math"),
        new StudentRecord(5, "Eva", "B", "Science"),
    ];

    for (const student of students) {
        student.displayDetails();
        console.log('---');
    }
}

main();
