<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";

  import { iconSize } from "$lib/constants";
  import { cn } from "$lib/utils";

  type SVGIconProps = SVGAttributes<SVGSVGElement> & {
    className?: string;
  };

  const { class: className, ...restProps }: SVGIconProps = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg"
     width={iconSize}
     height={iconSize}
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round"
     class={cn("lucide lucide-mail-icon lucide-mail", className)}
     {...restProps}>
  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
  <rect x="2"
        y="4"
        width="20"
        height="16"
        rx="2" />
</svg>
