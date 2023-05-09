import { getLocalStorage, setLocalStorage, getParam} from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import productDetails from "./productDetails.mjs";

const url = window.location.search;
const productId = getParam(url);

productDetails(productId);

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
