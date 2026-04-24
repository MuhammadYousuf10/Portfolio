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
              Reach out anytime
            </Typography>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Let’s Stay Connected
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 400, mb: 4 }}>
              Got questions or want to collaborate? Feel free to reach out—We
              are open to new projects or just a casual chat!
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: { xs: 4, md: 0 } }}>
              <CustomButton
                text="Contact Me"
                variant="outlined"
                startIcon={<ArrowOutwardIcon />}
              />
              <CustomButton text="Adriancarter@support.com" variant="glow" />
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
            © 2025 Fade Template Clone
          </Typography>
          <Stack direction="row" spacing={3}>
            <MuiLink
              component={NextLink}
              href="#"
              variant="body2"
              color="text.secondary"
            >
              Made by Antigravity
            </MuiLink>
            <MuiLink
              component={NextLink}
              href="#"
              variant="body2"
              color="text.secondary"
            >
              Built with Next.js & MUI
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
