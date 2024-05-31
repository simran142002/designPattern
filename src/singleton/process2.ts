// Process5678.ts
import Singleton from "./singleton.js";

const processId = 5678;
const singletonInstance = Singleton.getInstance(processId);

singletonInstance.showMessage();
