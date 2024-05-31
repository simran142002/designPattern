// The Memento design pattern is used to capture and restore an object's state. In the context of an educational platform, this pattern can be used to manage the state of a student's progress in a course. 

// Memento interface representing a snapshot of the student's progress
interface ProgressSnapshot {
    getProgress(): any;
}

// Concrete Memento class representing a snapshot of the student's progress
class StudentProgressSnapshot implements ProgressSnapshot {
    private progress: any;

    constructor(progress: any) {
        this.progress = progress;
    }

    getProgress(): any {
        return this.progress;
    }
}

// Originator class representing the student's progress
class StudentProgress {
    private progress: any;

    setProgress(progress: any): void {
        this.progress = progress;
    }

    getProgress(): any {
        return this.progress;
    }

    saveProgress(): ProgressSnapshot {
        return new StudentProgressSnapshot(this.progress);
    }

    restoreProgress(snapshot: ProgressSnapshot): void {
        this.progress = snapshot.getProgress();
    }
}

// Caretaker class responsible for storing and restoring snapshots
class ProgressHistory {
    private snapshots: ProgressSnapshot[] = [];

    addSnapshot(snapshot: ProgressSnapshot): void {
        this.snapshots.push(snapshot);
    }

    getSnapshot(index: number): ProgressSnapshot {
        return this.snapshots[index];
    }
}

// Client code demonstrating the memento pattern
function main() {
    const progressHistory = new ProgressHistory();
    const studentProgress = new StudentProgress();

    // Initial progress
    studentProgress.setProgress({ lesson: 1, topic: "Introduction", completed: false });
    console.log("Initial progress:", studentProgress.getProgress());

    // Save initial progress
    progressHistory.addSnapshot(studentProgress.saveProgress());

    // Progress to lesson 2
    studentProgress.setProgress({ lesson: 2, topic: "Types and Interfaces", completed: false });
    console.log("Progressed to lesson 2:", studentProgress.getProgress());

    // Save progress
    progressHistory.addSnapshot(studentProgress.saveProgress());

    // Progress to lesson 3
    studentProgress.setProgress({ lesson: 3, topic: "Classes and Objects", completed: false });
    console.log("Progressed to lesson 3:", studentProgress.getProgress());

    // Save progress
    progressHistory.addSnapshot(studentProgress.saveProgress());

    // Restore to the initial progress
    studentProgress.restoreProgress(progressHistory.getSnapshot(0));
    console.log("Restored to initial progress:", studentProgress.getProgress());

    // Restore to the progress of lesson 2
    studentProgress.restoreProgress(progressHistory.getSnapshot(1));
    console.log("Restored to progress of lesson 2:", studentProgress.getProgress());
}

main();
