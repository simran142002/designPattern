// The Proxy design pattern provides a surrogate or placeholder for another object to control access to it. This pattern is useful for implementing lazy initialization, access control, logging, and more.

// Interface for Educational Resource
interface EducationalResource {
    accessResource(): void;
}

// Concrete Educational Resource class
class Lesson implements EducationalResource {
    private title: string;
    private content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    accessResource(): void {
        console.log(`Accessing Lesson: ${this.title}`);
        console.log(`Content: ${this.content}`);
    }
}

// Proxy for Educational Resource
class LessonProxy implements EducationalResource {
    private lesson: Lesson | null = null;
    private title: string;
    private content: string;
    private hasAccess: boolean;

    constructor(title: string, content: string, hasAccess: boolean) {
        this.title = title;
        this.content = content;
        this.hasAccess = hasAccess;
    }

    accessResource(): void {
        if (this.hasAccess) {
            if (this.lesson === null) {
                this.lesson = new Lesson(this.title, this.content);
            }
            this.lesson.accessResource();
        } else {
            console.log("Access Denied: You do not have permission to access this lesson.");
        }
    }
}

// Client code
function main() {
    const lessonTitle = "Advanced TypeScript";
    const lessonContent = "This lesson covers advanced features of TypeScript...";

    // User without access
    const proxyWithoutAccess = new LessonProxy(lessonTitle, lessonContent, false);
    proxyWithoutAccess.accessResource();

    // User with access
    const proxyWithAccess = new LessonProxy(lessonTitle, lessonContent, true);
    proxyWithAccess.accessResource();
}

main();
