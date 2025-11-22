import { Content, ExamResult, StaffMember } from './types';

export const CONTENT: Record<'en' | 'hi', Content> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      facilities: 'Facilities',
      academics: 'Academics',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Rajkiya Ashram Paddhati Vidyalaya',
      subtitle: 'Social Welfare Department, Uttar Pradesh | Dandoli, Nagal, Saharanpur',
      cta: 'Explore Facilities',
    },
    intro: {
      title: 'Introduction',
      text: 'Established in 2008 and operational since 2011, Rajkiya Ashram Paddhati Vidyalaya is a residential school operated by the Social Welfare Department. With a capacity of 490 students, we are dedicated to providing high-quality education to socially and economically underprivileged children from rural and urban areas. We provide free uniforms, housing, daily necessities, study materials, and computer facilities.',
    },
    sections: {
      facilities: 'Our Facilities',
      results: 'Academic Performance',
      staff: 'Our Faculty',
      gallery: 'Activities & Events',
    },
  },
  hi: {
    nav: {
      home: 'मुख्य पृष्ठ',
      about: 'परिचय',
      facilities: 'सुविधाएं',
      academics: 'शैक्षणिक',
      gallery: 'गैलरी',
      contact: 'संपर्क',
    },
    hero: {
      title: 'राजकीय आश्रम पद्धति विद्यालय',
      subtitle: 'समाज कल्याण विभाग, उत्तर प्रदेश | डंडोली, नागल, सहारनपुर',
      cta: 'सुविधाएं देखें',
    },
    intro: {
      title: 'परिचय',
      text: 'वर्ष 2008 में प्रारम्भ तथा 2011 में संचालित, राजकीय आश्रम पद्धति विद्यालय समाज कल्याण विभाग द्वारा संचालित एक आवासीय विद्यालय है। 490 छात्रों की क्षमता वाला यह विद्यालय सामाजिक और आर्थिक रूप से कमजोर बच्चों को उत्कृष्ट शिक्षा प्रदान करने के लिए समर्पित है। हम निःशुल्क यूनिफार्म, आवास, दैनिक प्रयोग की वस्तुएं, अध्ययन सामग्री और कंप्यूटर सुविधा उपलब्ध कराते हैं।',
    },
    sections: {
      facilities: 'हमारी सुविधाएं',
      results: 'परीक्षा परिणाम',
      staff: 'शिक्षण स्टाफ',
      gallery: 'गतिविधियां एवं कार्यक्रम',
    },
  },
};

export const STAFF_DATA: StaffMember[] = [
  { id: 1, name: 'Dr. Dinesh Kumar', designation: 'Principal', subject: 'History' },
  { id: 2, name: 'Mr. Pawan Kumar', designation: 'Lecturer', subject: 'Biology' },
  { id: 3, name: 'Mr. Sanjeev Kumar Saundarya', designation: 'Lecturer', subject: 'Sociology' },
  { id: 4, name: 'Mr. Khalik Ahmed', designation: 'Lecturer', subject: 'Economics' },
  { id: 5, name: 'Mr. Anil Kumar', designation: 'Lecturer', subject: 'Chemistry' },
  { id: 6, name: 'Mr. Ashu Kumar', designation: 'Asst. Teacher', subject: 'Science' },
  { id: 7, name: 'Mr. Hardeep Singh', designation: 'Asst. Teacher', subject: 'Physical Education' },
  { id: 8, name: 'Mrs. Priyanka Sharma', designation: 'Asst. Teacher', subject: 'Hindi' },
  { id: 9, name: 'Mrs. Karuna Rani', designation: 'Asst. Teacher', subject: 'Social Science' },
  { id: 10, name: 'Mrs. Priyanka', designation: 'Asst. Teacher', subject: 'English' },
  { id: 11, name: 'Mr. Rajnish Kumar', designation: 'Asst. Teacher', subject: 'Social Science' },
  { id: 12, name: 'Mrs. Priyanka Tyagi', designation: 'Asst. Teacher', subject: 'English' },
];

export const EXAM_RESULTS: ExamResult[] = [
  { year: '2012-13', class10: 100, class12: 100, toppers10: ['Ashutosh Raj (78.5%)'], toppers12: ['Govinda (74.33%)'] },
  { year: '2013-14', class10: 100, class12: 0, toppers10: ['Nitin Kumar (83.67%)'], toppers12: ['NA'] },
  { year: '2014-15', class10: 100, class12: 100, toppers10: ['Vibhor (85.17%)'], toppers12: ['Ajeet (69.16%)'] },
  { year: '2015-16', class10: 100, class12: 100, toppers10: ['Vishal Saini (79.33%)'], toppers12: ['Arshad (56.70%)'] },
  { year: '2016-17', class10: 96.15, class12: 91.67, toppers10: ['Ishant (84.50%)'], toppers12: ['Virendra (66.50%)'] },
  { year: '2017-18', class10: 100, class12: 100, toppers10: ['Manish Saini (76.00%)'], toppers12: ['Vishal Saini (68.16%)'] },
  { year: '2018-19', class10: 88.88, class12: 77.77, toppers10: ['Abhishek (67.50%)'], toppers12: ['Tanveer (61.83%)'] },
  { year: '2019-20', class10: 61.11, class12: 66.66, toppers10: ['Adil Chaudhary (71.20%)'], toppers12: ['Junaid (76.16%)'] },
  { year: '2020-21', class10: 100, class12: 100, toppers10: ['Sonu (75.20%)'], toppers12: ['Vikas Kumar (55.67%)'] },
  { year: '2021-22', class10: 100, class12: 100, toppers10: ['Akash Kumar (75.60%)'], toppers12: ['Sonu Saini (70.16%)'] },
  { year: '2022-23', class10: 80.76, class12: 87.50, toppers10: ['Vishal Sharma (65.60%)'], toppers12: ['Ajay (75.83%)'] },
  { year: '2023-24', class10: 53.33, class12: 100, toppers10: ['Nitin Kumar (70.20%)'], toppers12: ['Shivam (70.80%)'] },
];

export const FACILITY_IMAGES = {
  yoga: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop",
  lab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  library: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
  sports: "https://images.unsplash.com/photo-1562771242-a02d9090c90c?q=80&w=800&auto=format&fit=crop",
  hostel: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
  mess: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
  smartClass: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  plantation: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
};