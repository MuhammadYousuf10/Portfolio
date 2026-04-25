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
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {footerData.header.badge}
            </Typography>
            <Typography variant="h2" sx={{ mb: 2 }}>
              {footerData.header.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 400, mb: 4 }}>
              {footerData.header.description}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: { xs: 4, md: 0 } }}>
              <CustomButton
                component={NextLink}
                href="/contact"
                text={footerData.contact.buttonText}
                variant="outlined"
                icon={<ArrowOutwardIcon />}
              />
              <CustomButton 
                text={footerData.contact.email} 
                variant="glow" 
              />
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "divider" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            {footerData.bottom.copyright}
          </Typography>
          <Stack direction="row" spacing={3}>
            {footerData.bottom.links.map((link, index) => (
              <MuiLink
                key={index}
                component={NextLink}
                href={link.url}
                variant="body2"
                color="text.secondary"
                sx={{ 
                  textDecoration: "none",
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
