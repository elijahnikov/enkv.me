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
  },
];
