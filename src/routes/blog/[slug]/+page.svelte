<script lang="ts">
  import { Bounded, Heading } from "$components";
  import { formatDate } from "$lib/utils";

  import type { PageData } from "./$types";

  import "./prism-material-dark.css";

  const { data }: { data: PageData } = $props();

  const { metadata, post: Post } = data;

  const formattedDate = formatDate(metadata.publishedAt);
</script>

<Bounded tag="article">
  <div class="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
    <header class="p-4">
      <div class="w-full sm:w-3/5 mb-6">
        <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src={metadata.thumbnailImg}
            alt={metadata.title}
            class="object-cover"
          />
        </div>
      </div>

      <div>
        <Heading tag="h1">{metadata.title}</Heading>
        <div class="flex gap-4 text-orange-400">
          {#each metadata.tags as tag}
            <span class="text-xl font-bold">
              {tag}
            </span>
          {/each}
        </div>
      </div>

      <p class="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
        {formattedDate}
      </p>
    </header>

    <div class="prose prose-lg prose-invert mt-12 w-full max-w-prose md:mt-20">
      <Post />
    </div>
  </div>
</Bounded>
