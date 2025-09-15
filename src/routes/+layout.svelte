<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  const { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<main>
  {@render children?.()}
</main>
<div class="background-gradient absolute inset-0 -z-50 max-h-screen"></div>
<div class="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
