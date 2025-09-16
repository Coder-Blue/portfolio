<script lang="ts">
  import { MenuIcon, XIcon } from "@lucide/svelte";
  import { Button, NavBarLink, ToggleDesktop } from "$components";
  import { ctaLink, links } from "$lib/constants";
  import { m } from "$lib/paraglide/messages";
  import { localizeHref } from "$lib/paraglide/runtime";
  import { cn } from "$lib/utils";

  let open = $state<boolean>(false);

  function onLinkClick() {
    open = false;
  }
</script>

<header class="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4 relative">
  <nav>
    <div class="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
      <div class="flex items-center justify-between">
        <a href={localizeHref("/")}
           aria-label="Homepage"
           class="text-xl font-extrabold tracking-tighter text-slate-900 font-jb">
          {m["header.name"]()}
        </a>
        <button aria-expanded={open}
                aria-label="Open Menu"
                class="block p-2 text-2xl text-slate-800 md:hidden"
                onclick={() => (open = true)}>
          <MenuIcon />
        </button>
      </div>

      <!-- Mobile Nav -->
      <ul class={cn("fixed inset-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden", open ? "translate-x-0" : "translate-x-[100%]")}>
        <li>
          <button aria-expanded={open}
                  aria-label="Close Menu"
                  class="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden"
                  onclick={() => (open = false)}>
            <XIcon />
          </button>
        </li>
        {#each links as { label, url }}
          <li class="first:mt-8">
            <NavBarLink href={url}
                        {label}
                        {onLinkClick}
                        type="mobile" />
          </li>
        {/each}
        <Button label={ctaLink.label} url={ctaLink.url} />
      </ul>

      <!-- Desktop Nav -->
      <ul class="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
        {#each links as { label, url }}
          <li>
            <NavBarLink href={url}
                        {label}
                        {onLinkClick}
                        type="desktop" />
          </li>
        {/each}
        <Button label={ctaLink.label}
                url={ctaLink.url}
                class="ml-3" />
        <ToggleDesktop class="ml-3" />
      </ul>

    </div>
  </nav>
</header>
