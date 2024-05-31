// Concrete Strategy for Percentage-Based Grading
var PercentageGradingStrategy = /** @class */ (function () {
    function PercentageGradingStrategy() {
    }
    PercentageGradingStrategy.prototype.calculateGrade = function (scores) {
        var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
        var percentage = (total / (scores.length * 100)) * 100;
        return "Percentage Grade: ".concat(percentage.toFixed(2), "%");
    };
    return PercentageGradingStrategy;
}());
// Concrete Strategy for Letter-Grade-Based Grading
var LetterGradingStrategy = /** @class */ (function () {
    function LetterGradingStrategy() {
    }
    LetterGradingStrategy.prototype.calculateGrade = function (scores) {
        var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
        var average = total / scores.length;
        var grade;
        if (average >= 90) {
            grade = 'A';
        }
        else if (average >= 80) {
            grade = 'B';
        }
        else if (average >= 70) {
            grade = 'C';
        }
        else if (average >= 60) {
            grade = 'D';
        }
        else {
            grade = 'F';
        }
        return "Letter Grade: ".concat(grade);
    };
    return LetterGradingStrategy;
}());
// Context Class
var Student = /** @class */ (function () {
    function Student(name, scores, gradingStrategy) {
        this.name = name;
        this.scores = scores;
        this.gradingStrategy = gradingStrategy;
    }
    Student.prototype.setGradingStrategy = function (gradingStrategy) {
        this.gradingStrategy = gradingStrategy;
    };
    Student.prototype.getGrade = function () {
        return this.gradingStrategy.calculateGrade(this.scores);
    };
    Student.prototype.printReport = function () {
        console.log("Student: ".concat(this.name));
        console.log(this.getGrade());
    };
    return Student;
}());
// Usage
function main() {
    var scores = [85, 92, 88, 76, 95];
    var percentageGradingStrategy = new PercentageGradingStrategy();
    var letterGradingStrategy = new LetterGradingStrategy();
    var student = new Student('John Doe', scores, percentageGradingStrategy);
    student.printReport();
    student.setGradingStrategy(letterGradingStrategy);
    student.printReport();
}
main();
