<template>
  <q-page class="q-px-md q-py-xl" style="max-width: 900px; margin: 0 auto">
    <div class="font-mono text-term-green">## contact --all-channels</div>
    <h1 class="font-mono text-h4 text-weight-bold q-mt-xs"
      >Talk to a human, get a fix</h1
    >
    <p class="text-term-muted"
      >Fastest: email with your URL + symptom/screenshot. Also on WhatsApp,
      Viber, LinkedIn and GitHub.</p
    >

    <div class="row q-col-gutter-md q-mt-md">
      <div v-for="c in contacts" :key="c.label" class="col-12 col-sm-6">
        <q-card dark bordered class="term-card">
          <q-card-section class="row items-center q-gutter-sm">
            <q-icon :name="c.icon" size="24px" class="text-term-green" />
            <div>
              <div class="font-mono text-weight-bold">{{ c.label }}</div>
              <div class="text-caption text-term-muted font-mono">{{
                c.value
              }}</div>
            </div>
            <q-space />
            <q-btn
              v-if="c.copyable"
              flat
              dense
              icon="content_copy"
              class="font-mono"
              aria-label="Copy email"
              @click="copy(c.value)"
            />
            <q-btn
              flat
              dense
              no-caps
              color="green"
              class="font-mono"
              :href="c.href"
              :target="c.external ? '_blank' : undefined"
              :rel="c.external ? 'noopener' : undefined"
              label="Open →"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-card dark bordered class="term-surface q-mt-lg q-pa-lg">
      <div class="font-mono text-term-amber prompt"
        >mail template — copy/paste this</div
      >
      <pre class="font-mono text-body2 q-mt-sm" style="white-space: pre-wrap">
to: {{ email }}
subject: [fix-request] &lt;your-site-url&gt; — &lt;one-line symptom&gt;

1. URL:
2. What broke / when:
3. Hosting + stack (if known):
4. Deadline:</pre>
      <div class="row q-gutter-sm q-mt-md">
        <q-btn
          color="green"
          text-color="black"
          unelevated
          no-caps
          :href="`mailto:${email}?subject=${encodeURIComponent('[fix-request] ')}`"
          label="Compose email"
          class="font-mono text-weight-bold"
        />
        <q-btn
          outline
          color="grey-5"
          no-caps
          :href="portfolioUrl"
          target="_blank"
          rel="noopener"
          label="Portfolio ↗"
          class="font-mono"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { copyToClipboard, useMeta, useQuasar } from "quasar";
import { contacts, email, portfolioUrl } from "@/data/contacts";
import {
  CONTACT_DESCRIPTION,
  CONTACT_TITLE,
  OG_IMAGE,
  SITE_URL,
  contactPageJsonLd
} from "@/composables/useSeo";

useMeta({
  title: CONTACT_TITLE,
  meta: {
    description: { name: "description", content: CONTACT_DESCRIPTION },
    ogTitle: { property: "og:title", content: CONTACT_TITLE },
    ogDescription: {
      property: "og:description",
      content: CONTACT_DESCRIPTION
    },
    ogUrl: { property: "og:url", content: `${SITE_URL}/contact` },
    ogImage: { property: "og:image", content: OG_IMAGE }
  },
  link: {
    canonical: { rel: "canonical", href: `${SITE_URL}/contact` }
  },
  script: {
    ldJson: {
      type: "application/ld+json",
      innerHTML: JSON.stringify(contactPageJsonLd())
    }
  }
});

const $q = useQuasar();

async function copy(text: string) {
  try {
    await copyToClipboard(text);
    $q.notify({
      type: "positive",
      message: "Copied: " + text,
      position: "bottom"
    });
  } catch {
    $q.notify({ type: "negative", message: "Copy failed", position: "bottom" });
  }
}
</script>
