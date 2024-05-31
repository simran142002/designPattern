// acts as a bridge between two incompatible interfaces by converting the interface of a class into another interface that a client expects.
// It is called the Adapter pattern because it "adapts" the interface of one class into an interface that a client expects. 

// Existing interface that our system uses for processing grades
interface GradeProcessor {
    processGrades(grades: number[]): void;
}

// External library class with a different interface
class ExternalGradeSystem {
    calculateGrades(scores: number[]): void {
        const average = scores.reduce((a, b) => a + b, 0) / scores.length;
        console.log(`Average grade calculated by external system: ${average.toFixed(2)}`);
    }
}

// Another external library class with a different interface
class AlternativeGradeSystem {
    computeGrades(marks: number[]): void {
        const total = marks.reduce((a, b) => a + b, 0);
        const percentage = (total / (marks.length * 100)) * 100;
        console.log(`Percentage calculated by alternative system: ${percentage.toFixed(2)}%`);
    }
}

// Adapter class to make ExternalGradeSystem compatible with GradeProcessor
class ExternalGradeSystemAdapter implements GradeProcessor {
    private externalGradeSystem: ExternalGradeSystem;

    constructor(externalGradeSystem: ExternalGradeSystem) {
        this.externalGradeSystem = externalGradeSystem;
    }

    processGrades(grades: number[]): void {
        this.externalGradeSystem.calculateGrades(grades);
    }
}

// Adapter class to make AlternativeGradeSystem compatible with GradeProcessor
class AlternativeGradeSystemAdapter implements GradeProcessor {
    private alternativeGradeSystem: AlternativeGradeSystem;

    constructor(alternativeGradeSystem: AlternativeGradeSystem) {
        this.alternativeGradeSystem = alternativeGradeSystem;
    }

    processGrades(grades: number[]): void {
        this.alternativeGradeSystem.computeGrades(grades);
    }
}

// Our system's class that uses GradeProcessor
class StudentGradeService {
    private gradeProcessor: GradeProcessor;

    constructor(gradeProcessor: GradeProcessor) {
        this.gradeProcessor = gradeProcessor;
    }

    processStudentGrades(grades: number[]): void {
        this.gradeProcessor.processGrades(grades);
    }
}

// Usage example
function main() {
    const grades = [85, 90, 78, 92, 88];

    // Using the external grade system
    const externalGradeSystem = new ExternalGradeSystem();
    const externalGradeSystemAdapter = new ExternalGradeSystemAdapter(externalGradeSystem);
    const studentGradeService1 = new StudentGradeService(externalGradeSystemAdapter);

    console.log("Processing student grades using external grade system:");
    studentGradeService1.processStudentGrades(grades);

    // Using the alternative grade system
    const alternativeGradeSystem = new AlternativeGradeSystem();
    const alternativeGradeSystemAdapter = new AlternativeGradeSystemAdapter(alternativeGradeSystem);
    const studentGradeService2 = new StudentGradeService(alternativeGradeSystemAdapter);

    console.log("\nProcessing student grades using alternative grade system:");
    studentGradeService2.processStudentGrades(grades);
}

main();
