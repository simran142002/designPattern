// The Command pattern is used to encapsulate a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. It also provides support for undoable operations.
// Receiver class: Student Management System
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = {};
    }
    StudentManagementSystem.prototype.addStudent = function (id) {
        if (!this.students[id]) {
            this.students[id] = [];
            console.log("Student with ID: ".concat(id, " added."));
        }
        else {
            console.log("Student with ID: ".concat(id, " already exists."));
        }
    };
    StudentManagementSystem.prototype.removeStudent = function (id) {
        if (this.students[id]) {
            delete this.students[id];
            console.log("Student with ID: ".concat(id, " removed."));
        }
        else {
            console.log("Student with ID: ".concat(id, " does not exist."));
        }
    };
    StudentManagementSystem.prototype.enrollStudentInCourse = function (id, course) {
        if (this.students[id]) {
            this.students[id].push(course);
            console.log("Student with ID: ".concat(id, " enrolled in course: ").concat(course, "."));
        }
        else {
            console.log("Student with ID: ".concat(id, " does not exist."));
        }
    };
    StudentManagementSystem.prototype.unenrollStudentFromCourse = function (id, course) {
        if (this.students[id]) {
            var courseIndex = this.students[id].indexOf(course);
            if (courseIndex !== -1) {
                this.students[id].splice(courseIndex, 1);
                console.log("Student with ID: ".concat(id, " unenrolled from course: ").concat(course, "."));
            }
            else {
                console.log("Student with ID: ".concat(id, " is not enrolled in course: ").concat(course, "."));
            }
        }
        else {
            console.log("Student with ID: ".concat(id, " does not exist."));
        }
    };
    return StudentManagementSystem;
}());
// Concrete Command classes
var AddStudentCommand = /** @class */ (function () {
    function AddStudentCommand(receiver, id) {
        this.receiver = receiver;
        this.id = id;
    }
    AddStudentCommand.prototype.execute = function () {
        this.receiver.addStudent(this.id);
    };
    AddStudentCommand.prototype.undo = function () {
        this.receiver.removeStudent(this.id);
    };
    return AddStudentCommand;
}());
var RemoveStudentCommand = /** @class */ (function () {
    function RemoveStudentCommand(receiver, id) {
        this.receiver = receiver;
        this.id = id;
    }
    RemoveStudentCommand.prototype.execute = function () {
        this.receiver.removeStudent(this.id);
    };
    RemoveStudentCommand.prototype.undo = function () {
        this.receiver.addStudent(this.id);
    };
    return RemoveStudentCommand;
}());
var EnrollStudentCommand = /** @class */ (function () {
    function EnrollStudentCommand(receiver, id, course) {
        this.receiver = receiver;
        this.id = id;
        this.course = course;
    }
    EnrollStudentCommand.prototype.execute = function () {
        this.receiver.enrollStudentInCourse(this.id, this.course);
    };
    EnrollStudentCommand.prototype.undo = function () {
        this.receiver.unenrollStudentFromCourse(this.id, this.course);
    };
    return EnrollStudentCommand;
}());
var UnenrollStudentCommand = /** @class */ (function () {
    function UnenrollStudentCommand(receiver, id, course) {
        this.receiver = receiver;
        this.id = id;
        this.course = course;
    }
    UnenrollStudentCommand.prototype.execute = function () {
        this.receiver.unenrollStudentFromCourse(this.id, this.course);
    };
    UnenrollStudentCommand.prototype.undo = function () {
        this.receiver.enrollStudentInCourse(this.id, this.course);
    };
    return UnenrollStudentCommand;
}());
// Invoker class
var CommandInvoker = /** @class */ (function () {
    function CommandInvoker() {
        this.history = [];
    }
    CommandInvoker.prototype.executeCommand = function (command) {
        command.execute();
        this.history.push(command);
    };
    CommandInvoker.prototype.undoLastCommand = function () {
        var command = this.history.pop();
        if (command) {
            command.undo();
        }
    };
    return CommandInvoker;
}());
// Client code
function main() {
    var studentManagementSystem = new StudentManagementSystem();
    var invoker = new CommandInvoker();
    var addStudentCommand = new AddStudentCommand(studentManagementSystem, "1234");
    var enrollStudentCommand = new EnrollStudentCommand(studentManagementSystem, "1234", "Math");
    var removeStudentCommand = new RemoveStudentCommand(studentManagementSystem, "1234");
    invoker.executeCommand(addStudentCommand);
    invoker.executeCommand(enrollStudentCommand);
    invoker.executeCommand(removeStudentCommand);
    console.log("\nUndoing last command:");
    invoker.undoLastCommand();
}
main();
