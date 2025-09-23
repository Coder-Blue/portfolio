<script lang="ts">
  import type { MetadataAndSlug } from "$lib/types";
  import type { Action } from "svelte/action";

  import { ArrowUpRightIcon } from "@lucide/svelte";
  import { m } from "$lib/paraglide/messages";
  import { localizeHref } from "$lib/paraglide/runtime";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  type CardsProps = {
    items: MetadataAndSlug[];
  };

  const { items }: CardsProps = $props();

  let lastMousePos = $state<{ x: number; y: number }>({ x: 0, y: 0 });
  let currentIndex = $state<number | undefined>();

  const contentImages = $derived(items.map((item) => {
    const image = item.metadata.thumbnailImg;

    return image;
  }));

  const onItemEnter: Action<HTMLElement, number> = (node, index) => {
    gsap.fromTo(node, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      stagger: 0.2,
      scrollTrigger: {
        trigger: node,
        start: "top bottom-=200px",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    const imageUrl = contentImages[index];

    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
    };

    return {
      destroy() {},
    };
  };

  function handleMouseMove(e: MouseEvent) {
    const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
    const speed = Math.sqrt((mousePos.x - lastMousePos.x) ** 2);

    const maxY = window.scrollY + window.innerHeight - 350;
    const maxX = window.innerWidth - 250;

    gsap.to(".hover-reveal", {
      x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
      y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
      rotation: speed * (mousePos.x > lastMousePos.x ? 1 : -1),
      ease: "back.out(2)",
      duration: 1.3,
    });

    gsap.to("hover-reveal", {
      opacity: currentIndex === undefined ? 0 : 1,
      visibility: "visible",
      ease: "power3.out",
      duration: 0.6,
    });

    lastMousePos = mousePos;
  };

  function onMouseEnter(index: number) {
    currentIndex = index;
  }

  function onMouseLeave() {
    currentIndex = undefined;
  }
</script>

<svelte:window onmousemove={handleMouseMove} />

<ul onmouseleave={onMouseLeave} class="grid border-b border-b-slate-100">
  {#each items as post, index}
    <li class="content-list-item opacity-0"
        onmouseenter={() => onMouseEnter(index)}
        use:onItemEnter={index}>
      <a
        href={localizeHref(`/blog/${post.slug}`)}
        class="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
      >
        <div class="flex flex-col">
          <span class="text-3xl font-bold">{post.metadata.title}</span>
          <div class="flex gap-3 text-orange-400">
            {#each post.metadata.tags as tag}
              <span class="text-lg font-bold">{tag}</span>
            {/each}
          </div>
        </div>
        <span class="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
          {m["blog_projects.blog.read_more"]()}
          <ArrowUpRightIcon />
        </span>
      </a>
    </li>
  {/each}
</ul>

<!-- Hover Element -->
<div
  class="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-100 transition-[background] duration-300"
  style={`
    ${currentIndex === undefined ? "" : `background-image: url(${contentImages[currentIndex]});`}
    width: 220; 
    height: 320; 
    background-size: cover; 
    background-position: center; 
    filter: brightness(0.9);
  `}
>
</div>
