import type { Post } from "$lib/types";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;
  const post: Post = await import(`../../../contents/posts/${slug}.md`);

  return {
    metadata: post.metadata,
    post: post.default,
  };
};
