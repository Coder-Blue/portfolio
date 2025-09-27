<script lang="ts">
  import { ChevronLeftIcon, ChevronRightIcon } from "@lucide/svelte";
  import * as Pagination from "$components/ui/pagination";
  import { m } from "$lib/paraglide/messages";

  type PaginationProps = {
    page: number;
    count: number;
    perPage: number;
  };

  let {
    page = $bindable<number>(),
    count,
    perPage,
  }: PaginationProps = $props();
</script>

<Pagination.Root bind:page
                 {count}
                 {perPage}
                 class="py-8">
  {#snippet children({ pages, currentPage })}
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.PrevButton class="text-slate-100 font-bold">
          <ChevronLeftIcon class="size-4" />
          <span class="hidden sm:block">
            {m["blog_projects.blog.pagination.previous"]()}
          </span>
        </Pagination.PrevButton>
      </Pagination.Item>
      {#each pages as page (page.key)}
        {#if page.type === "ellipsis"}
          <Pagination.Item>
            <Pagination.Ellipsis />
          </Pagination.Item>
        {:else}
          <Pagination.Item>
            <Pagination.Link {page}
                             isActive={currentPage === page.value}
                             class="font-extrabold text-slate-100 bg-slate-900">
              {page.value}
            </Pagination.Link>
          </Pagination.Item>
        {/if}
      {/each}
      <Pagination.Item>
        <Pagination.NextButton class="text-slate-100 font-bold">
          <span class="hidden sm:block">
            {m["blog_projects.blog.pagination.next"]()}
          </span>
          <ChevronRightIcon class="size-4" />
        </Pagination.NextButton>
      </Pagination.Item>
    </Pagination.Content>
  {/snippet}
</Pagination.Root>
