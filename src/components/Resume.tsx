import { type Education, type Experience } from '../types/resume';
import { SiReact, SiDotnet } from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';
import { TbDatabase } from 'react-icons/tb';
import { type IconType } from 'react-icons';

interface ResumeProps {
  education: Education[];
  experience: Experience[];
}

// Technology icon mapping
const techIcons: Record<string, IconType> = {
  'React': SiReact,
  '.NET Core': SiDotnet,
  'MS SQL Server': TbDatabase,
  'PowerShell': VscTerminalPowershell,
};

export default function Resume({ education, experience }: ResumeProps) {
  return (
    <div className="w-full space-y-12">
      {/* Education Section */}
      <section>
        <h2 className="text-lg font-medium text-(--color-text-primary)">
          Education
        </h2>
        <div className="h-px bg-(--color-text-primary) mb-6 opacity-30"></div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="flex-1">
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-lg font-medium text-(--color-text-primary) inline-block after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-(--color-text-primary) after:transition-all after:duration-300 hover:after:w-full"
                >
                  {edu.schoolName}
                </a>
                <p className="text-lg font-light text-(--color-text-primary)">
                  {edu.degree}
                </p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right md:ml-8">
                <p className="text-sm text-(--color-text-primary)">
                  {edu.date}{edu.expected && ' (expected)'}
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
        <h2 className="text-lg font-medium text-(--color-text-primary)">
          Work Experience
        </h2>
        <div className="h-px bg-(--color-text-primary) mb-6 opacity-30"></div>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="flex-1">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-lg font-medium text-(--color-text-primary) inline-block after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-(--color-text-primary) after:transition-all after:duration-300 hover:after:w-full"
                >
                  {exp.companyName}
                </a>
                <p className="text-lg font-light text-(--color-text-primary)">
                  {exp.title}
                </p>
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech, techIndex) => {
                      const Icon = techIcons[tech];
                      return (
                        <span
                          key={techIndex}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-(--color-text-primary) bg-(--color-bg-secondary) rounded opacity-70 transition-transform duration-200 hover:scale-[1.03]"
                        >
                          {Icon && <Icon className="w-3 h-3" />}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                )}
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

