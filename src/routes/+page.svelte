<script lang="ts">
  import { Scene } from "$components";
  import { m } from "$lib/paraglide/messages";
  import gsap from "gsap";
  import { onMount } from "svelte";

  const first_name_letters = m["hero.first_name"]()?.split("") ?? "";
  const last_name_letters = m["hero.last_name"]()?.split("") ?? "";

  onMount(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.to(".name-animation", { opacity: 1 });
      gsap.to(".job-title", { opacity: 1 });
    }

    const tl = gsap.timeline();

    tl.fromTo(
      `.name-animation`,
      {
        x: -100,
        opacity: 0,
        rotate: -10,
      },
      {
        x: 0,
        rotate: 0,
        opacity: 1,
        ease: "elastic.out(1,0.3)",
        duration: 1,
        transformOrigin: "left top",
        delay: 0.5,
        stagger: {
          each: 0.1,
          from: "random",
        },
      },
    );

    tl.fromTo(`.job-title`, {
      y: 20,
      opacity: 0,
      scale: 1.2,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scale: 1,
      ease: "elastic.out(1,0.3)",
    });
  });
</script>

<section class="px-4 md:px-6">
  <div class="mx-auto w-full max-w-7xl">
    <div class="grid min-h-[65vh] grid-cols-1 items-center md:grid-cols-2">
      <div class="relative z-10 row-span-1 row-start-1 -my-10 aspect-[1/1.3] overflow-hidden md:col-span-1 md:col-start-2 md:mt-0">
        <Scene />
      </div>
      <div class="col-start-1 md:row-start-1">
        <h1 class="mb-2 md:mb-2 text-[clamp(3rem,20vmin,13rem)] font-jb font-extrabold leading-none tracking-tighter text-nowrap" aria-label={`${m["hero.first_name"]()} ${m["hero.last_name"]()}`}>
          {#if first_name_letters.length && last_name_letters.length}
            <span class="block text-slate-300">
              {#each first_name_letters as letter}
                <span class="name-animation inline-block opacity-0">{letter}</span>
              {/each}
            </span>
            <span class="block text-slate-500 -mt-[.05em]">
              {#each last_name_letters as letter}
                <span class="name-animation inline-block opacity-0">{letter}</span>
              {/each}
            </span>
          {/if}
        </h1>
        <span class="job-title block bg-gradient-to-tr from-orange-500 via-orange-200 to-orange-500 bg-clip-text text-transparent text-2xl font-bold uppercase tracking-[.2em] md:text-4xl opacity-0">
          {m["hero.tagline"]()}
        </span>
      </div>
    </div>
  </div>
</section>
