<script>
  export let product;
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
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
</main>
