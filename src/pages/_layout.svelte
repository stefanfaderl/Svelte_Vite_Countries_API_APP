<script>
  import Nav from "./lib/components/Nav.svelte";
</script>

<header>
  <Nav />
</header>

<div id="max-width-content">
  <main>
    <slot />
  </main>
</div>
