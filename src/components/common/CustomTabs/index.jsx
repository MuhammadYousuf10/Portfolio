"use client";

import React from "react";
import { Box, Typography, alpha } from "@mui/material";
import { motion } from "framer-motion";

const CustomTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <Box
      sx={(theme) => ({
        display: "inline-flex",
        alignItems: "center",
        alignSelf: "flex-start",
        position: "relative",
        overflow: "hidden",
        p: "3px",
        borderRadius: "6px",
        bgcolor: alpha(theme.palette.background.default, 0.75),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.04)}`,
        boxShadow: `inset 0 1px 0 ${alpha(theme.palette.primary.main, 0.06)}`,
      })}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <Box
            key={tab.value}
            onClick={() => onChange(tab.value)}
            sx={{
              position: "relative",
              cursor: "pointer",
              px: { xs: 1.5, md: 1.6 },
              py: 0.9,
              minWidth: 70,
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {isActive && (
              <motion.div
                layoutId="active-pricing-tab"
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 36,
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 5,
                  zIndex: -1,
                }}
              >
                <Box
                  sx={(theme) => ({
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    border: `1px solid ${alpha(
                      theme.palette.primary.main,
                      0.08,
                    )}`,
                    boxShadow: `0 8px 24px ${alpha(
                      theme.palette.primary.main,
                      0.06,
                    )}`,
                  })}
                />
              </motion.div>
            )}

            <Typography
              variant="caption"
              sx={(theme) => ({
                display: "block",
                fontSize: "0.74rem",
                lineHeight: 1,
                fontWeight: 700,
                color: isActive
                  ? theme.palette.text.primary
                  : alpha(theme.palette.text.secondary, 0.65),
                transition: "color 180ms ease",
                whiteSpace: "nowrap",
              })}
            >
              {tab.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default CustomTabs;
