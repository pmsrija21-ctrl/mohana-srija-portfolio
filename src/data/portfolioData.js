// Source of Truth strictly extracted from Mohana Srija Puram's Resume
export const portfolioData = {
  "personal": {
    "name": "Mohana Srija Puram",
    "title": "Computer Science Engineering Student | Aspiring Software Developer",
    "email": "purammohanasrija@gmail.com",
    "phone": "+91-8074177416",
    "location": "Tenali, Andhra Pradesh, India",
    "linkedin": "https://linkedin.com/in/mohana-srija-puram-47b628336",
    "linkedinHandle": "mohana-srija-puram-47b628336",
    "github": "https://github.com/purammohanasrija-arch",
    "githubHandle": "purammohanasrija-arch",
    "resumePath": "./resume/Mohana-Srija-Puram-Resume.pdf",
    "bio": "Motivated third-year Computer Science Engineering student with a strong foundation in programming, data structures, and full-stack development, and a growing focus on machine learning and AI-driven applications. Seeking opportunities to apply technical and problem-solving skills to real-world projects, deepen ML expertise, and gain industry experience.",
    "tagline": "Turning Ideas into Real-World Solutions",
    "subTagline": "Better Ideas. Brighter Future."
  },
  "quickStats": [
    {
      "id": "cgpa",
      "label": "CGPA",
      "value": "8.15 / 10",
      "sub": "B.Tech CSE, Vignan University",
      "icon": "GraduationCap",
      "color": "cyan"
    },
    {
      "id": "internships",
      "label": "Internships",
      "value": "3",
      "sub": "Industry Experience Programs",
      "icon": "Briefcase",
      "color": "purple"
    },
    {
      "id": "certs",
      "label": "Certifications",
      "value": "11+",
      "sub": "Cisco, NPTEL, Unstop, Tata",
      "icon": "Award",
      "color": "blue"
    },
    {
      "id": "projects",
      "label": "Core Projects",
      "value": "4",
      "sub": "AI, Full-Stack & Algorithms",
      "icon": "FolderGit2",
      "color": "emerald"
    }
  ],
  "education": [
    {
      "degree": "B.Tech in Computer Science and Engineering",
      "period": "2024 \u2013 2028 (Expected)",
      "institution": "Vignan's Foundation for Science, Technology and Research",
      "score": "CGPA: 8.15 / 10",
      "status": "Currently Pursuing",
      "highlights": [
        "Strong foundation in DSA, Operating Systems, and System Architecture",
        "Full-Stack Web & MERN Application Development",
        "Specialized focus on Machine Learning & AI Agents"
      ]
    },
    {
      "degree": "Intermediate (12th Grade - MPC)",
      "period": "2022 \u2013 2024",
      "institution": "Sri Chaitanya Junior College, Tenali",
      "score": "Percentage: 80.3%",
      "status": "Completed",
      "highlights": [
        "Mathematics, Physics, and Chemistry",
        "Rigorous analytical problem solving and logical deduction"
      ]
    },
    {
      "degree": "SSC (10th Grade)",
      "period": "2021 \u2013 2022",
      "institution": "Sri Chaitanya School, Tenali",
      "score": "Percentage: 93.8%",
      "status": "Completed",
      "highlights": [
        "High Academic Distinction (93.8%)",
        "Excellence in Foundational Mathematics and Sciences"
      ]
    }
  ],
  "projects": [
    {
      "id": "disaster-response",
      "title": "Autonomous Disaster Response Coordination System",
      "shortDesc": "AI-powered disaster management platform for real-time disaster analysis and response, featuring AI agents for severity assessment, resource allocation and route optimization.",
      "category": "AI & Web Systems",
      "technologies": [
        "Flask",
        "MongoDB",
        "Groq Llama 3",
        "Twilio WhatsApp",
        "Interactive Maps",
        "Two-Factor Auth"
      ],
      "techSummary": "Flask | MongoDB | Groq Llama 3",
      "github": "https://github.com/purammohanasrija-arch/Autonomous-Disaster-Response-Coordination-System",
      "liveDemo": "https://disaster-response-system-rta2.onrender.com/login",
      "architecture": "Multi-agent autonomous coordination architecture combining Groq Llama 3 with Flask and MongoDB. AI agents ingest continuous emergency sensor feeds, calculate impact severity matrices, generate optimized evacuation and resource routing paths, and instantly dispatch WhatsApp SOS alerts to affected populations while streaming live telemetry to an administrative dashboard.",
      "features": [
        "Automated WhatsApp SOS emergency broadcasts for instant civilian reach",
        "Live weather monitoring synchronized with geographic disaster zones",
        "Interactive GIS maps for emergency team dispatch and path planning",
        "Bilingual English and Telugu conversational AI chatbot for crisis assistance",
        "Secure OTP-based two-factor authentication for field administrators",
        "Centralized administrative analytics dashboard tracking incident resolution"
      ],
      "badge": "AI Agent Platform",
      "accent": "cyan"
    },
    {
      "id": "weather-travel-planner",
      "title": "Weather Travel Planner \u2013 Full Stack Web Application",
      "shortDesc": "Full-stack travel planning application with live weather lookup by city or GPS and a 5-day forecast visualized using Recharts.",
      "category": "MERN Full-Stack",
      "technologies": [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "OpenAI API",
        "JWT",
        "bcrypt",
        "Recharts",
        "Framer Motion"
      ],
      "techSummary": "MongoDB | Express | React | Node.js",
      "github": "https://github.com/purammohanasrija-arch/Weather-Travel-Planner-/tree/main/Weather-Travel-Planner",
      "liveDemo": "https://weather-travel-planner-client-qmsi.onrender.com/",
      "architecture": "Full MERN architecture with a RESTful Express.js and Node.js microservice API connected to MongoDB Atlas. Client UI built in React with fluid Framer Motion micro-interactions and Recharts data visualizations. Secured with JSON Web Tokens and salted bcrypt credential encryption.",
      "features": [
        "Real-time weather query engine supporting city search and GPS geolocation",
        "Dynamic 5-day temperature and precipitation trend charts via Recharts",
        "Secure user authentication with JWT sessions and bcrypt password hashing",
        "Interactive trip planner with multi-destination itinerary & budget calculation",
        "Full MongoDB CRUD capability for saved itineraries and travel history",
        "AI-powered concierge chatbot powered by OpenAI API covering 105+ landmarks",
        "Responsive dark mode interface with persistent search history caching"
      ],
      "badge": "MERN Stack Application",
      "accent": "purple"
    },
    {
      "id": "hamiltonian-cycle",
      "title": "Hamiltonian Cycle Backtracking Visualizer",
      "shortDesc": "Interactive web application visualizing the Hamiltonian Cycle problem using backtracking, with live graph rendering, dynamic adjacency matrix, and state-space tree.",
      "category": "Algorithm Visualization",
      "technologies": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Graph Theory",
        "Backtracking",
        "State-Space Tree"
      ],
      "techSummary": "HTML | CSS | JavaScript",
      "github": "https://github.com/purammohanasrija-arch/Hamiltonian-Cycle",
      "liveDemo": "https://hamiltonian-cycle.onrender.com",
      "architecture": "Pure vanilla JavaScript algorithm visualization engine executing depth-first backtracking with real-time DOM rendering. Simultaneously synchronizes an SVG/Canvas vertex graph, a dynamic binary adjacency matrix, and a recursive hierarchical state-space tree showing valid and pruned branches.",
      "features": [
        "Interactive visualization of NP-complete Hamiltonian Cycle discovery",
        "Step-by-step recursive backtracking execution with visual branch pruning",
        "Live synchronized adjacency matrix reflecting graph topology in real time",
        "Hierarchical state-space tree mapping decision paths dynamically",
        "Fine-grained animation playback controls (play, pause, step forward, reset)",
        "Adjustable execution speed slider for in-depth educational study",
        "Comprehensive execution logs recording vertex transitions and cycle checks",
        "Pre-configured standard graph presets alongside custom graph creation"
      ],
      "badge": "Backtracking Visualizer",
      "accent": "blue"
    },
    {
      "id": "bridge-crossing",
      "title": "Bridge Crossing Problem Visualizer (Greedy Algorithm)",
      "shortDesc": "Interactive simulation of the Bridge Crossing problem using a greedy strategy, with real-time animations, timer tracking, and movement logs.",
      "category": "Algorithm Visualization",
      "technologies": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Greedy Algorithms",
        "Web Audio API",
        "CSS Keyframes"
      ],
      "techSummary": "HTML | CSS | JavaScript",
      "github": "https://github.com/purammohanasrija-arch/Bridge-Crossing",
      "liveDemo": null,
      "architecture": "Event-driven mathematical simulation environment modeling optimal resource scheduling under torch-sharing constraints. Uses a greedy optimization algorithm to minimize cumulative travel duration across a river gorge with interactive physics-inspired CSS animations and synthetic audio feedback.",
      "features": [
        "Greedy algorithm optimization to find minimal total bridge-crossing time",
        "Real-time smooth 2D animations of travelers crossing with torch transfers",
        "High-precision timer tracking total elapsed time against theoretical optimum",
        "Detailed step-by-step movement audit log documenting every transition",
        "Seamless Dark and Light theme switcher for optimal visual clarity",
        "Integrated audio feedback using Web Audio API sound synthesizers",
        "Educational step-by-step breakdown illustrating greedy algorithm trade-offs"
      ],
      "badge": "Greedy Algorithm Simulation",
      "accent": "emerald"
    }
  ],
  "skills": {
    "programming": {
      "title": "Programming Languages",
      "icon": "Code2",
      "color": "cyan",
      "items": [
        "C",
        "Python",
        "Java",
        "DSA (Data Structures & Algorithms)",
        "Operating Systems"
      ]
    },
    "web": {
      "title": "Web Technologies",
      "icon": "Globe",
      "color": "purple",
      "items": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MERN Stack",
        "Frontend Application Development"
      ]
    },
    "databases": {
      "title": "Databases",
      "icon": "Database",
      "color": "blue",
      "items": [
        "MySQL",
        "MongoDB (Compass & Shell)",
        "Firebase"
      ]
    },
    "tools": {
      "title": "Tools & Platforms",
      "icon": "Wrench",
      "color": "emerald",
      "items": [
        "VS Code",
        "Git / GitHub",
        "Linux (Ubuntu)"
      ]
    },
    "interests": {
      "title": "Areas of Interest",
      "icon": "Sparkles",
      "color": "pink",
      "items": [
        "Machine Learning",
        "Artificial Intelligence",
        "AI Agents",
        "LLM Integration"
      ]
    },
    "apis": {
      "title": "APIs & AI Models",
      "icon": "Cpu",
      "color": "cyan",
      "items": [
        "OpenAI API",
        "Gemini API",
        "Groq Llama 3",
        "RESTful APIs"
      ]
    },
    "uiux": {
      "title": "UI / UX Design",
      "icon": "Palette",
      "color": "purple",
      "items": [
        "Figma",
        "Wireframing",
        "Prototyping",
        "Responsive Design"
      ]
    }
  },
  "experience": [
    {
      "id": "codealpha",
      "role": "Software Development Intern (App Development)",
      "company": "CodeAlpha",
      "period": "Completed",
      "type": "Internship",
      "description": "Architected and delivered multiple full-stack and frontend applications, emphasizing persistent cloud/local state management, interactive user interfaces, and modular backend APIs.",
      "projects": [
        {
          "name": "Fitness Tracker App",
          "stack": "Python, Flask, SQLite",
          "details": "Engineered an intuitive health tracking dashboard with daily workout logs, caloric expenditure analytics, and goal progress charts."
        },
        {
          "name": "Language Learning App",
          "stack": "Python, Flask, Firebase",
          "details": "Built a multi-tiered language learning platform featuring interactive flashcards, spaced-repetition quizzes, and real-time cloud data synchronization."
        },
        {
          "name": "Smart Flashcard Learning Hub",
          "stack": "HTML, CSS, JavaScript",
          "details": "Created an engaging educational application featuring 3D card flipping animations, complete CRUD operations, category filters, and localStorage persistence."
        }
      ],
      "certificatePdf": "./certificates/codealpha-internship-certificate.pdf",
      "lorPdf": "./certificates/codealpha-lor.pdf"
    },
    {
      "id": "prodigy",
      "role": "Full-Stack Web Development Intern",
      "company": "Prodigy InfoTech",
      "period": "Completed",
      "type": "Internship",
      "description": "Completed five end-to-end full-stack web development milestones covering responsive layouts, algorithmic game engines, asynchronous API integrations, and personal branding systems.",
      "projects": [
        {
          "name": "Task 01: Responsive Landing Page",
          "stack": "HTML, CSS, JavaScript",
          "details": "Engineered a high-conversion landing page with a fixed, interactive navigation header that transitions visual states dynamically on scroll and hover."
        },
        {
          "name": "Task 02: Stopwatch Web Application",
          "stack": "HTML, CSS, JavaScript",
          "details": "Built a precision web stopwatch with millisecond accuracy, featuring start, pause, reset, and split lap time capture."
        },
        {
          "name": "Task 03: Tic-Tac-Toe Web Application",
          "stack": "HTML, CSS, JavaScript",
          "details": "Developed an interactive grid game supporting Player vs Player and Player vs AI with algorithmic winning condition detection."
        },
        {
          "name": "Task 04: Personal Portfolio Website",
          "stack": "HTML, CSS, JavaScript",
          "details": "Designed a comprehensive personal portfolio showcasing core engineering competencies, project catalogs, and educational background."
        },
        {
          "name": "Task 05: Weather App",
          "stack": "HTML, CSS, JavaScript, OpenWeather API",
          "details": "Constructed a dynamic atmospheric dashboard fetching and rendering live meteorological conditions, humidity, and temperature based on user location."
        }
      ],
      "certificatePdf": "./certificates/prodigy-internship-certificate.pdf",
      "lorPdf": "./certificates/prodigy-lor.pdf"
    },
    {
      "id": "unified-mentor",
      "role": "Technology Intern",
      "company": "Unified Mentor",
      "period": "Commencing June 2026",
      "type": "Internship (Upcoming)",
      "description": "Accepted internship appointment commencing June 2026, focusing on cutting-edge software engineering paradigms, mentored industry projects, and enterprise software pipelines.",
      "projects": [],
      "certificatePdf": "./certificates/unified-mentor-offer-letter.pdf",
      "isOfferLetter": true
    },
    {
      "id": "chess-coordinator",
      "role": "Event Coordinator",
      "company": "62nd National Chess Championship",
      "period": "Vignan University",
      "type": "Leadership & Extracurricular",
      "description": "Directed tournament logistics, match scheduling, player registration, and venue management for the prestigious 62nd National Chess Championship at Vignan University, ensuring flawless competitive operations across nationwide collegiate participants.",
      "projects": [],
      "certificatePdf": null
    }
  ],
  "certifications": [
    {
      "id": "cisco-os",
      "title": "Operating Systems Basics",
      "issuer": "Cisco Networking Academy",
      "category": "Cisco",
      "file": "./certificates/cisco-os-basics.pdf",
      "skills": "OS Architecture, Kernel Operations, Process & Memory Scheduling"
    },
    {
      "id": "cisco-js-1",
      "title": "JavaScript Essentials 1",
      "issuer": "Cisco Networking Academy",
      "category": "Cisco",
      "file": "./certificates/cisco-js-essentials-1.pdf",
      "skills": "Core JavaScript, Control Flow, Functions, Data Types & Scope"
    },
    {
      "id": "cisco-js-2",
      "title": "JavaScript Essentials 2",
      "issuer": "Cisco Networking Academy",
      "category": "Cisco",
      "file": "./certificates/cisco-js-essentials-2.pdf",
      "skills": "Advanced OOP, Asynchronous JS, Promises, Prototypes & Events"
    },
    {
      "id": "cisco-py-1",
      "title": "Python Essentials 1",
      "issuer": "Cisco Networking Academy",
      "category": "Cisco",
      "file": "./certificates/cisco-python-essentials-1.pdf",
      "skills": "Python Fundamentals, Logic, Collections, Loops & Functions"
    },
    {
      "id": "cisco-py-2",
      "title": "Python Essentials 2",
      "issuer": "Cisco Networking Academy",
      "category": "Cisco",
      "file": "./certificates/cisco-python-essentials-2.pdf",
      "skills": "OOP in Python, Packages, Exception Handling & File I/O"
    },
    {
      "id": "nptel-mgmt",
      "title": "Principles of Management",
      "issuer": "NPTEL",
      "category": "NPTEL",
      "file": "./certificates/nptel-principles-of-management.pdf",
      "skills": "Organizational Leadership, Planning, Resource Optimization & Strategy"
    },
    {
      "id": "unstop-mongo",
      "title": "MongoDB Assessment & Certification",
      "issuer": "Unstop",
      "category": "Unstop",
      "file": "./certificates/unstop-mongodb.pdf",
      "skills": "NoSQL Data Modeling, Aggregation Pipelines, Query Optimization"
    },
    {
      "id": "unstop-jq",
      "title": "jQuery Assessment & Certification",
      "issuer": "Unstop",
      "category": "Unstop",
      "file": "./certificates/unstop-jquery.pdf",
      "skills": "DOM Manipulation, Event Handling, AJAX Operations & Animation"
    },
    {
      "id": "tata-comm",
      "title": "Communication Skills",
      "issuer": "Tata",
      "category": "Tata",
      "file": "./certificates/tata-communication-skills.pdf",
      "skills": "Professional Articulation, Cross-functional Communication & Active Listening"
    },
    {
      "id": "tata-soft",
      "title": "Introduction to Soft Skills",
      "issuer": "Tata",
      "category": "Tata",
      "file": "./certificates/tata-introduction-to-soft-skills.pdf",
      "skills": "Workplace Adaptability, Team Collaboration & Time Strategy"
    },
    {
      "id": "tata-interview",
      "title": "Interview Skills",
      "issuer": "Tata",
      "category": "Tata",
      "file": "./certificates/tata-interview-skills.pdf",
      "skills": "Technical Presentation, Structured Behavioral Frameworks & Problem Solving"
    },
    {
      "id": "codealpha-cert",
      "title": "Software Development Internship Certificate",
      "issuer": "CodeAlpha",
      "category": "Internships",
      "file": "./certificates/codealpha-internship-certificate.pdf",
      "skills": "Python, Flask, SQLite, Firebase, Full Application Engineering"
    },
    {
      "id": "prodigy-cert",
      "title": "Full-Stack Web Development Certificate",
      "issuer": "Prodigy InfoTech",
      "category": "Internships",
      "file": "./certificates/prodigy-internship-certificate.pdf",
      "skills": "Full-Stack Web Development, HTML5, CSS3, JavaScript, REST APIs"
    },
    {
      "id": "unified-offer",
      "title": "Internship Offer Letter (Commencing June 2026)",
      "issuer": "Unified Mentor",
      "category": "Internships",
      "file": "./certificates/unified-mentor-offer-letter.pdf",
      "skills": "Professional Software Mentorship & Project Development"
    }
  ]
};
