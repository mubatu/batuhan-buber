export interface Education {
  schoolName: string;
  degree: string;
  location: string;
  date: string;
  expected?: boolean;
  url: string;
}

export interface Experience {
  companyName: string;
  title: string;
  location: string;
  date: string;
  technologies?: string[];
  url: string;
}

export interface ResumeData {
  education: Education[];
  experience: Experience[];
}

