// The Proxy design pattern provides a surrogate or placeholder for another object to control access to it. This pattern is useful for implementing lazy initialization, access control, logging, and more.
// Concrete Educational Resource class
var Lesson = /** @class */ (function () {
    function Lesson(title, content) {
        this.title = title;
        this.content = content;
    }
    Lesson.prototype.accessResource = function () {
        console.log("Accessing Lesson: ".concat(this.title));
        console.log("Content: ".concat(this.content));
    };
    return Lesson;
}());
// Proxy for Educational Resource
var LessonProxy = /** @class */ (function () {
    function LessonProxy(title, content, hasAccess) {
        this.lesson = null;
        this.title = title;
        this.content = content;
        this.hasAccess = hasAccess;
    }
    LessonProxy.prototype.accessResource = function () {
        if (this.hasAccess) {
            if (this.lesson === null) {
                this.lesson = new Lesson(this.title, this.content);
            }
            this.lesson.accessResource();
        }
        else {
            console.log("Access Denied: You do not have permission to access this lesson.");
        }
    };
    return LessonProxy;
}());
// Client code
function main() {
    var lessonTitle = "Advanced TypeScript";
    var lessonContent = "This lesson covers advanced features of TypeScript...";
    // User without access
    var proxyWithoutAccess = new LessonProxy(lessonTitle, lessonContent, false);
    proxyWithoutAccess.accessResource();
    // User with access
    var proxyWithAccess = new LessonProxy(lessonTitle, lessonContent, true);
    proxyWithAccess.accessResource();
}
main();
