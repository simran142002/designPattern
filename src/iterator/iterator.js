// Course class representing an individual course
var Course = /** @class */ (function () {
    function Course(title, description) {
        this.title = title;
        this.description = description;
    }
    return Course;
}());
// Concrete iterator implementation for the CourseCollection
var CourseCollectionIterator = /** @class */ (function () {
    function CourseCollectionIterator(courses) {
        this.courses = courses;
        this.index = 0;
    }
    CourseCollectionIterator.prototype.hasNext = function () {
        return this.index < this.courses.length;
    };
    CourseCollectionIterator.prototype.next = function () {
        return this.courses[this.index++];
    };
    return CourseCollectionIterator;
}());
// Collection class representing a collection of courses
var CourseCollection = /** @class */ (function () {
    function CourseCollection() {
        this.courses = [];
    }
    CourseCollection.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    CourseCollection.prototype.getIterator = function () {
        return new CourseCollectionIterator(this.courses);
    };
    return CourseCollection;
}());
// Client code demonstrating the usage of the iterator pattern
function main() {
    var course1 = new Course("Math 101", "Introduction to Algebra");
    var course2 = new Course("Science 101", "Introduction to Biology");
    var course3 = new Course("History 101", "Introduction to World History");
    var courseCollection = new CourseCollection();
    courseCollection.addCourse(course1);
    courseCollection.addCourse(course2);
    courseCollection.addCourse(course3);
    var iterator = courseCollection.getIterator();
    console.log("Iterating over courses:");
    while (iterator.hasNext()) {
        var course = iterator.next();
        console.log("Title: ".concat(course.title, ", Description: ").concat(course.description));
    }
}
main();
