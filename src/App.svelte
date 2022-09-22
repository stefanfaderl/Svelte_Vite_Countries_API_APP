<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<svelte:head><title>Country App</title></svelte:head>

<Router {routes} />
