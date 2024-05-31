// Visitor interface
// Concrete Element classes
var Lesson = /** @class */ (function () {
    function Lesson(title, content) {
        this.title = title;
        this.content = content;
    }
    Lesson.prototype.accept = function (visitor) {
        visitor.visitLesson(this);
    };
    return Lesson;
}());
var Quiz = /** @class */ (function () {
    function Quiz(title, questions) {
        this.title = title;
        this.questions = questions;
    }
    Quiz.prototype.accept = function (visitor) {
        visitor.visitQuiz(this);
    };
    return Quiz;
}());
var Assignment = /** @class */ (function () {
    function Assignment(title, tasks) {
        this.title = title;
        this.tasks = tasks;
    }
    Assignment.prototype.accept = function (visitor) {
        visitor.visitAssignment(this);
    };
    return Assignment;
}());
// Concrete Visitor classes
var PrintVisitor = /** @class */ (function () {
    function PrintVisitor() {
    }
    PrintVisitor.prototype.visitLesson = function (lesson) {
        console.log("Lesson: ".concat(lesson.title));
        console.log("Content: ".concat(lesson.content));
    };
    PrintVisitor.prototype.visitQuiz = function (quiz) {
        console.log("Quiz: ".concat(quiz.title));
        console.log("Questions:");
        quiz.questions.forEach(function (question, index) {
            console.log("".concat(index + 1, ". ").concat(question));
        });
    };
    PrintVisitor.prototype.visitAssignment = function (assignment) {
        console.log("Assignment: ".concat(assignment.title));
        console.log("Tasks:");
        assignment.tasks.forEach(function (task, index) {
            console.log("".concat(index + 1, ". ").concat(task));
        });
    };
    return PrintVisitor;
}());
var SummaryVisitor = /** @class */ (function () {
    function SummaryVisitor() {
    }
    SummaryVisitor.prototype.visitLesson = function (lesson) {
        console.log("Lesson Summary: ".concat(lesson.title));
    };
    SummaryVisitor.prototype.visitQuiz = function (quiz) {
        console.log("Quiz Summary: ".concat(quiz.title, " with ").concat(quiz.questions.length, " questions"));
    };
    SummaryVisitor.prototype.visitAssignment = function (assignment) {
        console.log("Assignment Summary: ".concat(assignment.title, " with ").concat(assignment.tasks.length, " tasks"));
    };
    return SummaryVisitor;
}());
var AnalyticsVisitor = /** @class */ (function () {
    function AnalyticsVisitor() {
        this.lessonCount = 0;
        this.quizCount = 0;
        this.assignmentCount = 0;
        this.totalQuestions = 0;
        this.totalTasks = 0;
    }
    AnalyticsVisitor.prototype.visitLesson = function (lesson) {
        this.lessonCount++;
    };
    AnalyticsVisitor.prototype.visitQuiz = function (quiz) {
        this.quizCount++;
        this.totalQuestions += quiz.questions.length;
    };
    AnalyticsVisitor.prototype.visitAssignment = function (assignment) {
        this.assignmentCount++;
        this.totalTasks += assignment.tasks.length;
    };
    AnalyticsVisitor.prototype.printStatistics = function () {
        console.log("Total Lessons: ".concat(this.lessonCount));
        console.log("Total Quizzes: ".concat(this.quizCount));
        console.log("Total Questions: ".concat(this.totalQuestions));
        console.log("Total Assignments: ".concat(this.assignmentCount));
        console.log("Total Tasks: ".concat(this.totalTasks));
    };
    return AnalyticsVisitor;
}());
var ValidationVisitor = /** @class */ (function () {
    function ValidationVisitor() {
    }
    ValidationVisitor.prototype.visitLesson = function (lesson) {
        if (!lesson.title || !lesson.content) {
            console.log("Lesson \"".concat(lesson.title, "\" is missing title or content"));
        }
    };
    ValidationVisitor.prototype.visitQuiz = function (quiz) {
        if (!quiz.title || quiz.questions.length === 0) {
            console.log("Quiz \"".concat(quiz.title, "\" is missing title or questions"));
        }
    };
    ValidationVisitor.prototype.visitAssignment = function (assignment) {
        if (!assignment.title || assignment.tasks.length === 0) {
            console.log("Assignment \"".concat(assignment.title, "\" is missing title or tasks"));
        }
    };
    return ValidationVisitor;
}());
// Client code
function main() {
    var contents = [
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
    var printVisitor = new PrintVisitor();
    var summaryVisitor = new SummaryVisitor();
    var analyticsVisitor = new AnalyticsVisitor();
    var validationVisitor = new ValidationVisitor();
    console.log("Printing Detailed Content:");
    contents.forEach(function (content) { return content.accept(printVisitor); });
    console.log("\nPrinting Summary:");
    contents.forEach(function (content) { return content.accept(summaryVisitor); });
    console.log("\nValidating Content:");
    contents.forEach(function (content) { return content.accept(validationVisitor); });
    console.log("\nCollecting Analytics:");
    contents.forEach(function (content) { return content.accept(analyticsVisitor); });
    analyticsVisitor.printStatistics();
}
main();
// The Visitor design pattern is used to separate an algorithm from the object structure on which it operates. It allows adding new operations to existing object structures without modifying the structures.
