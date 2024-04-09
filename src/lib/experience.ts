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
  localeImage: string;
  website: string;
};

export const experience: Array<ExperienceType> = [
  {
    company: "Airfinity",
    website: "https://www.airfinity.com/",
    location: "London, UK",
    localeImage:
      "https://utfs.io/f/fd71f664-c7a6-403c-ae8c-15695ce813b8-t3r7du.png",
    roles: [
      {
        id: 1,
        title: "Software Developer",
        duration: "July 2023 - Present",
        pointers: [
          `Led the initiative and development to transition from third-party software to an internally developed visualization solution, enhancing developer-friendliness, performance, and user experience. This strategic shift is expected to result in substantial cost and time efficiencies, delivering considerable value to the company. Resulted in improved render times by 10x and increased user retention throughout the SaaS application.`,
          `Collaborating closely with product managers and analysts to expand and refine an external, user facing SaaS tool, ensuring it delivers enhanced value to customers/clients. `,
          `Creating complex, reusable and efficient React UI components, enhancing UI/UX and contributing to improved application stability, scalability and performance.`,
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
          `Developed front-end and back-end solutions for various clients at a data science and analytics consultancy to enhance client data comprehension and strategic value.`,
          `Used my skills in React and JS to lead front-end development of major new features within a space allocation application for a top 4 UK supermarket. Aided them in determining their supermarket/warehouse layout across the year. Also led front-end development of major new features within an investment management application for a top US investment firm.`,
          `Collaborated closely with team members, clients, and stakeholders to successfully accomplish project objectives through effective communication and coordination.`,
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
    localeImage:
      "https://utfs.io/f/fd71f664-c7a6-403c-ae8c-15695ce813b8-t3r7du.png",
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
    localeImage:
      "https://utfs.io/f/5d2c1435-291e-4fbb-ab5f-ba01e4c589d9-7lquzu.png",
    website: "https://www.hp.com/gb-en/home.html",
  },
];
