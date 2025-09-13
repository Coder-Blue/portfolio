<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { setLocale } from "$lib/paraglide/runtime";
</script>

<h1 class="font-jb">Welcome to SvelteKit</h1>
<div class="font-inter">
  <button onclick={() => setLocale("en")}>EN</button>
  <button onclick={() => setLocale("vi")}>VN</button>
</div>
<p>{m.hello()}</p>
