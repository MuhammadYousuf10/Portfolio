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
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
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
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, color: "rgba(255,255,255,0.9)", fontSize: "0.95rem" }}
        >
          {question}
        </Typography>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? (
            <CloseIcon sx={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.7)" }} />
          ) : (
            <AddIcon sx={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.7)" }} />
          )}
        </motion.div>
      </Box>
      <Collapse in={isOpen}>
        <Box sx={{ px: 3, pb: 3, pt: 0 }}>
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
        py: { xs: 10, md: 15 },
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 8, md: 4 }}>
          {/* Left Column: Header */}
          <Box sx={{ flex: 1, pr: { md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                letterSpacing: -1,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              {faqData.header.mainText}{" "}
              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 400,
                  fontFamily: "Georgia, serif",
                }}
              >
                {faqData.header.italicText}
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 5, maxWidth: 400 }}>
              {faqData.header.description}
            </Typography>
            <CustomButton
              text="Contact Us"
              variant="outlined"
              icon={
                <Box
                  component="span"
                  sx={{
                    display: "inline-flex",
                    fontSize: "1.1rem",
                    lineHeight: 1,
                    mr: 1,
                  }}
                >
                  ↗
                </Box>
              }
              sx={{
                px: 4,
                py: 1.5,
                bgcolor: "transparent",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.15)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.3)",
                },
              }}
            />
          </Box>

          {/* Right Column: Accordions */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={2}>
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
