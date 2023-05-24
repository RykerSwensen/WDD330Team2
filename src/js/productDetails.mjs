import { findProductById } from "./productData.mjs";
import ProductDetails from "./components/ProductDetails.svelte";
import ProductNotFound from "./components/ProductNotFound.svelte";

/** Get product details and render them */
export default async function productDetails(productId) {
  const productData = await findProductById(productId);
  // if we found the product, render ProductDetails svelte component
  // if we didn't find it, render the ProductNotFound svelte component
  if (productData) {
    productDetailsTemplate(productData);
  } else {
    productNotFoundTemplate();
  }
}

/** Render ProductDetails.svelte */
function productDetailsTemplate(product) {
  new ProductDetails({
    target: document.getElementById("main"),
    props: { product: product },
  });
}

/** Render ProductNotFound.svelte */
function productNotFoundTemplate() {
  new ProductNotFound({
    target: document.getElementById("main"),
  });
}
