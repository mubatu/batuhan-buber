import { type ResumeData } from '../types/resume';
import bogaziciLogo from '../assets/resume/bogazici.png?url';
import vertigoGamesLogo from '../assets/resume/vertigo-games.png?url';
import turkishTechnologyLogo from '../assets/resume/turkish-technology.png?url';
import fibabankaLogo from '../assets/resume/fibabanka.png?url';
import aletyaStudioLogo from '../assets/resume/aletya-studio.png?url';
import fromYourEyesLogo from '../assets/resume/from-your-eyes.png?url';

export const resumeData: ResumeData = {
  education: [
    {
      schoolName: 'Bogazici University',
      degree: 'B. Sc. in Computer Engineering',
      location: 'Istanbul, Turkey',
      date: 'Sep 2021 - Jun 2026',
      url: 'https://cmpe.bogazici.edu.tr/',
      logo: bogaziciLogo
    }
  ],
  experience: [
    {
      companyName: 'Vertigo Games',
      title: 'Product Specialist',
      location: 'Istanbul, Turkey',
      date: 'Mar 2026 - Present',
      technologies: ['Polygun Arena'],
      url: 'https://vertigogames.co',
      logo: vertigoGamesLogo
    },
    {
      companyName: 'Turkish Technology',
      title: 'Database Engineer (Part-time)',
      location: 'Istanbul, Turkey',
      date: 'Jun 2025 - Dec 2025',
      technologies: ['PowerShell', 'SQL', 'MS SQL Server'],
      url: 'https://turkishtechnology.com/en',
      logo: turkishTechnologyLogo
    },
    {
      companyName: 'Fibabanka',
      title: 'Database Engineer (Intern)',
      location: 'Istanbul, Turkey',
      date: 'Jul 2024 - Jun 2025',
      technologies: ['PowerShell', 'SQL', 'MS SQL Server'],
      url: 'https://www.fibabanka.com.tr/en',
      logo: fibabankaLogo
    },
    {
      companyName: 'Aletya Studio',
      title: 'Graphic Designer',
      location: 'Istanbul, Turkey',
      date: 'Feb 2022 - Jun 2025',
      technologies: ['Adobe Photoshop', 'Adobe Illustrator'],
      url: 'https://www.aletya.com',
      logo: aletyaStudioLogo
    },
    {
      companyName: 'From Your Eyes',
      title: 'Product Specialist',
      location: 'Istanbul, Turkey',
      date: 'Aug 2022 - Mar 2023',
      url: 'https://fromyoureyes.app',
      logo: fromYourEyesLogo
    }
  ]
};
