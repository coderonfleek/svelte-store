<script>
  import Cart from "../components/Cart.svelte";
  import CartItem from "../components/CartItem.svelte";

  import { cart } from "../store";
</script>

<main>
  <div class="home container">
    <div class="row">
      <div class="col-md-8 pt-5">
        {#each $cart as product}
          <CartItem {product} />
        {/each}
      </div>
      <div class="col-md-4 pt-5">
        <Cart />
      </div>
    </div>
  </div>
</main>
