<script lang="ts">
  export let selectedRegion;
  export let regions;
</script>

<section class="menu-cont">
  <select class="menu" name="menu" id="menu" bind:value={selectedRegion}>
    <option disabled selected value="">Filter by Region</option>
    <option value="all">All regions</option>
    {#each regions as region}
      <option value={region}>{region}</option>
    {/each}
  </select>
</section>

<style lang="scss">
  .menu-cont {
    position: relative;
    margin-top: 15px;
    width: 60%;
  }

  select {
    cursor: pointer;
    font-size: 0.95rem;
    border-radius: 5px;
    border: none;
    padding: 20px;
    background-color: var(--theme-mode-elements);
    color: var(--theme-secondary-color);
    background-image: url(../../../assets/img/chevron-down-solid.svg);
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: right 20px center; /* Change the px value here to change the distance */
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  .menu {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    .menu-cont {
      margin-top: 0px;
      flex: 1 0 0%;
    }
    .menu {
      width: 200px;
    }
  }
</style>
