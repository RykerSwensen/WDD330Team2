<script>
  export let product;
</script>

<li class="product-card">
  <a href="/product_pages/index.html?product={product.Id}">
    <!-- <img src={product.Images.PrimaryMedium} alt={product.Name} /> -->
    <img 
      srcset={`${product.Images.PrimarySmall} 80w, ${product.Images.PrimaryMedium} 160w, ${product.Images.PrimaryLarge} 320w, ${product.Images.PrimaryExtraLarge} 600w` } 
      alt={product.Name}
      src={product.Images.PrimaryMedium}
      sizes="(max-width: 500px) 160px,
              (max-width: 501px) 320px,
              (min-width: 1000px) 600px"
    />
    <h3 class="card__brand">{product.Brand.Name}</h3>
    <h2 class="card__name">{product.NameWithoutBrand}</h2>
    <p class="product-card__price" id="productOriginalPrice"ss>${product.SuggestedRetailPrice}</p>
    <p class="product-card__price">${product.FinalPrice}</p>
  </a>
</li>

<!-- sizes="(max-width: 500px) 500px,
(max-width: 501px) 700px,
(min-width: 1000px) 1000px" -->

<!-- <img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />

  min-width: 500px; -->
