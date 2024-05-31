// It's called "bridge" because it acts as a bridge between two hierarchies or layers of abstraction - the abstraction layer and the implementation layer.

// Interface for the subject of study
interface Subject {
    getName(): string;
}

// Concrete implementations of subjects
class Mathematics implements Subject {
    getName(): string {
        return "Mathematics";
    }
}

class Science implements Subject {
    getName(): string {
        return "Science";
    }
}

// Interface for the learning resources
interface LearningResource {
    useResource(subject: Subject): void;
}

// Concrete implementations of learning resources
class VideoResource implements LearningResource {
    useResource(subject: Subject): void {
        console.log(`Watching video tutorials for ${subject.getName()}...`);
    }
}

class BookResource implements LearningResource {
    useResource(subject: Subject): void {
        console.log(`Reading textbooks for ${subject.getName()}...`);
    }
}

class InteractiveResource implements LearningResource {
    useResource(subject: Subject): void {
        console.log(`Using interactive simulations for ${subject.getName()}...`);
    }
}

// Abstraction: Bridge between subjects and learning resources
abstract class StudySession {
    constructor(protected learningResource: LearningResource, protected subject: Subject) {}

    abstract start(): void;
}

// Refined Abstractions: Specialized forms of study sessions
class PersonalizedStudySession extends StudySession {
    start(): void {
        console.log(`Starting personalized study session for ${this.subject.getName()}...`);
        this.learningResource.useResource(this.subject);
    }
}

class GroupStudySession extends StudySession {
    start(): void {
        console.log(`Starting group study session for ${this.subject.getName()}...`);
        this.learningResource.useResource(this.subject);
    }
}

// Usage
console.log("=== Personalized Mathematics Study ===");
const videoMathematics = new PersonalizedStudySession(new BookResource(), new Mathematics());
videoMathematics.start();

console.log("\n=== Group Science Study ===");
const interactiveScience = new GroupStudySession(new InteractiveResource(), new Science());
interactiveScience.start();

console.log("\n=== Personalized Science Study ===");
const bookScience = new PersonalizedStudySession(new BookResource(), new Science());
bookScience.start();
