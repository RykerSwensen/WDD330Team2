// main.js 
import ProductList from "./components/ProductList.svelte";
import { renderHeaderFooter } from "./utils.mjs";
import Alert from "./Alert.mjs";

const myALert = new Alert();
new ProductList({
    target: document.querySelector(".products"),
    props: { category: "tents" },
});

myALert.init();
renderHeaderFooter();