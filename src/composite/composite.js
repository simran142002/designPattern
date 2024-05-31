// model a course structure where a course can contain multiple modules, and each module can contain lessons
// Leaf Class representing a Lesson
var Lesson = /** @class */ (function () {
    function Lesson(name, duration) {
        this.name = name;
        this.duration = duration;
    }
    Lesson.prototype.getName = function () {
        return this.name;
    };
    Lesson.prototype.getDetails = function (indentation) {
        if (indentation === void 0) { indentation = ""; }
        return "".concat(indentation, "Lesson: ").concat(this.name, ", Duration: ").concat(this.duration, " mins\n");
    };
    return Lesson;
}());
// Composite Class representing a Module
var Module = /** @class */ (function () {
    function Module(name) {
        this.name = name;
        this.components = [];
    }
    Module.prototype.addComponent = function (component) {
        this.components.push(component);
    };
    Module.prototype.removeComponent = function (component) {
        var index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    };
    Module.prototype.getName = function () {
        return this.name;
    };
    Module.prototype.getDetails = function (indentation) {
        if (indentation === void 0) { indentation = ""; }
        var details = "".concat(indentation, "Module: ").concat(this.name, "\n");
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            details += component.getDetails(indentation + "  ");
        }
        return details;
    };
    return Module;
}());
// Composite Class representing a Course
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
        this.components = [];
    }
    Course.prototype.addComponent = function (component) {
        this.components.push(component);
    };
    Course.prototype.removeComponent = function (component) {
        var index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    };
    Course.prototype.getName = function () {
        return this.name;
    };
    Course.prototype.getDetails = function (indentation) {
        if (indentation === void 0) { indentation = ""; }
        var details = "".concat(indentation, "Course: ").concat(this.name, "\n");
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            details += component.getDetails(indentation + "  ");
        }
        return details;
    };
    return Course;
}());
// Usage
function main() {
    // Create lessons
    var lesson1 = new Lesson("Introduction to Programming", 60);
    var lesson2 = new Lesson("Variables and Data Types", 45);
    var lesson3 = new Lesson("Control Structures", 50);
    var lesson4 = new Lesson("Object-Oriented Programming", 70);
    var lesson5 = new Lesson("Advanced Topics", 90);
    // Create modules and add lessons to them
    var module1 = new Module("Basics of Programming");
    module1.addComponent(lesson1);
    module1.addComponent(lesson2);
    module1.addComponent(lesson3);
    var module2 = new Module("Advanced Programming");
    module2.addComponent(lesson4);
    module2.addComponent(lesson5);
    // Create a course and add modules to it
    var course = new Course("Computer Science 101");
    course.addComponent(module1);
    course.addComponent(module2);
    // Print course details
    console.log(course.getDetails());
}
main();
