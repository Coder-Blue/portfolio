<script lang="ts">
  import { Bounded, Heading } from "$components";

  type ItemListProps = {
    title: string;
    time: string;
    institution: string;
    description: string;
  }[];

  type TemplateProps = {
    id: string;
    heading: string;
    list: ItemListProps;
  };

  const { id, heading, list }: TemplateProps = $props();
</script>

<Bounded {id}>
  <Heading tag="h2" size="lg">{heading}</Heading>

  {#each list as { title, time, institution, description }}
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
