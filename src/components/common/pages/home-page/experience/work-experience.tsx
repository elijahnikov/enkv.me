import { experience } from "@/lib/data/experience";
import ExperienceCard from "./experience-card";

export default function WorkExperience() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 mt-4 text-lg font-semibold">Work Experience 👨🏼‍💻</h1>
      <div className="flex justify-center">
        <div className="flex w-[100%] flex-col justify-center space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard experience={exp} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
