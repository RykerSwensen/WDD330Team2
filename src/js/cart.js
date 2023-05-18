import { getLocalStorage } from "./utils.mjs";

const key = "so-cart";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (cartItems == null || cartItems.length == 0) {

    document.querySelector(
      ".product-list"
    ).innerHTML = `<h3>Your Cart!</h3>`;
  } else {
    const htmlItems = cartItems.map((item, index) =>
      cartItemTemplate(item, index)
    );

    document.querySelector(".product-list").innerHTML = htmlItems.join("");
    document.querySelectorAll(".removeFromCart").forEach((item) => {
      item.addEventListener("click", removeFromCart);
    });

  }
}

function cartItemTemplate(item, index) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1 | <span id="removeFromCart" data-id="${item.Id}" data-index="${index}" class="cart-card__remove removeFromCart">X</span></p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function removeFromCart() {
  let currentArray = JSON.parse(localStorage.getItem(key));
  const index = event.target.getAttribute("data-index");
  
  currentArray.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(currentArray));

  renderCartContents();
}

renderCartContents();
function calculateTotal() {
  const cartItems = getLocalStorage("so-cart");
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].FinalPrice;
  }
  return total;
}

function showCartItems() {
  const cartItems = getLocalStorage("so-cart");
  if (cartItems.length > 0) {
    const cartFooter = document.querySelector(".cart-footer");
    cartFooter.classList.remove("hide");
    const totalAmount = document.getElementById("totalAmount");
    const total = calculateTotal();
    totalAmount.textContent = `$${total}`;
  }
}
showCartItems();