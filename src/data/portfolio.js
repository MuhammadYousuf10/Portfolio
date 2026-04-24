import React from "react";

// Material UI Icons for Services
import WebIcon from "@mui/icons-material/Web";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

// Material UI Icons for Tags
import CodeIcon from "@mui/icons-material/Code";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeIcon from "@mui/icons-material/Badge";
import PaletteIcon from "@mui/icons-material/Palette";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ImageIcon from "@mui/icons-material/Image";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

// Image Imports - Projects
import atomaiMain from "@/assests/projects/atomai-main.avif";
import atomaiHover from "@/assests/projects/atomai-hover.avif";
import landioMain from "@/assests/projects/landio-main.avif";
import landioHover from "@/assests/projects/landio-hover.avif";
import poloMain from "@/assests/projects/polo-main.avif";

// Image Imports - Logos
import logo1 from "@/assests/projects/project-logo1.avif";
import logo2 from "@/assests/projects/project-logo2.avif";
import logo3 from "@/assests/projects/project-logo3.avif";

// Image Imports - Services
import offer1 from "@/assests/services/what-we-offer1.avif";
import offer2 from "@/assests/services/what-we-offer2.avif";

// Image Imports - About
import redefiningDesignImg from "@/assests/about/redefining-design.avif";
import whoWeAreImg from "@/assests/who-we-are/who-we-are.avif";

export const aboutData = {
  title: "The One Behind",
  subtitle: "The Wheel",
  image: whoWeAreImg,
  rating: 4.7,
  clientsCount: "100+",
  skills: [
    "Product Design",
    "UX Design",
    "UI Design",
    "Framer",
    "Branding",
    "Animations",
    "Interaction Design",
    "Webflow",
    "UX Research",
    "Front-End Development",
    "No-Code",
    "Figma",
  ],
  experience: [
    {
      role: "Freelance",
      company: "GreenLeaf Co., UrbanFit Studio",
      period: "Jan 2020 - Present",
    },
    {
      role: "UX/UI Designer",
      company: "PixelCraft Studios",
      period: "May 2018 - Dec 2018",
    },
    {
      role: "Frontend Developer",
      company: "BrightWave Technologies",
      period: "March 2016 - April 2017",
    },
    {
      role: "Graphic Designer",
      company: "VistaWorks Agency",
      period: "June 2013 - Aug 2021",
    },
  ],
};

export const services = [
  {
    title: "Product Design",
    description:
      "We craft intuitive, user-centric digital products that drive engagement and conversion. We design for real-world.",
    icon: <WebIcon />,
    images: [offer1, offer2],
    size: 7,
  },
  {
    title: "Brand Identity Design",
    description:
      "Your brand is more than a logo. We build complete brand systems that express your vision, values, and voice - helping you stand out.",
    icon: <EmojiObjectsIcon />,
    size: 5,
  },
  {
    title: "Marketing & SEO",
    description:
      "We align creative storytelling with smart strategy. From content to technical SEO, we help you rank higher, and grow organically.",
    icon: <TrendingUpIcon />,
    size: 5,
  },
  {
    title: "Ads & Others",
    description:
      "Maximize your ROI with targeted precision- ad campaigns. Whether it’s Google, Meta, or LinkedIn.",
    icon: <GpsFixedIcon />,
    images: [offer2, offer1],
    size: 7,
  },
];

export const projects = [
  {
    title: "AtomAI",
    tags: ["SaaS", "Template"],
    image: atomaiMain,
    hoverImage: atomaiHover,
  },
  {
    title: "Landio",
    tags: ["SaaS", "Template"],
    image: landioMain,
    hoverImage: landioHover,
  },
  {
    title: "Polo",
    tags: ["Portfolio", "Template"],
    image: poloMain,
    hoverImage: atomaiHover, // Fallback
  },
  {
    title: "Portfolite",
    tags: ["Portfolio", "Template"],
    image: atomaiMain,
    hoverImage: landioHover, // Variation
  },
];

export const clientLogos = [
  { image: logo1 },
  { image: logo2 },
  { image: logo3 },
  { image: logo1 },
  { image: logo2 },
];

export const marqueeTags1 = [
  { label: "Creative Direction", icon: <PaletteIcon fontSize="small" /> },
  { label: "Web Development", icon: <CodeIcon fontSize="small" /> },
  { label: "UI/UX", icon: <DashboardIcon fontSize="small" /> },
  { label: "Brand Identity", icon: <BadgeIcon fontSize="small" /> },
];

export const marqueeTags2 = [
  { label: "Logo Design", icon: <ArchitectureIcon fontSize="small" /> },
  { label: "Visual Content Creation", icon: <ImageIcon fontSize="small" /> },
  { label: "Packaging Design", icon: <Inventory2Icon fontSize="small" /> },
  { label: "Art Direction", icon: <CameraAltIcon fontSize="small" /> },
  {
    label: "Design Consulting",
    icon: <ChatBubbleOutlineIcon fontSize="small" />,
  },
];

export const provenResults = [
  {
    company: "PixelRise Creative Solutions",
    logoText: "Funnel",
    metrics: [
      { label: "new customers", value: "100k+" },
      { label: "opportunity value", value: "$5m+" },
    ],
    testimonial: {
      quote:
        "The team delivered outstanding designs that perfectly captured our brand's essence. Every detail was thoughtful, polished, and user-centric. Collaborating with them was smooth and efficient.",
      author: "jerry nelson",
      rating: 5,
    },
    image:
      "https://framerusercontent.com/images/q3gTUOBoxKAobXGtZtKxUomvqTc.jpeg?scale-down-to=1024",
  },
  {
    company: "NexaCraft Innovations",
    logoText: "Nexa",
    metrics: [
      { label: "user growth", value: "70k+" },
      { label: "revenue increase", value: "120%" },
    ],
    testimonial: {
      quote:
        "Working with Fade Studio was a game-changer. They didn't just design a website; they built a brand identity that resonates with our audience.",
      author: "sarah smith",
      rating: 5,
    },
    image:
      "https://framerusercontent.com/images/UEn20HWHR8SAYg61F9bsmJDq9w.png?scale-down-to=1024",
  },
];
