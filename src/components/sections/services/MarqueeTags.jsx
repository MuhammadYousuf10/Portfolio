import React from "react";
import { Box, Chip } from "@mui/material";
import { motion } from "framer-motion";

import CodeIcon from "@mui/icons-material/Code";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeIcon from "@mui/icons-material/Badge";
import PaletteIcon from "@mui/icons-material/Palette";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ImageIcon from "@mui/icons-material/Image";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const tags1 = [
  { label: "Creative Direction", icon: <PaletteIcon fontSize="small" /> },
  { label: "Web Development", icon: <CodeIcon fontSize="small" /> },
  { label: "UI/UX", icon: <DashboardIcon fontSize="small" /> },
  { label: "Brand Identity", icon: <BadgeIcon fontSize="small" /> },
];

const tags2 = [
  { label: "Logo Design", icon: <ArchitectureIcon fontSize="small" /> },
  { label: "Visual Content Creation", icon: <ImageIcon fontSize="small" /> },
  { label: "Packaging Design", icon: <Inventory2Icon fontSize="small" /> },
  { label: "Art Direction", icon: <CameraAltIcon fontSize="small" /> },
  { label: "Design Consulting", icon: <ChatBubbleOutlineIcon fontSize="small" /> },
];

// Duplicate items multiple times to ensure smooth infinite scrolling even on ultra-wide screens
const duplicatedTags1 = [...tags1, ...tags1, ...tags1, ...tags1, ...tags1];
const duplicatedTags2 = [...tags2, ...tags2, ...tags2, ...tags2, ...tags2];

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  return (
    <Box sx={{ display: "flex", overflow: "hidden", width: "100%", mb: 3 }}>
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        style={{ display: "flex", gap: "16px", whiteSpace: "nowrap" }}
      >
        {items.map((item, index) => (
          <Chip
            key={index}
            icon={item.icon}
            label={item.label}
            variant="outlined"
            sx={{
              color: "text.secondary",
              borderColor: "rgba(255,255,255,0.1)",
              bgcolor: "rgba(255,255,255,0.02)",
              fontSize: "0.95rem",
              py: 2.5,
              px: 1,
              borderRadius: "12px",
              "& .MuiChip-icon": {
                color: "text.secondary",
              },
            }}
          />
        ))}
      </motion.div>
    </Box>
  );
};

const MarqueeTags = () => {
  return (
    <Box sx={{ width: "100%", py: 4, overflow: "hidden", position: "relative" }}>
      {/* Left/Right fading edges for a seamless look */}
      <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "100px", background: "linear-gradient(to right, #000, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "100px", background: "linear-gradient(to left, #000, transparent)", zIndex: 2, pointerEvents: "none" }} />
      
      <MarqueeRow items={duplicatedTags1} direction="left" speed={30} />
      <MarqueeRow items={duplicatedTags2} direction="right" speed={35} />
    </Box>
  );
};

export default MarqueeTags;
