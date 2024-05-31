var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concrete implementations of subjects
var Mathematics = /** @class */ (function () {
    function Mathematics() {
    }
    Mathematics.prototype.getName = function () {
        return "Mathematics";
    };
    return Mathematics;
}());
var Science = /** @class */ (function () {
    function Science() {
    }
    Science.prototype.getName = function () {
        return "Science";
    };
    return Science;
}());
// Concrete implementations of learning resources
var VideoResource = /** @class */ (function () {
    function VideoResource() {
    }
    VideoResource.prototype.useResource = function (subject) {
        console.log("Watching video tutorials for ".concat(subject.getName(), "..."));
    };
    return VideoResource;
}());
var BookResource = /** @class */ (function () {
    function BookResource() {
    }
    BookResource.prototype.useResource = function (subject) {
        console.log("Reading textbooks for ".concat(subject.getName(), "..."));
    };
    return BookResource;
}());
var InteractiveResource = /** @class */ (function () {
    function InteractiveResource() {
    }
    InteractiveResource.prototype.useResource = function (subject) {
        console.log("Using interactive simulations for ".concat(subject.getName(), "..."));
    };
    return InteractiveResource;
}());
// Abstraction: Bridge between subjects and learning resources
var StudySession = /** @class */ (function () {
    function StudySession(learningResource, subject) {
        this.learningResource = learningResource;
        this.subject = subject;
    }
    return StudySession;
}());
// Refined Abstractions: Specialized forms of study sessions
var PersonalizedStudySession = /** @class */ (function (_super) {
    __extends(PersonalizedStudySession, _super);
    function PersonalizedStudySession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonalizedStudySession.prototype.start = function () {
        console.log("Starting personalized study session for ".concat(this.subject.getName(), "..."));
        this.learningResource.useResource(this.subject);
    };
    return PersonalizedStudySession;
}(StudySession));
var GroupStudySession = /** @class */ (function (_super) {
    __extends(GroupStudySession, _super);
    function GroupStudySession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupStudySession.prototype.start = function () {
        console.log("Starting group study session for ".concat(this.subject.getName(), "..."));
        this.learningResource.useResource(this.subject);
    };
    return GroupStudySession;
}(StudySession));
// Usage
console.log("=== Personalized Mathematics Study ===");
var videoMathematics = new PersonalizedStudySession(new VideoResource(), new Mathematics());
videoMathematics.start();
console.log("\n=== Group Science Study ===");
var interactiveScience = new GroupStudySession(new InteractiveResource(), new Science());
interactiveScience.start();
console.log("\n=== Personalized Science Study ===");
var bookScience = new PersonalizedStudySession(new BookResource(), new Science());
bookScience.start();
