// Concrete Memento class representing a snapshot of the student's progress
var ProgressMemento = /** @class */ (function () {
    function ProgressMemento(state) {
        this.state = state;
    }
    ProgressMemento.prototype.getState = function () {
        return this.state;
    };
    return ProgressMemento;
}());
// Originator class representing the student's progress
var StudentProgress = /** @class */ (function () {
    function StudentProgress() {
    }
    StudentProgress.prototype.setState = function (state) {
        this.state = state;
    };
    StudentProgress.prototype.getState = function () {
        return this.state;
    };
    StudentProgress.prototype.save = function () {
        return new ProgressMemento(this.state);
    };
    StudentProgress.prototype.restore = function (memento) {
        this.state = memento.getState();
    };
    return StudentProgress;
}());
// Caretaker class responsible for storing and restoring mementos
var ProgressCaretaker = /** @class */ (function () {
    function ProgressCaretaker() {
        this.mementos = [];
    }
    ProgressCaretaker.prototype.addMemento = function (memento) {
        this.mementos.push(memento);
    };
    ProgressCaretaker.prototype.getMemento = function (index) {
        return this.mementos[index];
    };
    return ProgressCaretaker;
}());
// Client code demonstrating the memento pattern
function main() {
    var caretaker = new ProgressCaretaker();
    var studentProgress = new StudentProgress();
    // Initial progress
    studentProgress.setState({ lesson: 1, topic: "Introduction", completed: false });
    console.log("Initial state:", studentProgress.getState());
    // Save initial progress
    caretaker.addMemento(studentProgress.save());
    // Progress to lesson 2
    studentProgress.setState({ lesson: 2, topic: "Types and Interfaces", completed: false });
    console.log("Progressed state:", studentProgress.getState());
    // Save progress
    caretaker.addMemento(studentProgress.save());
    // Progress to lesson 3
    studentProgress.setState({ lesson: 3, topic: "Classes and Objects", completed: false });
    console.log("Further progressed state:", studentProgress.getState());
    // Save progress
    caretaker.addMemento(studentProgress.save());
    // Restore to the initial state
    studentProgress.restore(caretaker.getMemento(0));
    console.log("Restored to initial state:", studentProgress.getState());
    // Restore to the state of lesson 2
    studentProgress.restore(caretaker.getMemento(1));
    console.log("Restored to state of lesson 2:", studentProgress.getState());
}
main();
