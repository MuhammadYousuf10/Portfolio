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

export const aboutData = {
  header: {
    badge: "Who We Are",
    mainText: "The One Behind",
    italicText: "The Wheel",
  },
  title: "The One Behind",
  subtitle: "The Wheel",
  image: professionalBgImg,
  rating: 4.7,
  clientsCount: "100+",
  skills: [
    "Software Engineering",
    "SEO Strategy",
    "Frontend Development",
    "React / Next.js",
    "Node.js",
    "UI/UX Design",
    "Technical SEO",
    "Digital Marketing",
    "Framer",
    "Branding",
    "Animations",
    "Interaction Design",
    "System Architecture",
    "Product Design",
    "TypeScript",
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
    badge: "Why Us",
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
    badge: "Comparison",
    mainText: "Comparison",
    italicText: "Table",
    description:
      "See how we stack up against others in clarity, speed, and quality.",
  },
  personal: {
    title: "My Process",
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
    title: "Software Engineering",
    description:
      "Full-stack development with a focus on performance, scalability, and clean code. Building robust applications using modern technologies.",
    icon: <CodeIcon />,
    size: 7,
  },
  {
    title: "SEO & Digital Strategy",
    description:
      "Optimizing your digital presence for search engines. From technical SEO audits to content strategy that drives organic growth.",
    icon: <TrendingUpIcon />,
    size: 5,
  },
  {
    title: "UI/UX & Product Design",
    description:
      "Crafting intuitive and aesthetically pleasing user interfaces that provide seamless user experiences and solve real-world problems.",
    icon: <WebIcon />,
    size: 5,
  },
  {
    title: "Strategic Consulting",
    description:
      "Helping businesses navigate the digital landscape with technical insights and market-driven strategies for sustainable growth.",
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
    buttonText: "Contact Me",
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
        "Yousuf's expertise in both development and SEO was a game-changer. He didn't just build a website; he built a high-performing platform that ranks.",
      author: "Sarah Smith",
      rating: 5,
    },
    image:
      "https://framerusercontent.com/images/UEn20HWHR8SAYg61F9bsmJDq9w.png?scale-down-to=1024",
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
        avatar:
          "https://framerusercontent.com/images/UEn20HWHR8SAYg61F9bsmJDq9w.png?scale-down-to=512",
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
        role: "Software Engineer & SEO Specialist",
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
        role: "Software Engineer & SEO Specialist",
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
        role: "Software Engineer & SEO Specialist",
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
    { name: "WhatsApp", url: "https://wa.me/92310293747", icon: "WA" },
  ],
  testimonial: {
    rating: 5,
    text: "Adrian Carter's precision and creativity are unmatched. He transformed our vision into a digital masterpiece.",
    author: "Janny necolo",
  },
};

export const servicesHeader = {
  badge: "Services",
  mainText: "What We",
  italicText: "Offer",
  description: "Our services blend strategy and creativity to deliver impact.",
};

export const projectsHeader = {
  badge: "Projects",
  mainText: "Our Latest",
  italicText: "Projects",
  description: "Our projects showcase creativity and impact in every detail.",
  buttonText: "See All Projects",
};

export const heroData = {
  title: "Software Engineer & SEO Specialist",
  description:
    "I build high-performance web applications and optimize digital presence to drive measurable results through code and SEO strategy.",
  profileImg:
    "https://framerusercontent.com/images/UEn20HWHR8SAYg61F9bsmJDq9w.png?scale-down-to=512",
  bgImg:
    "https://framerusercontent.com/images/q3gTUOBoxKAobXGtZtKxUomvqTc.jpeg?scale-down-to=2048",
  rating: 4.9,
  clients: "20+",
  circularText: "Software Engineer • SEO Expert • ",
};

export const processData = {
  header: {
    mainText: "Process is",
    italicText: "Result",
    description:
      "Thoughtful, intentional design is what makes brands stand out.",
  },
  steps: [
    {
      id: 1,
      title: "Discover your brand",
      description:
        "We'll dive into your vision, audience, and goals to align design with purpose and clarity.",
      icon: "SearchIcon",
      step: "1",
    },
    {
      id: 2,
      title: "Design with clarity",
      description:
        "We translate strategy into visuals—crafted to be clean, consistent, memorable, and always on-brand.",
      icon: "DesignServicesIcon",
      step: "2",
    },
    {
      id: 3,
      title: "Deliver and refine with care",
      description:
        "Final designs are shared for review, with feedback shaping the perfect result every time.",
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
        "Adrian took our ideas and turned them into an impressive digital experience that feels fresh and strategic.",
    },
    {
      username: "@michelle56704",
      name: "james carter",
      quote:
        "Adrian delivered a bold, modern design that captured our vision and elevated our entire brand presence.",
    },
    {
      username: "@CreativEdge",
      name: "sarah smith",
      quote:
        "The attention to detail and unique perspective Adrian brings is unmatched. Our conversion rates have skyrocketed.",
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
    badge: "Reach out anytime",
    title: "Let’s Stay Connected",
    description:
      "Got questions or want to collaborate? Feel free to reach out—We are open to new projects or just a casual chat!",
  },
  contact: {
    buttonText: "Contact Me",
    downloadCVText: "Download CV",
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
