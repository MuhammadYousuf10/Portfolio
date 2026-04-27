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
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { footerData } from "@/data/portfolio";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  
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
                component={pathname === "/contact" ? "button" : NextLink}
                href={pathname === "/contact" ? undefined : "/contact"}
                onClick={() => {
                  if (pathname === "/contact") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                text={footerData.contact.buttonText}
                variant="glow"
                icon={<ArrowOutwardIcon />}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              />
               <CustomButton 
                component="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                text="Download CV" 
                variant="glass" 
                icon={<DescriptionOutlinedIcon />}
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
            © {new Date().getFullYear()} {footerData.bottom.copyright}
          </Typography>
          <Stack direction="row" spacing={{ xs: 2, sm: 4 }}>
            {footerData.bottom.links.map((link, index) => (
              <MuiLink
                key={index}
                component={NextLink}
                href={link.url}
                target={link.url.endsWith(".pdf") ? "_blank" : undefined}
                rel={link.url.endsWith(".pdf") ? "noopener noreferrer" : undefined}
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
