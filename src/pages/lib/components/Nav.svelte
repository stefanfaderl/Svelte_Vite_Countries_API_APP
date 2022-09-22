<script lang="ts">
  import { url } from "@roxi/routify";
  import DarkModeSwitcher from "./DarkModeSwitcher.svelte";
</script>

<nav>
  <a href={$url("/lib/components/CountryList")}>
    <div class="brand-title">Where in the world?</div>
  </a>
  <DarkModeSwitcher />
</nav>

<style lang="scss">
  nav {
    color: var(--theme-secondary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 800;
    a {
      text-decoration: none;
      &:visited {
        color: var(--theme-secondary-color);
      }
    }
    .brand-title {
      font-size: 1.1rem;
      line-height: 25px;
    }
  }

  @media screen and (min-width: 960px) {
    nav {
      .brand-title {
        font-size: 1.2rem;
      }
    }
  }
</style>
