<script lang="ts">
  import { onMount } from "svelte";
  import { countrys, fetchCountry } from "../stores/countrystore";
  import CountryItem from "./CountryItem.svelte";
  import CountrySearch from "./CountrySearch.svelte";
  import ErrorMessage from "../shared/ErrorMessage.svelte";
  import LoadingSpinner from "../shared/LoadingSpinner.svelte";
  import Menu from "./Menu.svelte";
  import NoResults from "../shared/NoResults.svelte";

  $: promise = fetchCountry();
  let filteredCountrys = [];
  let regions = [];
  let selectedRegion = "";
  let searchTerm = "";

  onMount(() => {
    fetchCountry();
    getRegions();
  });

  const getRegions = async () => {
    const response = await fetch(await promise);
    if (response.ok) {
      for (let countryObj of $countrys) {
        if (!regions.includes(countryObj.region)) {
          regions = [...regions, countryObj.region];
        }
      }
      regions = regions.sort();
    } else {
      regions = [];
    }
  };

  // Menu filter
  $: if (selectedRegion) showRegionsByMenu();
  const showRegionsByMenu = () => {
    searchTerm = "";
    if (selectedRegion === "all") {
      return (filteredCountrys = []);
    }
    return (filteredCountrys = $countrys.filter((countryObj) => {
      return countryObj.region === selectedRegion;
    }));
  };

  // Search input
  $: if (searchTerm) selectedRegion = "";
  const searchCountryByName = () => {
    return (filteredCountrys = $countrys.filter((countryObj) => {
      let countryNameLower = countryObj.name.common.toLowerCase();
      return countryNameLower.includes(searchTerm.toLowerCase());
    }));
  };
</script>

<svelte:head>
  <title>Country App Countrylist</title>
</svelte:head>

<div class="main-container">
  <section id="query-section">
    <CountrySearch bind:searchTerm on:input={searchCountryByName} />
    <Menu {regions} bind:selectedRegion />
  </section>

  <div class="country-item-container">
    {#await promise}
      <div class="center">
        <LoadingSpinner />
      </div>
    {:then $countrys}
      {#if searchTerm && filteredCountrys.length === 0}
        <NoResults />
      {:else if filteredCountrys.length > 0}
        {#each filteredCountrys as country}
          <CountryItem countryName={country} />
        {/each}
      {:else}
        {#each $countrys as country}
          <CountryItem countryName={country} />
        {/each}
      {/if}
    {:catch error}
      <ErrorMessage {error} />
    {/await}
  </div>
</div>

<style lang="scss">
  #query-section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    max-width: 400px;
    gap: 5px;
  }

  .country-item-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 25px;
    gap: 40px 10px; // row-gap | col-gap
  }

  @media screen and (min-width: 600px) {
    .main-container {
      margin-top: 40px;
    }
    #query-section {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
    }
    .country-item-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 40px;
    }
  }
  @media screen and (min-width: 960px) {
    .country-item-container {
      gap: 70px 10px; // row-gap | col-gap
    }
  }
</style>
