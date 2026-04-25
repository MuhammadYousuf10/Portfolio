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
import professionalBgImg from "@/assests/why-us/professional-bg.avif";

// Image Imports - Blogs
import blog1 from "@/assests/blogs/blog1.avif";
import blog2 from "@/assests/blogs/blog2.avif";
import blogBanner from "@/assests/blogs/blog-banner.avif";

export const aboutData = {
  title: "The One Behind",
  subtitle: "The Wheel",
  image: professionalBgImg,
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

export const whyUsData = {
  header: {
    mainText: "Why Even",
    italicText: "Us",
    description:
      "We craft innovative designs that elevate your brand and engage your audience in a world of endless noise.",
  },
  card1: {
    image: whoWeAreImg,
    subtitle: "— ELITE DESIGN IS NOW YOURS —",
    title: "We Are \n Professionals",
    features: ["Industry Experts", "World Class Talent"],
  },
  card2: {
    title: "24/7 priority care",
    description:
      "Receive priority treatment for urgent tasks, with an average response time of 24 hours for high-priority.",
    features: ["Unlimited Revisions", "Dedicated 24/7 Support"],
  },
  card3: {
    title: "Perfection leads to growth",
    description:
      "Need edits? We include 4 post-launch revisions to ensure everything feels just right.",
    chartSubtitle: "Business Growth",
    chartDate: "last 60 days",
    chartValue: "$80,376",
    ratingText: "Happy 5 Star Users",
  },
};

export const comparisonData = {
  header: {
    mainText: "Comparison",
    italicText: "Table",
    description:
      "See how we stack up against others in clarity, speed, and quality.",
  },
  fade: {
    title: "Fade",
    items: [
      "Exceptional Design Quality",
      "Attention to Detail",
      "Transparent Communication",
      "Consistent Branding",
      "Rapid Delivery Times",
      "Scalable Design Systems",
      "Customized Solutions",
      "Collaborative Workflow",
      "Strategy-Driven Approach",
      "Ongoing Client Support",
    ],
  },
  others: {
    title: "Others",
    items: [
      "Basic Design Output",
      "Limited Communication",
      "Slow Turnarounds",
      "Generic Templates",
      "Minimal Post-Project Support",
    ],
  },
  footer: {
    title: "Delivering Designs with unmatched precision and speed.",
    buttonText: "Contact Us",
  },
};

export const pricingData = {
  header: {
    mainText: "Simple Pricing,",
    italicText: "No Surprises",
    description:
      "Choose a plan that fits your goals and creative needs perfectly.",
  },
  monthly: {
    price: "$1750",
    period: "/month",
    features: [
      "Unlimited Requests",
      "Fast Turnarounds",
      "Fixed Monthly Rate",
      "Ongoing Collaboration",
      "Pause or Cancel Anytime",
    ],
  },
  project: {
    price: "Custom",
    period: "",
    features: [
      "One-Time Fee",
      "Defined Timeline",
      "Tailored to Scope",
      "Revisions Included",
      "Best for Launches",
    ],
  },
  addOn: {
    title: "Hero Section Revamp",
    description:
      "This is the service we are providing so that you can test our services as a demo.",
    price: "$97",
    period: "one time payment",
  },
  testimonial: {
    quote:
      '"Truly a talented team! They brought our brand to life with precision and creativity. Every design felt intentional, polished, and user-focused. Working with them was effortless."',
    author: "Janny necolo",
    avatar:
      "https://framerusercontent.com/images/q3gTUOBoxKAobXGtZtKxUomvqTc.jpeg?scale-down-to=1024",
  },
  buttonText: "Get Started Now",
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
      rating: 3,
    },
    image:
      "https://framerusercontent.com/images/UEn20HWHR8SAYg61F9bsmJDq9w.png?scale-down-to=1024",
  },
];

export const faqData = {
  header: {
    mainText: "Your Questions",
    italicText: "Answered",
    description:
      "Find the answers to our most common questions here, but if you still need help, feel free to contact me.",
  },
  buttonText: "Contact Us",
  items: [
    {
      question: "What services does you offer?",
      answer:
        "I specialize in branding, UI/UX design, web design, and creative strategy— delivering tailored solutions that elevate your business visually and functionally.",
    },
    {
      question: "What's your typical design process?",
      answer:
        "My process typically involves research, ideation, prototyping, and final implementation, ensuring clear communication at every step.",
    },
    {
      question: "What is your approach to web design?",
      answer:
        "I focus on creating user-centric, aesthetically pleasing, and highly functional designs that perfectly align with your brand's core values.",
    },
    {
      question: "How long does project usually take?",
      answer:
        "Project timelines vary depending on scope and complexity, but generally range from a few weeks to a couple of months.",
    },
  ],
};

export const blogData = {
  header: {
    mainText: "Our Latest",
    italicText: "Insights",
    description:
      "Insights, ideas, and inspiration from the studio—exploring our work, design thinking, tools, and the stories behind the brands we help bring to life.",
  },
  buttonText: "See All Posts",
  posts: [
    {
      date: "Nov 18, 2024",
      title: "Why User Experience Is the Most Valuable Part of Your Website",
      image: blogBanner,
      featured: true,
    },
    {
      date: "Nov 12, 2024",
      title: "Why Prioritizing Mobile Users Matters More Than Ever",
      image: blog2,
    },
    {
      date: "Nov 9, 2024",
      title: "Why Audience-Centered Design Creates More Impactful...",
      image: blog1,
    },
    {
      date: "Nov 5, 2024",
      title: "Emerging Web Design Shifts That Will Define 2024",
      image: blog1,
    },
    {
      date: "Oct 23, 2024",
      title: "How Testimonials Help Build Lasting Trust Online",
      image: blog2,
    },
  ],
};
