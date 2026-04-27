"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Collapse,
} from "@mui/material";
import { motion } from "framer-motion";
import NextLink from "next/link";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CustomButton from "@/components/common/CustomButton";
import { faqData } from "@/data/portfolio";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <Box
      sx={{
        bgcolor: isOpen ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
        transition: "background-color 0.3s ease",
        "&:hover": {
          bgcolor: "rgba(255,255,255,0.03)",
        },
      }}
    >
      <Box
        onClick={onClick}
        sx={{
          p: { xs: 2.25, md: 3 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "rgba(255,255,255,0.9)", fontSize: { xs: "0.9rem", md: "1rem" } }}
        >
          {question}
        </Typography>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? (
            <CloseIcon sx={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)" }} />
          ) : (
            <AddIcon sx={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)" }} />
          )}
        </motion.div>
      </Box>
      <Collapse in={isOpen}>
        <Box sx={{ px: { xs: 2.25, md: 3 }, pb: { xs: 2.25, md: 3 }, pt: 0 }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
            {answer}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 6, md: 4 }}>
          {/* Left Column: Header */}
          <Box sx={{ flex: 1, pr: { md: 8 }, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h2"
              sx={{ mb: 3 }}
            >
              {faqData.header.mainText}{" "}
              <Box
                component="span"
                sx={(theme) => ({
                  ...theme.typography.gradientText,
                  fontSize: "inherit",
                  fontWeight: 300,
                })}
              >
                {faqData.header.italicText}
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 400, mx: { xs: "auto", md: 0 } }}>
              {faqData.header.description}
            </Typography>
            <CustomButton
              component={NextLink}
              href="/contact"
              text={faqData.buttonText}
              variant="glow"
              icon={<ArrowOutwardIcon fontSize="small" />}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            />
          </Box>

          {/* Right Column: Accordions */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={1.5}>
              {faqData.items.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FAQ;
