// Course class representing an individual course
class Course {
    constructor(public title: string, public description: string) {}
}

// Iterator interface defining methods to iterate over a collection
interface CourseIterator {
    hasNext(): boolean;
    next(): Course;
}

// Concrete iterator implementation for the CourseCollection
class CourseCollectionIterator implements CourseIterator {
    private index: number = 0;

    constructor(private courses: Course[]) {}

    hasNext(): boolean {
        return this.index < this.courses.length;
    }

    next(): Course {
        return this.courses[this.index++];
    }
}

// Collection class representing a collection of courses
class CourseCollection {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    getIterator(): CourseIterator {
        return new CourseCollectionIterator(this.courses);
    }
}

// Client code demonstrating the usage of the iterator pattern
function main() {
    const course1 = new Course("Math 101", "Introduction to Algebra");
    const course2 = new Course("Science 101", "Introduction to Biology");
    const course3 = new Course("History 101", "Introduction to World History");

    const courseCollection = new CourseCollection();
    courseCollection.addCourse(course1);
    courseCollection.addCourse(course2);
    courseCollection.addCourse(course3);

    const iterator = courseCollection.getIterator();

    console.log("Iterating over courses:");
    while (iterator.hasNext()) {
        const course = iterator.next();
        console.log(`Title: ${course.title}, Description: ${course.description}`);
    }
}

main();
