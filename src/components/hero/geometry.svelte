<script lang="ts">
  import { T as Threlte } from "@threlte/core";
  import { createTransition, Float } from "@threlte/extras";
  import gsap from "gsap";
  import { elasticOut } from "svelte/easing";
  import * as THREE from "three";

  type GeometryTypes = {
    position?: [number, number, number];
    geometry?: THREE.BufferGeometry;
    rate?: number;
  };

  const { position = [0, 0, 0], geometry = new THREE.IcosahedronGeometry(3), rate = 0.5 }: GeometryTypes = $props();

  let visible = $state<boolean>(false);
  let reducedMotionRate = $state<number>(0);

  const soundEffects = [
    new Audio(`/sounds/hit1.ogg`),
    new Audio(`/sounds/hit2.ogg`),
    new Audio(`/sounds/hit3.ogg`),
  ];

  const materialParams = [
    { color: 0x2ECC71, roughness: 0 },
    { color: 0xF1C40F, roughness: 0.4 },
    { color: 0xE74C3C, roughness: 0.1 },
    { color: 0x8E44AD, roughness: 0.1 },
    { color: 0x1ABC9C, roughness: 0.1 },
    { color: 0x2980B9, roughness: 0, metalness: 0.5 },
    { color: 0x2C3E50, roughness: 0.1, metalness: 0.5 },
  ];

  function getRandomMaterial() {
    const randomInt = gsap.utils.random(1, 10, 1);
    if (randomInt === 1)
      return new THREE.MeshNormalMaterial();
    return new THREE.MeshStandardMaterial(gsap.utils.random(materialParams));
  }

  function handleClick(event: MouseEvent) {
    gsap.utils.random(soundEffects).play();

    if (`object` in event && event.object instanceof THREE.Mesh) {
      gsap.to(event.object.rotation, {
        x: `+=${gsap.utils.random(0, 3)}`,
        y: `+=${gsap.utils.random(0, 3)}`,
        z: `+=${gsap.utils.random(0, 3)}`,
        duration: 1.3,
        ease: `elastic.out(1,0.3)`,
        yoyo: true,
      });

      event.object.material = getRandomMaterial();
    }
  }

  const bounce = createTransition((ref) => {
    return {
      tick(t) {
        if (t > 0)
          visible = true;
        // @ts-expect-error
        ref.scale.set(t, t, t);
      },
      easing: elasticOut,
      duration: gsap.utils.random(800, 1200),
      delay: gsap.utils.random(0, 500),
    };
  });

  $effect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reducedMotionRate = prefersReducedMotion ? 0 : 1;
  });

  const compoundRate = $derived(rate * reducedMotionRate);
</script>

<Threlte.Group position={position.map(p => p * 2) as [number, number, number]}>
  <Float speed={5 * compoundRate}
         rotationSpeed={5 * compoundRate}
         rotationIntensity={5 * compoundRate}
         floatIntensity={5 * compoundRate}>
    <Threlte.Mesh {geometry}
                  {visible}
                  in={bounce}
                  material={getRandomMaterial()}
                  interactive
                  onclick={handleClick}></Threlte.Mesh>
  </Float>
</Threlte.Group>
