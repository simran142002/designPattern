// The Interpreter design pattern is used to define a grammar for a language and an interpreter to interpret sentences in the language. 
// Terminal Expression for Numbers
var NumberExpression = /** @class */ (function () {
    function NumberExpression(value) {
        this.value = value;
    }
    NumberExpression.prototype.interpret = function (context) {
        return this.value;
    };
    return NumberExpression;
}());
// Non-Terminal Expression for Addition
var AdditionExpression = /** @class */ (function () {
    function AdditionExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    AdditionExpression.prototype.interpret = function (context) {
        return this.left.interpret(context) + this.right.interpret(context);
    };
    return AdditionExpression;
}());
// Non-Terminal Expression for Subtraction
var SubtractionExpression = /** @class */ (function () {
    function SubtractionExpression(left, right) {
        this.left = left;
        this.right = right;
    }
    SubtractionExpression.prototype.interpret = function (context) {
        return this.left.interpret(context) - this.right.interpret(context);
    };
    return SubtractionExpression;
}());
// Non-Terminal Expression for Variables
var VariableExpression = /** @class */ (function () {
    function VariableExpression(name) {
        this.name = name;
    }
    VariableExpression.prototype.interpret = function (context) {
        if (context.has(this.name)) {
            return context.get(this.name) || 0;
        }
        throw new Error("Variable ".concat(this.name, " not found"));
    };
    return VariableExpression;
}());
// Context class to hold variable values
var EvaluationContext = /** @class */ (function () {
    function EvaluationContext() {
        this.variables = new Map();
    }
    EvaluationContext.prototype.setVariable = function (name, value) {
        this.variables.set(name, value);
    };
    EvaluationContext.prototype.getVariable = function (name) {
        return this.variables.get(name) || 0;
    };
    EvaluationContext.prototype.interpret = function (expression) {
        return expression.interpret(this.variables);
    };
    return EvaluationContext;
}());
// Usage
function main() {
    var context = new EvaluationContext();
    // Setting up variables
    context.setVariable("x", 10);
    context.setVariable("y", 20);
    // Constructing the expression: x + y - 5
    var expression = new SubtractionExpression(new AdditionExpression(new VariableExpression("x"), new VariableExpression("y")), new NumberExpression(5));
    // Interpreting the expression
    var result = context.interpret(expression);
    console.log("The result of the expression is: ".concat(result)); // Output: The result of the expression is: 25
}
main();
