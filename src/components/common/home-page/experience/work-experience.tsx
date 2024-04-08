import { experience } from "@/lib/experience";
import ExperienceCard from "./experience-card";

export default function WorkExperience() {
  return (
    <div className="mb-4 mt-4 flex w-[100%] flex-col justify-center">
      <ol className="relative ml-4 h-max space-y-8 border-s">
        {experience.map((exp, index) => (
          <ExperienceCard experience={exp} key={index} />
        ))}
      </ol>
    </div>
  );
}
