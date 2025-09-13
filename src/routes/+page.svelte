<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { setLocale } from "$lib/paraglide/runtime";
</script>

<h1 class="font-jb">Welcome to SvelteKit</h1>
<div>
  <button onclick={() => setLocale("en")}>EN</button>
  <button onclick={() => setLocale("vn")}>VN</button>
</div>
<p>{m.hello()}</p>
