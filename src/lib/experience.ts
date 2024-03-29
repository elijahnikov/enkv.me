export type ExperienceType = {
  company: string;
  roles: Array<{
    id: number;
    title: string;
    duration: string;
    pointers: Array<string>;
    stack: Array<string>;
  }>;
  location: string;
  website: string;
};

export const experience: Array<ExperienceType> = [
  {
    company: "Airfinity",
    website: "https://www.airfinity.com/",
    location: "London, UK",
    roles: [
      {
        id: 1,
        title: "Software Developer",
        duration: "July 2023 - Present",
        pointers: [
          `Led the transition from third-party software to an internally developed visualization solution, improving developer-friendliness, performance, and user experience, resulting in significant cost and time efficiencies.`,
          `Collaborated with product managers and analysts to enhance Airfinity's SaaS tool, delivering increased value to customers/clients.`,
          `Created reusable and efficient React UI components, improving UI/UX and application scalability and performance.`,
        ],
        stack: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "React Query",
          "Cypress",
          "Vercel",
          "AWS",
        ],
      },
    ],
  },
  {
    company: "QuantSpark",
    roles: [
      {
        id: 2,
        title: "Software Developer",
        duration: "April 2022 - July 2023",
        pointers: [
          `Developed front-end and back-end solutions for clients at a data science and analytics consultancy, improving client data comprehension and strategic value.`,
          `Led front-end development using React and JavaScript for major new features in a space allocation application for a top UK supermarket and an investment management application for a top US investment firm.`,
          `Collaborated with team members, clients, and stakeholders to achieve project objectives through effective communication and coordination.`,
        ],
        stack: [
          "TypeScript",
          "JavaScript",
          "React",
          "Python",
          "Flask",
          "PostgreSQL",
          "Cypress",
        ],
      },
    ],
    location: "London, UK",
    website: "https://www.quantspark.com/askqs",
  },
  {
    company: "HP",
    roles: [
      {
        id: 3,
        title: "Full Stack Developer",
        duration: "July 2020 - August 2021",
        pointers: [
          `Designed and developed enterprise-level web applications and services for HP's marketing and sales teams in the UK and Europe.`,
          `Led the development of a full-stack campaigns orchestration web application for HP that allows for automating marketing campaigns and bringing significant value in cost and time savings.`,
          `Collaborated with a global team to gather project requirements, present innovative concepts, and improve project outcomes.`,
        ],
        stack: ["JavaScript", "React", "Java", "Node.js", "PostgreSQL"],
      },
    ],
    location: "Reading, UK",
    website: "https://www.hp.com/gb-en/home.html",
  },
];
