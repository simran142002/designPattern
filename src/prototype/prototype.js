// Prototype design pattern,  allows creating new objects based on existing ones, without knowing their specific classes. 
// Concrete prototype classes
var Essay = /** @class */ (function () {
    function Essay(topic) {
        this.topic = topic;
    }
    Essay.prototype.clone = function () {
        return new Essay(this.topic);
    };
    Essay.prototype.getDescription = function () {
        return "Essay Assignment - Topic: ".concat(this.topic);
    };
    Essay.prototype.setDetails = function (details) {
        this.topic = details;
    };
    return Essay;
}());
var Presentation = /** @class */ (function () {
    function Presentation(title) {
        this.title = title;
    }
    Presentation.prototype.clone = function () {
        return new Presentation(this.title);
    };
    Presentation.prototype.getDescription = function () {
        return "Presentation Assignment - Title: ".concat(this.title);
    };
    Presentation.prototype.setDetails = function (details) {
        this.title = details;
    };
    return Presentation;
}());
var GroupProject = /** @class */ (function () {
    function GroupProject(projectTitle) {
        this.projectTitle = projectTitle;
    }
    GroupProject.prototype.clone = function () {
        return new GroupProject(this.projectTitle);
    };
    GroupProject.prototype.getDescription = function () {
        return "Group Project - Title: ".concat(this.projectTitle);
    };
    GroupProject.prototype.setDetails = function (details) {
        this.projectTitle = details;
    };
    return GroupProject;
}());
var LabReport = /** @class */ (function () {
    function LabReport(experiment) {
        this.experiment = experiment;
    }
    LabReport.prototype.clone = function () {
        return new LabReport(this.experiment);
    };
    LabReport.prototype.getDescription = function () {
        return "Lab Report - Experiment: ".concat(this.experiment);
    };
    LabReport.prototype.setDetails = function (details) {
        this.experiment = details;
    };
    return LabReport;
}());
// Manager responsible for managing prototypes.
var AssignmentManager = /** @class */ (function () {
    function AssignmentManager() {
    }
    AssignmentManager.initializePrototypes = function () {
        this.prototypes["essay"] = new Essay("The Impact of Technology on Education");
        this.prototypes["presentation"] = new Presentation("Innovations in Online Learning");
        this.prototypes["groupProject"] = new GroupProject("Develop an Educational App");
        this.prototypes["labReport"] = new LabReport("The Effects of Light on Plant Growth");
    };
    AssignmentManager.getPrototype = function (type) {
        var prototype = this.prototypes[type];
        return prototype ? prototype.clone() : null;
    };
    AssignmentManager.prototypes = {};
    return AssignmentManager;
}());
// Client code
function main() {
    AssignmentManager.initializePrototypes();
    // Cloning and customizing prototypes
    var essayPrototype = AssignmentManager.getPrototype("essay");
    if (essayPrototype) {
        essayPrototype.setDetails("The Role of Artificial Intelligence in Education");
        console.log("Cloned and customized essay assignment:", essayPrototype.getDescription());
    }
    var presentationPrototype = AssignmentManager.getPrototype("presentation");
    if (presentationPrototype) {
        presentationPrototype.setDetails("Future Trends in E-Learning");
        console.log("Cloned and customized presentation assignment:", presentationPrototype.getDescription());
    }
    var groupProjectPrototype = AssignmentManager.getPrototype("groupProject");
    if (groupProjectPrototype) {
        groupProjectPrototype.setDetails("Design a Collaborative Learning Platform");
        console.log("Cloned and customized group project:", groupProjectPrototype.getDescription());
    }
    var labReportPrototype = AssignmentManager.getPrototype("labReport");
    if (labReportPrototype) {
        labReportPrototype.setDetails("Analysis of Water Quality in Local Lakes");
        console.log("Cloned and customized lab report:", labReportPrototype.getDescription());
    }
}
main();
