<template>
  <div class="term-card q-pa-md term-card__body full-height">
    <div class="term-card__dots" aria-hidden="true">
      <span style="background: #ff5f56"></span>
      <span style="background: #ffb454"></span>
      <span style="background: #33ff99"></span>
    </div>
    <div class="row items-center no-wrap q-gutter-sm">
      <q-icon :name="service.icon" size="26px" class="text-term-green" />
      <div class="text-subtitle1 font-mono text-weight-bold">{{
        service.title
      }}</div>
    </div>
    <p class="q-mt-sm text-body2 text-term-muted">{{ service.blurb }}</p>
    <div class="row items-center justify-between q-mt-md">
      <q-badge color="dark" text-color="green" class="font-mono"
        >./{{ service.tag }}</q-badge
      >
      <span class="font-mono text-caption text-term-amber">{{
        service.eta
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Service } from "@/data/services";

defineProps<{ service: Service }>();
</script>
