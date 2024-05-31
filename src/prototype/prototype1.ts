// Define the Prototype interface with a clone method.
interface AssignmentPrototype {
    clone(): AssignmentPrototype;
    getDescription(): string;
    setDetails(details: string): void;
}

// Concrete prototype classes
class Essay implements AssignmentPrototype {
    private topic: string;

    constructor(topic: string) {
        this.topic = topic;
    }

    clone(): AssignmentPrototype {
        return new Essay(this.topic);
    }

    getDescription(): string {
        return `Essay Assignment - Topic: ${this.topic}`;
    }

    setDetails(details: string): void {
        this.topic = details;
    }
}

class Presentation implements AssignmentPrototype {
    private title: string;

    constructor(title: string) {
        this.title = title;
    }

    clone(): AssignmentPrototype {
        return new Presentation(this.title);
    }

    getDescription(): string {
        return `Presentation Assignment - Title: ${this.title}`;
    }

    setDetails(details: string): void {
        this.title = details;
    }
}

class GroupProject implements AssignmentPrototype {
    private projectTitle: string;

    constructor(projectTitle: string) {
        this.projectTitle = projectTitle;
    }

    clone(): AssignmentPrototype {
        return new GroupProject(this.projectTitle);
    }

    getDescription(): string {
        return `Group Project - Title: ${this.projectTitle}`;
    }

    setDetails(details: string): void {
        this.projectTitle = details;
    }
}

class LabReport implements AssignmentPrototype {
    private experiment: string;

    constructor(experiment: string) {
        this.experiment = experiment;
    }

    clone(): AssignmentPrototype {
        return new LabReport(this.experiment);
    }

    getDescription(): string {
        return `Lab Report - Experiment: ${this.experiment}`;
    }

    setDetails(details: string): void {
        this.experiment = details;
    }
}

// Manager responsible for managing prototypes.
class AssignmentManager {
    private static prototypes: { [key: string]: AssignmentPrototype } = {};

    static initializePrototypes(): void {
        this.prototypes["essay"] = new Essay("The Impact of Technology on Education");
        this.prototypes["presentation"] = new Presentation("Innovations in Online Learning");
        this.prototypes["groupProject"] = new GroupProject("Develop an Educational App");
        this.prototypes["labReport"] = new LabReport("The Effects of Light on Plant Growth");
    }

    static getPrototype(type: string): AssignmentPrototype | null {
        const prototype = this.prototypes[type];
        return prototype ? prototype.clone() : null;
    }
}

// Client code
function main(): void {
    AssignmentManager.initializePrototypes();

    // Cloning and customizing prototypes
    const essayPrototype = AssignmentManager.getPrototype("essay");
    if (essayPrototype) {
        essayPrototype.setDetails("The Role of Artificial Intelligence in Education");
        console.log("Cloned and customized essay assignment:", essayPrototype.getDescription());
    }

    const presentationPrototype = AssignmentManager.getPrototype("presentation");
    if (presentationPrototype) {
        presentationPrototype.setDetails("Future Trends in E-Learning");
        console.log("Cloned and customized presentation assignment:", presentationPrototype.getDescription());
    }

    const groupProjectPrototype = AssignmentManager.getPrototype("groupProject");
    if (groupProjectPrototype) {
        groupProjectPrototype.setDetails("Design a Collaborative Learning Platform");
        console.log("Cloned and customized group project:", groupProjectPrototype.getDescription());
    }

    const labReportPrototype = AssignmentManager.getPrototype("labReport");
    if (labReportPrototype) {
        labReportPrototype.setDetails("Analysis of Water Quality in Local Lakes");
        console.log("Cloned and customized lab report:", labReportPrototype.getDescription());
    }
}

main();
