import type { MediaItem } from "@/types/media";

export type Project = {
  title: string;
  period: string;
  description: string;
  highlights?: string[];
  tech?: string[];
  media?: MediaItem[];
  mediaPlaceholders?: string[];
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export const projects: Project[] = [
  {
    title: "Openclaw",
    period: "In Progress",
    description: "Experimentation with OpenClaw to automate code workflows and personal endeavours.",
    highlights: ["Link below is my openclaw dashboard but it only works for me hehe"],
    tech: ["OpenClaw", "Codex Models"],
    links: [
      {
        label: "Dashboard",
        href: "https://kittyclaw.shaneak03.dev/"
      },
    ]
  },
  {
    title: "Personal Webpage",
    period: "In Progress",
    description: "An attempt on a modern portfolio website built with Next.js, React, and TailwindCSS featuring HeroUI components and animations.",
    highlights: [],
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "HeroUI"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shaneak03/personal-webpage"
      }, 
    ]
  },
  {
    title: "Kitty - Hack&Roll 2026",
    period: "Jan 2026",
    description:
      "An end-to-end agentic AI pipeline designed to combat doomscrolling by transforming dry educational content into short-form, brainrot-style educational videos.",
    highlights: [
      "Architected an agentic AI platform that transforms lecture slides and notes into engaging short-form educational videos.",
      "Orchestrated a multi-agent pipeline with LangGraph for scriptwriting, narration, and ASR subtitling using OpenAI, ElevenLabs, and Whisper.",
      "Engineered a programmatic FFmpeg video pipeline served through a FastAPI backend and Vite plus React frontend.",
      "Delivered a functional MVP within a 24-hour sprint at NUS Hack&Roll while overcoming integration and dependency hurdles to hit the demo deadline.",
    ],
    tech: ["LangGraph", "OpenAI", "ElevenLabs", "Whisper", "FFmpeg", "FastAPI", "Vite", "React"],
     links: [
      { 
        label: "Demo Video",
        href: "https://www.youtube.com/watch?v=53PS21GMC4E"
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/kitty"
      },
      {
        label: "GitHub",
        href: "https://github.com/shaneak03/HackNRoll-Kitty"
      }
    ]
  },
  {
    title: "TutorSeek",
    period: "May 2025 - Aug 2025",
    description:
      "A cross-platform mobile application designed to bridge the gap between students and freelance tutors through discovery, communication, and scheduling tools.",
    highlights: [
      "Built secure role-based authentication and validation with Google OAuth support.",
      "Implemented tutor listings, filtering, real-time chat, reviews, ratings, and availability scheduling.",
      "Designed the product to support both student discovery flows and tutor profile management in one platform.",
    ],
    tech: ["React Native", "Expo", "PostgreSQL", "Supabase", "Jest", "Docker", "Figma"],
    media: [
      {
        src: "/TutorSeek_poster.jpg",
        alt: "TutorSeek Project Poster",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shaneak03/TutorSeek",
      },
      {
        label: "Web App",
        href: "https://tutor-seek.vercel.app/",
      },
    ],
  },
  {
    title: "NUS Statistics and Data Science Datathon 2025",
    period: "Feb 2025",
    description:
      "A machine learning datathon project focused on predicting whether companies are Domestic Ultimate or Global Ultimate entities from operational, financial, and structural characteristics.",
    highlights: [
      "Framed the problem around corporate ownership and influence, where accurate predictions can support competitive analysis, investment decisions, and M&A strategy.",
      "Built predictive models to classify corporate ownership structure using operational, financial, and structural company features.",
      "Worked collaboratively in Google Colab for fast iteration and experimentation.",
      "Used Python-based data science tooling for preprocessing, model development, evaluation, and insight generation under time pressure.",
      "Achieved over 80 percent model accuracy within the limited datathon timeframe.",
    ],
    tech: ["Python", "Google Colab", "scikit-learn", "pandas", "NumPy", "matplotlib", "Machine Learning"],
    media: [
      {
        src: "/Datathon_Cert.png",
        alt: "NUS Statistics and Data Science Datathon Certificate",
      },
    ],
  },
  {
    title: "Hack4Good 2025",
    period: "Jan 2025 - Jan 2025",
    description:
      "A digital prototype built for the Muhammadiyah Welfare Home problem statement to improve an incentive system for rewarding positive habits.",
    highlights: [
      "Streamlined minimart operations by replacing a manual system with a more efficient digital platform.",
      "Used a points-based digital currency system to reward positive behaviour and encourage financial literacy.",
      "Delivered a scalable and practical solution tailored to the needs of an NPO.",
    ],
    tech: ["React", "Material UI", "Supabase", "PostgreSQL"],
    media: [
      {
        src: "/Hack4Good_2025_minimart_homepage.jpg",
        alt: "Hack4Good 2025 minimart homepage",
      },
    ],
    links: [
      {
        label: "Devpost",
        href: "https://devpost.com/software/kelix"
      },
      {
        label: "GitHub",
        href: "https://github.com/shaneak03/Hack4Good-KELIX",
      }
    ]
  },
  {
    title: "IceAxe - Hack&Roll 2025",
    period: "Jan 2025",
    description:
      "A Telegram-based platform that helps students break the ice before orientations through interactive games and shared-interest discovery.",
    highlights: [
      "Built interactive experiences like Never Have I Ever, Controversy, and Guess Who to encourage faster student bonding.",
      "Gave organisers useful participant insights to tailor schedules, interest-based grouping, and orientation activities.",
      "Developed the project in under 24 hours using Telegram APIs and Supabase.",
    ],
    tech: ["Telegram API", "Supabase"],
    media: [
      {
        src: "/HackNRoll_2025_Pic.jpg",
        alt: "Team Photo",
      },
      {
        src: "/HackNRoll2025_Guess_Who.jpg",
        alt: "Guess Who",
      },
      {
        src: "/HackNRoll_2025_Never_Have_I_Ever.jpg",
        alt: "Never Have I Ever",
      },
    ],
    links: [
      {
        label: "Devpost",
        href: "https://devpost.com/software/iceaxe-kelix"
      },
      {
        label: "GitHub",
        href: "https://github.com/shaneak03/HackNRoll-KELIX",
      }
    ]
  },
  {
    title: "Coming Soon",
    period: "More on the way",
    description: "More projects and experiments will be added here as I keep building.",
  },
];
