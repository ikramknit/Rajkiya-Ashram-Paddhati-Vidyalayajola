export type Language = 'en' | 'hi';

export interface StaffMember {
  id: number;
  name: string;
  designation: string;
  subject: string;
}

export interface ExamResult {
  year: string;
  class10: number;
  class12: number;
  toppers10: string[];
  toppers12: string[];
}

export interface Content {
  nav: {
    home: string;
    about: string;
    facilities: string;
    academics: string;
    gallery: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    title: string;
    text: string;
  };
  sections: {
    facilities: string;
    results: string;
    staff: string;
    gallery: string;
  };
}