// Define the product class
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.dough = '';
        this.sauce = '';
        this.topping = '';
    }
    Pizza.prototype.setDough = function (dough) {
        this.dough = dough;
    };
    Pizza.prototype.setSauce = function (sauce) {
        this.sauce = sauce;
    };
    Pizza.prototype.setTopping = function (topping) {
        this.topping = topping;
    };
    Pizza.prototype.describe = function () {
        // console.log('Pizza with ${this.dough} dough, ${this.sauce} sauce and {this.topping}');
        console.log("Pizza with " + this.dough + " dough " + this.sauce + " sauce and " + this.topping);
    };
    return Pizza;
}());
// Concrete builder for Margherita Pizza
var MargheritaPizzaBuilder = /** @class */ (function () {
    function MargheritaPizzaBuilder() {
        this.pizza = new Pizza();
    }
    MargheritaPizzaBuilder.prototype.reset = function () {
        this.pizza = new Pizza();
    };
    MargheritaPizzaBuilder.prototype.buildDough = function () {
        this.pizza.setDough('soft');
    };
    MargheritaPizzaBuilder.prototype.buildSauce = function () {
        this.pizza.setSauce('tomato');
    };
    MargheritaPizzaBuilder.prototype.buildTopping = function () {
        this.pizza.setTopping('mozzarella cheese');
    };
    MargheritaPizzaBuilder.prototype.getPizza = function () {
        return this.pizza;
    };
    return MargheritaPizzaBuilder;
}());
// Concrete builder for Pepperoni Pizza
var PepperoniPizzaBuilder = /** @class */ (function () {
    function PepperoniPizzaBuilder() {
        this.pizza = new Pizza();
    }
    PepperoniPizzaBuilder.prototype.reset = function () {
        this.pizza = new Pizza();
    };
    PepperoniPizzaBuilder.prototype.buildDough = function () {
        this.pizza.setDough('crispy');
    };
    PepperoniPizzaBuilder.prototype.buildSauce = function () {
        this.pizza.setSauce('barbecue');
    };
    PepperoniPizzaBuilder.prototype.buildTopping = function () {
        this.pizza.setTopping('pepperoni');
    };
    PepperoniPizzaBuilder.prototype.getPizza = function () {
        return this.pizza;
    };
    return PepperoniPizzaBuilder;
}());
// Director
var PizzaMaker = /** @class */ (function () {
    function PizzaMaker(builder) {
        this.builder = builder;
    }
    PizzaMaker.prototype.changeBuilder = function (builder) {
        this.builder = builder;
    };
    PizzaMaker.prototype.makePizza = function () {
        this.builder.reset();
        this.builder.buildDough();
        this.builder.buildSauce();
        this.builder.buildTopping();
    };
    PizzaMaker.prototype.getPizza = function () {
        // Type assertion to tell TypeScript that `builder` has a `getPizza()` method
        return this.builder.getPizza();
    };
    return PizzaMaker;
}());
// Usage
var margheritaBuilder = new MargheritaPizzaBuilder();
var pizzaMaker = new PizzaMaker(margheritaBuilder);
pizzaMaker.makePizza();
var pizza = pizzaMaker.getPizza();
pizza.describe();
// Switching to another pizza type
var pepperoniBuilder = new PepperoniPizzaBuilder();
pizzaMaker.changeBuilder(pepperoniBuilder);
pizzaMaker.makePizza();
pizza = pizzaMaker.getPizza();
pizza.describe();
