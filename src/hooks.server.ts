import type { Handle } from "@sveltejs/kit";

import { paraglideMiddleware } from "$lib/paraglide/server";

const paraglideHandle: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
    event.request = localizedRequest;
    return resolve(event, {
      transformPageChunk: ({ html }) => {
        return html.replace("%lang%", locale === "en" ? "en" : "vi");
      },
    });
  });

export const handle: Handle = paraglideHandle;
