<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  import { cn } from "$lib/utils";

  type HeadingProps = HTMLAttributes<HTMLElement> & {
    className?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xl" | "lg" | "md" | "sm";
    children?: Snippet;
  };

  const { class: className, tag = "h1", size = "lg", children }: HeadingProps = $props();
</script>

<svelte:element
  this={tag}
  class={cn(
    "font-bold leading-tight tracking-tight text-slate-300",
    size === "xl" && "text-7xl md:text-9xl",
    size === "lg" && "text-6xl md:text-8xl",
    size === "md" && "text-5xl md:text-6xl",
    size === "sm" && "text-3xl md:text-4xl",
    className,
  )}
>
  {@render children?.()}
</svelte:element>
