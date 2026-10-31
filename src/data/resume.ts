import { type ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  education: [
    {
      schoolName: 'Bogazici University',
      degree: 'B. Sc. in Computer Engineering',
      location: 'Istanbul, Turkey',
      date: 'Sep 2021 - Jun 2026',
      expected: true,
      url: 'https://cmpe.bogazici.edu.tr/'
    }
  ],
  experience: [
    {
      companyName: 'Turkish Technology',
      title: 'Database Engineer (Part-time)',
      location: 'Istanbul, Turkey',
      date: 'Jun 2025 - Dec 2025',
      technologies: ['PowerShell', 'SQL', 'MS SQL Server'],
      url: 'https://turkishtechnology.com/en'
    },
    {
      companyName: 'Fibabanka',
      title: 'Database Engineer (Intern)',
      location: 'Istanbul, Turkey',
      date: 'Jun 2024 - Jun 2025',
      technologies: ['PowerShell', 'SQL', 'MS SQL Server'],
      url: 'https://www.fibabanka.com.tr/en'
    },
    {
      companyName: 'Aletya',
      title: 'Graphic Designer',
      location: 'Istanbul, Turkey',
      date: 'Feb 2022 - Present',
      technologies: ['Adobe Photoshop', 'Adobe Illustrator'],
      url: 'https://www.aletya.com'
    }
  ]
};
