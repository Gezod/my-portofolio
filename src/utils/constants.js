// Personal Information
import suhuImage from "../assets/suhu_1.png";
import suhuImage2 from "../assets/hdc.png";
import suhuImage3 from "../assets/bsis_1.png";
import resumePDF from '../assets/CV_REFANGGA_20260202170736.pdf';
export const PERSONAL_INFO = {
  name: "Refangga Lintar Prayoga",
  title: "Creative Developer & UI/UX Designer",
  subtitle: "Building beautiful digital experiences",
  description: "I'm a passionate full-stack developer with 2+ years of experience creating innovative web applications. I specialize in Laravel, Docker, and modern web technologies.",
  location: "Surabaya, Jawa Timur, Indonesia",
  email: "refanggalintar@email.com",
  phone: "+62 812-3119-5490",
  resume: resumePDF
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: "https://github.com/Gezod",
  linkedin: "https://www.linkedin.com/in/refangga-lintar-prayoga-2a473a318/",
  instagram: "https://instagram.com/refanggalintarprayoga"
};

// Skills Data
export const SKILLS = [
  { name: "Laravel", level: 95, category: "Backend" },
  { name: "Yii2", level: 85, category: "Backend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Node.js", level: 81, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "MySQL", level: 82, category: "Database" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "AWS", level: 78, category: "DevOps" },
  { name: "Docker", level: 85, category: "DevOps" },
  { name: "Figma", level: 85, category: "Design" },
  { name: "Yaballe", level: 80, category: "Design" },
  { name: "Zik Analytics", level: 80, category: "Design" },
  { name: "Excel", level: 80, category: "Design" },
  { name: "Bootstrap", level: 85, category: "Design" },
];

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: "E-Temp (Temperature System Monitoring Website)",
    description: "The Dashboard page presents a comprehensive summary of system performance, including the total recorded temperature data, the number of active branches and machines, overall temperature trend graphs, as well as alert notifications and recommended actions.",
    image: suhuImage,
    technologies: ["Laravel", "Flask", "MySQL", "Javascript", "Bootstrap"],
    liveDemo: "https://e-temp.my.id/",
    github: "https://github.com/Gezod/temperature-monitoring",
    featured: true,
    category: "Web Application"
  },
  {
    id: 2,
    title: "HopeDreamCode",
    description: "Bringing Code to Life in Line with Hopes and Dreams.",
    image: suhuImage2,
    technologies: ["React", "Javacript"],
    liveDemo: "https://profile-web-hope-dream-code.vercel.app/",
    github: "https://github.com/HopeDreamCode/profile-web",
    featured: false,
    category: "Dashboard"
  },
  {
    id: 3,
    title: "StaffSync HR System",
    description: "StaffSync HR System is an integrated workforce management platform designed to monitor employee attendance, track working hours, and automate payroll processing.",
    image: suhuImage3,
    technologies: ["Laravel", "Boostrap", "Javascript", "MySQL"],
    liveDemo: "https://payroll.banksampahinduksurabaya.id/login",
    github: "https://github.com/Gezod/salary_bsis",
    featured: true,
    category: "Web Application"
  },
];

// Career Timeline
export const TIMELINE = [
  {
    year: "2017",
    title: "Intern Web Developer",
    company: "CV JAYAPATTRA.",
    description: "Developing a web application using the Yii2 Framework with an MVC architecture across 5+ main system modules.",
    technologies: ["Javascript", "Yii2 Framework", "MySQL"]
  },
  {
    year: "2019",
    title: "Employee Contract - Staff Marketing",
    company: "Getei Teknologi Utama ",
    description: "Managing over 100+ dropshipping product catalogues on Amazon and eBay platforms in a structured manner.",
    technologies: ["Yaballe", "Zik Analytics"]
  },
  {
    year: "2021",
    title: "Employee Contract - Staff Processing",
    company: "PT Tatur Utama Sejati ",
    description: "Processing an average of 30–50 orders per day with a data accuracy rate above 98% .",
    technologies: ["Excel"]
  },
  {
    year: "2025",
    title: "Intern Web Developer",
    company: "Bank Sampah Induk Surabaya",
    description: "Developing and customising 5+ Laravel application features according to the needs of operational division users",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel Framework", "MySQL"]
  },
];

// Navigation Menu
export const NAV_MENU = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" }
];

// Technology Categories
export const TECH_CATEGORIES = [
  "All",
  "Frontend",
  "Backend", 
  "Database",
  "DevOps",
  "Design"
];



// Project Categories
export const PROJECT_CATEGORIES = [
  "All",
  "Web Application",
  "Mobile App",
  "Website",
  "Dashboard"
];