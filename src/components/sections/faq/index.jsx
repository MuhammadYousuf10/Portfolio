"use client";

import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomButton from "@/components/common/customButtons";

const faqs = [
  {
    question: "What services does you offer?",
    answer: "I specialize in branding, UI/UX design, web design, and creative strategy—delivering tailored solutions that elevate your business visually and functionally.",
  },
  {
    question: "What’s your typical design process?",
    answer: "We start with discovery, move into wireframing and design, then gather feedback before final delivery and launch.",
  },
  {
    question: "What is your approach to web design?",
    answer: "Our approach focuses on user-centric layouts, clean aesthetics, and conversion-optimized experiences.",
  },
  {
    question: "How long does a project usually take?",
    answer: "Depending on the scope, most projects take between 2 to 6 weeks from kickoff to launch.",
  },
];

const FAQSection = () => {
  return (
    <Box id="faq" sx={{ py: 15, bgcolor: "background.default", color: "text.primary" }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography variant="h2" sx={{ mb: 2 }}>Your Questions Answered</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Find the answers to our most common questions here, but if you still need help, feel free to contact me.
          </Typography>
          <Box display="flex" justifyContent="center">
            <CustomButton text="Contact Us" variant="outlined" />
          </Box>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index} 
              sx={{ 
                bgcolor: "background.paper", 
                mb: 2, 
                borderRadius: "12px !important", 
                "&:before": { display: "none" },
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
