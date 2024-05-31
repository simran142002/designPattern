// Concrete observer class representing a Student
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.update = function (message) {
        console.log("".concat(this.name, " received update: ").concat(message));
    };
    return Student;
}());
// Concrete subject class representing a Course
var Course = /** @class */ (function () {
    function Course() {
        this.observers = [];
        this.lessons = [];
    }
    Course.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    Course.prototype.detach = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    Course.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update("New lesson added: ".concat(this.lessons[this.lessons.length - 1]));
        }
    };
    Course.prototype.addLesson = function (lesson) {
        this.lessons.push(lesson);
        this.notify();
    };
    Course.prototype.getLessons = function () {
        return this.lessons;
    };
    return Course;
}());
// Client code demonstrating the observer pattern
function main() {
    var course = new Course();
    var student1 = new Student("Alice");
    var student2 = new Student("Bob");
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
