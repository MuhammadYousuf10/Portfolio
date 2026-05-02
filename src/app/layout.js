import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "../theme/theme";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Yousuf | Software Engineer",
  description:
    "Official portfolio of Muhammad Yousuf, a Software Engineer focused on building high-performance web applications and driving organic growth.",
  keywords: [
    "Software Engineer",
    "SEO Specialist",
    "Frontend Developer",
    "Next.js",
    "React",
    "Digital Marketing",
    "Technical SEO",
    "Web Development",
  ],
  authors: [{ name: "Muhammad Yousuf" }],
  openGraph: {
    title: "Muhammad Yousuf | Software Engineer & SEO Specialist",
    description:
      "I build high-performance web applications and optimize digital presence.",
    url: "https://yousuf-portfolio.vercel.app", // Example URL, user can update
    siteName: "Muhammad Yousuf Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yousuf | Software Engineer & SEO Specialist",
    description: "Software Engineer & SEO Expert",
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
