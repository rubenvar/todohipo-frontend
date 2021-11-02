<script context="module">
  export async function load({ page, fetch, session, what }) {
    const res = await fetch("/index.json");

    if (res.ok) {
      const tips = await res.json();

      return {
        props: { tips },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<script>
  import Tip from "$lib/Tip.svelte";
  export let tips;
</script>

<h1>Todos los consejos</h1>
<div class="list">
  {#each tips as tip}
    <Tip {tip} />
  {/each}
</div>

<style lang="scss">
  .list {
    padding: 5px;
    background: maroon;
  }
</style>
