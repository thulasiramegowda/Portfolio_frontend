export const portfolioData = {
  personal: {
    name: "THULASI G T",
    tagline: "Building ideas into real-world software.",
    shortBio: "I’m Thulasi — a Computer Science & Information Technology student exploring AI, software engineering and intelligent products.",
    email: "thulasiramegowda29@gmail.com",
    github: "https://github.com/thulasiramegowda",
    linkedin: "https://www.linkedin.com/in/thulasi-rame-gowda-014374382/",
    devpost: "https://devpost.com/thulasiramegowda29",
    x: "https://x.com/thulas_21",
    discord: "https://discord.com/users/1487374059829203036",
    huggingface: "https://huggingface.co/Thulasi-21",
    credly: "https://www.credly.com/users/thulasi-g-t.8bb7928f",
    kaggle: null,
    leetcode: null,
  },
  education: [
    {
      id: "edu-1",
      institution: "REVA University, Bengaluru",
      degree: "B.Tech — Computer Science & Information Technology",
      period: "2025 — 2029",
      details: [
        "1st Semester SGPA: 9.7",
        "2nd Semester SGPA: 9.52"
      ]
    },
    {
      id: "edu-2",
      institution: "Lakshya PU College, Bengaluru",
      degree: "PUC — PCMB",
      period: "2025",
      details: [
        "Grade: 94%"
      ]
    },
    {
      id: "edu-3",
      institution: "Vidyanikethan School",
      degree: "SSLC",
      period: "2023",
      details: [
        "Grade: 92%"
      ]
    }
  ],
  journey: [
    { _id: "j-1", year: "2023", title: "SSLC", description: "Completed early education with a strong foundation in sciences.", category: "Foundation" },
    { _id: "j-2", year: "2025", title: "PUC / PCMB", description: "Graduated pre-university with focus on Physics, Chemistry, Mathematics, and Biology.", category: "Foundation" },
    { _id: "j-3", year: "2025", title: "B.Tech CSIT", description: "Started studying Computer Science & Information Technology at REVA University.", category: "Academia" },
    { _id: "j-4", year: "2025/26", title: "First Lines of Code", description: "Started exploring programming, web development, and foundational software engineering concepts.", category: "Exploration" },
    { _id: "j-5", year: "2026", title: "Building & Competing", description: "Engaged in projects and hackathons, participating in a space-tech hackathon and Datathon.", category: "Growth" },
    { _id: "j-6", year: "2026", title: "AI & Python Internship", description: "Gained practical experience at GigNi Zorus focusing on project-based AI and Python tasks.", category: "Experience" },
    { _id: "j-7", year: "2026", title: "AI Agents Intensive", description: "Completed the rigorous Google / Kaggle AI Agents Intensive program.", category: "Specialization" },
    { _id: "j-8", year: "2026", title: "Decode SIH Finalist", description: "Led the AQUA-ETHIC project combining IoT, remote sensing, and blockchain.", category: "Milestone" },
    { _id: "j-9", year: "Present", title: "Continuous Exploration", description: "Actively learning, building, and exploring emerging technologies.", category: "Current" }
  ],
  projects: [
    {
      id: "krishisetu",
      name: "KRISHISETU",
      type: "FARMER SUPPORT PLATFORM",
      role: "TEAM LEAD",
      tagline: "Empowering agriculture with data and AI.",
      problem: "Farmers face challenges with market unpredictability, finding reliable labor, and language barriers.",
      approach: "Developed a comprehensive farmer-support platform featuring market insights, labor matching, and multilingual accessibility.",
      myRole: "Led the development of the platform, contributing across the product flow, frontend/backend integration, and AI-enabled functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Gemini API", "Bhashini"],
      github: "https://github.com/REVA-grand-challenge-Tech-group/Grand_challenge_project-",
      live: "https://grand-challenge-project.vercel.app/",
      image: null, 
    },
    {
      id: "aqua-ethic",
      name: "AQUA-ETHIC",
      type: "ENVIRONMENTAL MONITORING",
      role: "TEAM LEAD",
      tagline: "Tamper-resistant environmental data using IoT and Blockchain.",
      problem: "Environmental data can be fragmented, difficult to verify, and susceptible to tampering.",
      approach: "An environmental monitoring concept combining satellite data, IoT sensing, and blockchain technology.",
      myRole: "Led the team in developing the concept, worked on the blockchain component, and contributed to system architecture.",
      technologies: ["Remote Sensing", "IoT", "Machine Learning", "Blockchain", "Google Earth Engine"],
      github: "https://github.com/ANTOJERRIN/AQUA-ETHIC",
      live: "https://aqua-ethic.onrender.com/#/account",
      achievement: "Reached Decode SIH finalist stage.",
      image: null, 
    }
  ],
  experience: [
    {
      id: "exp-1",
      organization: "GigNi Zorus",
      role: "AI & Python Developer Intern",
      period: "2026",
      description: "Worked on AI/Python project-based tasks and practical implementation during the internship, gaining experience with AI-oriented development workflows.",
      technologies: ["AI", "Python", "Development Workflows"]
    },
    {
      id: "prog-1",
      organization: "Google / Kaggle",
      role: "AI Agents Intensive",
      period: "2026",
      description: "Completed an intensive program covering AI agents, agent development concepts, runtime, security and testing-oriented workflows.",
      technologies: ["AI Agents", "Testing", "Security"]
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Decode SIH Finalist",
      project: "AQUA-ETHIC",
      description: "Led the team to the finalist stage combining IoT, ML, and Blockchain."
    },
    {
      id: "ach-2",
      title: "Space-Tech Hackathon",
      description: "Stepped into an unfamiliar technical domain and built a space-technology solution."
    },
    {
      id: "ach-3",
      title: "Datathon Participant",
      description: "Engaged in complex data problem solving and project-based technical activities."
    }
  ],
  certificates: [
    {
      id: "cert-ibm-genai",
      name: "Generative AI Essentials",
      issuer: "IBM SkillsBuild & REVA University",
      date: "Sep 2026",
      credentialUrl: null, 
      image: "/images/certificates/cert-ibm-genai.png", 
    },
    {
      id: "cert-aws",
      name: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "AWS Training & Certification",
      date: "July 2026",
      credentialUrl: null, 
      image: "/images/certificates/cert-aws.png", 
    },
    {
      id: "cert-decodelabs",
      name: "Cloud Computing (AWS/Azure) Internship",
      issuer: "DecodeLabs",
      date: "July 2026",
      credentialUrl: null, 
      image: "/images/certificates/cert-decodelabs.png", 
    },
    {
      id: "cert-infosys-azure",
      name: "Azure Fundamentals: Cloud Computing",
      issuer: "Infosys Springboard",
      date: "June 2026",
      credentialUrl: null, 
      image: "/images/certificates/cert-infosys-azure.png", 
    },
    {
      id: "cert-infosys-cloud",
      name: "Cloud Technologies",
      issuer: "Infosys Springboard",
      date: "June 2026",
      credentialUrl: null, 
      image: "/images/certificates/cert-infosys-cloud.png", 
    },
    {
      id: "cert-infosys",
      name: "Pragati: Path to Future — Cohort 9",
      issuer: "Infosys Springboard",
      date: "2026",
      credentialUrl: null, 
      image: "/images/certificates/cert-infosys.png", 
    },
    {
      id: "cert-ibm-python",
      name: "Python for Data Science",
      issuer: "IBM",
      date: "Apr 2026",
      credentialUrl: null, 
      image: "/images/certificates/cert-ibm-python.png", 
    },
    {
      id: "cert-datathon",
      name: "Datathon '25",
      issuer: "Indian Data Club, REVA University",
      date: "Dec 2025",
      credentialUrl: null, 
      image: "/images/certificates/cert-datathon.jpg", 
    },
    {
      id: "cert-wadhwani",
      name: "Certificate of Proficiency — Ignite India 5.0",
      issuer: "Wadhwani Global Entrepreneur",
      date: "Jan 2026",
      credentialUrl: null, 
      image: "/images/certificates/cert-wadhwani.png", 
    }
  ],
  skills: [
    {
      category: "PROGRAMMING",
      items: ["C", "C++", "Python", "JavaScript", "SQL", "DSA in C"]
    },
    {
      category: "WEB",
      items: ["HTML", "CSS", "React", "Node.js", "Express"]
    },
    {
      category: "DATABASE",
      items: ["MongoDB", "PostgreSQL", "SQLite"]
    },
    {
      category: "AI / DATA",
      items: ["Machine Learning", "AI APIs", "RAG", "LLMs", "Generative AI"]
    },
    {
      category: "TOOLS",
      items: ["Git", "GitHub", "Docker", "AWS", "Cloudinary"]
    }
  ],
  blog: [
    {
      id: "blog-1",
      title: "WHAT I LEARNED BUILDING WITH AI AGENTS",
      date: "2026",
      category: "AI",
      shortDesc: "Exploring the runtime, security, and testing-oriented workflows behind modern AI agents.",
      image: "/images/blog/blog-1.png"
    },
    {
      id: "blog-2",
      title: "BUILDING AQUA-ETHIC",
      date: "2026",
      category: "HACKATHON",
      shortDesc: "The intersection of IoT, remote sensing, and blockchain for tamper-resistant environmental data.",
      image: "/images/blog/blog-2.png"
    }
  ],
  art: [
    { id: "art-1", title: "Divine Portrait", category: "DRAWING", image: "/images/art/art-1.jpg", size: "large" },
    { id: "art-6", title: "Temple Deity Drawing", category: "SKETCH", image: "/images/art/art-6.jpg", size: "medium" },
    { id: "art-2", title: "Joker Sketch", category: "SKETCH", image: "/images/art/art-2.jpg", size: "medium" },
    { id: "art-3", title: "Temple Architecture", category: "OBSERVATION", image: "/images/art/art-3.jpg", size: "large" },
    { id: "art-4", title: "Nature's Duality", category: "EXPERIMENT", image: "/images/art/art-4.jpg", size: "medium" },
    { id: "art-5", title: "Lotus Goddess", category: "DRAWING", image: "/images/art/art-5.jpg", size: "large" }
  ]
};
