<script lang="ts">
  import { url } from "@roxi/routify";
  import CountryCard from "../UI/CountryCard.svelte";
  export let countryName: any; //object
</script>

<CountryCard>
  <article class="card-content">
    <a
      href={$url("./:CountryDetail", {
        countryName: countryName.name.common,
      })}
    >
      <img src={countryName.flags.svg} alt={countryName.name.common} />
      <div class="card-text">
        <h1>{countryName.name.common}</h1>
        <p>
          <span class="bolder-text">Population:</span>
          {countryName.population.toLocaleString("en-US")}
        </p>
        <p><span class="bolder-text">Region:</span> {countryName.region}</p>
        <p><span class="bolder-text">Capital:</span> {countryName.capital}</p>
      </div>
    </a>
  </article>
</CountryCard>

<style lang="scss">
  .card-content {
    a {
      color: var(--theme-secondary-color);
      text-decoration: none;
    }
    padding-bottom: 30px;
    img {
      border-radius: 5px 5px 0 0;
      width: 100%;
    }
    .card-text {
      padding: 0px 25px;
      h1 {
        margin: 30px 0;
      }
      p {
        line-height: 15px;
      }
    }
  }
  @media screen and (min-width: 600px) {
    .card-content {
      height: 370px;
      img {
        max-width: 100%;
        height: 150px;
        object-fit: cover;
      }
    }
  }

  @media screen and (min-width: 960px) {
    .card-content {
      height: 420px;
      img {
        height: 190px;
      }
    }
  }
</style>
