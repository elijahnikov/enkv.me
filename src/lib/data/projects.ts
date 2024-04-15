export type ProjectsType = {
  id: number;
  title: string;
  description: string;
  header_image: string;
  wip?: boolean;
  github_url: string;
  url: string;
};

export const projects: ProjectsType[] = [
  {
    id: 1,
    title: "Gridl",
    description: "Your very own social moodboard in one link in bio.",
    header_image:
      "https://utfs.io/f/6916913d-e576-41cd-aea0-f1cbecbdc38f-f9xt5f.png",
    github_url: "https://github.com/elijahnikov/gridl",
    url: "https://gridl-gold.vercel.app",
  },
];
