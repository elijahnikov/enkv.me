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
    Vercel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    Upstash: "https://cdn.svgporn.com/logos/upstash-icon.svg",
    Supabase: "https://cdn.svgporn.com/logos/supabase-icon.svg",
    Planetscale: "https://cdn.svgporn.com/logos/planetscale.svg",
  },
  "tools and frameworks": {
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    // "Next.js": "https://cdn.svgporn.com/logos/nextjs-icon.svg",
    // "Node.js": "https://cdn.svgporn.com/logos/nodejs-icon.svg",
    GraphQL: "https://cdn.svgporn.com/logos/graphql.svg",
    Prisma: "https://cdn.svgporn.com/logos/prisma.svg",
    // Flask: "https://cdn.svgporn.com/logos/flask.svg",
    tRPC: "https://cdn.svgporn.com/logos/trpc.svg",
    // "React Query": "https://cdn.svgporn.com/logos/react-query-icon.svg",
    Tailwind: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
    "D3.js": "https://cdn.svgporn.com/logos/d3.svg",
    Apollo: "https://cdn.svgporn.com/logos/apollostack.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  testing: {
    // Cypress: "https://cdn.svgporn.com/logos/cypress-icon.svg",
    Jest: "https://cdn.svgporn.com/logos/jest.svg",
    Storybook: "https://cdn.svgporn.com/logos/storybook-icon.svg",
  },
};

export const flattenedStacks = Object.entries(stacks).reduce(
  (acc: Record<string, string>, [category, childObject]) => {
    Object.entries(childObject).forEach(([key, value]) => {
      acc[key] = value;
    });
    return acc;
  },
  {},
);
