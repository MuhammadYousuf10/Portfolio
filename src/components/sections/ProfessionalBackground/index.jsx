"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Rating,
  Chip,
  Divider,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";

import CustomImage from "@/components/common/CustomImage";
import { aboutData } from "@/data/portfolio";
import Counter from "@/components/common/Counter";

const ProfessionalBackground = () => {
  const { title, subtitle, image, rating, clientsCount, skills, experience } =
    aboutData;

  return (
    <Box
      component="section"
      id="professional-background"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={(theme) => ({
            maxWidth: 1160,
            mx: "auto",
            position: "relative",
            pl: { xs: 0, md: 7 },
            textAlign: { xs: "center", md: "left" }
          })}
        >
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
            {/* Left */}
            <Grid size={{ xs: 12, md: 4.35 }}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    maxWidth: { xs: "100%", sm: 380 },
                    mx: { xs: "auto", md: 0 },
                    pt: { xs: 0, md: 3 },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 2.5,
                      color: "text.secondary",
                      fontStyle: "italic",
                      opacity: 0.78,
                    }}
                  >
                    {title} {subtitle}
                  </Typography>

                  <Box
                    sx={(theme) => ({
                      position: "relative",
                      borderRadius: "14px",
                      overflow: "hidden",
                      aspectRatio: "1 / 1",
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.08,
                      )}`,
                      bgcolor: "transparent",
                      boxShadow: { 
                        xs: `0px 10px 40px ${alpha(theme.palette.primary.main, 0.05)}`,
                        md: `-40px 0px 100px ${alpha(theme.palette.primary.main, 0.05)}`
                      },

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to bottom, transparent 62%, ${alpha(
                          theme.palette.background.default,
                          0.24,
                        )})`,
                        pointerEvents: "none",
                      },
                    })}
                  >
                    <CustomImage
                      src={image}
                      alt="Professional Background"
                      fill={true}
                      objectFit="cover"
                      sx={{
                        "& img": {
                          objectPosition: "top center",
                        },
                        filter: "grayscale(100%) brightness(1.1) contrast(1.1)",
                      }}
                    />
                  </Box>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    spacing={1.35}
                    sx={{ mt: 4, opacity: 0.9 }}
                  >
                    <Rating
                      value={rating}
                      readOnly
                      size="medium"
                      sx={(theme) => ({
                        "& .MuiRating-iconFilled": {
                          color: theme.palette.primary.main,
                        },
                        "& .MuiRating-iconEmpty": {
                          color: alpha(theme.palette.primary.main, 0.18),
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: { xs: 20, md: 23 },
                        },
                      })}
                    />

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.secondary",
                        whiteSpace: "nowrap",
                        fontSize: { xs: "0.8rem", md: "0.875rem" }
                      }}
                    >
                      <Counter value={rating} />/5 stars (<Counter value={clientsCount} />+Clients)
                    </Typography>
                  </Stack>
                </Box>
              </motion.div>
            </Grid>

            {/* Right */}
            <Grid size={{ xs: 12, md: 7.65 }}>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                viewport={{ once: true }}
              >
                <Box sx={{ pt: { xs: 0, md: 3 } }}>
                  {/* Skills */}
                  <Box
                    sx={(theme) => ({
                      mb: { xs: 4.5, md: 5 },
                      p: { xs: 2.5, md: 3 },
                      minHeight: { xs: "auto", md: 140 },
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "16px",
                      bgcolor: "background.paper",
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.09,
                      )}`,
                      boxShadow: `inset 0 1px 0 ${alpha(
                        theme.palette.primary.main,
                        0.035,
                      )}`,
                      position: "relative",
                      overflow: "hidden",
                    })}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.35,
                      }}
                    >
                      {skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          variant="outlined"
                          sx={(theme) => ({
                            height: 31,
                            px: 0.25,
                            borderRadius: "7px",
                            bgcolor: "transparent",
                            color: "text.secondary",
                            borderColor: alpha(
                              theme.palette.primary.main,
                              0.09,
                            ),
                            fontSize: "0.82rem",
                            fontWeight: 500,

                            "& .MuiChip-label": {
                              px: 1.2,
                            },

                            "&:hover": {
                              bgcolor: alpha(theme.palette.primary.main, 0.04),
                              borderColor: alpha(
                                theme.palette.primary.main,
                                0.22,
                              ),
                              color: "text.primary",
                            },
                          })}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Experience */}
                  <Box sx={{ px: { xs: 0, md: 2 } }}>
                    <Stack spacing={0}>
                      {experience.map((exp, index) => (
                        <Box key={index}>
                          <Grid
                            container
                            alignItems="center"
                            columnSpacing={3}
                            rowSpacing={1.25}
                            sx={{ py: { xs: 2, md: 2.25 } }}
                          >
                            <Grid size={{ xs: 12, sm: 4 }}>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  color: "text.primary",
                                  opacity: 0.86,
                                }}
                              >
                                {exp.role}
                              </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 4 }}>
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  color: "text.secondary",
                                }}
                              >
                                {exp.company}
                              </Typography>
                            </Grid>

                            <Grid
                              size={{ xs: 12, sm: 4 }}
                              sx={{ textAlign: { xs: "left", sm: "right" } }}
                            >
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  color: "text.secondary",
                                }}
                              >
                                {exp.period}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Divider
                            sx={(theme) => ({
                              borderColor: alpha(
                                theme.palette.primary.main,
                                0.075,
                              ),
                            })}
                          />
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfessionalBackground;
