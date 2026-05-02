"use client";

import {
  Box,
  Container,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import navItems from "@/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ImageWrapper from "@/components/common/ImageWrapper";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import { smoothScrollTo } from "@/utils/scroll";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

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
        zIndex: 100,
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
                component={item.path.startsWith("/#") ? "button" : NextLink}
                href={item.path.startsWith("/#") ? undefined : item.path}
                onClick={(e) => {
                  if (item.path.startsWith("/#")) {
                    e.preventDefault();
                    smoothScrollTo(item.path.replace("/#", ""));
                  }
                }}
                variant="body1"
                sx={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  font: "inherit",
                  color: "inherit",
                }}
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

      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(15px)",
              zIndex: 2000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Mobile Menu Header */}
            <Container
              maxWidth="lg"
              sx={{
                py: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <MuiLink
                href="/"
                component={NextLink}
                onClick={handleDrawerToggle}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ImageWrapper
                  src="https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg"
                  alt="Logo"
                  width={80}
                  height={39}
                  priority={true}
                />
              </MuiLink>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: "white", p: 1 }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: 2,
                      bgcolor: "white",
                      top: "50%",
                      left: 0,
                      transform: "rotate(45deg)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: 2,
                      bgcolor: "white",
                      top: "50%",
                      left: 0,
                      transform: "rotate(-45deg)",
                    }}
                  />
                </Box>
              </IconButton>
            </Container>

            {/* Mobile Menu Links */}
            <Container
              maxWidth="lg"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "flex-start",
                pt: { xs: 4, sm: 6 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  width: "100%",
                  pl: { xs: 2, sm: 4 },
                }}
              >
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <MuiLink
                      component={
                        item.path.startsWith("/#") ? "button" : NextLink
                      }
                      href={item.path.startsWith("/#") ? undefined : item.path}
                      onClick={(e) => {
                        if (item.path.startsWith("/#")) {
                          e.preventDefault();
                          const targetId = item.path.replace("/#", "");
                          handleDrawerToggle();
                          // Use a slight delay to ensure the menu state change doesn't interrupt the scroll
                          setTimeout(() => {
                            smoothScrollTo(targetId);
                          }, 10);
                        } else {
                          handleDrawerToggle();
                        }
                      }}
                      sx={{
                        background: "none",
                        border: "none",
                        p: 0,
                        cursor: "pointer",
                        fontFamily: "inherit",
                        fontSize: { xs: "2.8rem", sm: "3.5rem" },
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 0.6)",
                        textDecoration: "none",
                        letterSpacing: "-0.04em",
                        transition: "all 0.3s ease",
                        textAlign: "left",
                        display: "block", // Required for transform
                        width: "fit-content",
                        "&:hover": {
                          color: "#FFFFFF",
                          transform: "translateX(15px)",
                        },
                      }}
                    >
                      {item?.name}
                    </MuiLink>
                  </motion.div>
                ))}
              </Box>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
