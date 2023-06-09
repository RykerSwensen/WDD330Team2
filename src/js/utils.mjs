import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";
import AlertMessage from "./components/AlertMessage.svelte";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export function getParam(url, key) {
  const urlParams = new URLSearchParams(url.search);
  const product = urlParams.get(key);
  return product;
}

export function renderHeaderFooter() {
  new MainHeader({
    target: document.getElementById("header"),
    props: { cartCount: 1 },
  });
  new MainFooter({
    target: document.getElementById("footer"),
  });
}

export function getCartCount() {
  return getLocalStorage("so-cart").length || 0;
}

export function alertMessage(message, scroll=true) {
  const alert = new AlertMessage({
    target: document.querySelector("body"),
    anchor: document.querySelector("main"),
    props: {
    message,
    },
  });
  if (scroll) window.scrollTo(0, 0);
}