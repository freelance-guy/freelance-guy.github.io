export const SITE_URL = "https://freelance-guy.github.io";
export const SITE_NAME = "Freelance Guy — Website Triage & Care";
export const OG_IMAGE = `${SITE_URL}/og-cover.svg`;

export const HOME_TITLE =
  "Freelance Guy — Bug Fixes, Maintenance, Builds & Migrations";
export const HOME_DESCRIPTION =
  "Quick website bug fixes, maintenance, version upgrades, performance boosts, SSL renewals, server OS updates, database care, scratch builds and stack migrations: PHP to Node, Laravel to NestJS, Vue to React.";

export const CONTACT_TITLE = "Contact — Get a Website Fix | Freelance Guy";
export const CONTACT_DESCRIPTION =
  "Contact for website fixes, maintenance and migrations. Email, WhatsApp, Viber, LinkedIn, GitHub. Send your URL + symptom for a fix plan and ETA.";

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Freelance Guy — Website Triage & Care",
    url: SITE_URL,
    description: HOME_DESCRIPTION,
    provider: {
      "@type": "Person",
      name: "Ziegfrid Gualberto",
      url: "https://zgualberto.github.io"
    },
    areaServed: "Worldwide",
    serviceType: [
      "Website bug fixes",
      "Website maintenance",
      "Version upgrades",
      "Performance optimization",
      "SSL certificate renewal",
      "Server OS updates",
      "Database maintenance",
      "Scratch builds",
      "Stack migration"
    ]
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: CONTACT_TITLE,
    url: `${SITE_URL}/contact`,
    description: CONTACT_DESCRIPTION
  };
}
