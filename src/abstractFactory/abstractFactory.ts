// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

// Define the abstract product classes representing course materials
interface Textbook {
    read(): void;
}

interface OnlineResource {
    access(): void;
}

// Concrete product classes representing specific types of course materials
class MathTextbook implements Textbook {
    read(): void {
        console.log("Reading Math textbook");
    }
}

class MathOnlineResource implements OnlineResource {
    access(): void {
        console.log("Accessing Math online resource");
    }
}

class ScienceTextbook implements Textbook {
    read(): void {
        console.log("Reading Science textbook");
    }
}

class ScienceOnlineResource implements OnlineResource {
    access(): void {
        console.log("Accessing Science online resource");
    }
}

// Define the abstract factory interface
interface CourseMaterialFactory {
    createTextbook(): Textbook;
    createOnlineResource(): OnlineResource;
}

// Concrete factory classes implementing the CourseMaterialFactory interface
class MathCourseMaterialFactory implements CourseMaterialFactory {
    createTextbook(): Textbook {
        return new MathTextbook();
    }

    createOnlineResource(): OnlineResource {
        return new MathOnlineResource();
    }
}

class ScienceCourseMaterialFactory implements CourseMaterialFactory {
    createTextbook(): Textbook {
        return new ScienceTextbook();
    }

    createOnlineResource(): OnlineResource {
        return new ScienceOnlineResource();
    }
}

// Function to simulate a scenario where a student accesses course materials
function accessCourseMaterials(factory: CourseMaterialFactory): void {
    const textbook: Textbook = factory.createTextbook();
    const onlineResource: OnlineResource = factory.createOnlineResource();

    textbook.read();
    onlineResource.access();
}

// Usage
console.log("Accessing Math Course Materials:");
accessCourseMaterials(new MathCourseMaterialFactory());

console.log("\nAccessing Science Course Materials:");
accessCourseMaterials(new ScienceCourseMaterialFactory());
