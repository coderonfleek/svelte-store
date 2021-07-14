<script>
  import Product from "../components/Product.svelte";
  import { cart } from "../store";

  export let product;

  let itemQuantity = 0;

  $: {
    let get_product = $cart.filter((item) => item.id == product.id);

    itemQuantity = get_product[0].quantity;
  }

  function changeQuantity(action = "add") {
    if (action == "add") {
      product.quantity = product.quantity + 1;

      updateCart(product);
    } else {
      if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
        updateCart(product);
      } else {
        //Remove the item

        removeItem(product);
      }
    }
  }

  function removeItem(product) {
    let removedItemCart = $cart.filter((cartItem) => {
      return cartItem.id != product.id;
    });

    cart.set(removedItemCart);
  }

  function updateCart(product) {
    /* let updatedCart = [...$cart, product]; */

    let updatedCart = $cart.map((cartItem) => {
      if (cartItem.id == product.id) {
        return product;
      }

      return cartItem;
    });

    cart.set(updatedCart);
  }
</script>

<main>
  <div class="row cart-item-row">
    <div class="col-md-6">
      <Product {product} />
    </div>
    <div class="col-md-4">
      <div class="row">
        <div class="col-md-5">
          <button
            on:click={() => changeQuantity()}
            class="btn btn-primary btn-block">+</button
          >
        </div>
        <div class="col-md-2 text-center">{product.quantity}</div>
        <div class="col-md-5">
          <button
            on:click={() => changeQuantity("remove")}
            class="btn btn-warning btn-block">-</button
          >
        </div>
      </div>
      <div class="row cart-remove-button">
        <div class="col-md-12">
          <button on:click={() => removeItem()} class="btn btn-danger btn-block"
            >Remove Item</button
          >
        </div>
      </div>
    </div>
  </div>
</main>

<style scoped>
  .cart-item-row {
    border-bottom: 1px solid #ccc;
    margin-top: 20px;
  }
  .cart-remove-button {
    margin-top: 10px;
  }
</style>
