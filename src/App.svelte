<script>
  //Base Project
  import { onMount } from "svelte";
  import routes from "./routes";
  import Router from "svelte-spa-router";
  import { link } from "svelte-spa-router";

  onMount(async () => {});
</script>

<main>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/" use:link class="navbar-brand"> The Identity Store </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
      </nav>
    </div>
    <Router {routes} />
  </div>
</main>
