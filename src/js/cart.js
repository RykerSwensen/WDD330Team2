import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  let htmlItems = [];
  if (cartItems != null) {
    htmlItems = cartItems.map((item) => cartItemTemplate(item));
  }
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
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
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function displayTotal(){
  // Get dictionary from localstorage
  const cartItems = getLocalStorage("so-cart");
  // Display total: if there are items in the cart
  const cart_total = document.querySelector('.cart-total');
  if (cartItems != null) {
    
    cart_total.style.display = 'inline';
  }

  const total = cartItems.reduce((total, item) => {
    total += item.FinalPrice;
    console.log(item, total);
    return total;
  },0)

  cart_total.innerHTML += total;  
  
  
  // cartItems.forEach();

  // for (let item in cartItems)
  // {
  //   const price = item[price];
  // }
}

renderCartContents();
displayTotal();