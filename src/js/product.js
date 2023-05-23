import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { renderHeaderFooter } from "./utils.mjs";

const url = window.location.search;
const productId = getParam(url);

productDetails(productId);
renderHeaderFooter();
