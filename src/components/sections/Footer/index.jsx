"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import CustomButton from "@/components/common/CustomButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { footerData } from "@/data/portfolio";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom sx={{ fontSize: "0.85rem", opacity: 0.8 }}>
              {footerData.header.badge}
            </Typography>
            <Typography variant="h2" sx={{ mb: 2 }}>
              {footerData.header.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: { xs: "100%", md: 450 }, mb: 4, mx: { xs: "auto", md: 0 } }}>
              {footerData.header.description}
            </Typography>
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2} 
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mb: { xs: 6, md: 0 } }}
            >
              <CustomButton
                component={NextLink}
                href="/contact"
                text={footerData.contact.buttonText}
                variant="outlined"
                icon={<ArrowOutwardIcon />}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              />
              <CustomButton 
                component="a"
                href={`mailto:${footerData.contact.email}`}
                text={footerData.contact.email} 
                variant="glow" 
                sx={{ width: { xs: "100%", sm: "auto" } }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 6, md: 8 }, borderColor: "divider", opacity: 0.5 }} />

        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.7 }}>
            {footerData.bottom.copyright}
          </Typography>
          <Stack direction="row" spacing={{ xs: 2, sm: 4 }}>
            {footerData.bottom.links.map((link, index) => (
              <MuiLink
                key={index}
                component={NextLink}
                href={link.url}
                variant="body2"
                color="text.secondary"
                sx={{ 
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": { color: "text.primary" }
                }}
              >
                {link.text}
              </MuiLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
