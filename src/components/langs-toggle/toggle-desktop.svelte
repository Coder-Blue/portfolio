<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  import { CheckIcon, LanguagesIcon } from "@lucide/svelte";
  import * as DropdownMenu from "$components/ui/dropdown-menu";
  import { langSwitcher } from "$lib/constants";
  import { getLocale, setLocale } from "$lib/paraglide/runtime";
  import { cn } from "$lib/utils";

  type DesktopToggleProps = HTMLButtonAttributes & {
    className?: string;
  };

  const localeCheck = getLocale();

  const { class: className }: DesktopToggleProps = $props();
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <button {...props}
              class={cn("group text-slate-900 relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105", className)}>
        <span class="absolute inset-0 z-0 h-full rounded bg-orange-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-9"></span>
        <span class="relative flex items-center justify-center gap-2">
          <LanguagesIcon />
        </span>
      </button>
    {/snippet}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end" class="rounded-md border-2 border-slate-900 px-4 py-2">
    {#each langSwitcher as { label, locale }}
      <DropdownMenu.Item class="cursor-pointer text-[16px] font-medium" onclick={() => setLocale(locale)}>
        {label}
        {#if localeCheck === locale}
          <CheckIcon class="ms-2 size-4" />
        {/if}
      </DropdownMenu.Item>
    {/each}
  </DropdownMenu.Content>
</DropdownMenu.Root>
