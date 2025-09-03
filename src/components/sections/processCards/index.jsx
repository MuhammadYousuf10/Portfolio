"use client";

import { Fragment, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import PanToolIcon from "@mui/icons-material/PanTool";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CustomButton from "@/components/common/customButtons";

const MotionBox = motion.create(Box);

const ProcessCard = ({
  title,
  description,
  step,
  icon: Icon,
  blur,
  isFocused,
  onClick,
  left,
  focusedCard,
  totalCards,
}) => (
  <MotionBox
    layout
    onClick={onClick}
    initial={{ scale: 0.95, y: 20 }}
    animate={{
      scale: isFocused ? 1.05 : 0.95,
      y: isFocused ? 0 : 20,
      zIndex: isFocused ? 10 : 1,
    }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    sx={{
      position: "absolute",
      left,
      p: 4,
      width: 600,
      borderRadius: 4,
      color: "white",
      cursor: "pointer",
      backdropFilter: "blur(20px) saturate(180%)",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.125)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.37)",
      filter: isFocused ? "none" : `blur(${blur}px)`,
    }}
  >
    <Box sx={{ py: 4, px: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <IconButton sx={{ color: "white" }}>
          <Icon style={{ fontSize: 40, color: "white" }} />
        </IconButton>

        <Stack direction="row" spacing={1}>
          {[...Array(totalCards)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  i + 1 === focusedCard ? "white" : "rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </Stack>
      </Stack>

      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "70%" }}>
        {description}
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 8,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
        }}
      >
        Step {step}
      </Button>
    </Box>
  </MotionBox>
);

const CardSection = () => {
  const [focusedCard, setFocusedCard] = useState(3);

  const cards = [
    {
      id: 1,
      title: "Discover Insights",
      description:
        "We dive deep into your brand story to uncover key insights.",
      icon: PanToolIcon,
      step: "1",
    },
    {
      id: 2,
      title: "Design with clarity",
      description:
        "We translate strategy into visuals—crafted to be clean and on-brand.",
      icon: DesignServicesIcon,
      step: "2",
    },
    {
      id: 3,
      title: "Deliver and Launch",
      description: "Final designs are delivered and launched flawlessly.",
      icon: RocketLaunchIcon,
      step: "3",
    },
  ];

  const cardWidth = 600;
  const overlap = 420;
  const totalWidth = cardWidth + (cards.length - 1) * (cardWidth - overlap);
  const startLeft = `calc(50% - ${totalWidth / 2}px)`; // center

  // Reorder cards: focused at the end
  const orderedCards = [
    ...cards.filter((c) => c.id !== focusedCard),
    ...cards.filter((c) => c.id === focusedCard),
  ];

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box sx={{ position: "relative", height: "100vh" }}>
          <Stack
            direction={"row"}
            spacing={4}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ mb: 16 }}
          >
            <Box>
              <Typography variant="h2" color="">
                Process is Result
              </Typography>
            </Box>
            <CustomButton
              text={"See PLans"}
              variant="outlined"
              // startIcon={<FolderOpenIcon />}
            />
          </Stack>
          {orderedCards.map((card, index) => {
            let blur = 0;
            // Apply progressive blur to non-focused cards
            if (card.id !== focusedCard) {
              blur = index === orderedCards.length - 2 ? 2 : 5; // 1 card before focused: 5px, 2 cards before: 10px
            }
            return (
              <ProcessCard
                key={card.id}
                title={card.title}
                description={card.description}
                step={card.step}
                icon={card.icon}
                isFocused={card.id === focusedCard}
                blur={blur}
                onClick={() => setFocusedCard(card.id)}
                left={`calc(${startLeft} + ${index * (cardWidth - overlap)}px)`}
                focusedCard={focusedCard}
                totalCards={cards.length}
              />
            );
          })}
        </Box>
      </Container>
    </Fragment>
  );
};

export default CardSection;
