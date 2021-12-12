<script>
  import "normalize.css";
  import "../app.css";
  import "@fontsource/permanent-marker";
  import "@fontsource/quicksand/400.css";
  import "@fontsource/quicksand/700.css";
  import "@fontsource/quicksand/variable.css";

  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<Header />
<slot />
<Footer />

<style lang="scss">
</style>
