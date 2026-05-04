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
import practicalMain from "@/assets/projects/practical-main.avif";
import practicalHover from "@/assets/projects/practical-hover.avif";
import practicalDetail from "@/assets/projects/practical-detail.avif";
import connectdevsMain from "@/assets/projects/connectdevs-main.avif";
import connectdevsHover from "@/assets/projects/connectdevs-hover.avif";
import connectdevsDetail from "@/assets/projects/connectdevs-detail.avif";
import connectdevsPortalMain from "@/assets/projects/connectdevs-portal-main.avif";
import connectdevsPortalHover from "@/assets/projects/connectdevs-portal-hover.avif";
import connectdevsPortalDetail from "@/assets/projects/connectdevs-portal-detail.avif";
import horizonMain from "@/assets/projects/horizon-main.avif";
import horizonHover from "@/assets/projects/horizon-hover.avif";
import horizonDetail from "@/assets/projects/horizon-detail.avif";
import livingmuseumMain from "@/assets/projects/livingmuseum-main.avif";
import livingmuseumHover from "@/assets/projects/livingmuseum-hover.avif";
import livingmuseumDetail from "@/assets/projects/livingmuseum-detail.avif";
import lunateMain from "@/assets/projects/lunate-main.avif";
import lunateHover from "@/assets/projects/lunate-hover.avif";
import lunateDetail from "@/assets/projects/lunate-detail.avif";

// Image Imports - Logos
import logo1 from "@/assets/projects/project-logo1.avif";
import logo2 from "@/assets/projects/project-logo2.avif";
import logo3 from "@/assets/projects/project-logo3.avif";

// Image Imports - Services
import offer1 from "@/assets/services/what-we-offer1.avif";
import offer2 from "@/assets/services/what-we-offer2.avif";

// Image Imports - About
import whoWeAreImg from "@/assets/who-we-are/who-we-are.avif";
import professionalBgImg from "@/assets/why-us/professional-bg.avif";

// Image Imports - Blogs
import blog1 from "@/assets/blogs/blog1.avif";
import blog2 from "@/assets/blogs/blog2.avif";
import blogBanner from "@/assets/blogs/blog-banner.avif";
import profileHero from "@/assets/profile/hero-profile.jpg";
import profileAbout from "@/assets/profile/about-profile.jpg";
import profileAvatar from "@/assets/profile/avatar-profile.jpg";
import profileCinematic from "@/assets/profile/cinematic-profile.jpg";
import profileSuit from "@/assets/profile/suit-profile.jpg";

export const aboutData = {
  header: {
    badge: "The Technical Partner",
    mainText: "Engineering Business",
    italicText: "Growth",
  },
  title: "Engineering Business",
  subtitle: "Growth",
  image: profileAbout,
  rating: 4.9,
  clientsCount: "100+",
  skills: [
    "Full Stack Development",
    "Cloud Architecture",
    "System Design",
    "React / Next.js",
    "Node.js / Express",
    "TypeScript",
    "PostgreSQL / MongoDB",
    "AWS / Azure",
    "Docker / Kubernetes",
    "Microservices",
    "GraphQL / REST APIs",
    "CI/CD Pipelines",
  ],
  experience: [
    {
      role: "Full Stack Engineer",
      company: "Self-Employed / Freelance",
      period: "2021 - Present",
    },
    {
      role: "Frontend Developer",
      company: "Tech Startup (Contract)",
      period: "2020 - 2021",
    },
    {
      role: "Web Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
    },
    {
      role: "Junior Developer",
      company: "Software House",
      period: "2018 - 2019",
    },
  ],
};

export const whyUsData = {
  header: {
    badge: "The Advantage",
    mainText: "Why Partner With",
    italicText: "Us",
    description:
      "We don't just write code; we build technical foundations that enable companies to scale, innovate, and dominate their markets.",
  },
  card1: {
    image: profileSuit,
    subtitle: "— MISSION CRITICAL ENGINEERING —",
    title: "Performance \n First",
    features: ["Sub-second Load Times", "99.9% System Uptime"],
  },
  card2: {
    title: "Scalability by design",
    description:
      "Our architectures are built to handle traffic surges and data growth without breaking a sweat, ensuring your business stays online when it matters most.",
    features: ["Microservices Architecture", "Auto-scaling Infrastructure"],
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
    badge: "The Agency Edge",
    mainText: "The Strategy",
    italicText: "Difference",
    description:
      "Compare our engineering-first approach against standard development cycles.",
  },
  personal: {
    title: "Our Approach",
    items: [
      "Enterprise-Grade Scalability",
      "Rigorous Security Standards",
      "Proactive Problem Solving",
      "Performance-First Mentality",
      "Modern AI Integration",
      "Clean, Maintainable Code",
      "Data-Driven Decisions",
      "Seamless CI/CD Pipelines",
      "Strategic Technical Debt Management",
      "Post-Launch Growth Support",
    ],
  },
  others: {
    title: "Standard Devs",
    items: [
      "Fragile Architectures",
      "Opaque Documentation",
      "Inconsistent Testing",
      "Surface-Level Solutions",
      "Lack of Long-Term Vision",
    ],
  },
  footer: {
    title: "Ready to upgrade your technical foundation?",
    buttonText: "Start the Conversation",
  },
};

export const pricingData = {
  header: {
    badge: "Pricing",
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
    title: "Enterprise Web Engineering",
    description:
      "Building high-performance, mission-critical web applications using React, Next.js, and Node.js. Focused on speed, security, and global scale.",
    icon: <CodeIcon />,
    size: 7,
  },
  {
    title: "AI & Intelligent Systems",
    description:
      "Integrating cutting-edge AI and LLM capabilities into your business workflows to automate tasks and unlock new value from your data.",
    icon: <TrendingUpIcon />,
    size: 5,
  },
  {
    title: "Architecture & Cloud Strategy",
    description:
      "Designing resilient cloud-native systems on AWS and Azure. We optimize infrastructure for maximum performance and cost-efficiency.",
    icon: <WebIcon />,
    size: 5,
  },
  {
    title: "Technical Product Strategy",
    description:
      "We partner with founders and stakeholders to translate business vision into technical roadmaps that drive growth and ROI.",
    icon: <EmojiObjectsIcon />,
    size: 7,
  },
];

export const projects = [
  {
    slug: "practical",
    title: "PractiCal",
    tags: ["E-commerce", "Food Delivery"],
    link: "https://practical.me/",
    image: practicalMain,
    hoverImage: practicalHover,
    description:
      "Home delivery Meal Plans to help you eat better, every day across Dubai, Abu Dhabi and the UAE.",
    services: "Web Development, UI/UX Design",
    tools: "Next.js, React",
    value: "Custom",
    timeline: "8 Weeks",
    introduction: {
      badge: "Introduction",
      title: "Building a seamless meal plan subscription platform",
      description:
        "PractiCal needed a modern platform to offer home delivery meal plans that help users eat better every day across the UAE.",
      image: practicalMain,
    },
    problem: {
      badge: "Problem",
      description:
        "Users needed an easy, intuitive way to customize and subscribe to daily healthy meals without hassle.",
      image: practicalHover,
    },
    solution: {
      badge: "Solution",
      description:
        "We built a fully custom web application with a streamlined onboarding, meal customization, and subscription flow.",
      image: practicalDetail,
    },
    conclusion:
      "PractiCal successfully expanded its user base across the UAE with a high retention rate and seamless user experience.",
  },
  {
    slug: "connectdevs",
    title: "ConnectDevs",
    tags: ["SaaS", "AI Platform"],
    link: "https://connectdevs.com/",
    image: connectdevsMain,
    hoverImage: connectdevsHover,
    description:
      "The AI-powered recruiter that empowers hiring teams to source, enrich, and screen talent in minutes.",
    services: "Platform Development, AI Integration",
    tools: "React, Python, AWS",
    value: "Custom",
    timeline: "12 Weeks",
    introduction: {
      badge: "Introduction",
      title:
        "Revolutionizing the hiring process with an AI-powered smart hiring engine",
      description:
        "ConnectDevs set out to solve the problem of traditional hiring pipelines by using AI to source top talent from 800M+ profiles faster than any recruiter.",
      image: connectdevsMain,
    },
    problem: {
      badge: "Problem",
      description:
        "Hiring teams were buried in applications and struggling to find top talent among millions of profiles, wasting time and resources.",
      image: connectdevsHover,
    },
    solution: {
      badge: "Solution",
      description:
        "Developed a comprehensive platform featuring natural language search, domain-expert AI interviewers, and automated profile enrichment.",
      image: connectdevsDetail,
    },
    conclusion:
      "ConnectDevs helps companies save 90% on hiring costs while delivering high-quality, pre-screened technical talent.",
  },
  {
    slug: "connectdevs-portal",
    title: "ConnectDevs Portal",
    tags: ["SaaS", "Dashboard"],
    link: "https://app.connectdevs.com/register",
    image: connectdevsPortalMain,
    hoverImage: connectdevsPortalHover,
    description:
      "The ConnectDevs recruiter portal — a powerful dashboard where hiring teams source, enrich, and screen top talent using AI-driven workflows.",
    services: "Web App Development, UX Design",
    tools: "React, Node.js, AWS",
    value: "Custom",
    timeline: "10 Weeks",
    introduction: {
      badge: "Introduction",
      title: "Building the recruiter command center for AI-powered hiring",
      description:
        "The ConnectDevs Portal is the operational heart of the platform — giving hiring teams a centralized dashboard to manage candidates, run AI interviews, and track the full hiring pipeline in real time.",
      image: connectdevsPortalMain,
    },
    problem: {
      badge: "Problem",
      description:
        "Recruiters lacked a unified workspace to manage sourcing, screening, and interviewing — jumping between multiple tools caused inefficiencies and missed opportunities.",
      image: connectdevsPortalHover,
    },
    solution: {
      badge: "Solution",
      description:
        "We designed and built a streamlined recruiter portal with role-based dashboards, AI interview scheduling, candidate pipeline management, and real-time analytics — all in one cohesive experience.",
      image: connectdevsPortalDetail,
    },
    conclusion:
      "The ConnectDevs Portal drastically reduced time-to-hire and gave recruiting teams complete visibility and control over their hiring workflows.",
  },
  {
    slug: "horizon-university",
    title: "Horizon University College",
    tags: ["Education", "Corporate"],
    link: "https://www.hu.ac.ae/",
    image: horizonMain,
    hoverImage: horizonHover,
    description:
      "A leading higher education institution in the UAE offering programs in Business and Computing.",
    services: "Educational Portal, Web Redesign",
    tools: "Web Development",
    value: "Custom",
    timeline: "10 Weeks",
    introduction: {
      badge: "Introduction",
      title: "Modernizing the digital presence for a prominent university",
      description:
        "Horizon University College needed a modern, accessible platform to share news, programs, and resources with students, parents, and partners.",
      image: horizonMain,
    },
    problem: {
      badge: "Problem",
      description:
        "The previous digital infrastructure made it difficult for stakeholders to find relevant information regarding academics and campus life.",
      image: horizonHover,
    },
    solution: {
      badge: "Solution",
      description:
        "Designed and developed a user-friendly, informative portal with distinct sections for different stakeholders and seamless integration with their LMS.",
      image: horizonDetail,
    },
    conclusion:
      "The new platform significantly improved information accessibility and engagement for the university community.",
  },
  {
    slug: "living-museum",
    title: "The Living Museum",
    tags: ["Culture", "Tourism"],
    link: "https://www.livingmuseum.com/en/",
    image: livingmuseumMain,
    hoverImage: livingmuseumHover,
    description:
      "A digital gateway to AlUla — showcasing over 200,000 years of human heritage, arts, and natural wonders in Saudi Arabia.",
    services: "Web Development, UI/UX Design",
    tools: "Next.js, React",
    value: "Custom",
    timeline: "14 Weeks",
    introduction: {
      badge: "Introduction",
      title: "Bringing AlUla's rich heritage to a global digital audience",
      description:
        "The Living Museum needed an immersive digital platform to showcase AlUla's 200,000+ years of human history, world-class art installations, and breathtaking natural landscapes to a global audience.",
      image: livingmuseumMain,
    },
    problem: {
      badge: "Problem",
      description:
        "The vast scope of AlUla's cultural, artistic, and natural heritage required a cohesive digital experience that could engage diverse audiences — from art enthusiasts to history scholars and tourists.",
      image: livingmuseumHover,
    },
    solution: {
      badge: "Solution",
      description:
        "We crafted a visually stunning, content-rich website with dedicated sections for Human Heritage, Arts, Natural Heritage, and Intangible Heritage — complete with interactive exhibitions, video stories, and multilingual support.",
      image: livingmuseumDetail,
    },
    conclusion:
      "The Living Museum successfully became a digital ambassador for AlUla, driving global awareness and engagement with its unique cultural and natural treasures.",
  },
  {
    slug: "lunate",
    title: "Lunate",
    tags: ["Finance", "Corporate"],
    link: "https://lunate.com/",
    image: lunateMain,
    hoverImage: lunateHover,
    description:
      "A leading alternative investment manager headquartered in Abu Dhabi, with USD 115 billion in assets under management.",
    services: "Web Development, Corporate Design",
    tools: "Web Development",
    value: "Custom",
    timeline: "10 Weeks",
    introduction: {
      badge: "Introduction",
      title:
        "Crafting a premium digital presence for a global investment powerhouse",
      description:
        "Lunate needed a sophisticated corporate website that reflects its stature as a leading alternative investment manager with USD 115 billion in AuM, while clearly communicating its diverse investment strategies and solutions.",
      image: lunateMain,
    },
    problem: {
      badge: "Problem",
      description:
        "Communicating complex investment strategies, asset classes, and corporate information to a diverse audience of institutional investors, family offices, and corporates required clarity without sacrificing sophistication.",
      image: lunateHover,
    },
    solution: {
      badge: "Solution",
      description:
        "Developed an elegant, video-driven corporate website with intuitive navigation across investment strategies, asset classes, and solutions — featuring multilingual support and a streamlined news & insights section.",
      image: lunateDetail,
    },
    conclusion:
      "Lunate's digital platform effectively positions the firm as a world-class investment leader, providing stakeholders with clear access to strategies, insights, and partnership opportunities.",
  },
];

export const projectsPageData = {
  header: {
    mainText: "The Design Of",
    italicText: "Success",
    trustedText: "Trusted by 10,000+ Audience worldwide",
    buttonText: "Request a Proposal",
  },
  trustedAvatars: [
    "https://framerusercontent.com/images/q3gTUOBoxKAobXGtZtKxUomvqTc.jpeg?scale-down-to=1024",
    "https://framerusercontent.com/images/UEn20HWHR8SAYg61F9bsmJDq9w.png?scale-down-to=1024",
    "https://framerusercontent.com/images/JOe12C6fPKzVmRUdr0wnFdxrZE.jpg",
  ],
};

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
    company: "E-Commerce Platform",
    logoText: "Scale",
    metrics: [
      { label: "page load improvement", value: "3x" },
      { label: "conversion rate increase", value: "42%" },
    ],
    testimonial: {
      quote:
        "Muhammad re-architected our entire frontend from scratch. The performance gains were immediate and measurable — our checkout conversion jumped significantly within weeks.",
      author: "Client — E-Commerce Lead",
      rating: 5,
    },
    image: practicalDetail,
  },
  {
    company: "SaaS Dashboard Product",
    logoText: "SaaS",
    metrics: [
      { label: "features shipped", value: "30+" },
      { label: "dev cycle reduction", value: "60%" },
    ],
    testimonial: {
      quote:
        "Yousuf built our entire admin dashboard and API layer. His clean architecture and attention to scalability saved us months of technical debt down the road.",
      author: "Client — SaaS Founder",
      rating: 5,
    },
    image: horizonDetail,
  },
];

export const faqData = {
  header: {
    badge: "FAQ",
    mainText: "Your Questions",
    italicText: "Answered",
    description:
      "Find the answers to our most common questions here, but if you still need help, feel free to contact me.",
  },
  buttonText: "Contact Us",
  items: [
    {
      question: "What kind of projects do you take on?",
      answer:
        "I specialize in full-stack web applications, AI-integrated platforms, cloud infrastructure, and scalable APIs. I work with startups, product teams, and businesses looking to build or scale their digital products.",
    },
    {
      question: "What does your development process look like?",
      answer:
        "I follow a structured approach: discovery & planning, architecture design, iterative development with code reviews, testing, and CI/CD deployment. I keep clients informed at every milestone.",
    },
    {
      question: "Can you work with an existing codebase?",
      answer:
        "Absolutely. I regularly onboard onto existing projects for feature development, performance optimization, refactoring, or technical leadership. I'll audit the codebase first to assess scope.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines depend on scope and complexity. A focused feature or MVP can ship in 2–4 weeks. A full-scale product typically ranges from 6 weeks to 3 months. I'll provide a clear estimate after scoping.",
    },
  ],
};

export const blogData = {
  header: {
    badge: "Blog",
    mainText: "Our Latest",
    italicText: "Insights",
    description:
      "Insights, ideas, and inspiration from the studio—exploring our work, design thinking, tools, and the stories behind the brands we help bring to life.",
  },
  buttonText: "See All Posts",
  posts: [
    {
      slug: "why-user-experience-is-the-most-valuable-part-of-your-website",
      date: "Nov 18, 2024",
      title: "Why User Experience Is the Most Valuable Part of Your Website",
      image: blogBanner,
      featured: true,
      author: {
        name: "Muhammad Yousuf",
        role: "Frontend Engineer",
        avatar: profileAvatar,
      },
      description:
        "User experience isn't just about how a website looks; it's about how it works and how it makes people feel. In a digital world where attention is the new currency, UX is your most valuable asset.",
      content: `
        <h2>The Foundation of Digital Trust</h2>
        <p>In today's fast-paced digital landscape, users decide whether to stay on your site or leave within seconds. This split-second decision is rarely based on content alone—it's based on the initial experience.</p>
        <p>A well-designed user experience builds trust. When a site is easy to navigate, loads quickly, and provides value intuitively, users feel respected. This respect translates into brand loyalty and, ultimately, conversions.</p>
        
        <h2>Designing for the Human Mind</h2>
        <p>UX design is as much about psychology as it is about pixels. By understanding how users process information and what drives their behavior, we can create interfaces that feel natural rather than forced.</p>
        <p>Consistency is key. Whether it's the placement of a button or the tone of the copy, every element must work in harmony to guide the user toward their goal without friction.</p>

        <h2>Impact Beyond the Screen</h2>
        <p>Great UX isn't just a design choice—it's a business strategy. Companies that prioritize user experience consistently outperform their competitors in terms of revenue growth and customer retention.</p>
        <p>Investing in UX is investing in your brand's future. It's the difference between a one-time visitor and a lifelong advocate.</p>
      `,
    },
    {
      slug: "why-prioritizing-mobile-users-matters-more-than-ever",
      date: "Nov 12, 2024",
      title: "Why Prioritizing Mobile Users Matters More Than Ever",
      image: blog2,
      author: {
        name: "Muhammad Yousuf",
        role: "Senior Software Engineer",
      },
      description:
        "With over 60% of web traffic coming from mobile devices, a mobile-first approach is no longer optional—it's essential for survival.",
      content: "Detailed content about mobile-first design...",
    },
    {
      slug: "why-audience-centered-design-creates-more-impactful",
      date: "Nov 9, 2024",
      title: "Why Audience-Centered Design Creates More Impactful...",
      image: blog1,
      author: {
        name: "Muhammad Yousuf",
        role: "Senior Software Engineer",
      },
      description:
        "Designing for everyone often means designing for no one. Learn why niche-focused design leads to better results.",
      content: "Detailed content about audience-centered design...",
    },
    {
      slug: "how-testimonials-help-build-lasting-trust-online",
      date: "Oct 23, 2024",
      title: "How Testimonials Help Build Lasting Trust Online",
      image: blog2,
      author: {
        name: "Muhammad Yousuf",
        role: "Senior Software Engineer",
      },
      description:
        "Social proof is a powerful tool. Discover how to use testimonials to build credibility and trust.",
      content: "Detailed content about testimonials...",
    },
    {
      slug: "the-power-of-minimalist-design-in-modern-web",
      date: "Oct 15, 2024",
      title: "The Power of Minimalist Design in Modern Web",
      image: blog1,
      author: {
        name: "Muhammad Yousuf",
        role: "Software Engineer & SEO Specialist",
      },
      description:
        "Less is more. Explore the principles of minimalism and how they can improve your site's focus.",
      content: "Detailed content about minimalism...",
    },
    {
      slug: "why-speed-is-the-most-important-ux-feature",
      date: "Oct 10, 2024",
      title: "Why Speed is the Most Important UX Feature",
      image: blogBanner,
      author: {
        name: "Muhammad Yousuf",
        role: "Software Engineer & SEO Specialist",
      },
      description:
        "A slow site is a broken site. Learn why performance optimization should be your top priority.",
      content: "Detailed content about site speed...",
    },
    {
      slug: "mastering-the-art-of-color-theory-in-branding",
      date: "Oct 5, 2024",
      title: "Mastering the Art of Color Theory in Branding",
      image: blog1,
      author: {
        name: "Muhammad Yousuf",
        role: "Software Engineer & SEO Specialist",
      },
      description:
        "Colors speak louder than words. Learn how to choose the perfect palette for your brand identity.",
      content: "Detailed content about color theory...",
    },
  ],
};

export const contactPageData = {
  header: {
    mainText: "Get in touch",
    italicText: "Now",
    description:
      "Find the answers to our most common questions here, but if you still need help, feel free to contact me.",
  },
  stats: [
    { label: "Happy clients", value: "100+" },
    { label: "Revenue added", value: "$250m" },
    { label: "Average Rating", value: "4.8" },
  ],
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-yousuf-software-engineer",
      icon: "IN",
    },
    { name: "WhatsApp", url: "https://wa.me/923102983747", icon: "WA" },
  ],
  testimonial: {
    rating: 5,
    text: "Adrian Carter's precision and creativity are unmatched. He transformed our vision into a digital masterpiece.",
    author: "Janny necolo",
  },
};

export const servicesHeader = {
  badge: "Capabilities",
  mainText: "What We",
  italicText: "Deliver",
  description: "Advanced engineering meets strategic business impact.",
};

export const projectsHeader = {
  badge: "Projects",
  mainText: "Our Latest",
  italicText: "Projects",
  description: "Our projects showcase creativity and impact in every detail.",
  buttonText: "See All Projects",
};

export const heroData = {
  title: "Engineering Scalable Digital Systems",
  description: "Architecting mission-critical applications and AI-driven platforms that drive measurable business impact.",
  profileImg: profileHero,
  bgImg: "https://framerusercontent.com/images/q3gTUOBoxKAobXGtZtKxUomvqTc.jpeg?scale-down-to=2048",
  rating: 4.9,
  clients: "20+",
  circularText: "Technical Partner • System Architect • ",
};

export const processData = {
  header: {
    mainText: "Execution is",
    italicText: "Everything",
    description: "Our rigorous engineering process ensures your product is built to last and ready to scale.",
  },
  steps: [
    {
      id: 1,
      title: "Strategic Discovery",
      description: "We deep-dive into your business objectives, target audience, and technical requirements to define a clear roadmap for success.",
      icon: "SearchIcon",
      step: "1",
    },
    {
      id: 2,
      title: "Robust Engineering",
      description: "We architect and develop your solution using modern, scalable technologies, ensuring performance, security, and maintainability.",
      icon: "DesignServicesIcon",
      step: "2",
    },
    {
      id: 3,
      title: "Optimized Delivery",
      description: "We deploy with zero downtime and provide continuous monitoring and refinement to ensure peak performance as you scale.",
      icon: "RocketLaunchIcon",
      step: "3",
    },
  ],
};

export const testimonialsData = {
  header: {
    badge: "Testimonials",
    trustedText: "5000+ Audience worldwide",
  },
  items: [
    {
      username: "@DesignGenius87",
      name: "pot mov",
      quote:
        "Yousuf took our complex requirements and turned them into a seamless digital system that scales perfectly.",
    },
    {
      username: "@michelle56704",
      name: "james carter",
      quote:
        "The team delivered a high-performance, modern platform that transformed our digital presence and operations.",
    },
    {
      username: "@CreativEdge",
      name: "sarah smith",
      quote:
        "The technical depth and strategic perspective Yousuf brings is unmatched. Our platform's efficiency has skyrocketed.",
    },
    {
      username: "@BrandMaster",
      name: "alex johnson",
      quote:
        "Yousuf delivered exactly what we needed. Clean design and perfect technical execution.",
    },
    {
      username: "@WebWizard",
      name: "lisa wong",
      quote:
        "Seamless collaboration and stunning results. They really understand modern aesthetics and UX.",
    },
    {
      username: "@TechLead_99",
      name: "mark davis",
      quote:
        "Highly recommended for anyone looking to stand out. The designs are not just pretty, they work.",
    },
  ],
  avatars: [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
  ],
};

export const provenResultsHeader = {
  badge: "Results",
  mainText: "Proven",
  italicText: "Results",
  description: "Simple, streamlined process is what gets you results",
};

export const footerData = {
  header: {
    badge: "Scale your business",
    title: "Let’s Build Something Iconic",
    description:
      "Partner with a dedicated technical team that understands your business goals as much as your code.",
  },
  contact: {
    buttonText: "Schedule a Strategy Call",
    downloadCVText: "Download Deck",
    email: "m.yousufuddin10@gmail.com",
  },
  bottom: {
    copyright: "Muhammad Yousuf. All rights reserved.",
    links: [
      { text: "Download Resume", url: "/resume.pdf" },
      { text: "Made by Muhammad Yousuf", url: "#" },
      { text: "Built with Next.js & MUI", url: "#" },
    ],
  },
};
