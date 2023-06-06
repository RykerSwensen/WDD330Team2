<script>
  import { findProductById } from "../productData.mjs";
  import { getCartCount, getLocalStorage, setLocalStorage } from "../utils.mjs";
  import { cartCount } from "../stores.mjs";
  export let product;

  const discount = Math.round(
    (1 - product.FinalPrice / product.SuggestedRetailPrice) * 100
  );

  // add to cart button event handler
  async function addToCartHandler(e) {
    const product = await findProductById(e.target.dataset.id);
    addProductToCart(product);
    animateCartIcon();
  }

  function animateCartIcon() {
  const cartIcon = document.querySelector(".cart");
  
    const cartAnimationKeyframe = [
      { transform: "rotate(0) scale(1)" },
      { transform: "rotate(0deg) scale(1.4)", fill: "#008000" },
      { transform: "rotate(-30deg) scale(1.4)", fill: "#008000" },
    ];

    const cartAnimationOptions = {
      duration: 100,
      iterations: 1
    };

    cartIcon.animate(cartAnimationKeyframe, cartAnimationOptions);
}

  function addProductToCart(product) {
    // Get the current cart. (Get local storage)
    let items = getLocalStorage("so-cart");
    // If the cart is empty
    if (items == null) {
      items = [];
    }
    // Add the new product to the cart items. (Push to the end of the array)
    items.push(product);
    // Save all the cart items to the local storage
    setLocalStorage("so-cart", items);
    cartCount.set(getCartCount());
  }

  // function calculateDiscount(product){
  //   Math.round(product.SuggestedRetailPrice * (discount / 100))
  // }
</script>

<section class="product-detail">
  <h3 id="productName">{product.Name}</h3>

  <h2 class="divider" id="productNameWithoutBrand">
    {product.NameWithoutBrand}
  </h2>

  <img
    class="divider"
    id="ProductImage"
    src={product.Images.PrimaryLarge}
    alt={product.Name}
  />

  <div id="prices">
    <p class="product-card__price" id="productFinalPrice">
      ${Math.round(product.SuggestedRetailPrice * (discount / 100))}
    </p>
    <p class="product-card__price" id="productOriginalPrice">
      ${product.SuggestedRetailPrice}
    </p>
  </div>
  <p class="product-card__price" id="discount">{Math.round(discount)}% off</p>

  <p class="product__color" id="productColorName">
    {product.Colors[0].ColorName}
  </p>

  <p class="product__description" id="productDescriptionHtmlSimple">
    {@html product.DescriptionHtmlSimple}
  </p>

  <div class="product-detail__add">
    <button id="addToCart" data-id={product.Id} on:click={addToCartHandler}
      >Add to Cart</button
    >
  </div>
</section>
