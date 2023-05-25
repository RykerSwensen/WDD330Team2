import ProductList from "./components/ProductList.svelte";
import { getParam } from "./utils.mjs";

const url = window.location.search;
const productType = getParam(url, "category");
console.log(productType)

new ProductList({
    target: document.querySelector(".products"),
    props: { category: productType },
});

