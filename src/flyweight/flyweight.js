// Concrete Flyweight
var SharedStudentData = /** @class */ (function () {
    function SharedStudentData(grade, course) {
        this.grade = grade;
        this.course = course;
    }
    SharedStudentData.prototype.getDetails = function () {
        console.log("Grade: ".concat(this.grade, ", Course: ").concat(this.course));
    };
    return SharedStudentData;
}());
// Unshared Concrete Flyweight
var UniqueStudentData = /** @class */ (function () {
    function UniqueStudentData(id, name) {
        this.id = id;
        this.name = name;
    }
    UniqueStudentData.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name));
    };
    return UniqueStudentData;
}());
// Flyweight Factory
var StudentFactory = /** @class */ (function () {
    function StudentFactory() {
    }
    StudentFactory.getSharedData = function (grade, course) {
        var key = "".concat(grade, "_").concat(course);
        if (!this.sharedData[key]) {
            this.sharedData[key] = new SharedStudentData(grade, course);
        }
        return this.sharedData[key];
    };
    StudentFactory.sharedData = {};
    return StudentFactory;
}());
// Client code
var StudentRecord = /** @class */ (function () {
    function StudentRecord(id, name, grade, course) {
        this.uniqueData = new UniqueStudentData(id, name);
        this.sharedData = StudentFactory.getSharedData(grade, course);
    }
    StudentRecord.prototype.displayDetails = function () {
        this.uniqueData.getDetails();
        this.sharedData.getDetails();
    };
    return StudentRecord;
}());
// Usage
function main() {
    var students = [
        new StudentRecord(1, "Alice", "A", "Math"),
        new StudentRecord(2, "Bob", "A", "Math"),
        new StudentRecord(3, "Charlie", "B", "Science"),
        new StudentRecord(4, "David", "A", "Math"),
        new StudentRecord(5, "Eva", "B", "Science"),
    ];
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        student.displayDetails();
        console.log('---');
    }
}
main();
