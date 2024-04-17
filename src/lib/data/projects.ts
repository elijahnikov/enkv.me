export type ProjectsType = {
  id: number;
  title: string;
  description: string;
  verbose_description: string;
  header_image: string;
  wip?: boolean;
  active?: boolean;
  github_url: string;
  url: string;
  images?: Array<{
    id: number;
    src: string;
    title: string;
    label: string;
  }>;
  stack: Array<string>;
};

export const projects: ProjectsType[] = [
  {
    id: 1,
    title: "Gridl",
    active: true,
    description: "Your very own social moodboard in one link in bio.",
    verbose_description:
      "Gridl is a personalised social moodboard platform, all conveniently accessible through a single link in your bio. With Gridl, you can curate and showcase your favorite content, inspirations, and interests in a visually captivating way. Create moodboards that reflect your unique style, passions, and personality, and share them effortlessly with your followers, friends, and colleagues. Whether you're an artist, designer, influencer, or simply someone who loves to express themselves creatively, Gridl empowers you to craft a stunning online presence that truly represents you.",
    header_image:
      "https://utfs.io/f/6916913d-e576-41cd-aea0-f1cbecbdc38f-f9xt5f.png",
    github_url: "https://github.com/elijahnikov/gridl",
    url: "https://gridl-gold.vercel.app",
    wip: true,
    images: [
      {
        id: 1,
        src: "https://utfs.io/f/85d66cb9-d8ea-431f-9264-40747de5c360-kgv9bp.png",
        title: "Moodboard",
        label:
          "Main moodboard that is shown to users who navigate to a user's gridl link.",
      },
      {
        id: 2,
        src: "https://utfs.io/f/33e938a8-2d5c-4fa5-adaa-f9b440f79a6a-jr5rse.png",
        title: "Links",
        label:
          "Links page showing all links with a powerful filtering system and link tracking for each link.",
      },
      {
        id: 3,
        src: "https://utfs.io/f/849aebb4-9be5-4bfe-9ea8-43adc3d1d0ed-nhw8c4.png",
        title: "Editor",
        label:
          "Editor for gridl moodboards; change background, create links, reorder and resize links.",
      },
      {
        id: 4,
        src: "https://utfs.io/f/8bb328f6-5afe-4758-90a8-ab1c7502aac0-537b8h.png",
        title: "Analytics",
        label:
          "Analytics for gridl moodboards, showing clicks over time and where said links occurred.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Upstash",
      "tRPC",
      "Tailwind",
    ],
  },
  {
    id: 2,
    title: "Crumble",
    description: "A social media network for film lovers.",
    verbose_description: `Crumble, a social network designed for movie enthusiasts, inspired by the popular platform Letterboxd. Discover a vast collection of films, engage in lively discussions, and share your interest in movies and TV with like-minded individuals.
        Explore diverse genres, rate and review movies, and curate personalised watchlists to keep track of your favorites. Users can connect with a passionate community, exchange recommendations, and stay updated on the latest industry news and releases.`,
    github_url: "https://github.com/elijahnikov/crumble",
    header_image:
      "https://utfs.io/f/519766d9-1c87-4f05-ac64-29365bf0f4e5-aepobw.png",
    url: "https://crumble-sigma.vercel.app",
    wip: true,
    images: [
      {
        id: 1,
        src: "https://utfs.io/f/fd2ba7dd-69bf-4daf-9303-dd850aae7b61-p71pcg.png",
        title: "Profile",
        label:
          "User's profile page, showing off their stats and a brief overview of their profile.",
      },
      {
        id: 2,
        src: "https://utfs.io/f/7a989102-8f59-4cd8-be5a-e7af0f26ec49-clm9z7.png",
        title: "Movie",
        label: `View movie stats. Movie page for "Dune - Part Two", showing information, cast and popular reviews.`,
      },
      {
        id: 3,
        src: "https://utfs.io/f/461eb725-23e4-46bb-b318-c716b2c5c4f2-clifvt.png",
        title: "Lists",
        label:
          "Create lists with your favourite movies. Lists page where users can discover lists created by other users.",
      },
      {
        id: 4,
        src: "https://utfs.io/f/03ec1087-d0ae-4aee-81f0-548db32a7629-8tgoa8.png",
        title: "Create reviews",
        label:
          "Create reviews for movies you have watched, share your thoughts, rate what you've watched and keep a log.",
      },
      {
        id: 5,
        src: "https://utfs.io/f/490ddfe6-4b80-41ba-a1de-9549d0e35023-s80cxb.png",
        title: "Review",
        label: "View reviews for movies, leave your thoughts and drop a like.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Planetscale",
      "tRPC",
      "Vercel",
      "Upstash",
      "PostgreSQL",
      "Tailwind",
    ],
  },
  {
    id: 3,
    title: "Gradiently",
    description:
      "A minimal, lightweight NPM package colour picker to generate beautiful colours and gradients.",
    verbose_description:
      "A minimal, lightweight NPM package built with React and TypeScript to allow users to add a gradient/color picker into their React apps.",
    github_url: "https://github.com/elijahnikov/gradiently",
    header_image:
      "https://utfs.io/f/247bed5e-4e6d-43e0-b4d6-d9f267b02d80-qr6rvh.png",
    url: "https://gradiently-demo.vercel.app/",
    active: true,
    wip: false,
    images: [
      {
        id: 1,
        src: "https://utfs.io/f/5f1a8fd2-c5fb-4d4b-8426-c1557266bd81-blrrvx.png",
        title: "Demo page",
        label:
          "A demo website showing off the functionality and capabilties of the gradient picker. Copy the CSS string or download an image of the color you have generated.",
      },
      {
        id: 2,
        src: "https://utfs.io/f/1b4ee063-eebf-4257-bbe4-af7f44e56fe3-dp6i1f.png",
        title: "Example of usage",
        label:
          "An example of me using the Gradiently NPM package in the Gridl app to allow users to set their moodboard background color/gradient.",
      },
    ],
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    title: "UI",
    description:
      "A lightweight UI library for React built with TypeScript and Radix primitives.",
    header_image:
      "https://utfs.io/f/7af57e03-968f-418b-98e9-46f3281a7651-azvhvw.png",
    github_url: "https://github.com/elijahnikov/ui",
    stack: ["React", "TypeScript", "Tailwind"],
    url: "https://ui-sepia.vercel.app/button",
    verbose_description: "",
    active: true,
    images: [
      {
        id: 1,
        src: "https://utfs.io/f/5f321b43-bdb1-4993-a771-2d72d7837549-80sycp.png",
        title: "Tab",
        label: "Page showing the implementation of the Tab component.",
      },
      {
        id: 2,
        src: "https://utfs.io/f/0f1c16a7-4800-4675-899e-96fc9ca6ab79-whood1.png",
        title: "Select",
        label: "Page showing the implementation of the Select component.",
      },
    ],
    wip: true,
  },
];
