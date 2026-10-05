export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  context: string;
  achievement?: string;
  description: string;
  extendedDescription?: string;
  workflow?: string[];
  highlights: string[];
  disclaimer?: string;
  technologies: string[];
  primaryGithubUrl?: string;
  secondaryRepoLabel?: string;
  secondaryRepoUrl?: string;
  liveDemoUrl?: string;
  credentialLabel?: string;
  credentialUrl?: string;
  visualType: 'analytics' | 'agritech' | 'foundry';
}

export interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  organization: string;
  programContext?: string;
  period: string;
  locationType: string;
  description: string;
  highlights: string[];
  visualType: 'techfest' | 'bharatcares';
  projectLiveUrl?: string;
  projectLiveLabel?: string;
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  meta: string;
  description: string;
  projectLiveUrl?: string;
  projectLiveLabel?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate?: string;
  expiresDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  hasCertificatePreview?: boolean;
  certificateDetails?: {
    authority: string;
    institute: string;
    recipient: string;
    school: string;
    course: string;
    duration: string;
    date: string;
    signatory: string;
    signatoryTitle: string;
    program: string;
  };
}

export interface ActivityItem {
  id: string;
  title: string;
  organizer?: string;
  description: string;
}

export interface GithubRepoItem {
  id: string;
  name: string;
  url: string;
  liveUrl?: string;
  language: string;
  description: string;
  context: string;
}

export const PERSONAL_INFO = {
  name: 'Ansh Sharma',
  location: 'Indore, Madhya Pradesh, India',
  headline:
    'Integrated M.Tech (Computer Science) Student @ IIPS DAVV | Python | Software Development | Artificial Intelligence',
  heroHeadline: 'Building practical software, data and AI solutions.',
  heroSubheadline:
    'Integrated M.Tech Computer Science student focused on Python, Artificial Intelligence, Data Science and Software Development.',
  heroRoleLine: 'Integrated M.Tech (Computer Science) Student',
  heroInstituteLine: 'IIPS DAVV • Indore, India',
  heroShortDesc:
    'Learning by building — from data analytics dashboards and AI-powered applications to hackathon prototypes.',
  email: 'anshsharmagwl26@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ansh-sharma-60b7b940b/',
  github: 'https://github.com/anshsharmagwl26-png',
  education: [
    {
      institution: 'International Institute of Professional Studies (IIPS), DAVV, Indore',
      degree: 'Integrated M.Tech (Computer Science)',
      period: '2026–2031',
      details: '5-year integrated postgraduate engineering program in Computer Science.',
    },
    {
      institution: 'Army Public School Gwalior',
      degree: 'Class XII (PCM)',
      period: '2026',
      score: '86%',
      details: 'Physics, Chemistry, and Mathematics stream.',
    },
  ],
  aboutParagraphs: [
    'I am an Integrated M.Tech (Computer Science) student at IIPS DAVV, Indore, with a strong interest in Python, Artificial Intelligence, Data Science, and Software Development.',
    'I enjoy learning by building. My focus is on strengthening my programming fundamentals, creating practical projects, participating in hackathons, and developing real-world software.',
    'Through hands-on work, I have explored data analytics, AI-powered applications, cloud technologies, and embedded systems. I am currently focused on building a strong GitHub portfolio and growing as a software and AI developer.',
  ],
  currentlyItems: [
    'Currently pursuing a 5-year Integrated M.Tech in Computer Science at IIPS DAVV.',
    'Focused on Python, Artificial Intelligence, Data Analytics and Software Development.',
    'Building projects, participating in hackathons and strengthening my GitHub portfolio.',
  ],
};

// Strictly ONLY the 12 permitted skills
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    category: 'Programming',
    description: 'Core language for backend logic, data processing, and application development.',
    skills: [
      {
        name: 'Python',
        context: 'Primary language used across FastAPI services, Streamlit apps, and data workflows',
      },
    ],
  },
  {
    id: 'ai-data',
    category: 'AI & Data',
    description: 'Exploring datasets, statistical patterns, segmentation, and AI-enabled solutions.',
    skills: [
      {
        name: 'Artificial Intelligence',
        context: 'Applied AI workflows, decision-support prototypes, and cloud AI tooling',
      },
      {
        name: 'Data Analysis',
        context: 'Data cleaning, exploratory data analysis, feature engineering, and statistical insights',
      },
      {
        name: 'Data Visualization',
        context: 'Interactive visual reporting, KPI dashboards, and analytical charts',
      },
      {
        name: 'Data Science',
        context: 'K-Means clustering segmentation, structured dataset exploration, and pattern analysis',
      },
    ],
  },
  {
    id: 'cloud-platforms',
    category: 'Cloud / Platforms',
    description: 'Cloud environments and managed AI platforms for deployment and experimentation.',
    skills: [
      {
        name: 'Microsoft AI Foundry',
        context: 'Model deployment, Code Interpreter workflows, and AI solution building',
      },
      {
        name: 'Google Cloud',
        context: 'Cloud infrastructure, compute load balancing, and cloud application services',
      },
      {
        name: 'Cloud Run',
        context: 'Containerized application deployment and serverless cloud execution',
      },
    ],
  },
  {
    id: 'development',
    category: 'Development',
    description: 'Frameworks and version control tools for building and documenting software.',
    skills: [
      {
        name: 'FastAPI',
        context: 'Building structured Python REST APIs and backend validation endpoints',
      },
      {
        name: 'Streamlit',
        context: 'Developing interactive multi-page data analytics and decision-support web apps',
      },
      {
        name: 'Git',
        context: 'Source code version control, branching, and structured commit workflows',
      },
      {
        name: 'GitHub',
        context: 'Public project documentation, repository management, and open collaboration',
      },
    ],
  },
];

// Strictly in exact order: 1. Student Success Analytics, 2. Turmeric Shield, 3. AI Solution — Microsoft AI Foundry
export const PROJECTS: ProjectItem[] = [
  {
    id: 'student-success-analytics',
    number: '01',
    title: 'Student Success Analytics',
    subtitle: 'Interactive 8-Page Streamlit Analytics Application',
    context: 'IBM SkillsBuild Data Analytics with AI Internship 2026 — BharatCares / AICTE',
    description:
      'An interactive student analytics application built around a 300-student dataset to explore academic performance, attendance, previous GPA and engagement patterns.',
    extendedDescription:
      'Built as part of the IBM SkillsBuild Data Analytics with AI Internship program conducted by BharatCares. The application translates structured student records into interactive visual explorations and support-oriented academic recommendations.',
    highlights: [
      'Data cleaning and preprocessing across a 300-student academic dataset',
      'Exploratory data analysis (EDA) across attendance, study hours, and GPA distributions',
      'Feature engineering and statistical analysis of academic performance indicators',
      'K-Means student segmentation to identify distinct learner engagement profiles',
      'Interactive 8-page Streamlit dashboard with filterable views and visual charts',
      'Data-driven recommendations oriented toward academic support and intervention',
    ],
    technologies: ['Python', 'Streamlit', 'pandas', 'Data Analysis', 'Data Visualization'],
    primaryGithubUrl: 'https://github.com/anshsharmagwl26-png/student-success-analytics',
    liveDemoUrl: 'https://student-success-analytics-ansh.streamlit.app/',
    visualType: 'analytics',
  },
  {
    id: 'turmeric-shield',
    number: '02',
    title: 'Turmeric Shield',
    subtitle: 'SIH 2026 • Team Code4Cause • SIH26131',
    context: 'Smart India Hackathon 2026 Prototype',
    achievement: 'Cleared the IIPS DAVV College Internal Round of Smart India Hackathon 2026.',
    description:
      'An explainable early-warning and decision-support prototype for turmeric rhizome-rot risk.',
    extendedDescription:
      'Turmeric Shield combines field conditions, weather context, crop context and local case patterns to prioritize fields for inspection and recommend appropriate next steps.',
    workflow: ['Monitor', 'Assess', 'Prioritize', 'Act', 'Verify', 'Learn'],
    highlights: [
      'Python and FastAPI backend serving structured risk-assessment endpoints',
      'Transparent rule-based risk engine evaluating multi-signal field and environmental inputs',
      'Streamlit dashboard and web interface with current-weather API integration',
      'Structured weather-context, field-condition, crop-context, and local-history inputs',
      'Explainable evidence contributions detailing why specific factors raise field attention',
      'HIGH / MODERATE / LOW / UNCERTAIN risk priorities with recommended action and next step',
      'Basic automated unit tests verifying rule-based risk evaluation contracts',
    ],
    disclaimer:
      'This is a prototype decision-support system, not a confirmed disease-diagnosis system.',
    technologies: ['Python', 'FastAPI', 'Streamlit', 'GitHub'],
    primaryGithubUrl: 'https://github.com/anshsharmagwl26-png/turmeric-shield-web',
    secondaryRepoLabel: 'Python Prototype Repository',
    secondaryRepoUrl: 'https://github.com/anshsharmagwl26-png/turmeric-shield-sih',
    liveDemoUrl: 'https://turmeric-shield-web.onrender.com/',
    visualType: 'agritech',
  },
  {
    id: 'microsoft-ai-foundry',
    number: '03',
    title: 'AI Solution — Microsoft AI Foundry',
    subtitle: 'Cloud AI Deployment & Agent Workflow Assessment',
    context: 'Microsoft Applied Skills: "Get started developing agents in Microsoft Foundry"',
    description:
      'Built and deployed an AI solution in Microsoft Foundry as part of a hands-on Microsoft Applied Skills assessment.',
    extendedDescription:
      'Completed a practical technical assessment verifying skills in configuring cloud AI environments, deploying generative models, integrating Code Interpreter capabilities for analytical execution, and validating end-to-end AI application workflows.',
    highlights: [
      'Hands-on environment configuration and resource setup in Microsoft AI Foundry',
      'Model deployment and configuration for structured agent workflows',
      'Integration of Code Interpreter for AI-powered data analysis and execution',
      'End-to-end testing and verification of the deployed AI application solution',
    ],
    technologies: ['Microsoft AI Foundry', 'Artificial Intelligence', 'Python', 'Data Analysis'],
    credentialLabel: 'Microsoft Credential',
    credentialUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/AnshSharma-0436/817B07C88383D4D2',
    visualType: 'foundry',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'techfest-iitb',
    number: '01',
    role: 'College Ambassador',
    organization: 'Techfest, IIT Bombay',
    period: 'Jul 2026 – Present',
    locationType: 'Remote',
    description:
      'Selected as a College Ambassador for Techfest, IIT Bombay, contributing to campus outreach, student engagement, event promotion and community activities around science, technology and innovation.',
    highlights: [
      'Campus outreach and student community coordination for technical initiatives',
      'Promoting workshops, competitions, and technology events among peers',
      'Facilitating student participation in science and innovation programs',
    ],
    visualType: 'techfest',
  },
  {
    id: 'bharatcares-internship',
    number: '02',
    role: 'IBM SkillsBuild Data Analytics with AI Internship',
    organization: 'BharatCares',
    programContext: 'IBM SkillsBuild Program • AICTE',
    period: 'Aug 2026 – Sep 2026',
    locationType: 'Remote',
    description:
      'Worked on a practical data analytics project involving data cleaning, exploratory analysis, feature engineering, statistical analysis, student segmentation and interactive dashboard development.',
    highlights: [
      'Applied Python data analysis workflows on a 300-student educational dataset',
      'Executed exploratory data analysis, statistical checks, and K-Means segmentation',
      'Developed and deployed the interactive Student Success Analytics Streamlit dashboard',
    ],
    visualType: 'bharatcares',
    projectLiveUrl: 'https://student-success-analytics-ansh.streamlit.app/',
    projectLiveLabel: 'Live Internship Project (Streamlit)',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'sih-2026',
    number: '01',
    title: 'Smart India Hackathon 2026',
    subtitle: 'Cleared IIPS DAVV College Internal Round',
    meta: 'Team Code4Cause · Problem Statement SIH26131',
    description:
      'Cleared the IIPS DAVV College Internal Round with Team Code4Cause for Problem Statement SIH26131 by developing Turmeric Shield, an explainable early-warning and decision-support prototype for turmeric rhizome-rot risk.',
    projectLiveUrl: 'https://turmeric-shield-web.onrender.com/',
    projectLiveLabel: 'Live SIH Prototype (Turmeric Shield)',
  },
  {
    id: 'google-cloud-genai-academy',
    number: '02',
    title: 'Google Cloud Gen AI Academy APAC Edition 2026 — Cohort 3',
    subtitle: 'Hands-on Learning & Build Program Completed',
    meta: 'Issued Sep 2026 · Hack2skill',
    description:
      'Completed hands-on cloud and generative AI learning and practical build exercises through the Google Cloud Gen AI Academy APAC Edition 2026 (Cohort 3).',
  },
  {
    id: 'microsoft-applied-skills',
    number: '03',
    title: 'Microsoft Applied Skills',
    subtitle: 'Get started developing agents in Microsoft Foundry',
    meta: 'Issued Jun 2026 · Microsoft',
    description:
      'Passed the interactive lab assessment involving building and deploying an AI solution in Microsoft Foundry with model deployment, Code Interpreter, and AI-powered data analysis.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-ms-foundry',
    title: 'Microsoft Applied Skills: Get started developing agents in Microsoft Foundry',
    issuer: 'Microsoft',
    issuedDate: 'June 2026',
    credentialId: '817B07C88383D4D2',
    verificationUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/AnshSharma-0436/817B07C88383D4D2',
  },
  {
    id: 'cert-gcp-genai',
    title: 'Google Cloud Gen AI Academy APAC Edition 2026 – Cohort 3',
    issuer: 'Hack2skill',
    issuedDate: 'September 2026',
    credentialId: '2026H2S09GCGENAIAPACC3-P00662',
    verificationUrl: 'https://certificate.hack2skill.com/verify/2026H2S09GCGENAIAPACC3-P00662',
  },
  {
    id: 'cert-ibm-data',
    title: 'Data Fundamentals',
    issuer: 'IBM',
    verificationUrl: 'https://www.credly.com/badges/a705d172-ceff-4bd9-ac08-5787fcea1af0/public_url',
  },
  {
    id: 'cert-google-lb',
    title: 'Implementing Cloud Load Balancing for Compute Engine',
    issuer: 'Google',
    issuedDate: 'June 2026',
    credentialId: '25014771',
  },
  {
    id: 'cert-iitm-ds',
    title: 'Introduction to Data Science and AI',
    issuer: 'CODE IIT Madras',
    issuedDate: 'August 2025',
    hasCertificatePreview: true,
    certificateDetails: {
      authority: 'Centre for Outreach and Digital Education',
      institute: 'Indian Institute of Technology Madras',
      recipient: 'ANSH SHARMA',
      school: 'ARMY PUBLIC SCHOOL, GWALIOR, MADHYA PRADESH',
      course: 'INTRODUCTION TO DATA SCIENCE AND AI',
      duration: '8-week certification course',
      date: 'AUGUST 2025',
      signatory: 'Prof. Andrew Thangaraj',
      signatoryTitle: 'Chair, IITM CODE',
      program: 'SCHOOL CONNECT',
    },
  },
  {
    id: 'cert-copado-ai',
    title: 'Copado Certified: Copado AI',
    issuer: 'Copado',
    issuedDate: 'July 2026',
    expiresDate: 'October 2027',
    credentialId: '073013',
  },
];

export const TECHNICAL_ACTIVITIES: ActivityItem[] = [
  {
    id: 'niat-bootcamp',
    title: 'NIAT Bootcamp 2026',
    organizer: 'Workshop & Hardware Bootcamp',
    description:
      'Hands-on exposure to ESP32, sensors, OLED displays, live sensor data, embedded systems, IoT and robotics.',
  },
  {
    id: 'tech-unleash',
    title: 'Tech Unleash 4.0',
    organizer: 'GDGoC IET DAVV',
    description:
      'Exposure to AI, cloud/DevOps, entrepreneurship, software development and developer community sessions.',
  },
];

export const GITHUB_REPOS: GithubRepoItem[] = [
  {
    id: 'repo-student-analytics',
    name: 'student-success-analytics',
    url: 'https://github.com/anshsharmagwl26-png/student-success-analytics',
    liveUrl: 'https://student-success-analytics-ansh.streamlit.app/',
    language: 'Python',
    context: 'Streamlit • Data Analysis',
    description:
      'Interactive 8-page Streamlit analytics application exploring a 300-student dataset across academic performance, attendance, GPA, and K-Means segmentation.',
  },
  {
    id: 'repo-turmeric-web',
    name: 'turmeric-shield-web',
    url: 'https://github.com/anshsharmagwl26-png/turmeric-shield-web',
    liveUrl: 'https://turmeric-shield-web.onrender.com/',
    language: 'Python',
    context: 'Web Interface • SIH26131',
    description:
      'Web application and interface for Turmeric Shield, connecting weather context and field conditions to explainable rhizome-rot risk priorities.',
  },
  {
    id: 'repo-turmeric-sih',
    name: 'turmeric-shield-sih',
    url: 'https://github.com/anshsharmagwl26-png/turmeric-shield-sih',
    language: 'Python',
    context: 'FastAPI • Rule-Based Risk Engine',
    description:
      'Core Python FastAPI backend and transparent rule-based risk engine prototype built for Smart India Hackathon 2026 (Team Code4Cause).',
  },
  {
    id: 'repo-git-intro',
    name: 'skills-introduction-to-git',
    url: 'https://github.com/anshsharmagwl26-png/skills-introduction-to-git',
    language: 'Git',
    context: 'Version Control • Fundamentals',
    description:
      'Practical GitHub Skills repository documenting foundational version control workflows, commits, branches, and pull requests.',
  },
];
