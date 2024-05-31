// The Facade design pattern provides a simplified interface to a complex subsystem. In the context of an educational platform, we can create a facade to manage various subsystems such as student enrollment, course management, and grade reporting. 
// Subsystem 1: Student Management
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.enroll = function (courseId) {
        console.log("Enrolling student ".concat(this.name, " (ID: ").concat(this.id, ") in course ID ").concat(courseId));
    };
    return Student;
}());
// Subsystem 2: Course Management
var Course = /** @class */ (function () {
    function Course(id, title) {
        this.id = id;
        this.title = title;
    }
    Course.prototype.addStudent = function (studentId) {
        console.log("Adding student ID ".concat(studentId, " to course ").concat(this.title, " (ID: ").concat(this.id, ")"));
    };
    return Course;
}());
// Subsystem 3: Grade Reporting
var GradeReport = /** @class */ (function () {
    function GradeReport() {
    }
    GradeReport.prototype.reportGrade = function (studentId, courseId, grade) {
        console.log("Reporting grade ".concat(grade, " for student ID ").concat(studentId, " in course ID ").concat(courseId));
    };
    return GradeReport;
}());
// Facade
var EducationFacade = /** @class */ (function () {
    function EducationFacade() {
        this.students = {};
        this.courses = {};
        this.gradeReport = new GradeReport();
    }
    EducationFacade.prototype.registerStudent = function (id, name) {
        if (!this.students[id]) {
            this.students[id] = new Student(id, name);
            console.log("Registered student ".concat(name, " with ID ").concat(id));
        }
        else {
            console.log("Student with ID ".concat(id, " is already registered"));
        }
    };
    EducationFacade.prototype.addCourse = function (id, title) {
        if (!this.courses[id]) {
            this.courses[id] = new Course(id, title);
            console.log("Added course ".concat(title, " with ID ").concat(id));
        }
        else {
            console.log("Course with ID ".concat(id, " is already added"));
        }
    };
    EducationFacade.prototype.enrollStudentInCourse = function (studentId, courseId) {
        var student = this.students[studentId];
        var course = this.courses[courseId];
        if (student && course) {
            student.enroll(courseId);
            course.addStudent(studentId);
        }
        else {
            console.log("Either student ID ".concat(studentId, " or course ID ").concat(courseId, " does not exist"));
        }
    };
    EducationFacade.prototype.reportGrade = function (studentId, courseId, grade) {
        this.gradeReport.reportGrade(studentId, courseId, grade);
    };
    return EducationFacade;
}());
// Usage
function main() {
    var facade = new EducationFacade();
    // Register students
    facade.registerStudent(1, "Alice");
    facade.registerStudent(2, "Bob");
    // Add courses
    facade.addCourse(101, "Math");
    facade.addCourse(102, "Science");
    // Enroll students in courses
    facade.enrollStudentInCourse(1, 101);
    facade.enrollStudentInCourse(2, 102);
    // Report grades
    facade.reportGrade(1, 101, "A");
    facade.reportGrade(2, 102, "B");
}
main();
