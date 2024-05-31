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
var CourseEvaluation = /** @class */ (function () {
    function CourseEvaluation() {
    }
    // Template method
    CourseEvaluation.prototype.conductEvaluation = function () {
        this.prepareMaterials();
        this.distributeMaterials();
        this.collectSubmissions();
        this.gradeSubmissions();
        this.provideFeedback();
    };
    // Common method with default implementation
    CourseEvaluation.prototype.prepareMaterials = function () {
        console.log("Preparing materials for evaluation...");
    };
    return CourseEvaluation;
}());
var ExamEvaluation = /** @class */ (function (_super) {
    __extends(ExamEvaluation, _super);
    function ExamEvaluation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExamEvaluation.prototype.distributeMaterials = function () {
        console.log("Distributing exam papers to students...");
    };
    ExamEvaluation.prototype.collectSubmissions = function () {
        console.log("Collecting completed exam papers from students...");
    };
    ExamEvaluation.prototype.gradeSubmissions = function () {
        console.log("Grading exam papers...");
    };
    ExamEvaluation.prototype.provideFeedback = function () {
        console.log("Providing feedback on exam performance...");
    };
    return ExamEvaluation;
}(CourseEvaluation));
var AssignmentEvaluation = /** @class */ (function (_super) {
    __extends(AssignmentEvaluation, _super);
    function AssignmentEvaluation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssignmentEvaluation.prototype.distributeMaterials = function () {
        console.log("Uploading assignment instructions to the online portal...");
    };
    AssignmentEvaluation.prototype.collectSubmissions = function () {
        console.log("Collecting submitted assignments from the online portal...");
    };
    AssignmentEvaluation.prototype.gradeSubmissions = function () {
        console.log("Grading submitted assignments...");
    };
    AssignmentEvaluation.prototype.provideFeedback = function () {
        console.log("Providing feedback on assignment submissions...");
    };
    return AssignmentEvaluation;
}(CourseEvaluation));
// Usage
function main() {
    console.log("Conducting Exam Evaluation:");
    var examEvaluation = new ExamEvaluation();
    examEvaluation.conductEvaluation();
    console.log("\nConducting Assignment Evaluation:");
    var assignmentEvaluation = new AssignmentEvaluation();
    assignmentEvaluation.conductEvaluation();
}
main();
