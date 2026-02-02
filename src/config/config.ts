// src/config/config.ts 

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Aanya Agarwal',
    title: 'Economics & Data Science Undergraduate | Data Analytics Enthusiast',
    image: getAsset('images/profile.png'),
    description:
      'I am an Economics and Data Science undergraduate at Christ University with a strong interest in data analytics, technology, and business strategy.\n' +
      '\n' +
      'I have hands-on experience through Python-based projects, data internships, and finance coursework, and I actively participate in student organizations.\n' +
      '\n' +
      'I aim to build data-driven, impactful solutions by combining analytical thinking, creativity, and leadership skills.',
    tagline: 'Data • Economics • Technology • Analytics',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Aanya Agarwal – Economics & Data Science Portfolio',
    description: 'Portfolio website showcasing education, projects, internships, certifications, and data analytics experience.',
  },

  animatedText: [
    'Economics & Data Science Student',
    'Data Analytics Enthusiast',
    'Python Developer',
    'Future Data Scientist',
  ],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Certifications', url: '/certifications' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  blogs: [],

  education: [
    {
      institution: 'Christ University Bannerghatta Road Campus',
      degree: 'BSc Economics with Data Science (GPA: 3.75/4)',
      year: '2025 – 2028',
      image: getAsset('images/education/christ.png'),
      description: [
        'Focus on economics, data analytics, programming, and business strategy',
      ],
    },
    {
      institution: 'Sushila Birla Girls’ School',
      degree: 'Secondary (86%) | Higher Secondary (91%)',
      year: '2012 – 2025',
      image: getAsset('images/education/sbgs.png'),
      description: [
        'Strong academic foundation with focus on analytical and technical skills',
      ],
    },
  ],

  certifications: [
    {
      title: 'Introduction to Finance, Accounting, Modeling and Valuation',
      specialization: false,
      file: getAsset('images/education/Certifications/udemy.svg'),
      certificates: [
        {
          name: 'Udemy Certification – Finance & Valuation',
          file: getAsset('images/education/Certifications/udemy.svg'),
        },
      ],
    },
  ],

  experience: [
    {
      title: 'Data Analytics Intern',
      cardImage: getAsset('images/experience/geniushub.png'),
      place: 'GeniusHub (Avadna Private Services Limited) – Remote',
      time: 'Dec 2023 – Jan 2024',
      desp: [
        'Worked on data cleaning and preliminary data analysis',
        'Developed understanding of analytical workflows and result interpretation',
        'Built foundational skills in data-driven decision making',
      ],
    },
  ],

  projects: [
    {
      title: 'School Fest Management System (Python)',
      cardImage: getAsset('images/project/python_project.png'),
      description:
        'Python-based system for registrations, scheduling, participant records, and volunteer management with automated reporting and centralized data handling.',
      Githublink: 'https://github.com/your-username/school-fest-management-system',
    },
  ],

  research: [],

  books: [],

  contact: {
    email: 'aanya.agarwal@bscedsh.christuniversity.in',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    github: 'https://github.com/your-username',
    googleScholar: '',
    orcid: '',
  },
};

export default siteConfig;
