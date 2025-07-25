"use client";

import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Link from "next/link";
import ImageWrapper from "../imageWrapper";
import navItems from "@/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  return (
    <motion.header
      initial={false}
      // animate={{ height: mobileOpen ? "auto" : "auto" }}
      animate={{ height: mobileOpen && isMobile ? "50vh" : "auto" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        // backgroundColor: "rgba(8, 9, 10, 0.75)",
        backgroundColor: "rgb(0, 1, 1)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link href="/" passHref>
          <ImageWrapper
            src="https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg"
            alt="Logo"
            width={80}
            height={39}
          />
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4 }}>
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} passHref>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    fontWeight: 400,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>
        )}
        {isMobile && (
          <Box
            onClick={handleDrawerToggle}
            sx={{
              width: 24,
              height: 24,
              position: "relative",
              zIndex: 1101,
              cursor: "pointer",
            }}
          >
            {/* Top bar */}
            <motion.span
              animate={{
                rotate: mobileOpen ? 45 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                width: "100%",
                height: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                top: 0,
                left: 0,
              }}
            />

            {/* Bottom bar */}
            <motion.span
              animate={{
                rotate: mobileOpen ? -45 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                width: "100%",
                height: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                top: mobileOpen ? 0 : 6,
                left: 0,
              }}
            />
          </Box>
        )}
      </Container>

      {/* Mobile Nav Items */}

      <AnimatePresence mode="wait">
        {mobileOpen && isMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "42px",
              }}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.path}
                    passHref
                    style={{ textDecoration: "none", margin: 0 }}
                  >
                    <Typography
                      onClick={handleDrawerToggle}
                      sx={{
                        fontSize: 16,
                        fontWeight: 500,
                        cursor: "pointer",
                        color: "#ffffff99",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
