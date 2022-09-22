<script lang="ts">
  let darkMode: boolean = false;
  const darkModeToggle = () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark_mode");
  };
</script>

<div class="darkModeSwitcher">
  <button
    aria-label="toggle dark mode"
    type="button"
    title={darkMode ? "switch to light mode" : "switch to dark mode"}
    on:click={darkModeToggle}
  >
    {#if darkMode}
      <span>
        <i class="fa-regular fa-sun" id="iconDarkMode" />
      </span>
    {:else}
      <span>
        <i class="fa-regular fa-moon" id="iconDarkMode" />
      </span>
    {/if}
    <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
  </button>
</div>

<style lang="scss">
  .darkModeSwitcher {
    display: block;
  }
  button {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    padding: 10px 0px;
    gap: 8px;
    border: none;
    background-color: transparent;
    color: var(--theme-secondary-color);
    font-size: 1rem;
    #iconDarkMode {
      font-size: auto;
    }
  }
</style>
