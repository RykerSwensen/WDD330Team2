import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { renderHeaderFooter } from "./utils.mjs";

const url = window.location;
const productId = getParam(url, "product");

productDetails(productId);
renderHeaderFooter();
