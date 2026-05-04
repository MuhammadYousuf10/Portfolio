import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "../theme/theme";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Yousuf | Engineering Scalable Digital Systems",
  description: "Advanced engineering for high-growth teams. We architect mission-critical web applications, AI-driven platforms, and scalable cloud systems that drive business impact.",
  keywords: ["Software Engineering Agency", "Full Stack Development", "Cloud Architecture", "AI Integration", "Next.js", "React", "Node.js", "System Design"],
  authors: [{ name: "Muhammad Yousuf" }],
  openGraph: {
    title: "Muhammad Yousuf | Engineering Scalable Digital Systems",
    description: "Architecting mission-critical systems and AI platforms for business growth.",
    url: "https://yousuf-portfolio.vercel.app",
    siteName: "Muhammad Yousuf Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yousuf | Engineering Scalable Digital Systems",
    description: "Engineering Partner for Scalable Web & AI Systems",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, minHeight: "100vh" }}>
              {children}
            </Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
