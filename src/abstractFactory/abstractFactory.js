// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
// Concrete product classes representing specific types of course materials
var MathTextbook = /** @class */ (function () {
    function MathTextbook() {
    }
    MathTextbook.prototype.read = function () {
        console.log("Reading Math textbook");
    };
    return MathTextbook;
}());
var MathOnlineResource = /** @class */ (function () {
    function MathOnlineResource() {
    }
    MathOnlineResource.prototype.access = function () {
        console.log("Accessing Math online resource");
    };
    return MathOnlineResource;
}());
var ScienceTextbook = /** @class */ (function () {
    function ScienceTextbook() {
    }
    ScienceTextbook.prototype.read = function () {
        console.log("Reading Science textbook");
    };
    return ScienceTextbook;
}());
var ScienceOnlineResource = /** @class */ (function () {
    function ScienceOnlineResource() {
    }
    ScienceOnlineResource.prototype.access = function () {
        console.log("Accessing Science online resource");
    };
    return ScienceOnlineResource;
}());
// Concrete factory classes implementing the CourseMaterialFactory interface
var MathCourseMaterialFactory = /** @class */ (function () {
    function MathCourseMaterialFactory() {
    }
    MathCourseMaterialFactory.prototype.createTextbook = function () {
        return new MathTextbook();
    };
    MathCourseMaterialFactory.prototype.createOnlineResource = function () {
        return new MathOnlineResource();
    };
    return MathCourseMaterialFactory;
}());
var ScienceCourseMaterialFactory = /** @class */ (function () {
    function ScienceCourseMaterialFactory() {
    }
    ScienceCourseMaterialFactory.prototype.createTextbook = function () {
        return new ScienceTextbook();
    };
    ScienceCourseMaterialFactory.prototype.createOnlineResource = function () {
        return new ScienceOnlineResource();
    };
    return ScienceCourseMaterialFactory;
}());
// Function to simulate a scenario where a student accesses course materials
function accessCourseMaterials(factory) {
    var textbook = factory.createTextbook();
    var onlineResource = factory.createOnlineResource();
    textbook.read();
    onlineResource.access();
}
// Usage
console.log("Accessing Math Course Materials:");
accessCourseMaterials(new MathCourseMaterialFactory());
console.log("\nAccessing Science Course Materials:");
accessCourseMaterials(new ScienceCourseMaterialFactory());
