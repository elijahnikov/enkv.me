import { experience } from "@/lib/experience";
import ExperienceCard from "./experience-card";

export default function WorkExperience() {
  return (
    <div className="mb-4 flex w-[100%] flex-col justify-center space-y-8">
      {experience.map((exp, index) => (
        <ExperienceCard experience={exp} key={index} />
      ))}
    </div>
  );
}
