<script lang="ts">
  import {
    Biography,
    InfoTemplate,
    TechList,
  } from "$components";
  import { educationsList, experiencesList } from "$lib/constants";
  import { m } from "$lib/paraglide/messages";
</script>

<Biography />
<TechList />
<InfoTemplate id="experience"
              heading={m["about.experiences.heading"]()}
              list={experiencesList} />
<InfoTemplate id="education"
              heading={m["about.educations.heading"]()}
              list={educationsList} />
