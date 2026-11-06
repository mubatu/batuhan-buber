import { type ReactNode } from 'react';
import { LuDownload } from 'react-icons/lu';
import { type Education, type Experience } from '../types/resume';
import TechTag from './TechTag';

interface ResumeProps {
  education: Education[];
  experience: Experience[];
}

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
  logo?: string;
  subtitle: string;
  date: string;
  location: string;
  children?: ReactNode;
}

function ResumeEntry({ name, url, logo, subtitle, date, location, children }: ResumeEntryProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
      <div className="flex-1">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-(--color-text-primary) inline-flex items-center gap-2.5 hover:underline"
        >
          {logo && <img src={logo} alt="" className="w-6 h-6 shrink-0 object-contain" />}
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
            logo={edu.logo}
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
            logo={exp.logo}
            subtitle={exp.title}
            date={exp.date}
            location={exp.location}
          >
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
            )}
          </ResumeEntry>
        ))}
      </ResumeSection>

      <div className="flex justify-end">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-(--color-bg-primary) bg-(--color-text-primary) border border-(--color-text-primary) rounded-md transition-transform duration-200 hover:scale-[1.03]"
        >
          <LuDownload aria-hidden="true" />
          Download PDF
        </a>
      </div>
    </div>
  );
}
