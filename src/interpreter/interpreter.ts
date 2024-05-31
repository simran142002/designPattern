// The Interpreter design pattern is used to define a grammar for a language and an interpreter to interpret sentences in the language. 

// Abstract Expression Interface
interface Expression {
    interpret(context: Map<string, number>): number;
}

// Terminal Expression for Numbers
class NumberExpression implements Expression {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    interpret(context: Map<string, number>): number {
        return this.value;
    }
}

// Non-Terminal Expression for Addition
class AdditionExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    interpret(context: Map<string, number>): number {
        return this.left.interpret(context) + this.right.interpret(context);
    }
}

// Non-Terminal Expression for Subtraction
class SubtractionExpression implements Expression {
    private left: Expression;
    private right: Expression;

    constructor(left: Expression, right: Expression) {
        this.left = left;
        this.right = right;
    }

    interpret(context: Map<string, number>): number {
        return this.left.interpret(context) - this.right.interpret(context);
    }
}

// Non-Terminal Expression for Variables
class VariableExpression implements Expression {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    interpret(context: Map<string, number>): number {
        if (context.has(this.name)) {
            return context.get(this.name) || 0;
        }
        throw new Error(`Variable ${this.name} not found`);
    }
}

// Context class to hold variable values
class EvaluationContext {
    private variables: Map<string, number> = new Map();

    setVariable(name: string, value: number): void {
        this.variables.set(name, value);
    }

    getVariable(name: string): number {
        return this.variables.get(name) || 0;
    }

    interpret(expression: Expression): number {
        return expression.interpret(this.variables);
    }
}

// Usage
function main() {
    const context = new EvaluationContext();

    // Setting up variables
    context.setVariable("x", 10);
    context.setVariable("y", 20);

    // Constructing the expression: x + y - 5
    const expression = new SubtractionExpression(
        new AdditionExpression(
            new VariableExpression("x"),
            new VariableExpression("y")
        ),
        new NumberExpression(5)
    );

    // Interpreting the expression
    const result = context.interpret(expression);
    console.log(`The result of the expression is: ${result}`); // Output: The result of the expression is: 25
}

main();


// This example is realistic for an educational platform where students can input and evaluate mathematical expressions or commands:

// Students can practice forming and evaluating expressions.
// Teachers can define exercises or tests that involve interpreting and evaluating expressions.
// The Interpreter pattern helps in creating a flexible and extensible grammar and interpreter for such use cases.