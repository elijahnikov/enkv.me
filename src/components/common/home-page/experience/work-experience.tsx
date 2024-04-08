import { experience } from "@/lib/experience";
import ExperienceCard from "./experience-card";

export default function WorkExperience() {
  return (
    <div className="mt-4 flex w-[100%] flex-col justify-center">
      <h1 className="mb-4 text-xl font-semibold">Work Experience</h1>
      <ol className="relative ml-4 h-max space-y-10 border-s">
        {experience.map((exp, index) => (
          <ExperienceCard experience={exp} key={index} />
        ))}
      </ol>
    </div>
  );
}
