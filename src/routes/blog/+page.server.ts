import type { MetadataAndSlug, Post } from "$lib/types";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const files = import.meta.glob<Post>("../../contents/posts/*.md", { eager: true });

  const posts: MetadataAndSlug[] = Object.entries(files).map(
    ([path, module]) => {
      const slug = path.split("/").pop()?.split(".").shift() ?? "fallback-slug";

      return {
        slug,
        metadata: module.metadata,
      };
    },
  );

  const sorted = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }

    return 1;
  });

  return {
    posts: sorted,
  };
};
