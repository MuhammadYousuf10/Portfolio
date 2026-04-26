import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Divider,
  alpha,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SectionBadge from "@/components/common/SectionBadge";
import SectionTitle from "@/components/common/SectionTitle";
import CustomImage from "@/components/common/CustomImage";
import CustomButton from "@/components/common/CustomButton";
import { comparisonData } from "@/data/portfolio";
import fadeLogo from "@/assets/logo/fade-logo.svg";

const Comparison = () => {
  const { header, fade, others } = comparisonData;

  return (
    <Box
      component="section"
      id="comparison"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <SectionBadge text="Comparison" icon={VerifiedIcon} />

          <SectionTitle
            mainText={header.mainText}
            italicText={header.italicText}
          />

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              mx: "auto",
              maxWidth: 520,
              color: "text.secondary",
            }}
          >
            {header.description}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 2 }}>
          {/* Fade */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={(theme) => ({
                position: "relative",
                overflow: "hidden",
                height: "100%",
                borderRadius: "14px",
                px: { xs: 2.25, md: 2.5 },
                py: { xs: 2.5, md: 2.75 },
                bgcolor: "background.paper",
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 64,
                  background: theme.gradients.heroCard,
                  opacity: 0.25,
                  pointerEvents: "none",
                  zIndex: 0,
                },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "18%",
                  right: "18%",
                  height: 90,
                  background: `radial-gradient(ellipse at top, ${alpha(
                    theme.palette.primary.main,
                    0.12,
                  )}, transparent 70%)`,
                  pointerEvents: "none",
                  zIndex: 0,
                },
              })}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 44,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: 118,
                    height: 36,
                  }}
                >
                  <CustomImage
                    src={fadeLogo}
                    alt="Fade Logo"
                    objectFit="contain"
                  />
                </Box>
              </Box>

              <Divider
                sx={(theme) => ({
                  position: "relative",
                  zIndex: 1,
                  mb: 2.5,
                  height: "1px",
                  border: 0,
                  background: theme.gradients.shadowLineUp,
                  opacity: 0.9,
                })}
              />

              <Grid
                container
                columnSpacing={1.5}
                rowSpacing={1.5}
                sx={{ position: "relative", zIndex: 1 }}
              >
                {fade.items.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <ComparisonItem>{item}</ComparisonItem>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Others */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={(theme) => ({
                position: "relative",
                overflow: "hidden",
                height: "100%",
                borderRadius: "14px",
                px: { xs: 2.25, md: 2.5 },
                py: { xs: 2.5, md: 2.75 },
                bgcolor: "background.paper",
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 64,
                  background: theme.gradients.heroCard,
                  opacity: 0.16,
                  pointerEvents: "none",
                  zIndex: 0,
                },
              })}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 44,
                  mb: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "text.primary" }}
                >
                  {others.title}
                </Typography>
              </Box>

              <Divider
                sx={(theme) => ({
                  position: "relative",
                  zIndex: 1,
                  mb: 2.5,
                  height: "1px",
                  border: 0,
                  background: theme.gradients.shadowLineUp,
                  opacity: 0.35,
                })}
              />

              <Stack spacing={1.5} sx={{ position: "relative", zIndex: 1 }}>
                {others.items.map((item, index) => (
                  <ComparisonItem muted key={index}>
                    {item}
                  </ComparisonItem>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            sx={(theme) => ({
              mt: { xs: 5, md: 6 },
              pt: { xs: 3, md: 4 },
              borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              display: "flex",
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" },
            })}
          >
            <Typography
              variant="h5"
              sx={{
                maxWidth: 390,
                color: "text.primary",
              }}
            >
              {comparisonData.footer.title}
            </Typography>

            <CustomButton
              text={comparisonData.footer.buttonText}
              variant="glass"
              icon={<ArrowOutwardIcon fontSize="small" />}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const ComparisonItem = ({ children, muted = false }) => {
  return (
    <Box
      sx={(theme) => ({
        minHeight: 42,
        display: "flex",
        alignItems: "center",
        px: 1.5,
        py: 1.2,
        borderRadius: "8px",
        border: `1px solid ${alpha(
          theme.palette.primary.main,
          muted ? 0.055 : 0.09,
        )}`,
        bgcolor: "transparent",
      })}
    >
      <Stack direction="row" spacing={1.2} alignItems="center">
        <AutoAwesomeIcon
          sx={{
            fontSize: 15,
            color: "primary.main",
            opacity: muted ? 0.45 : 0.9,
            flexShrink: 0,
          }}
        />

        <Typography
          variant="body2"
          sx={(theme) => ({
            color: muted
              ? alpha(theme.palette.text.secondary, 0.82)
              : alpha(theme.palette.text.primary, 0.88),
            fontWeight: muted ? 400 : 500,
            lineHeight: 1.25,
            fontSize: "0.82rem",
          })}
        >
          {children}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Comparison;
