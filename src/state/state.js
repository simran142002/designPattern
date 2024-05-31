// The State design pattern allows an object to change its behavior when its internal state changes. This can be particularly useful in an educational platform for managing student enrollment statuses.
// Concrete States
var EnrolledState = /** @class */ (function () {
    function EnrolledState(student) {
        this.student = student;
    }
    EnrolledState.prototype.accessCourse = function () {
        console.log("Accessing course material.");
    };
    EnrolledState.prototype.getGrades = function () {
        console.log("Here are your grades.");
    };
    return EnrolledState;
}());
var SuspendedState = /** @class */ (function () {
    function SuspendedState(student) {
        this.student = student;
    }
    SuspendedState.prototype.accessCourse = function () {
        console.log("Access denied. Your enrollment is suspended.");
    };
    SuspendedState.prototype.getGrades = function () {
        console.log("Access denied. Your enrollment is suspended.");
    };
    return SuspendedState;
}());
var GraduatedState = /** @class */ (function () {
    function GraduatedState(student) {
        this.student = student;
    }
    GraduatedState.prototype.accessCourse = function () {
        console.log("Access denied. You have graduated.");
    };
    GraduatedState.prototype.getGrades = function () {
        console.log("Here are your final grades. Congratulations on graduating!");
    };
    return GraduatedState;
}());
// Context Class
var Student = /** @class */ (function () {
    function Student() {
        // Default state is enrolled
        this.state = new EnrolledState(this);
    }
    Student.prototype.setState = function (state) {
        this.state = state;
    };
    Student.prototype.accessCourse = function () {
        this.state.accessCourse();
    };
    Student.prototype.getGrades = function () {
        this.state.getGrades();
    };
    return Student;
}());
// Usage
function main() {
    var student = new Student();
    console.log("Student is enrolled:");
    student.accessCourse();
    student.getGrades();
    console.log("\nStudent is suspended:");
    student.setState(new SuspendedState(student));
    student.accessCourse();
    student.getGrades();
    console.log("\nStudent has graduated:");
    student.setState(new GraduatedState(student));
    student.accessCourse();
    student.getGrades();
}
main();
