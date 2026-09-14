export const personalInfo = {
  name: "A S Tritthik Thilagar",
  shortName: "Tritthik",
  role: "Integrated M.Tech CSE Student | AI & Full-Stack Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "tritthik2005@gmail.com",
  phone: "+91 9043360212",
  linkedin: "https://linkedin.com/in/tritthik-thilagar-267698305",
  github: "https://github.com/tri-tt-hik",
  tagline:
    "I build intelligent web systems that connect machine learning, computer vision, and full-stack engineering into usable products.",
  summary:
    "Computer Science student at SSN College of Engineering with hands-on work across GANs, deepfake detection, real-time computer vision, Django backends, React dashboards, and data tools."
}

export const education = [
  {
    degree: "Integrated M.Tech in Computer Science and Engineering",
    institution: "Sri Sivasubramaniya Nadar College of Engineering",
    year: "2023 - Present",
    grade: "CGPA: 8.45"
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Padma Seshadri Bala Bhavan Senior Secondary School",
    year: "2008 - 2023",
    grade: "Percentage: 96.2%"
  }
]

export const experience = [
  {
    role: "AI Software Engineer Trainee Intern",
    company: "DriveThruData LLP, Chennai",
    year: "May 2026 – Jul 2026",
    desc: "AI-powered hospital assistance system and workflow automation.",
    details: [
      "Contributed to an AI-powered hospital assistance system that let doctors review patient medical records, view AI-generated insights, and compare current findings against automatically retrieved historical reports.",
      "Built workflow support for capturing prescriptions and doctor comments, feeding structured data downstream into automated invoice generation for the management team.",
      "Integrated invoice generation with the hospital's ERP system, supporting dual payment paths – insurance-based and self-pay/cash – for patients and insurance providers.",
      "Enabled the financial team to audit billing documents and surface financial insights directly through the platform."
    ],
    github: "https://github.com/tri-tt-hik/DriveThru_Internship_Work"
  },
  {
    role: "Web Team Member",
    company: "ICCIDS 2026 International Conference",
    year: "2026",
    desc: "Developed and maintained the official conference website, focusing on high availability, clear navigation, and a smooth user experience.",
    details: [
      "Designed the official website for ICCIDS 2026, coordinating with the organizing committee to represent conference tracks, schedules, and submission guidelines for an international academic audience."
    ]
  }
]

export const skills = {
  languages: ["Python", "Java", "C", "SQL", "JavaScript"],
  aiml: ["Machine Learning", "Deep Learning", "GANs", "Computer Vision", "NLP"],
  frameworks: ["PyTorch", "TensorFlow", "TensorFlow Lite", "OpenCV", "YOLO", "spaCy"],
  web: ["HTML", "CSS", "React", "Django"],
  tools: ["Apache Kafka", "Apache Spark", "MySQL", "Git", "NumPy", "yt-dlp"]
}

export const focusAreas = [
  {
    title: "AI Product Engineering",
    desc: "Turning models into interfaces, dashboards, and backend workflows that people can actually use."
  },
  {
    title: "Computer Vision Systems",
    desc: "Working with video streams, object detection, model inference, and real-time confidence feedback."
  },
  {
    title: "Full-Stack Execution",
    desc: "Building React frontends and Django services with practical integrations and responsive UI flows."
  }
]

export const projects = [
  {
    title: "AI-Powered Medical Document Processing Workflow Platform (Internship)",
    desc: "Built a visual, node-based workflow platform for configuring AI-driven medical document processing pipelines without engineering support.",
    highlights: [
      "Implemented a drag-and-drop DAG workflow model using ReactFlow for modular pipeline composition across ingestion, analysis, and reporting stages.",
      "Connected the workflow engine to backend REST APIs to link AI inference services with downstream ERP and billing systems."
    ],
    tech: ["React", "ReactFlow", "Python", "REST APIs", "JavaScript"],
    github: "https://github.com/tri-tt-hik/DriveThru_Internship_Work"
  },
  {
    title: "GAN-based Monet Style Image Generation",
    desc:
      "Designed and trained a Generative Adversarial Network to transform real-world images into Monet-style paintings.",
    highlights: [
      "Built an image-to-style generation workflow using deep learning.",
      "Experimented with GAN training for visual domain transfer."
    ],
    tech: ["Python", "GANs", "Deep Learning", "Computer Vision", "PyTorch", "TensorFlow"],
    github: "https://github.com/tri-tt-hik/CycleGAN-Based-Monet-Style-Transfer"
  },
  {
    title: "Real-time Deepfake Detection System",
    desc:
      "Developed a detection system for uploaded videos and live YouTube streams using a quantized deep learning model.",
    highlights: [
      "Integrated backend inference with a responsive web interface.",
      "Displayed segment-wise predictions and real-time confidence updates."
    ],
    tech: ["Python", "Django", "TensorFlow Lite", "OpenCV", "NumPy", "yt-dlp", "JavaScript"],
    github: "https://github.com/tri-tt-hik/Real-time-deepfake-detection"
  },
  {
    title: "Vehicle Maintenance & Driver Assistance Dashboard",
    desc:
      "Built a dashboard to monitor vehicle health metrics and assist drivers with video-based obstacle detection.",
    highlights: [
      "Implemented real-time object detection on video streams.",
      "Added audio alerts through the Speech Synthesis API."
    ],
    tech: ["React", "Django", "OpenCV", "YOLOv4", "Speech Synthesis API"],
    github: "https://github.com/tri-tt-hik/Smart-Driver-Aid-System"
  }
]

export const achievements = [
  {
    title: "Paper Presentation",
    desc:
      'Won First Prize at the paper presentation competition conducted by Madras Institute of Technology, for the paper titled "AI-Based Fire Station Location Optimization for Enhanced Fire and Rescue Coverage in Tamil Nadu."'
  },
  {
    title: "Roller Skating",
    desc:
      "Represented Tamil Nadu at the National Speed Slalom Skating Championship, demonstrating discipline, endurance, and competitive excellence."
  }
]
