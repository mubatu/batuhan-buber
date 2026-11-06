export interface Education {
  schoolName: string;
  degree: string;
  location: string;
  date: string;
  expected?: boolean;
  url: string;
  logo?: string;
}

export interface Experience {
  companyName: string;
  title: string;
  location: string;
  date: string;
  technologies?: string[];
  url: string;
  logo?: string;
}

export interface ResumeData {
  education: Education[];
  experience: Experience[];
}

