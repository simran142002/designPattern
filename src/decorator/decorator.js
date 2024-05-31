// Decorator design pattern is a structural pattern that allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class.
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
// Concrete Component class representing a basic educational resource.
var BasicResource = /** @class */ (function () {
    function BasicResource() {
    }
    BasicResource.prototype.getDescription = function () {
        return "Basic educational resource";
    };
    return BasicResource;
}());
// Define the Decorator interface.
var ResourceDecorator = /** @class */ (function () {
    function ResourceDecorator(resource) {
        this.resource = resource;
    }
    ResourceDecorator.prototype.getDescription = function () {
        return this.resource.getDescription();
    };
    return ResourceDecorator;
}());
// Concrete Decorator class adding additional features to the educational resource.
var VideoResource = /** @class */ (function (_super) {
    __extends(VideoResource, _super);
    function VideoResource(resource) {
        return _super.call(this, resource) || this;
    }
    VideoResource.prototype.getDescription = function () {
        return "".concat(this.resource.getDescription(), " with video content");
    };
    return VideoResource;
}(ResourceDecorator));
// Concrete Decorator class adding additional features to the educational resource.
var QuizResource = /** @class */ (function (_super) {
    __extends(QuizResource, _super);
    function QuizResource(resource) {
        return _super.call(this, resource) || this;
    }
    QuizResource.prototype.getDescription = function () {
        return "".concat(this.resource.getDescription(), " with quiz section");
    };
    return QuizResource;
}(ResourceDecorator));
// Usage
var basicResource = new BasicResource();
console.log("Description: " + basicResource.getDescription());
var resourceWithVideo = new VideoResource(basicResource);
console.log("Description: " + resourceWithVideo.getDescription());
var resourceWithQuizAndVideo = new QuizResource(new VideoResource(basicResource));
console.log("Description: " + resourceWithQuizAndVideo.getDescription());
