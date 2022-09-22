<script lang="ts">
  import { ready, url, params } from "@roxi/routify";
  import {
    updateCountry,
    countryDetails,
    borderFullName,
  } from "../stores/countrystore";
  import ErrorMessage from "../shared/ErrorMessage.svelte";
  import LoadingSpinner from "../shared/LoadingSpinner.svelte";
  $ready();
  $: promise = updateCountry($params.countryName);
</script>

<svelte:head><title>Country App Countrydetail</title></svelte:head>
<button class="back-button">
  <a href={$url("./CountryList")}
    ><i class="fa-solid fa-arrow-left-long" />
    Back</a
  >
</button>

{#await promise}
  <LoadingSpinner />
{:then $countryDetails}
  <div class="detail-main-container">
    {#each $countryDetails as country}
      <article class="article-container">
        <div class="left-box">
          <img src={country.flags.svg} alt={country.name.common} />
        </div>
        <div class="right-box">
          <h1>
            {country.name.common}
          </h1>
          <div class="detail-container">
            <div class="flex-box-1">
              <p>
                <span class="bolder-text">Native name:</span>
                {country.altSpellings[1]}
              </p>
              <p>
                <span class="bolder-text">Population:</span>
                {country.population.toLocaleString("en-US")}
              </p>
              <p><span class="bolder-text">Region:</span> {country.region}</p>
              <p>
                <span class="bolder-text">Sub Region:</span>
                {country.subregion}
              </p>
              <p><span class="bolder-text">Capital:</span> {country.capital}</p>
            </div>

            <div class="flex-box-2">
              <p>
                <span class="bolder-text">Top Level Domain:</span>
                {country.tld}
              </p>
              <p>
                <span class="bolder-text">Currencies:</span>
                {Object.keys(country.currencies)[0]}
              </p>
              <p>
                <span class="bolder-text">Languages:</span>
                {Object.values(country.languages).sort().join(", ")}
              </p>
            </div>
          </div>
          <div class="border-container">
            <h3>Border Countries</h3>
            <div class="button-container">
              {#each $borderFullName as border}
                <a href={$url("./:CountryDetail", { countryName: border })}>
                  <button type="button" class="borderBtn">{border}</button>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </article>
    {/each}
  </div>
{:catch error}
  <ErrorMessage {error} />
{/await}

<style lang="scss">
  a {
    text-decoration: none;
  }

  .detail-main-container {
    padding: 0 10px 60px 10px;
  }

  .article-container {
    flex-wrap: wrap;
  }

  .detail-container {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    gap: 10px;
  }

  .back-button {
    padding: 9px 26px;
    margin: 40px 0 60px 10px;
    box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.2),
      0 6px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: var(--theme-mode-elements);
    border: none;
    a {
      color: var(--theme-secondary-color);
      font-size: 1rem;
      text-decoration: none;
      .fa-arrow-left-long {
        margin-right: 10px;
      }
    }
  }

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin-bottom: 10px;
  }

  .button-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }

  .borderBtn {
    border: none;
    width: 150px;
    padding: 9px 26px;
    line-height: 20px;
    border-radius: 5px;
    background-color: var(--theme-mode-elements);
    color: var(--theme-secondary-color);
  }

  @media screen and (min-width: 1280px) {
    .detail-main-container {
      padding: 0;
    }

    .article-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0px 20px;
    }

    .back-button {
      margin-left: 0px;
    }

    .detail-container {
      flex-direction: row;
      justify-content: space-between;
    }

    .border-container {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: flex-end;
      max-width: 100%;
      h3 {
        margin-top: 3px;
      }
    }

    .button-container {
      max-width: 400px;
      justify-content: flex-start;
      align-items: center;
    }

    img {
      max-width: 550px;
    }
  }
</style>
