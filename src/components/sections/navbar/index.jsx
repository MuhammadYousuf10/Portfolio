"use client";

import { Box, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import navItems from "@/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ImageWrapper from "@/components/common/imageWrapper";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  return (
    <motion.header
      initial={false}
      animate={{ height: mobileOpen && isMobile ? "50vh" : "auto" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(10, 10, 10, 0.75)", // Using direct rgba for header background transparency since theme paper is fully opaque.
        borderBottom: `2px solid ${theme.palette.divider}`,
        opacity: 1,
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
        <MuiLink href="/" component={NextLink}>
          <ImageWrapper
            src="https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg"
            alt="Logo"
            width={80}
            height={39}
            priority={true}
          />
        </MuiLink>

        {/* Desktop Nav */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4 }}>
            {navItems?.map((item) => (
              <MuiLink
                key={item.name}
                component={NextLink}
                href={item.path}
                variant="body1"
              >
                {item.name}
              </MuiLink>
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
                backgroundColor: theme.palette.text.primary,
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
                backgroundColor: theme.palette.text.primary,
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
                  <MuiLink
                    key={item.name}
                    component={NextLink}
                    href={item.path}
                    variant="body1"
                    onClick={handleDrawerToggle}
                  >
                    {item?.name}
                  </MuiLink>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
