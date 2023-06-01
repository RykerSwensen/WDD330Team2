<script>
  import { get } from "svelte/store";
    let cartItems;
    let total = 0;
    let tax = 0;
    let shipping = 0;
    let orderTotal = 0;
    function init(){
        cartItems = getLocalStorage("so-cart");
        for (let i = 0; i < cartItems.length; i++) {
            total += cartItems[i].FinalPrice;
        }
    }

    const calculateOrdertotal = function () {
        NumItems = cartItems.length;
        tax = total*.06;
        for (let i = 1; i < NumItems; i++) {
            if(i == 1) shipping += 10;
            else shipping += 2;
        }
        orderTotal = total + tax + shipping;
  
    };
  </script>
  <form>
    <label for="FirstName">First Name</label>
    <input name="FirstName"/> 
    <label for="LastName">Last Name</label>
    <input name="LastName"/> 
    <label for="Street">Street</label>
    <input name="Street"/> 
    <label for="City">City</label>
    <input name="City"/> 
    <label for="State">State</label>
    <input name="State"/> 
    <label for="Zip">Zip</label>
    <input name="Zip"/> 
    <label for="CardNum">Card Number</label>
    <input name="CardNum"/> 
    <label for="ExDate">Expiration Date</label>
    <input name="ExDate"/> 
    <label for="SecCode">Security Code</label>
    <input name="SecCode"/> 
  </form>
  <fieldset class="checkout-summary">
    <legend>Order Summary</legend>
    ...
    <p>${tax}</p>
    ...
  </fieldset>
  ... 
