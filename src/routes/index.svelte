<script context="module">
  export async function load({ page, fetch, session, what }) {
    const res = await fetch("/index.json");

    if (res.ok) {
      const { tips, unsplash } = await res.json();

      return {
        props: { tips, unsplash },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<script>
  import Hero from "$lib/Hero.svelte";
  import heroImage from "$lib/stores/heroImage";
  import Tip from "$lib/Tip.svelte";

  export let tips;
  export let unsplash;
  heroImage.set(unsplash);
</script>

<Hero length={tips.length} />
<main>
  {#each tips as tip, i}
    <Tip {tip} {i} />
  {/each}
</main>

<style lang="scss">
  main {
    max-width: 900px;
    margin: 30px auto 0;
  }
</style>
