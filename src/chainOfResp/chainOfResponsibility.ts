// The Chain of Responsibility pattern is used to pass a request along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

// Interface for handling student queries
interface QueryHandler {
    setNext(handler: QueryHandler): QueryHandler;
    handle(request: string): void;
}

// Abstract class implementing the QueryHandler interface
abstract class AbstractQueryHandler implements QueryHandler {
    private nextHandler: QueryHandler | null = null;

    public setNext(handler: QueryHandler): QueryHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }

    protected abstract processRequest(request: string): boolean;
}

// Concrete handler for Tutors
class Tutor extends AbstractQueryHandler {
    protected processRequest(request: string): boolean {
        if (request.includes("assignment")) {
            console.log("Tutor: Handling assignment related query.");
            return true;
        }
        return false;
    }

    public handle(request: string): void {
        if (!this.processRequest(request)) {
            super.handle(request);
        }
    }
}

// Concrete handler for Department Heads
class DepartmentHead extends AbstractQueryHandler {
    protected processRequest(request: string): boolean {
        if (request.includes("course")) {
            console.log("Department Head: Handling course related query.");
            return true;
        }
        return false;
    }

    public handle(request: string): void {
        if (!this.processRequest(request)) {
            super.handle(request);
        }
    }
}

// Concrete handler for Deans
class Dean extends AbstractQueryHandler {
    protected processRequest(request: string): boolean {
        if (request.includes("complaint")) {
            console.log("Dean: Handling complaint related query.");
            return true;
        }
        return false;
    }

    public handle(request: string): void {
        if (!this.processRequest(request)) {
            super.handle(request);
        }
    }
}

// Client code
function main() {
    const tutor = new Tutor();
    const departmentHead = new DepartmentHead();
    const dean = new Dean();

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
