import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "../theme/theme";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fade Clone",
  description: "A clone of the Fade template using Next.js",
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
