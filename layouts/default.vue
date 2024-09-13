<template>
  <slot />
  <div>{{ _("footer_copyright") }}</div>
</template>

<script lang="ts" setup>
import { _ } from "#pruvious/client";
</script>
