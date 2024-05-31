// Mediator design pattern allows objects to communicate with each other through a mediator rather than directly. This reduces the dependencies between communicating objects, making the system more maintainable and scalable.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Participant class
var Participant = /** @class */ (function () {
    function Participant(mediator) {
        this.mediator = mediator;
    }
    return Participant;
}());
// Concrete Participant classes
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(mediator, name) {
        var _this = _super.call(this, mediator) || this;
        _this.name = name;
        return _this;
    }
    Student.prototype.askQuestion = function (question) {
        console.log("".concat(this.name, " asks: ").concat(question));
        this.mediator.notify(this, "question");
    };
    Student.prototype.receiveAnswer = function (answer) {
        console.log("".concat(this.name, " receives answer: ").concat(answer));
    };
    return Student;
}(Participant));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(mediator, name) {
        var _this = _super.call(this, mediator) || this;
        _this.name = name;
        return _this;
    }
    Instructor.prototype.provideAnswer = function (answer) {
        console.log("".concat(this.name, " provides answer: ").concat(answer));
        this.mediator.notify(this, "answer");
    };
    return Instructor;
}(Participant));
// Concrete Mediator class
var Course = /** @class */ (function () {
    function Course() {
        this.students = [];
        this.instructor = null;
    }
    Course.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Course.prototype.setInstructor = function (instructor) {
        this.instructor = instructor;
    };
    Course.prototype.notify = function (sender, event) {
        if (event === "question" && this.instructor) {
            console.log("Mediator notifies the instructor about the question.");
            // In a real system, you'd pass the question details here
        }
        else if (event === "answer") {
            console.log("Mediator notifies all students about the answer.");
            this.students.forEach(function (student) {
                if (student !== sender) {
                    student.receiveAnswer("Answer from the instructor.");
                }
            });
        }
    };
    return Course;
}());
// Usage
function main() {
    var course = new Course();
    var student1 = new Student(course, "Alice");
    var student2 = new Student(course, "Bob");
    var instructor = new Instructor(course, "Dr. Smith");
    course.addStudent(student1);
    course.addStudent(student2);
    course.setInstructor(instructor);
    student1.askQuestion("What is polymorphism?");
    instructor.provideAnswer("Polymorphism is the ability of an object to take on many forms.");
}
main();
