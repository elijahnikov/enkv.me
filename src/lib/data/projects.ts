export type ProjectsType = {
  id: number;
  title: string;
  description: string;
  verbose_description: string;
  header_image: string;
  wip?: boolean;
  github_url: string;
  url: string;
  images?: Array<{
    id: number;
    src: string;
    title: string;
    label: string;
  }>;
};

export const projects: ProjectsType[] = [
  {
    id: 1,
    title: "Gridl",
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
  },
];
