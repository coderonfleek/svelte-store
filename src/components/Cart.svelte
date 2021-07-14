<script>
  import { link } from "svelte-spa-router";
  import { cart } from "../store";

  $: totalPrice = $cart.reduce((total, next) => {
    console.log($cart);
    return total + next.quantity * next.price;
  }, 0);
</script>

<main>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Your Cart</h5>
      {#if $cart.length == 0}
        <p>Your Cart is Empty</p>
      {/if}
    </div>
    <ul class="list-group list-group-flush">
      {#each $cart as item}
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {item.name}
          <span class="badge badge-primary badge-pill">{item.quantity}</span>
        </li>
      {/each}
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        Price <b>${totalPrice}</b>
      </li>
    </ul>

    <div class="card-body">
      <a use:link href="/shop" class="btn btn-primary btn-block">Checkout</a>
    </div>
  </div>
</main>
