export interface Education {
  schoolName: string;
  degree: string;
  location: string;
  date: string;
  expected?: boolean;
}

export interface Experience {
  companyName: string;
  title: string;
  location: string;
  date: string;
  technologies?: string[];
}

export interface ResumeData {
  education: Education[];
  experience: Experience[];
}

