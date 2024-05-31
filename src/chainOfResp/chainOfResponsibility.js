// The Chain of Responsibility pattern is used to pass a request along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
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
// Abstract class implementing the QueryHandler interface
var AbstractQueryHandler = /** @class */ (function () {
    function AbstractQueryHandler() {
        this.nextHandler = null;
    }
    AbstractQueryHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractQueryHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    };
    return AbstractQueryHandler;
}());
// Concrete handler for Tutors
var Tutor = /** @class */ (function (_super) {
    __extends(Tutor, _super);
    function Tutor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tutor.prototype.processRequest = function (request) {
        if (request.includes("assignment")) {
            console.log("Tutor: Handling assignment related query.");
            return true;
        }
        return false;
    };
    Tutor.prototype.handle = function (request) {
        if (!this.processRequest(request)) {
            _super.prototype.handle.call(this, request);
        }
    };
    return Tutor;
}(AbstractQueryHandler));
// Concrete handler for Department Heads
var DepartmentHead = /** @class */ (function (_super) {
    __extends(DepartmentHead, _super);
    function DepartmentHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DepartmentHead.prototype.processRequest = function (request) {
        if (request.includes("course")) {
            console.log("Department Head: Handling course related query.");
            return true;
        }
        return false;
    };
    DepartmentHead.prototype.handle = function (request) {
        if (!this.processRequest(request)) {
            _super.prototype.handle.call(this, request);
        }
    };
    return DepartmentHead;
}(AbstractQueryHandler));
// Concrete handler for Deans
var Dean = /** @class */ (function (_super) {
    __extends(Dean, _super);
    function Dean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dean.prototype.processRequest = function (request) {
        if (request.includes("complaint")) {
            console.log("Dean: Handling complaint related query.");
            return true;
        }
        return false;
    };
    Dean.prototype.handle = function (request) {
        if (!this.processRequest(request)) {
            _super.prototype.handle.call(this, request);
        }
    };
    return Dean;
}(AbstractQueryHandler));
// Client code
function main() {
    var tutor = new Tutor();
    var departmentHead = new DepartmentHead();
    var dean = new Dean();
    tutor.setNext(departmentHead).setNext(dean);
    console.log("Query: assignment question");
    tutor.handle("assignment question");
    console.log("\nQuery: course registration issue");
    tutor.handle("course registration issue");
    console.log("\nQuery: formal complaint");
    tutor.handle("formal complaint");
    console.log("\nQuery: unrelated query");
    tutor.handle("unrelated query");
}
main();
