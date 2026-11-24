export interface Service {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  eta: string;
  tag: string;
}

export const services: Service[] = [
  {
    slug: "bug-fixes",
    title: "Quick Bug Fixes",
    icon: "bug_report",
    blurb:
      "Broken layout, JS error, 500 on checkout? Diagnose and patch fast with a no-breakage check.",
    eta: "~24–48h",
    tag: "triage"
  },
  {
    slug: "maintenance",
    title: "Website Maintenance",
    icon: "build_circle",
    blurb:
      "Ongoing care: updates, backups, uptime checks and small tweaks so you never think about it.",
    eta: "monthly",
    tag: "care-plan"
  },
  {
    slug: "version-upgrade",
    title: "Version Upgrades",
    icon: "upgrade",
    blurb:
      "PHP, Node, Vue, Quasar, Laravel, CMS and plugin upgrades — tested in staging before prod.",
    eta: "~2–5 days",
    tag: "upgrade"
  },
  {
    slug: "optimization",
    title: "Code Optimization",
    icon: "tune",
    blurb:
      "Refactor hot paths, cut dead code, fix N+1 queries and clean up tech debt that slows you down.",
    eta: "per audit",
    tag: "refactor"
  },
  {
    slug: "performance",
    title: "Performance Boost",
    icon: "bolt",
    blurb:
      "Core Web Vitals, image/CDN/caching strategy, lazy-load and bundle diet for faster loads.",
    eta: "~3–7 days",
    tag: "web-vitals"
  },
  {
    slug: "ssl",
    title: "SSL Certificate Renewal",
    icon: "lock",
    blurb:
      "Expired cert warnings? Renew, install, auto-renew with cron and fix mixed-content issues.",
    eta: "same-day",
    tag: "tls"
  },
  {
    slug: "os-update",
    title: "Server OS Updates",
    icon: "dns",
    blurb:
      "Linux patching, reboot planning, firewall and SSH hardening with rollback notes.",
    eta: "scheduled",
    tag: "sysadmin"
  },
  {
    slug: "database",
    title: "Database Maintenance",
    icon: "storage",
    blurb:
      "Backups, indexing, slow-query tuning, migrations and integrity checks for MySQL/Postgres.",
    eta: "per audit",
    tag: "db"
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    icon: "auto_awesome",
    blurb:
      "Scoped AI in your web or mobile app: chosen tools, read-only defaults, human approval, no training on your data. Use your provider or Ollama/LM Studio on your own infra.",
    eta: "per scope",
    tag: "ai"
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps & Store Launch",
    icon: "smartphone",
    blurb:
      "React Native apps for iOS and Android, through Play Store and App Store release — with updates, monitoring and rollback.",
    eta: "~4–8 weeks",
    tag: "mobile"
  }
];
