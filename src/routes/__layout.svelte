<script>
  import "normalize.css";
  // import Header from "$lib/Header.svelte";
  // import Footer from "$lib/Footer.svelte";
  import "../app.css";
</script>

<!-- <Header /> -->
<main>
  <slot />
</main>

<!-- <Footer /> -->
<style lang="scss">
  main {
    max-width: 1040px;
    margin: 0 auto;
    padding-top: 50px;
  }
</style>
