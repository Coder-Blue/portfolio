<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { Picture } from "vite-imagetools";

  import { cn } from "$lib/utils";
  import gsap from "gsap";

  type AvatarProps = HTMLAttributes<HTMLDivElement> & {
    className?: string;
    imageUrl: string | Picture;
    component?: HTMLElement;
  };

  let { class: className, imageUrl, component }: AvatarProps = $props();

  $effect(() => {
    gsap.fromTo(".avatar", {
      opacity: 0,
      scale: 1.4,
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.3,
      ease: "power3.inOut",
    });

    window.onmousemove = (e) => {
      if (!component)
        return;

      const componentRect = (component as HTMLElement).getBoundingClientRect();
      const componentCenterX = componentRect.left + componentRect.width / 2;

      const componentPercent = {
        x: (e.clientX - componentCenterX) / componentRect.width / 2,
      };

      const distFromCenterX = 1 - Math.abs(componentPercent.x);

      gsap.timeline({
        defaults: { duration: 0.5, overwrite: "auto", ease: "power3.out" },
      }).to(".avatar", {
        rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
      }, 0).to(".highlight", {
        opacity: distFromCenterX - 0.7,
        x: -10 + 20 * componentPercent.x,
      }, 0);
    };
  });
</script>

<div class={cn("relative h-full w-full", className)} bind:this={component}>
  <div class="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0">
    <enhanced:img src={imageUrl}
                  alt="Noah"
                  class="avatar-image h-full w-full object-fill" />
    <div class="highlight absolute inset-0 w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"></div>
  </div>
</div>

<style>
    .avatar {
        perspective: 500px;
        perspective-origin: 150% 150%;
    }
</style>
