import { findProductById } from "./productData.mjs";

// Get all the product details
export default async function productDetails(productId){
    const productData = await findProductById(productId);
    productDetailsTemplate(productData);
}

let productData = {};

function addProductToCart(product) {
    // Get the current cart. (Get local storage)
    let items = getLocalStorage("so-cart");
    // If the cart is empty
    if(items == null){
      items = [];
    }
    // Add the new product to the cart items. (Push to the end of the array)
    items.push(product);
    // Save all the cart items to the local storage
    setLocalStorage("so-cart", items);
  }

function productDetailsTemplate(product){
    document.getElementById("productName").textContent = product.Name;
    document.getElementById("productNameWithoutBrand").textContent = product.NameWithoutBrand;
    document.getElementById("ProductImage").setAttribute("src", product.Image);
    document.getElementById("ProductImage").setAttribute("alt", product.Name);   
    document.getElementById("productFinalPrice").textContent = product.FinalPrice;
    document.getElementById("productColorName").textContent = product.Colors[0].ColorName;
    document.getElementById("productDescriptionHtmlSimple").textContent = product.DescriptionHtmlSimple;
    document.getElementById("addToCart").setAttribute("data-id", product.Id)
}