<template>
  <q-layout view="hHh lpR fff" class="bg-dark text-white">
    <q-header class="bg-dark" bordered style="border-color: #26313f">
      <q-toolbar class="q-px-md">
        <q-toolbar-title class="font-mono text-weight-bold" shrink>
          <router-link to="/" class="text-white" style="text-decoration: none">
            <span class="text-term-green">~/</span>freelance-guy
            <span class="text-term-amber">▊</span>
          </router-link>
        </q-toolbar-title>
        <q-space />
        <!-- Desktop: right aligned -->
        <div class="row q-gutter-sm gt-sm">
          <q-btn
            flat
            dense
            no-caps
            to="/"
            label="Home"
            class="font-mono"
            exact
          />
          <q-btn
            flat
            dense
            no-caps
            :href="portfolioUrl"
            target="_blank"
            rel="noopener"
            label="About Me ↗"
            class="font-mono"
          />
          <q-btn
            flat
            dense
            no-caps
            to="/contact"
            label="Contact"
            class="font-mono"
            color="green"
          />
        </div>
        <!-- Mobile menu -->
        <q-btn flat dense round icon="menu" class="lt-md" aria-label="Menu">
          <q-menu dark>
            <q-list style="min-width: 180px">
              <q-item clickable v-ripple to="/" exact v-close-popup>
                <q-item-section class="font-mono">Home</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                :href="portfolioUrl"
                target="_blank"
                v-close-popup
              >
                <q-item-section class="font-mono">About Me ↗</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/contact" v-close-popup>
                <q-item-section class="font-mono">Contact</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      class="bg-dark text-term-muted"
      bordered
      style="border-color: #26313f"
    >
      <div
        class="row items-center justify-between q-px-md q-py-sm font-mono text-caption"
      >
        <span
          ><span class="status-dot bg-green q-mr-xs"></span>available for
          fixes</span
        >
        <span
          >© {{ year }} freelance-guy ·
          <a
            :href="portfolioUrl"
            target="_blank"
            rel="noopener"
            class="text-term-green"
            >zgualberto.github.io</a
          ></span
        >
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { portfolioUrl } from "@/data/contacts";

const year = computed(() => new Date().getFullYear());
</script>
