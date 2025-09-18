<script lang="ts">
  import { Avatar, Bounded, Button, Heading, Introduction } from "$components";
  import Noah from "$lib/assets/noah.jpg?enhanced";
  import { ctaLink } from "$lib/constants";
  import { m } from "$lib/paraglide/messages";
  import { localizeHref } from "$lib/paraglide/runtime";
</script>

<Bounded id="biography">
  <div class="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
    <Heading size="xl" class="col-start-1">
      {m["about.title"]()}
    </Heading>

    <div class="col-start-1 prose prose-invert prose-slate prose-xl">
      <Introduction />
    </div>
    <Button label={m["about.contact_button"]()} url={localizeHref(ctaLink.url)} />

    <Avatar imageUrl={Noah} class="row-start-1 max-w-sm md:col-start-2 md:row-end-3" />
  </div>
</Bounded>
