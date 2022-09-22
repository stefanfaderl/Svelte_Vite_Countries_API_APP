<script lang="ts">
  export let error: any;
</script>

<section>
  <div class="error-msg">
    <h1>Error</h1>
    <h3>Message: {error.message}</h3>
  </div>
</section>

<style>
  section {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .error-msg {
    width: 70%;
    padding: 20px;
    font-size: 1.2rem;
    text-align: center;
    background-color: #ffdddd;
    border-left: 6px solid #f44336;
  }
</style>
