import { type ReactNode } from 'react';
import { type Education, type Experience } from '../types/resume';
import { SiReact, SiDotnet } from 'react-icons/si';
import { VscTerminalPowershell } from 'react-icons/vsc';
import { TbDatabase } from 'react-icons/tb';
import { type IconType } from 'react-icons';
import { PiFileSql } from 'react-icons/pi';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';
import polygunArenaLogo from '../assets/polygun-arena.png?url';

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
  'SQL': PiFileSql,
  'Adobe Photoshop': DiPhotoshop,
  'Adobe Illustrator': DiIllustrator,
};

// Image icons for tags without a matching react-icon
const techImages: Record<string, string> = {
  'Polygun Arena': polygunArenaLogo,
};

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-medium text-(--color-text-primary)">
        {title}
      </h2>
      <div className="h-px bg-(--color-text-primary) mb-6 opacity-30"></div>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}

interface ResumeEntryProps {
  name: string;
  url: string;
  subtitle: string;
  date: string;
  location: string;
  children?: ReactNode;
}

function ResumeEntry({ name, url, subtitle, date, location, children }: ResumeEntryProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
      <div className="flex-1">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-(--color-text-primary) inline-block hover:underline"
        >
          {name}
        </a>
        <p className="text-lg font-light text-(--color-text-primary)">
          {subtitle}
        </p>
        {children}
      </div>
      <div className="mt-2 md:mt-0 md:text-right md:ml-8">
        <p className="text-sm text-(--color-text-primary)">
          {date}
        </p>
        <p className="text-sm text-(--color-text-primary)">
          {location}
        </p>
      </div>
    </div>
  );
}

export default function Resume({ education, experience }: ResumeProps) {
  return (
    <div className="w-full space-y-12">
      <ResumeSection title="Education">
        {education.map((edu) => (
          <ResumeEntry
            key={edu.schoolName}
            name={edu.schoolName}
            url={edu.url}
            subtitle={edu.degree}
            date={edu.expected ? `${edu.date} (expected)` : edu.date}
            location={edu.location}
          />
        ))}
      </ResumeSection>

      <ResumeSection title="Work Experience">
        {experience.map((exp) => (
          <ResumeEntry
            key={exp.companyName}
            name={exp.companyName}
            url={exp.url}
            subtitle={exp.title}
            date={exp.date}
            location={exp.location}
          >
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech) => {
                  const Icon = techIcons[tech];
                  const image = techImages[tech];
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-(--color-text-primary) bg-(--color-bg-secondary) rounded transition-transform duration-200 hover:scale-[1.03]"
                    >
                      {Icon && <Icon className="w-3 h-3" />}
                      {image && <img src={image} alt="" className="w-3 h-3 rounded-xs" />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            )}
          </ResumeEntry>
        ))}
      </ResumeSection>
    </div>
  );
}
