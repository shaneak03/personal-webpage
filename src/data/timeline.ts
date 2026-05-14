import type { MediaItem } from "@/types/media";

export type AboutSummaryCard = {
  id: string;
  label: string;
  accentClassName: string;
  description: string;
};

export type TimelineEntry = {
  id: string;
  emoji: string;
  phase: string;
  title: string;
  description: string;
  highlights?: string[];
  accent: string;
  media?: MediaItem[];
  mediaPlaceholders?: string[];
};

export const aboutIntro = {
  eyebrow: "Personal Timeline",
  titlePrefix: "About",
  titleHighlight: "Me",
  description:
    "A rough timeline of the phases that shaped how I learn, build, and work with people. I wanted this page to feel more like a story than a resume, so each chapter can carry its own notes, memories, and images.",
};

export const aboutSummaryCards: AboutSummaryCard[] = [
  {
    id: "education",
    label: "Education",
    accentClassName: "text-orange-300/80",
    description:
      "Computer Science at NUS, with a growing pull toward practical software engineering and AI systems.",
  },
  {
    id: "interests",
    label: "Interests",
    accentClassName: "text-pink-300/80",
    description:
      "Full-stack product work, and experimenting with AI. Outside of computing, I love playing Valorant!",
  },
  {
    id: "values",
    label: "Values",
    accentClassName: "text-cyan-300/80",
    description:
      "I value authenticity, being real with people, and showing up with honesty, care, and sincerity in the way I work and build relationships.",
  },
];

export const aboutOutro =
  "Still working on this webpage ... More stuff coming in the future!";

export const timeline: TimelineEntry[] = [
  {
    id: "nus",
    emoji: "🎓",
    phase: "2024 - Present",
    title: "National University of Singapore",
    description:
      "I am currently pursuing a Bachelor Degree in Computer Science (Honours) at NUS, where I have been exploring software engineering, AI, and building things through classes, hackathons, and side projects.",
    highlights: [
      "Teaching Assistant for TCX1004, CS1101S, CS2030S, and CS2040S, supporting students in discrete mathematics, programming methodology (functional programming and OOP), and data structures & algorithms.",
      "Stayed on campus in Year 1 at Helix House, participating in CCAs such as Cooking/Baking, Boardgames and Badminton",
      "Going for exchange in Y3S1 at Sweden! (I'm so excited!!)",
      "Used university life as a launchpad for both technical growth and collaborative work.",
    ],
    accent: "from-violet-400 via-fuchsia-500 to-pink-500",
    media: [
      {
        src: "/NUS_Arduino_Tinkering.jpg",
        alt: "Tinkering with Arduino for the first time for EG1311",
      },
      {
        src: "/HackNRoll_2025_Pic.jpg",
        alt: "Hack&Roll 2025 team photo from university hackathon life",
      },
      {
        src: "/NUS_Angbao_Hunting.jpg",
        alt: "Angbao Hunting in NUS SOC",
      },
    ],
  },
  {
    id: "internship",
    emoji: "💼",
    phase: "Summer 2025",
    title: "Learning by Building",
    description:
      "This phase has been about taking what I learn in class and pressure-testing it in real projects, whether that is through internships or team products.",
    highlights: [
      "Completed a Software Engineering Internship at Nete2, where I worked on integrating Agentic AI into Command, Control, and Communications (C3) systems. Gained hands-on experience with MCP, multi-agent orchestration, and deploying/managing services using Docker and Kubernetes.",

      "Worked on TutorSeek under CP2106 (Orbital), developing and iterating on a real-world application while incorporating user feedback and informal UAT throughout the development process.",

      "Built a stronger understanding of software engineering principles such as modular design, maintainable code structure, iterative feature delivery, and balancing technical implementation with user experience considerations.",
    ],
    accent: "from-amber-400 via-orange-500 to-rose-500",
    media: [
      {
        src: "/TutorSeek_poster.jpg",
        alt: "TutorSeek poster representing a more product-focused phase",
      },
      {
        src: "/Intern_nete2.jpg",
        alt: "Internship at nete2",
      },
    ],
  },
  {
    id: "ns",
    emoji: "👨🏼‍🚒",
    phase: "April 2022 - February 2024",
    title: "Fire Rescue Specialist",
    description:
      "National Service was one of the most demanding and formative phases of my life, challenging my limits both physically and mentally. I served in the Singapore Civil Defence Force as a section commander, leading firefighters in emergency response while growing in leadership, resilience, and responsibility under pressure.",
    highlights: [
      "Served as a Section Commander leading a team of firefighters in responding to emergency situations, and attained the rank of Sergeant 1 (SGT1).",
      "Completed the Section Commander Course (SCC), trained as a Fire and Rescue Specialist, and attained a Diploma in Emergency Response and Fire Safety Management.",
      "Posted to Ang Mo Kio Fire Station, where I attended numerous fire, rescue, and medical incidents, and took part in drills and exercises at High Risk Installation premises.",
      "Conducted community engagement programmes to educate the public on fire safety and emergency preparedness.",
      "Took part in the SCDF Parade held in conjunction with the Singapore Firefighters and Paramedics Challenge (SGFPC).",
      "Mentored my firefighters by supporting them closely and helping build teamwork and camaraderie within the section.",
      "Responded to MyResponder cases off-duty, performing CPR when called upon.",
      "Received the Pride and Care Star Award (MyResponder), Wall of Fame Award, and Good Performance Award.",
    ],
    accent: "from-red-400 via-orange-500 to-amber-400",
    media: [
      {
        src: "/Ord_Pic.JPG",
        alt: "Last Duty"
      },
      {
        src: "/Station_Pic.jpg",
        alt: "My first photoshoot with Rota 3",
      },
      {
        src: "/61st Grad Photo.png",
        alt: "61st Section Commander Course"
      },
      {
        src: "/Ord_Rota_Pic.jpg",
        alt: "My ORD Rota 3 Photoshoot"
      }
    ],
  },
  {
    id: "next",
    emoji: "🚀",
    phase: "What Comes Next",
    title: "Still Writing This Part",
    description:
      "I want this timeline to keep growing with more snapshots, projects, and moments that mattered, so this last entry is intentionally left open for the next chapter.",
    highlights: [
      "More to come!"
    ],
    accent: "from-cyan-400 via-sky-500 to-indigo-500",
  },
];
