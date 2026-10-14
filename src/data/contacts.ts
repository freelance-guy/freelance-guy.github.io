export interface Contact {
  label: string;
  value: string;
  href: string;
  icon: string;
  external?: boolean;
  copyable?: boolean;
}

export const email = "ziegfrid.gualberto@gmail.com";

export const contacts: Contact[] = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: "mail",
    copyable: true
  },
  {
    label: "WhatsApp",
    value: "+63 917 652 3658",
    href: "https://wa.me/639176523658",
    icon: "fa-brands fa-whatsapp",
    external: true
  },
  {
    label: "Viber",
    value: "+63 917 652 3658",
    href: "viber://add?number=639176523658",
    icon: "fa-brands fa-viber"
  },
  {
    label: "LinkedIn",
    value: "ziegfrid-gualberto",
    href: "https://www.linkedin.com/in/ziegfrid-gualberto/",
    icon: "fa-brands fa-linkedin",
    external: true
  },
  {
    label: "GitHub",
    value: "zgualberto",
    href: "https://github.com/zgualberto",
    icon: "fa-brands fa-github",
    external: true
  },
  {
    label: "Portfolio",
    value: "zgualberto.github.io",
    href: "https://zgualberto.github.io",
    icon: "person",
    external: true
  }
];

export const portfolioUrl = "https://zgualberto.github.io";
