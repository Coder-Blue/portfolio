<script lang="ts">
  import { links, socialLinks } from "$lib/constants";
  import { m } from "$lib/paraglide/messages";
  import { localizeHref } from "$lib/paraglide/runtime";
</script>

<footer class="text-slate-500">
  <div class="container mx-auto flex mt-20 flex-col items-center justify-between gap-6 py-8 sm:flex-row">
    <div class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
      <a href={localizeHref("/")} class="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-orange-400">
        {m["footer.name"]()}
      </a>
      <span class="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline" aria-hidden="true">/</span>
      <p class="text-sm text-slate-300">
        &#169; {new Date().getFullYear()} {m["footer.name"]()}
      </p>
    </div>
    <nav class="navigation" aria-label="Footer Navigation">
      <ul class="flex items-center gap-1">
        {#each links as { label, url }, index}
          <li>
            <a href={localizeHref(`${url}`)} class="block px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-orange-400">
              {label}
            </a>
          </li>
          {#if index < links.length - 1}
            <span class="text-4xl font-thin leading-[0] text-slate-400" aria-hidden="true">/</span>
          {/if}
        {/each}
      </ul>
    </nav>
    <div class="socials inline-flex justify-center sm:justify-end">
      {#each socialLinks as item}
        {@const Icon = item.icon}
        <a href={item.url}
           target="_blank"
           class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-orange-400"
           aria-label={`${m["footer.name"]()} on ${item.label}`}>
          <Icon />
        </a>
      {/each}
    </div>
  </div>
</footer>
