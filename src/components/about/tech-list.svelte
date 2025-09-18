<script lang="ts">
  import { CircleIcon } from "@lucide/svelte";
  import { Bounded, Heading } from "$components";
  import { techList } from "$lib/constants";
  import { m } from "$lib/paraglide/messages";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let { component }: { component?: HTMLElement } = $props();

  $effect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion)
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: component,
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
      },
    });

    tl.fromTo(".tech-row", {
      x: (index) => {
        return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400);
      },
    }, {
      x: (index) => {
        return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400);
      },
      ease: "power1.inOut",
    });
  });
</script>

<section id="techlist"
         class="overflow-hidden"
         bind:this={component}>
  <Bounded tag="div">
    <Heading size="xl"
             class="mb-8"
             tag="h2">
      {m["about.techlist_title"]()}
    </Heading>
  </Bounded>

  {#each techList as { label, colorHex }}
    <div
      class="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
      aria-label={label || undefined}
    >
      {#each Array.from({ length: 15 }) as _, index}
        <span
          class="tech-item text-8xl font-extrabold font-jb uppercase tracking-tighter"
          style="color: {index === 7 && colorHex ? colorHex : "inherit"}"
        >
          {label}
        </span>
        <span class="text-3xl">
          <CircleIcon fill="#314158" strokeWidth={0} />
        </span>
      {/each}
    </div>
  {/each}
</section>
