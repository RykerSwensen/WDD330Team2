// main.js

import { renderHeaderFooter } from "./utils.mjs";
import Alert from "./Alert.mjs";
import { getAllItems } from "./externalServices.mjs";

const myALert = new Alert();

myALert.init();
renderHeaderFooter();
