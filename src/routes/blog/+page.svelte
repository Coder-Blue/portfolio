<script lang="ts">
  import {
    Bounded,
    Heading,
    Pagination,
    PostsList,
  } from "$components";
  import { m } from "$lib/paraglide/messages";

  import type { PageServerData } from "./$types";

  const { data }: { data: PageServerData } = $props();

  const posts = data.posts;
  const count = posts.length;

  const perPage = $state<number>(5);
  let page = $state<number>(1);

  const items = $derived(
    posts.slice((page - 1) * perPage, (page - 1) * perPage + perPage),
  );
</script>

<Bounded>
  <Heading size="xl" class="mb-8">
    {m["blog_projects.blog.title"]()}
  </Heading>
  <div class="prose prose-xl prose-invert mb-10">
    {m["blog_projects.blog.description"]()}
  </div>
  <PostsList {items} />
  <Pagination bind:page
              {count}
              {perPage} />
</Bounded>
