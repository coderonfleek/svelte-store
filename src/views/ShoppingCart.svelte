<script>
  import Cart from "../components/Cart.svelte";
  import CartItem from "../components/CartItem.svelte";

  let cart = [
    {
      id: 1,
      name: "Chelsea Shoes",
      price: 200,
      shortdesc: "Best Drip in the Market",
      url: "images/chelsea-shoes.png",
      quantity: 1
    },
    {
      id: 2,
      name: "Kimono",
      price: 50,
      shortdesc: "Classy, Stylish, Dope",
      url: "images/kimono.png",
      quantity: 1
    },
    {
      id: 3,
      name: "Rolex",
      price: 2500,
      shortdesc: "Elegance built in",
      url: "images/rolex.png",
      quantity: 1
    }
  ];
</script>

<main>
  <div class="home container">
    <div class="row">
      <div class="col-md-8 pt-5">
        {#each cart as product}
          <CartItem {product} />
        {/each}
      </div>
      <div class="col-md-4 pt-5">
        <Cart />
      </div>
    </div>
  </div>
</main>
