<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  import { cn } from "$lib/utils";

  type BoundedProps = HTMLAttributes<HTMLElement | HTMLDivElement> & {
    className?: string;
    tag?: string;
    children?: Snippet;
    id?: string;
  };

  const { class: className, tag = "section", children, id, ...restProps }: BoundedProps = $props();
</script>

<svelte:element {id}
                this={tag}
                {...restProps}
                class={cn("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}>
  <div class="mx-auto w-full max-w-7xl">
    {@render children?.()}
  </div>
</svelte:element>
