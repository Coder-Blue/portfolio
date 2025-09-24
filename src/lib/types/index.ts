import type { Component } from "svelte";

export type Post = {
  metadata: {
    title: string;
    thumbnailImg: string;
    publishedAt: string;
    tags: string[];
    summary: string;
  };
  default: Component;
};

export type MetadataAndSlug = {
  slug: string;
  metadata: Post["metadata"];
};
