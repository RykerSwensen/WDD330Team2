import ProductList from "./components/ProductList.svelte";
import { getParam } from "./utils.mjs";

const url = window.location;
const productType = getParam(url, "category");

new ProductList({
  target: document.querySelector(".products"),
  props: { category: productType },
});
