import CheckoutForm from "./components/CheckoutForm.svelte"
import { checkLogin } from "./auth.mjs"

new CheckoutForm({
    target: document.querySelector(".products"),
  });

checkLogin();