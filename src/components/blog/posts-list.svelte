<script lang="ts">
  import type { MetadataAndSlug } from "$lib/types";

  import { ArrowUpRightIcon } from "@lucide/svelte";
  import { m } from "$lib/paraglide/messages";
  import { localizeHref } from "$lib/paraglide/runtime";

  type CardsProps = {
    posts: MetadataAndSlug[];
  };

  const { posts }: CardsProps = $props();
</script>

<ul class="grid border-b border-b-slate-100">
  {#each posts as post}
    <li class="content-list-item">
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
