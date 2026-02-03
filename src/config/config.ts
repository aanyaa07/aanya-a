// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Aanya Agarwal',
    title: 'Economics & Data Science Undergraduate | Data Analytics Enthusiast',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
      'I am an Economics and Data Science undergraduate at Christ University with a strong interest in data analytics, technology, and business strategy.\n' +
      '\n' +
      'I have hands-on experience through Python-based projects, data internships, and finance coursework, and I actively participate in student organizations.\n' +
      '\n' +
      'I aim to build data-driven, impactful solutions by combining analytical thinking, creativity, and leadership skills.'
    tagline: 'Data • Economics • Technology • Analytics',
    location: 'Kolkata, India',
  },

  seo: {
    title: 'Aanya Agarwal – Economics & Data Science Portfolio',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Your Role', 'Your Focus', 'Your Interest', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Your Blog Title',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Christ University Bannerghatta Road Campus',
      degree: 'BSc Economics with Data Science',
      year: '2025-2028',
      image: getAsset('images/education/placeholder.png'),
      description: ['Focus on economics, data analytics, programming, and business strategy'],
    },
    {
      institution: 'Sushila Birla Girls School',
      degree: 'High School',
      year: '2012-2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['Strong academic foundation with focus on analytical and technical skills'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Introduction to Finance, Accounting, Modeling and Valuation',
      specialization: false,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Udemy Certification – Finance & Valuation', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Data Analytics Intern',
      place: 'GeniusHub (Avadna Private Services Limited) – Remote',
      time: '(Dec 2023 – Jan 2024)',
      desp: ['Worked on data cleaning and preliminary data analysis',
        'Developed understanding of analytical workflows and result interpretation',
        'Built foundational skills in data-driven decision making'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'School Fest Management System (Python)',
      description: 'Python-based system for registrations, scheduling, participant records, and volunteer management with automated reporting and centralized data handling.',
    },
  ],


  research: [],

  books: [],

  contact: {
    email: 'aanya.agarwal@bscedsh.christuniversity.in',
    github: 'https://github.com/aanyaa07',
  },
};

export default siteConfig;
