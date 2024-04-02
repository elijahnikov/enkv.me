const sections = [
  "languages",
  "tools and frameworks",
  "testing",
  "cloud",
] as const;
type SectionsIndex = (typeof sections)[number];

export type SectionsObjType = Record<string, string>;
type StacksType = Record<SectionsIndex, SectionsObjType>;

export const stacks: StacksType = {
  languages: {
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  cloud: {
    Vercel: "",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    Upstash: "",
    Supabase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    Planetscale: "",
  },
  "tools and frameworks": {
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    GraphQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    Prisma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    Flask: "",
    tRPC: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg",
    "React Query": "",
    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "D3.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-plain.svg",
    Apollo: "",
    "Express.js": "",
  },
  testing: {
    Cypress:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
    Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    Storybook:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg",
  },
};

export const flattenedStacks = Object.entries(stacks).reduce(
  (acc: Record<string, string>, [_, childObject]) => {
    Object.entries(childObject).forEach(([key, value]) => {
      acc[key] = value;
    });
    return acc;
  },
  {},
);
