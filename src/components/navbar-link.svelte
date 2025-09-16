<script lang="ts">
  import { page } from "$app/state";
  import { localizeHref } from "$lib/paraglide/runtime";
  import { cn } from "$lib/utils";

  type NavBarLinkProps = {
    href: string;
    label: string;
    onLinkClick: (event: MouseEvent) => void;
    type: "desktop" | "mobile";
  };

  const { href, label, onLinkClick, type }: NavBarLinkProps = $props();

  const isActive = $derived(href && page.url.pathname.includes(href));
</script>

{#if type === "desktop"}
  <a href={localizeHref(href)}
     class="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
     onclick={onLinkClick}
     aria-current={isActive ? "page" : undefined}>
    <span class={cn("absolute inset-0 z-0 h-full rounded bg-orange-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0", isActive ? "translate-y-6" : "translate-y-8")}></span>
    <span class="relative">{label}</span>
  </a>
{:else}
  <a href={localizeHref(href)}
     class="group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900"
     onclick={onLinkClick}
     aria-current={isActive ? "page" : undefined}>
    <span class={cn("absolute inset-0 z-0 h-full rounded bg-orange-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0", isActive ? "translate-y-6" : "translate-y-16")}></span>
    <span class="relative">
      {label}
    </span>
  </a>
{/if}
