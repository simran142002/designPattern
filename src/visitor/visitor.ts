// The Visitor design pattern is used to separate an algorithm from the object structure on which it operates. It allows adding new operations to existing object structures without modifying the structures.


// Visitor interface
interface ContentVisitor {
    visitLesson(lesson: Lesson): void;
    visitQuiz(quiz: Quiz): void;
    visitAssignment(assignment: Assignment): void;
}

// Element interface
interface Content {
    accept(visitor: ContentVisitor): void;
}

// Concrete Element classes
class Lesson implements Content {
    constructor(public title: string, public content: string) {}

    accept(visitor: ContentVisitor): void {
        visitor.visitLesson(this);
    }
}

class Quiz implements Content {
    constructor(public title: string, public questions: string[]) {}

    accept(visitor: ContentVisitor): void {
        visitor.visitQuiz(this);
    }
}

class Assignment implements Content {
    constructor(public title: string, public tasks: string[]) {}

    accept(visitor: ContentVisitor): void {
        visitor.visitAssignment(this);
    }
}

// Concrete Visitor classes
class PrintVisitor implements ContentVisitor {
    visitLesson(lesson: Lesson): void {
        console.log(`Lesson: ${lesson.title}`);
        console.log(`Content: ${lesson.content}`);
    }

    visitQuiz(quiz: Quiz): void {
        console.log(`Quiz: ${quiz.title}`);
        console.log("Questions:");
        quiz.questions.forEach((question, index) => {
            console.log(`${index + 1}. ${question}`);
        });
    }

    visitAssignment(assignment: Assignment): void {
        console.log(`Assignment: ${assignment.title}`);
        console.log("Tasks:");
        assignment.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

class SummaryVisitor implements ContentVisitor {
    visitLesson(lesson: Lesson): void {
        console.log(`Lesson Summary: ${lesson.title}`);
    }

    visitQuiz(quiz: Quiz): void {
        console.log(`Quiz Summary: ${quiz.title} with ${quiz.questions.length} questions`);
    }

    visitAssignment(assignment: Assignment): void {
        console.log(`Assignment Summary: ${assignment.title} with ${assignment.tasks.length} tasks`);
    }
}

class AnalyticsVisitor implements ContentVisitor {
    private lessonCount = 0;
    private quizCount = 0;
    private assignmentCount = 0;
    private totalQuestions = 0;
    private totalTasks = 0;

    visitLesson(lesson: Lesson): void {
        this.lessonCount++;
    }

    visitQuiz(quiz: Quiz): void {
        this.quizCount++;
        this.totalQuestions += quiz.questions.length;
    }

    visitAssignment(assignment: Assignment): void {
        this.assignmentCount++;
        this.totalTasks += assignment.tasks.length;
    }

    printStatistics(): void {
        console.log(`Total Lessons: ${this.lessonCount}`);
        console.log(`Total Quizzes: ${this.quizCount}`);
        console.log(`Total Questions: ${this.totalQuestions}`);
        console.log(`Total Assignments: ${this.assignmentCount}`);
        console.log(`Total Tasks: ${this.totalTasks}`);
    }
}

class ValidationVisitor implements ContentVisitor {
    visitLesson(lesson: Lesson): void {
        if (!lesson.title || !lesson.content) {
            console.log(`Lesson "${lesson.title}" is missing title or content`);
        }
    }

    visitQuiz(quiz: Quiz): void {
        if (!quiz.title || quiz.questions.length === 0) {
            console.log(`Quiz "${quiz.title}" is missing title or questions`);
        }
    }

    visitAssignment(assignment: Assignment): void {
        if (!assignment.title || assignment.tasks.length === 0) {
            console.log(`Assignment "${assignment.title}" is missing title or tasks`);
        }
    }
}

// Client code
function main() {
    const contents: Content[] = [
        new Lesson("Introduction to TypeScript", "TypeScript is a typed superset of JavaScript..."),
        new Quiz("TypeScript Basics", [
            "What is TypeScript?",
            "How to declare a variable in TypeScript?",
            "What is the purpose of interfaces in TypeScript?"
        ]),
        new Assignment("TypeScript Assignment", [
            "Complete the TypeScript tutorial",
            "Build a small TypeScript project"
        ])
    ];

    const printVisitor = new PrintVisitor();
    const summaryVisitor = new SummaryVisitor();
    const analyticsVisitor = new AnalyticsVisitor();
    const validationVisitor = new ValidationVisitor();

    console.log("Printing Detailed Content:");
    contents.forEach(content => content.accept(printVisitor));

    console.log("\nPrinting Summary:");
    contents.forEach(content => content.accept(summaryVisitor));

    console.log("\nValidating Content:");
    contents.forEach(content => content.accept(validationVisitor));

    console.log("\nCollecting Analytics:");
    contents.forEach(content => content.accept(analyticsVisitor));
    analyticsVisitor.printStatistics();
}

main();


// The Visitor design pattern is used to separate an algorithm from the object structure on which it operates. It allows adding new operations to existing object structures without modifying the structures.