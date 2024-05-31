// The Template Method design pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses.

abstract class CourseEvaluation {
    // Template method
    public conductEvaluation(): void {
        this.prepareMaterials();
        this.distributeMaterials();
        this.collectSubmissions();
        this.gradeSubmissions();
        this.provideFeedback();
    }

    // Common method with default implementation
    protected prepareMaterials(): void {
        console.log("Preparing materials for evaluation...");
    }

    // Steps to be implemented by subclasses
    protected abstract distributeMaterials(): void;
    protected abstract collectSubmissions(): void;
    protected abstract gradeSubmissions(): void;
    protected abstract provideFeedback(): void;
}

class ExamEvaluation extends CourseEvaluation {
    protected distributeMaterials(): void {
        console.log("Distributing exam papers to students...");
    }

    protected collectSubmissions(): void {
        console.log("Collecting completed exam papers from students...");
    }

    protected gradeSubmissions(): void {
        console.log("Grading exam papers...");
    }

    protected provideFeedback(): void {
        console.log("Providing feedback on exam performance...");
    }
}

class AssignmentEvaluation extends CourseEvaluation {
    protected distributeMaterials(): void {
        console.log("Uploading assignment instructions to the online portal...");
    }

    protected collectSubmissions(): void {
        console.log("Collecting submitted assignments from the online portal...");
    }

    protected gradeSubmissions(): void {
        console.log("Grading submitted assignments...");
    }

    protected provideFeedback(): void {
        console.log("Providing feedback on assignment submissions...");
    }
}

// Usage
function main() {
    console.log("Conducting Exam Evaluation:");
    const examEvaluation = new ExamEvaluation();
    examEvaluation.conductEvaluation();

    console.log("\nConducting Assignment Evaluation:");
    const assignmentEvaluation = new AssignmentEvaluation();
    assignmentEvaluation.conductEvaluation();
}

main();
