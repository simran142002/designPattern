// External library class with a different interface
var ExternalGradeSystem = /** @class */ (function () {
    function ExternalGradeSystem() {
    }
    ExternalGradeSystem.prototype.calculateGrades = function (scores) {
        var average = scores.reduce(function (a, b) { return a + b; }, 0) / scores.length;
        console.log("Average grade calculated by external system: ".concat(average.toFixed(2)));
    };
    return ExternalGradeSystem;
}());
// Another external library class with a different interface
var AlternativeGradeSystem = /** @class */ (function () {
    function AlternativeGradeSystem() {
    }
    AlternativeGradeSystem.prototype.computeGrades = function (marks) {
        var total = marks.reduce(function (a, b) { return a + b; }, 0);
        var percentage = (total / (marks.length * 100)) * 100;
        console.log("Percentage calculated by alternative system: ".concat(percentage.toFixed(2), "%"));
    };
    return AlternativeGradeSystem;
}());
// Adapter class to make ExternalGradeSystem compatible with GradeProcessor
var ExternalGradeSystemAdapter = /** @class */ (function () {
    function ExternalGradeSystemAdapter(externalGradeSystem) {
        this.externalGradeSystem = externalGradeSystem;
    }
    ExternalGradeSystemAdapter.prototype.processGrades = function (grades) {
        this.externalGradeSystem.calculateGrades(grades);
    };
    return ExternalGradeSystemAdapter;
}());
// Adapter class to make AlternativeGradeSystem compatible with GradeProcessor
var AlternativeGradeSystemAdapter = /** @class */ (function () {
    function AlternativeGradeSystemAdapter(alternativeGradeSystem) {
        this.alternativeGradeSystem = alternativeGradeSystem;
    }
    AlternativeGradeSystemAdapter.prototype.processGrades = function (grades) {
        this.alternativeGradeSystem.computeGrades(grades);
    };
    return AlternativeGradeSystemAdapter;
}());
// Our system's class that uses GradeProcessor
var StudentGradeService = /** @class */ (function () {
    function StudentGradeService(gradeProcessor) {
        this.gradeProcessor = gradeProcessor;
    }
    StudentGradeService.prototype.processStudentGrades = function (grades) {
        this.gradeProcessor.processGrades(grades);
    };
    return StudentGradeService;
}());
// Usage example
function main() {
    var grades = [85, 90, 78, 92, 88];
    // Using the external grade system
    var externalGradeSystem = new ExternalGradeSystem();
    var externalGradeSystemAdapter = new ExternalGradeSystemAdapter(externalGradeSystem);
    var studentGradeService1 = new StudentGradeService(externalGradeSystemAdapter);
    console.log("Processing student grades using external grade system:");
    studentGradeService1.processStudentGrades(grades);
    // Using the alternative grade system
    var alternativeGradeSystem = new AlternativeGradeSystem();
    var alternativeGradeSystemAdapter = new AlternativeGradeSystemAdapter(alternativeGradeSystem);
    var studentGradeService2 = new StudentGradeService(alternativeGradeSystemAdapter);
    console.log("\nProcessing student grades using alternative grade system:");
    studentGradeService2.processStudentGrades(grades);
}
main();
