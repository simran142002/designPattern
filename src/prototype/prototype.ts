// Prototype design pattern,  allows creating new objects based on existing ones, without knowing their specific classes. 

// Define the Prototype interface with a clone method.
interface AssignmentPrototype {
    clone(): AssignmentPrototype;
    getDescription(): string;
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
}

// Manager responsible for managing prototypes.
class AssignmentManager {
    private static prototypes: { [key: string]: AssignmentPrototype } = {};

    static initializePrototypes(): void {
        this.prototypes["essay"] = new Essay("The Impact of Technology on Education");
        this.prototypes["presentation"] = new Presentation("Innovations in Online Learning");
    }

    static getPrototype(type: string): AssignmentPrototype | null {
        const prototype = this.prototypes[type];
        return prototype ? prototype.clone() : null;
    }
}

// Client code
function main(): void {
    AssignmentManager.initializePrototypes();

    const essayPrototype = AssignmentManager.getPrototype("essay");
    const presentationPrototype = AssignmentManager.getPrototype("presentation");

    if (essayPrototype && presentationPrototype) {
        console.log("Cloned essay assignment:", essayPrototype.getDescription());
        console.log("Cloned presentation assignment:", presentationPrototype.getDescription());
    } else {
        console.log("Prototype not found");
    }
}

main();




// Prototype Interface (interface Prototype):

// Defines a clone() method that allows creating a copy of an object.
// This interface enables us to create new objects based on existing ones without specifying their concrete types.