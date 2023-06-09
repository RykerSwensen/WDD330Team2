<script>
  import { get } from "svelte/store";
  import { getLocalStorage } from "../utils.mjs";
  import { checkout } from "../externalServices.mjs";
  let cartItems;
  let total = 0;
  let tax = 0;
  let shipping = 0;
  let orderTotal = 0;
  function init() {
    cartItems = getLocalStorage("so-cart");
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].FinalPrice;
    }
    calculateOrdertotal();
  }

  const calculateOrdertotal = function () {
    let NumItems = cartItems.length;
    tax = Math.round(total * 0.06);
    for (let i = 1; i <= NumItems; i++) {
      if (i == 1) shipping += 10;
      else shipping += 2;
    }
    orderTotal = total + tax + shipping;
  };

  function checkoutHandler(event) {
    let checkoutObject = packageItems();
    checkout(checkoutObject);
  }

  function getSimpleCartItems() {
    let simpleCartItems = cartItems.map((item) => {
      return {
        id: item.Id,
        name: item.Name,
        price: item.FinalPrice,
        quantity: 1,
      };
    });

    let finalCartItems = [];
    simpleCartItems.forEach((item) => {
      if (finalCartItems.find((subItem) => subItem.id === item.id)) {
        finalCartItems.find((subItem) => subItem.id === item.id).quantity += 1;
      } else {
        finalCartItems.push(item);
      }
    });
    return finalCartItems;
  }

  function packageItems(items) {
    return {
      orderDate: new Date(),
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      street: document.getElementById("street").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      cardNumber: 1234123412341234,
      expiration: "8/23",
      code: 123,
      items: getSimpleCartItems(),
      orderTotal: orderTotal,
      shipping: shipping,
      tax: tax,
    };
  }
  init();
</script>

<form id="checkoutform" name="checkoutform">
  <label for="FirstName">First Name</label><br />
  <input name="FirstName" id="fname" /><br />
  <label for="LastName">Last Name</label><br />
  <input name="LastName" id="lname" /><br />
  <label for="Street">Street</label><br />
  <input name="Street" id="street" /><br />
  <label for="City">City</label><br />
  <input name="City" id="city" /><br />
  <label for="State">State</label><br />
  <input name="State" id="state" /><br />
  <label for="Zip">Zip</label><br />
  <input name="Zip" id="zip" /><br />
  <label for="CardNum">Card Number</label><br />
  <input name="CardNum" id="cardnum" /><br />
  <label for="ExDate">Expiration Date</label><br />
  <input name="ExDate" id="exDate" /><br />
  <label for="SecCode">Security Code</label><br />
  <input name="SecCode" id="secCode" /><br />
</form>
<fieldset class="checkout-summary">
  <legend>Order Summary</legend>
  <h3>Item Total:</h3>
  <p>${total}</p>
  <h3>Shipping:</h3>
  <p>${shipping}</p>
  <h3>Tax:</h3>
  <p>${tax}</p>
  <h3>Order Total:</h3>
  <p>${orderTotal}</p>
</fieldset>
<button on:click|preventDefault={checkoutHandler}>Buy Now</button>

<style>
  form,
  fieldset {
    margin: 0 auto;
    max-width: 450px;
  }
</style>
