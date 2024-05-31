// The Factory Design Pattern is a creational design pattern that provides an interface or abstract class for creating objects in a superclass
// Define concrete product classes: MathCourse and ScienceCourse
var MathCourse = /** @class */ (function () {
    function MathCourse() {
    }
    MathCourse.prototype.enroll = function (student) {
        console.log("Enrolling ".concat(student, " in a Math course."));
    };
    return MathCourse;
}());
var ScienceCourse = /** @class */ (function () {
    function ScienceCourse() {
    }
    ScienceCourse.prototype.enroll = function (student) {
        console.log("Enrolling ".concat(student, " in a Science course."));
    };
    return ScienceCourse;
}());
// Factory class responsible for creating courses
var CourseFactory = /** @class */ (function () {
    function CourseFactory() {
    }
    CourseFactory.createCourse = function (type) {
        // The factory method creates and returns instances of concrete product classes based on the given type.
        if (type.toLowerCase() === "math") {
            return new MathCourse();
        }
        else if (type.toLowerCase() === "science") {
            return new ScienceCourse();
        }
        else {
            throw new Error("Invalid course type: " + type);
        }
    };
    return CourseFactory;
}());
// Function to simulate a scenario where students enroll in courses
function simulateEnrollment() {
    // Creating a Math course using the factory method
    var mathCourse = CourseFactory.createCourse("math");
    // Enrolling students in the Math course
    mathCourse.enroll("Alice");
    mathCourse.enroll("Bob");
    // Creating a Science course using the factory method
    var scienceCourse = CourseFactory.createCourse("science");
    // Enrolling students in the Science course
    scienceCourse.enroll("Charlie");
    scienceCourse.enroll("Diana");
}
// Executing the simulation
simulateEnrollment();
