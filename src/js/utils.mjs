// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  let currentData = getLocalStorage(key);
  if (currentData) {
    localStorage.setItem(key, JSON.stringify([data, ...currentData]));
  } else {
    localStorage.setItem(key, JSON.stringify([data]));
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export function getParam(url){
  const urlParams = new URLSearchParams(url);
  const product = urlParams.get('product')
  return product
}
