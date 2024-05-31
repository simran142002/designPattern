"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Process5678.ts
var singleton_1 = require("./singleton");
var processId = 5678;
var singletonInstance = singleton_1.default.getInstance(processId);
singletonInstance.showMessage();
