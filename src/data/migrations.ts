export interface Migration {
  from: string;
  to: string;
  note: string;
}

export const migrations: Migration[] = [
  { from: "PHP", to: "Node.js", note: "legacy → modern runtime" },
  { from: "Laravel", to: "NestJS", note: "monolith → modular API" },
  { from: "Vue", to: "React", note: "or React → Vue, either way" },
  {
    from: "jQuery / WordPress",
    to: "Vue / Quasar",
    note: "spaghetti → components"
  },
  { from: "MySQL", to: "Postgres", note: "with zero-data-loss plan" },
  { from: "VPS chaos", to: "Docker + CI", note: "reproducible deploys" }
];

export const scratchBuilds: string[] = [
  "Landing pages & corporate sites",
  "REST / GraphQL APIs",
  "Admin dashboards & internal tools",
  "E-commerce + payment integrations"
];
