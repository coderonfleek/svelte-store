<script>
  import { cart } from "../store";
  export let product;

  let inCart = false;

  $: {
    $cart.forEach((item) => {
      if (item.id == product.id) {
        inCart = true;
      }
    });
  }

  function addToCart() {
    if (!inCart) {
      let updatedCart = [...$cart, { ...product, quantity: 1 }];

      cart.set(updatedCart);
    } else {
      alert("Item already added to Cart");
    }
  }
</script>

<main>
  <div class="col mb-4">
    <div class="card">
      <img src={product.url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">
          ${product.price}
          <br />
          <small>
            {product.shortdesc}
          </small>
        </p>
        <button
          on:click={() => addToCart()}
          class="btn btn-primary"
          disabled={inCart}>{inCart ? "Added" : "Add to Cart"}</button
        >
      </div>
    </div>
  </div>
</main>
