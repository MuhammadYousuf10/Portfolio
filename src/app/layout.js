import { Inter } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme/muiTheme";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fade Clone",
  description: "A clone of the Fade template using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {/* {children} */}
        </ThemeProvider>
      </body>
    </html>
  );
}
