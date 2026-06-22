import {
  Brain,
  Eye,
  Database,
  Code2,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const

export const PROFILE = {
  name: 'Muhammad Akhsan Nurramdhan',
  firstName: 'Muhammad',
  lastName: 'Akhsan Nurramdhan',
  headline: 'Machine Learning • Computer Vision • Data Science',
  label: 'Informatics Engineering Graduate',
  heroText:
    'Machine Learning Engineer focused on Data Science, Computer Vision, and Backend Development. Experienced in building YOLOv8-based solutions and validating large-scale AI datasets.',
  about:
  'Informatics Engineering graduate with experience in Machine Learning, Computer Vision, AI Data Quality Assurance, and Backend Development. Completed the Bangkit 2023 Machine Learning learning path, contributed to AI dataset validation projects at Appen, and developed a YOLOv8-based packaging classification system as an undergraduate thesis. Passionate about building intelligent systems that transform data into practical and impactful solutions.',
  email: 'akhsannurramdhan85@gmail.com',
  location: 'Sukabumi, West Java, Indonesia',
  gpa: '3.60 / 4.00',
  socials: {
    github: 'https://github.com/akhsannurramdhan',
    linkedin: 'https://www.linkedin.com/in/akhsannurramdhan/',
    instagram: 'https://www.instagram.com/akhsan_sanusi/',
  },
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const FEATURES = [
  {
    title: 'Machine Learning',
    description: 'Model development, training, evaluation',
    icon: Brain,
  },
  {
    title: 'Computer Vision',
    description: 'YOLOv8, image processing, OpenCV',
    icon: Eye,
  },
  {
    title: 'AI Data Quality',
    description: 'Annotation review, validation, QA',
    icon: CheckCircle2,
  },
  {
    title: 'Backend Development',
    description: 'PHP, CodeIgniter, MySQL',
    icon: Database,
  },
]

export const EDUCATIONS = [
  {
    institution: 'Universitas Muhammadiyah Sukabumi',
    degree: "Bachelor's Degree, Informatics Engineering",
    period: 'Sep 2021 – Jan 2026',
    gpa: '3.60 / 4.00',
    description:
      'Focused on Machine Learning, Data Science, Computer Vision, Software Development, and Database Systems. Developed a YOLO-based packaging classification system as undergraduate research.',
    highlights: [
      'Bangkit Academy 2023 - Machine Learning Path',
      'Google Developer Student Clubs',
      'Machine Learning & Data Science',
      'Computer Vision (YOLO)',
      'Database Design & SQL',
      'Python Programming',
      'Web Development (PHP & CodeIgniter)',
    ],
  },
  {
    institution: 'Bangkit Academy 2023',
    degree: 'Machine Learning Learning Path',
    period: '2023',
    description:
      'Completed an industry-led intensive program by Google, GoTo, and Traveloka covering Machine Learning, Deep Learning, TensorFlow, Data Analysis, and AI deployment.',
    highlights: [
      'TensorFlow',
      'Deep Learning',
      'Data Analysis',
      'Model Deployment',
      'Capstone Project',
    ],
  },
  {
    institution: 'SMK Pasim Plus Kota Sukabumi',
    degree: 'Software Engineering',
    period: 'Jul 2017 – May 2020',
    description:
      'Studied software engineering fundamentals, programming, databases, networking, and web development.',
    highlights: [
      'Programming Fundamentals',
      'Database Systems',
      'Web Development',
    ],
  },
]

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}
export const EXPERIENCES: Experience[] = [
  {
    role: 'Data Annotation Quality Assurance (Project-Based)',
    company: 'Appen',
    period: 'Apr 2025 – Jun 2026',
    description:
      'Reviewed and validated image, video, and text annotations for AI and Machine Learning datasets. Performed quality assurance checks to ensure annotation accuracy, consistency, and compliance with project guidelines. Identified labeling issues and data quality problems that could impact model performance, while working with large-scale datasets for computer vision and AI applications.',
  },
  {
    role: 'IT Support',
    company: 'Desa Sukalarang',
    period: 'May 2020 – Aug 2021',
    description:
      'Provided technical support for hardware, software, and network-related issues. Maintained village administrative IT systems, assisted users with troubleshooting and system maintenance, and supported digitalization initiatives to improve operational efficiency and service reliability.',
  },
  {
    role: 'Junior Web Backend Developer Intern',
    company: 'PT Industri Telekomunikasi Indonesia (Persero)',
    period: 'Apr 2019 – Jun 2019',
    description:
      'Developed and maintained backend features using PHP and CodeIgniter. Integrated MySQL databases, implemented data management functionalities, contributed to dashboard customization and website deployment, and collaborated with development teams to support web application development and testing.',
  },
]

export interface Skill {
  name: string
  level: number
}

export const SKILL_BARS: Skill[] = [
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'Machine Learning', level: 85 },
  { name: 'Data Analysis', level: 80 },
  { name: 'Backend Development', level: 75 },
  { name: 'Computer Vision', level: 75 },
]

export interface Project {
  title: string
  description: string
  image: string
  images?: string[]
  tags: string[]
  featured?: boolean
  year?: string
  role?: string
  longDescription?: string
  highlights?: string[]
  github?: string
  demo?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Packaging Quality Inspection Using YOLO',
    description:
      'Computer vision system for automated packaging quality inspection using YOLOv8.',
    image: '/projects/yolo-packaging1.png',
    images: [
      '/projects/yolo-packaging.png',
      '/projects/yolo-packaging1.png',
      '/projects/yolo-packaging2.jpg',
      '/projects/yolo-packaging3.jpg',
      '/projects/yolo-packaging4.jpg',
      '/projects/yolo-packaging5.jpg',
    ],
    tags: ['Python', 'YOLOv8', 'Computer Vision', 'Deep Learning'],
    year: '2025',
    role: 'Machine Learning Engineer · Thesis Project',

    longDescription:
      'Developed a custom computer vision system using YOLOv8 to automate packaging quality inspections for ginger candy production. The system classifies products into three industrial quality categories: Marketable, Torn, and Dented. Built and annotated a balanced dataset while optimizing the model for real-time industrial deployment.',

    highlights: [
      'Developed a custom YOLOv8-based quality inspection system',
      'Built and annotated a balanced dataset of 930 packaging instances',
      'Achieved 99.5% mAP@0.5 and 100% testing classification accuracy',
      'Production-ready inference speed for real-time quality control',
      'Applied image preprocessing and data validation techniques',
    ],

    github: 'https://github.com/akhsannurramdhan/packaging-quality-inspection-classification-yolo',
  },

  {
    title: 'Digital Village Archive Information System',
    description:
      'Web-based archive management system for village administration.',

    image: '/projects/village-archive.png',
    images: [
      '/projects/village-archive.png',
      '/projects/village-archive1.png',
      '/projects/village-archive2.png',
      '/projects/village-archive3.png',
      '/projects/village-archive4.png',
      '/projects/village-archive5.png',
    ],

    tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'Web Development'],

    year: '2024',

    role: 'Backend Web Developer',

    longDescription:
      'Developed a web-based digital archive management platform for village administration. The system enables efficient storage, classification, searching, and retrieval of documents, replacing manual archive processes with a centralized digital solution.',

    highlights: [
      'Implemented digital document storage and management',
      'Built advanced archive search and filtering features',
      'Created document classification and retrieval workflows',
      'Improved efficiency of archive management operations',
      'Developed backend using CodeIgniter 4 and MySQL',
    ],

    github: 'https://github.com/akhsannurramdhan/digital-village-archive-information-system',
  },

  {
    title: 'IoT Automatic Livestock Feeding System',
    description:
      'Smart livestock feeding system with remote monitoring and automation.',

    image: '/projects/iot-feeder.png',
    images: [
      '/projects/iot-feeder.png',
      '/projects/iot-feeder1.png',
    ],

    tags: ['ESP32', 'Arduino', 'IoT', 'Python', 'Web Dashboard'],

    year: '2024',

    role: 'IoT Developer',

    longDescription:
      'Engineered an automated livestock feeding system utilizing an ESP32 microcontroller and integrated monitoring dashboard. The system automates feeding schedules, monitors feed levels, and provides real-time notifications through wireless communication.',

    highlights: [
      'Built automated feeding control using ESP32',
      'Developed real-time web dashboard for monitoring',
      'Integrated feed-level sensing and low-stock detection',
      'Implemented wireless notification and alert system',
      'Reduced manual feeding workload through automation',
    ],

    github: 'https://github.com/akhsannurramdhan/Automated-IoT-Feeding-System-with-ESP32-and-Web-Control',
  },
]

export interface Certification {
  title: string
  issuer: string
  year: string
  image: string
  description?: string
  skills?: string[]
  credentialUrl?: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Bangkit Academy - Machine Learning Certified',
    issuer: 'Google, GoTo, Traveloka',
    year: 'Jan 2024',
    image: '/certificates/bangkit.jpg',
    description:
      'Completed the Machine Learning learning path in Bangkit Academy 2023, a Google-led career readiness program supported by GoTo and Traveloka. Gained hands-on experience in machine learning, deep learning, TensorFlow, data analysis, and end-to-end AI project development.',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'Data Analysis',
      'AI Development',
      'Model Deployment',
      'Team Collaboration',
    ],
    credentialUrl: 'https://kmm.bangkit.academy/home',
  },

  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI',
    year: 'Dec 2023',
    image: '/certificates/supervised-ml.jpg',
    description:
      'Learned fundamental supervised learning techniques including regression, classification, model evaluation, and machine learning workflows using Python.',
    skills: [
      'Machine Learning',
      'Regression Models',
      'Classification',
      'Python',
      'Model Evaluation',
    ],
    credentialUrl:
      'https://coursera.org/verify/GC5XHXWUEBBV',
  },

  {
    title: 'Probability & Statistics for Machine Learning & Data Science',
    issuer: 'DeepLearning.AI',
    year: 'Dec 2023',
    image: '/certificates/probability-stats.jpg',
    description:
      'Studied probability theory, statistical analysis, distributions, hypothesis testing, and data interpretation for machine learning applications.',
    skills: [
      'Probability',
      'Statistics',
      'Hypothesis Testing',
      'Data Analysis',
      'Data Science',
      'Machine Learning',
    ],
    credentialUrl:
      'https://coursera.org/verify/Z37Y3MHL64EP',
  },

  {
    title: 'Browser-based Models with TensorFlow.js',
    issuer: 'DeepLearning.AI',
    year: 'Jan 2023',
    image: '/certificates/tensorflow-js.jpg',
    description:
      'Developed machine learning applications running directly in web browsers using TensorFlow.js and JavaScript.',
    skills: [
      'TensorFlow.js',
      'JavaScript',
      'Machine Learning',
      'Web AI Applications',
    ],
    credentialUrl:
      'https://coursera.org/verify/JGZD3C44W2ZW',
  },

  {
    title: 'Data Pipelines with TensorFlow Data Services',
    issuer: 'DeepLearning.AI',
    year: 'Jan 2023',
    image: '/certificates/data-pipeline.jpg',
    description:
      'Built scalable data pipelines using TensorFlow Data Services for machine learning training and production workflows.',
    skills: [
      'TensorFlow',
      'Data Engineering',
      'Data Pipelines',
      'Machine Learning',
    ],
    credentialUrl:
      'https://coursera.org/verify/39XN366BVT2Y',
  },

  {
    title: 'Structuring Machine Learning Projects',
    issuer: 'DeepLearning.AI',
    year: 'Jan 2023',
    image: '/certificates/ml-projects.jpg',
    description:
      'Learned practical strategies for designing, evaluating, debugging, and improving machine learning systems in real-world environments.',
    skills: [
      'Machine Learning',
      'Model Optimization',
      'Project Design',
      'AI Systems',
    ],
    credentialUrl:
      'https://coursera.org/verify/LKJNTR4DCSUJ',
  },

  {
    title: '3rd Place - LKS SMK Kota Sukabumi',
    issuer: 'IT Software Application for Business',
    year: '2018',
    image: '/certificates/lks.jpg',
    description:
      'Awarded 3rd place in the IT Software Application for Business category at the Sukabumi City Vocational Skills Competition (LKS).',
    skills: [
      'Software Development',
      'Database Design',
      'Problem Solving',
      'Business Applications',
    ],
  },
]

export interface Achievement {
  title: string
  detail: string
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Graduated with GPA 3.60 / 4.00',
    detail: 'Informatics Engineering.',
  },
  {
    title: 'YOLO-Based Computer Vision Thesis Project',
    detail: 'Final research on real-time object classification.',
  },
  {
    title: 'Bangkit 2023 Machine Learning Cohort',
    detail: 'Selected from thousands of applicants nationwide.',
  },
  {
    title: 'LKS SMK Kota Sukabumi — 3rd Place',
    detail: 'IT Software Application for Business.',
  },
]

export interface SkillGroup {
  category: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming',
    items: [
      'Python',
      'JavaScript',
      'PHP',
      'SQL',
      'Java',
      'C++',
    ],
  },
 {
    category: 'Machine Learning & Data Science',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Data Science',
      'Data Analysis',
      'Data Visualization',
      'Statistics',
      'TensorFlow',
      'Computer Vision',
      'YOLO',
    ],
  },
  
  {
    category: 'Backend & Database',
    items: [
      'Node.js',
      'CodeIgniter',
      'MySQL',
      'REST API',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Google Colab',
      'VS Code',
      'Vercel',
    ],
  },
]
