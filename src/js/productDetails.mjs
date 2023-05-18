import { findProductById } from "./productData.mjs";
import { getCartCount, getLocalStorage, setLocalStorage } from "./utils.mjs";
import { cartCount } from "./stores.mjs";

// Get all the product details
export default async function productDetails(productId) {
  const productData = await findProductById(productId);
  productDetailsTemplate(productData);
}

function addProductToCart(product) {
  // Get the current cart. (Get local storage)
  let items = getLocalStorage("so-cart");
  // If the cart is empty
  if (items == null) {
    items = [];
  }
  // Add the new product to the cart items. (Push to the end of the array)
  items.push(product);
  // Save all the cart items to the local storage
  setLocalStorage("so-cart", items);
  cartCount.set(getCartCount())
}

function productDetailsTemplate(product) {
  document.getElementById("productName").textContent = product.Name;
  document.getElementById("productNameWithoutBrand").textContent =
    product.NameWithoutBrand;
  document.getElementById("ProductImage").setAttribute("src", product.Image);
  document.getElementById("ProductImage").setAttribute("alt", product.Name);
  document.getElementById("productFinalPrice").textContent = '$' + product.FinalPrice;
  document.getElementById("productOriginalPrice").textContent = '$' + product.SuggestedRetailPrice;
  const discount = (1 - product.FinalPrice/product.SuggestedRetailPrice) * 100
  document.getElementById("discount").innerHTML = Math.round(discount) + '% off';
  document.getElementById("productColorName").textContent =
    product.Colors[0].ColorName;
  document.getElementById("productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.getElementById("addToCart").setAttribute("data-id", product.Id);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
