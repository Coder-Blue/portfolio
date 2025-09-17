<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  import { ArrowUpRightIcon } from "@lucide/svelte";
  import { localizeHref } from "$lib/paraglide/runtime";
  import { cn } from "$lib/utils";

  type ButtonProps = HTMLAnchorAttributes & {
    className?: string;
    url: string;
    label: string;
    showIcon?: boolean;
  };

  const { url, label, showIcon = true, class: className, ...restProps }: ButtonProps = $props();
</script>

<a
  href={localizeHref(url)}
  class={cn("group text-slate-900 relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105", className)}
  {...restProps}
>
  <span class="absolute inset-0 z-0 h-full rounded bg-orange-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-9"></span>
  <span class="relative flex items-center justify-center gap-2">
    {label}
    {#if showIcon}
      <ArrowUpRightIcon />
    {/if}
  </span>
</a>
