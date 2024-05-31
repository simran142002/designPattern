// The Strategy design pattern allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from the clients that use it.

// Strategy Interface
interface GradingStrategy {
    calculateGrade(scores: number[]): string;
}

// Concrete Strategy for Percentage-Based Grading
class PercentageGradingStrategy implements GradingStrategy {
    calculateGrade(scores: number[]): string {
        const total = scores.reduce((sum, score) => sum + score, 0);
        const percentage = (total / (scores.length * 100)) * 100;
        return `Percentage Grade: ${percentage.toFixed(2)}%`;
    }
}

// Concrete Strategy for Letter-Grade-Based Grading
class LetterGradingStrategy implements GradingStrategy {
    calculateGrade(scores: number[]): string {
        const total = scores.reduce((sum, score) => sum + score, 0);
        const average = total / scores.length;

        let grade: string;
        if (average >= 90) {
            grade = 'A';
        } else if (average >= 80) {
            grade = 'B';
        } else if (average >= 70) {
            grade = 'C';
        } else if (average >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        return `Letter Grade: ${grade}`;
    }
}

// Context Class
class Student {
    private name: string;
    private scores: number[];
    private gradingStrategy: GradingStrategy;

    constructor(name: string, scores: number[], gradingStrategy: GradingStrategy) {
        this.name = name;
        this.scores = scores;
        this.gradingStrategy = gradingStrategy;
    }

    setGradingStrategy(gradingStrategy: GradingStrategy): void {
        this.gradingStrategy = gradingStrategy;
    }

    getGrade(): string {
        return this.gradingStrategy.calculateGrade(this.scores);
    }

    printReport(): void {
        console.log(`Student: ${this.name}`);
        console.log(this.getGrade());
    }
}

// Usage
function main() {
    const scores = [85, 92, 88, 76, 95];

    const percentageGradingStrategy = new PercentageGradingStrategy();
    const letterGradingStrategy = new LetterGradingStrategy();

    const student = new Student('John Doe', scores, percentageGradingStrategy);
    student.printReport();

    student.setGradingStrategy(letterGradingStrategy);
    student.printReport();
}

main();

// educational platform where different grading strategies can be applied to evaluate students' performance.
