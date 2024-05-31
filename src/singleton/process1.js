"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Process1234.ts
var singleton_1 = require("./singleton");
var processId = 1234;
var singletonInstance = singleton_1.default.getInstance(processId);
singletonInstance.showMessage();
