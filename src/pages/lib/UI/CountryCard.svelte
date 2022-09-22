<script lang="ts">
  import { scale } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
</script>

<section class="card" transition:scale={{ duration: 500, easing: expoInOut }}>
  <slot />
</section>

<style lang="scss">
  .card {
    cursor: pointer;
    background-color: var(--theme-mode-elements);
    color: var(--secondary-color);
    max-width: 280px;
    border-radius: 0 0 5px 5px;
  }

  @media screen and (min-width: 600px) {
    .card {
      width: 100%;
    }
  }

  @media screen and (min-width: 960px) {
    .card {
      max-width: 280px;
    }
  }
</style>
