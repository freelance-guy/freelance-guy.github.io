<template>
  <q-page>
    <!-- HERO -->
    <div class="relative-position" style="min-height: 92vh">
      <SvgGrid />
      <q-parallax src="" :height="560" :speed="0.6">
        <template #content>
          <div
            class="column items-center text-center q-px-md"
            style="max-width: 860px"
          >
            <q-badge
              color="dark"
              text-color="green"
              class="font-mono q-mb-md"
              style="border: 1px solid #26313f"
            >
              <span class="status-dot bg-green q-mr-sm"></span> $ uptime: 99.9%
              — open for work
            </q-badge>
            <h1
              class="font-mono text-weight-bolder q-ma-none"
              :class="$q.screen.lt.sm ? 'text-h4' : 'text-h2'"
            >
              Ship it. Fix it.<br /><span class="text-term-green"
                >Keep it running.</span
              >
            </h1>
            <p
              class="text-term-muted text-body1 q-mt-md"
              style="max-width: 640px"
            >
              Triage, maintenance and upgrades for websites and servers — bug
              fixes, performance boosts, SSL renewals, OS patches and database
              care. Plus scratch builds and stack migrations.
            </p>
            <div class="row q-gutter-md q-mt-md justify-center">
              <q-btn
                color="green"
                text-color="black"
                unelevated
                no-caps
                to="/contact"
                label="Get a fix →"
                class="font-mono text-weight-bold"
              />
              <q-btn
                outline
                color="grey-5"
                no-caps
                :href="portfolioUrl"
                target="_blank"
                rel="noopener"
                label="About me ↗"
                class="font-mono"
              />
            </div>
            <div class="font-mono text-caption text-term-muted q-mt-lg prompt"
              >cat ./services --urgent-only</div
            >
          </div>
        </template>
      </q-parallax>
    </div>

    <!-- SERVICES -->
    <section class="q-px-md q-pb-xl" style="max-width: 1100px; margin: 0 auto">
      <div class="font-mono text-term-green q-mb-xs">## services/</div>
      <h2 class="font-mono text-h4 text-weight-bold q-mt-none"
        >What I patch, tune &amp; keep alive</h2
      >
      <div class="row q-col-gutter-md q-mt-sm">
        <div
          v-for="s in services"
          :key="s.slug"
          class="col-12 col-sm-6 col-md-3"
        >
          <ServiceCard :service="s" />
        </div>
      </div>
    </section>

    <!-- BUILD + MIGRATE -->
    <section class="q-px-md q-pb-xl" style="max-width: 1100px; margin: 0 auto">
      <div class="font-mono text-term-green q-mb-xs">## build-migrate/</div>
      <h2 class="font-mono text-h4 text-weight-bold q-mt-none"
        >Not just fixes — I build &amp; migrate</h2
      >
      <p class="text-term-muted" style="max-width: 720px">
        Need something from scratch? Or stuck on a legacy stack? I build new
        projects end-to-end and migrate language → language, framework →
        framework, with staging, tests and rollback plan.
      </p>
      <div class="row q-col-gutter-md q-mt-sm">
        <div class="col-12 col-md-6">
          <div class="term-card q-pa-md term-card__body full-height">
            <div class="term-card__dots" aria-hidden="true">
              <span style="background: #ff5f56"></span>
              <span style="background: #ffb454"></span>
              <span style="background: #33ff99"></span>
            </div>
            <div class="row items-center no-wrap q-gutter-sm">
              <q-icon
                name="rocket_launch"
                size="26px"
                class="text-term-green"
              />
              <div class="text-subtitle1 font-mono text-weight-bold">
                Project from scratch
              </div>
            </div>
            <ul class="q-mt-sm q-pl-md text-body2 text-term-muted">
              <li v-for="b in scratchBuilds" :key="b">{{ b }}</li>
            </ul>
            <div class="font-mono text-caption text-term-amber q-mt-md">
              $ create-app --tested --deployable
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="term-card q-pa-md term-card__body full-height">
            <div class="term-card__dots" aria-hidden="true">
              <span style="background: #ff5f56"></span>
              <span style="background: #ffb454"></span>
              <span style="background: #33ff99"></span>
            </div>
            <div class="row items-center no-wrap q-gutter-sm">
              <q-icon
                name="compare_arrows"
                size="26px"
                class="text-term-green"
              />
              <div class="text-subtitle1 font-mono text-weight-bold">
                Stack migration
              </div>
            </div>
            <div class="column q-gutter-xs q-mt-sm">
              <div
                v-for="m in migrations"
                :key="m.from + m.to"
                class="row items-center q-gutter-sm font-mono text-body2"
              >
                <q-badge color="grey-9" text-color="grey-4">{{
                  m.from
                }}</q-badge>
                <span class="text-term-green">→</span>
                <q-badge color="green" text-color="black">{{ m.to }}</q-badge>
                <span class="text-caption text-term-muted">{{ m.note }}</span>
              </div>
            </div>
            <div class="font-mono text-caption text-term-amber q-mt-md">
              $ migrate --staged --with-rollback
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS parallax band -->
    <div class="relative-position q-my-xl">
      <q-parallax src="" :height="340" :speed="1.2">
        <template #media>
          <svg
            class="svg-grid-bg"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="term-grid-2"
                width="56"
                height="56"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 56 0 L 0 0 0 56"
                  fill="none"
                  stroke="#26313f"
                  stroke-width="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#121a24" />
            <rect width="100%" height="100%" fill="url(#term-grid-2)" />
            <g
              font-family="monospace"
              font-size="22"
              fill="#33ff99"
              opacity="0.5"
            >
              <text x="40" y="120">
                diagnose &gt; fix &gt; harden &gt; monitor
              </text>
              <text x="40" y="200" fill="#ffb454">
                --no-downtime --with-backup
              </text>
            </g>
          </svg>
        </template>
        <template #content>
          <div
            class="term-surface q-pa-lg font-mono text-center"
            style="max-width: 720px; border-radius: 10px"
          >
            <div class="text-term-green">how it works</div>
            <div class="text-h6 q-mt-sm"
              >1 diagnose → 2 fix in staging → 3 ship + verify → 4 monitor</div
            >
            <div class="text-caption text-term-muted q-mt-sm"
              >Every job ships with before/after notes and rollback plan.</div
            >
          </div>
        </template>
      </q-parallax>
    </div>

    <!-- CTA -->
    <section class="q-px-md q-pb-xl text-center">
      <div
        class="term-surface q-pa-xl font-mono"
        style="max-width: 720px; margin: 0 auto; border-radius: 12px"
      >
        <div class="text-h5 text-weight-bold"
          >Site broken? Cert expired? Deploy stuck?</div
        >
        <p class="text-term-muted"
          >Send the URL + symptom. I reply with fix plan and ETA.</p
        >
        <q-btn
          color="green"
          text-color="black"
          unelevated
          no-caps
          to="/contact"
          label="$ contact --now"
          class="font-mono text-weight-bold q-mt-sm"
        />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { useMeta } from "quasar";
import ServiceCard from "@/components/ServiceCard.vue";
import SvgGrid from "@/components/SvgGrid.vue";
import { services } from "@/data/services";
import { migrations, scratchBuilds } from "@/data/migrations";
import { portfolioUrl } from "@/data/contacts";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  OG_IMAGE,
  SITE_URL,
  professionalServiceJsonLd
} from "@/composables/useSeo";

useMeta({
  title: HOME_TITLE,
  meta: {
    description: { name: "description", content: HOME_DESCRIPTION },
    ogTitle: { property: "og:title", content: HOME_TITLE },
    ogDescription: { property: "og:description", content: HOME_DESCRIPTION },
    ogUrl: { property: "og:url", content: `${SITE_URL}/` },
    ogImage: { property: "og:image", content: OG_IMAGE },
    ogType: { property: "og:type", content: "website" }
  },
  link: {
    canonical: { rel: "canonical", href: `${SITE_URL}/` }
  },
  script: {
    ldJson: {
      type: "application/ld+json",
      innerHTML: JSON.stringify(professionalServiceJsonLd())
    }
  }
});

// SEO head is handled via useMeta above.
</script>
