<script lang="ts">
  import { Bounded, Heading } from "$components";
  import { experiencesList } from "$lib/constants";
  import { m } from "$lib/paraglide/messages";
</script>

<Bounded id="experiences">
  <Heading tag="h2" size="lg">
    {m["about.experiences.heading"]()}
  </Heading>

  {#each experiencesList as { title, time, institution, description }}
    <div class="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
      <Heading tag="h3" size="sm">
        {title}
      </Heading>

      <p class="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
        <span>{time}</span>
        <span class="text-3xl font-extralight">/</span>
        <span>{institution}</span>
      </p>

      <div class="prose prose-lg prose-invert mt-4">
        <p class="text-[16px]">{description}</p>
      </div>
    </div>
  {/each}
</Bounded>
