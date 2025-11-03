import { type Education, type Experience } from '../types/resume';

interface ResumeProps {
  education: Education[];
  experience: Experience[];
}

export default function Resume({ education, experience }: ResumeProps) {
  return (
    <div className="w-full space-y-12">
      {/* Education Section */}
      <section>
        <h2 className="text-xl font-medium text-(--color-text-primary)">
          Education
        </h2>
        <div className="h-px bg-(--color-text-primary) mb-6 opacity-30"></div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-(--color-text-primary)">
                  {edu.schoolName}
                </h3>
                <p className="text-lg font-light text-(--color-text-primary)">
                  {edu.degree}
                </p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right md:ml-8">
                <p className="text-sm text-(--color-text-primary)">
                  {edu.date}
                </p>
                <p className="text-sm text-(--color-text-primary)">
                  {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-xl font-medium text-(--color-text-primary)">
          Experience
        </h2>
        <div className="h-px bg-(--color-text-primary) mb-6 opacity-30"></div>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-(--color-text-primary)">
                  {exp.companyName}
                </h3>
                <p className="text-lg font-light text-(--color-text-primary)">
                  {exp.title}
                </p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right md:ml-8">
                <p className="text-sm text-(--color-text-primary)">
                  {exp.date}
                </p>
                <p className="text-sm text-(--color-text-primary)">
                  {exp.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

