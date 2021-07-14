<script>
  import Product from "../components/Product.svelte";
  import Cart from "../components/Cart.svelte";
  import { products } from "../store";
</script>

<main>
  <div class="home container">
    <div class="row">
      <div class="col-md-9 pt-5">
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3"
        >
          {#each $products as product}
            <Product {product} />
          {/each}
        </div>
      </div>
      <div class="col-md-3 pt-5">
        <Cart />
      </div>
    </div>
  </div>
</main>
