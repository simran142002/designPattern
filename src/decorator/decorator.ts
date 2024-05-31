// Decorator design pattern is a structural pattern that allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class.

// Define the Component interface representing an educational resource.
interface EducationalResource {
    getDescription(): string;
}

// Concrete Component class representing a basic educational resource.
class BasicResource implements EducationalResource {
    getDescription(): string {
        return "Basic educational resource";
    }
}

// Define the Decorator interface.
abstract class ResourceDecorator implements EducationalResource {
    protected resource: EducationalResource;

    constructor(resource: EducationalResource) {
        this.resource = resource;
    }

    getDescription(): string {
        return this.resource.getDescription();
    }
}

// Concrete Decorator class adding additional features to the educational resource.
class VideoResource extends ResourceDecorator {
    constructor(resource: EducationalResource) {
        super(resource);
    }

    getDescription(): string {
        return `${this.resource.getDescription()} with video content`;
    }
}

// Concrete Decorator class adding additional features to the educational resource.
class QuizResource extends ResourceDecorator {
    constructor(resource: EducationalResource) {
        super(resource);
    }

    getDescription(): string {
        return `${this.resource.getDescription()} with quiz section`;
    }
}

// Usage
const basicResource: EducationalResource = new BasicResource();
console.log("Description: " + basicResource.getDescription());

const resourceWithVideo: EducationalResource = new VideoResource(basicResource);
console.log("Description: " + resourceWithVideo.getDescription());

const resourceWithQuizAndVideo: EducationalResource = new QuizResource(new VideoResource(basicResource));
console.log("Description: " + resourceWithQuizAndVideo.getDescription());
