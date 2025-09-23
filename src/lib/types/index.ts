import type { SvelteComponent } from "svelte";

export type Post = {
  metadata: {
    title: string;
    thumbnailImg: string;
    publishedAt: string;
    tags: string[];
    summary: string;
  };
  default: SvelteComponent;
};

export type MetadataAndSlug = {
  slug: string;
  metadata: Post["metadata"];
};
