"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function () {
    function Singleton(processId) {
        Singleton.processId = processId;
    }
    Singleton.getInstance = function (processId) {
        if (Singleton.instance === null || Singleton.processId !== processId) {
            Singleton.instance = new Singleton(processId);
        }
        return Singleton.instance;
    };
    Singleton.prototype.showMessage = function () {
        console.log("Singleton instance for process ".concat(Singleton.processId));
    };
    Singleton.instance = null;
    return Singleton;
}());
exports.default = Singleton;
