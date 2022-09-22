<script lang="ts">
  export let searchTerm: string;
</script>

<div class="form-outer">
  <div class="container">
    <div class="form-input">
      <span class="icon"
        ><i class="fa-solid fa-search" aria-hidden="true" /></span
      >
      <input
        type="text"
        placeholder="Search for a country..."
        autocomplete="off"
        bind:value={searchTerm}
        on:input
      />
    </div>
  </div>
</div>

<style lang="scss">
  .form-outer {
    margin-top: 10px;
    width: 100%;
  }
  .container {
    width: 100%;
  }

  .form-input {
    position: relative;
  }
  input {
    margin: 15px 0;
    border: none;
    border-radius: 5px;
    padding: 20px 10px 20px 75px;
    font-size: 0.9rem;
    display: block;
    width: 100%;
    background-color: var(--theme-mode-elements);
    color: var(--theme-secondary-color);
  }
  ::placeholder {
    color: var(--theme-secondary-color);
    opacity: 70%;
  }
  .icon {
    position: absolute;
    padding: 10px;
    left: 25px;
    top: 0;
    font-size: 18px;
    color: var(--theme-secondary-color);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 70%;
  }

  @media screen and (min-width: 600px) {
    .form-outer,
    input {
      margin: 0px;
    }
    .container {
      width: 320px;
    }
  }

  @media screen and (min-width: 960px) {
    .container {
      width: 500px;
    }
  }
</style>
