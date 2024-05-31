// Process1234.ts
import Singleton from "./singleton.js";

const processId = 1234;
const singletonInstance = Singleton.getInstance(processId);

singletonInstance.showMessage();
