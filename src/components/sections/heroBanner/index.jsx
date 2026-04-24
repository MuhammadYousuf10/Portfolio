import React from "react";
import { Box, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";
import { motion } from "framer-motion";
import CircularText from "@/components/common/circularText";
import CustomButton from "@/components/common/customButtons";
import ImageWrapper from "@/components/common/imageWrapper";
import Indicator from "@/components/common/indicationPoint";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Hero = () => {
  // Scroll handler
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section"); // scroll id
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: (theme) => theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* horizontal shadow line*/}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          position: "absolute",
          bottom: {
            sm: "-60px",
            md: "0",
          },
          left: "50%",
          width: "70%",
          height: "106px",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 5,
          alignItems: "center",
          justifyContent: "center",
          transform: "translate(-50%, -50%) rotate(0deg)",
          color: "red",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "3px",
            background: (theme) => theme.gradients.shadowLineUp,
            boxShadow: "0 -8px 20px rgba(255,255,255,0.15)", // shadow upwards
          }}
        />
      </Box>
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <ImageWrapper
          src="https://framerusercontent.com/images/q3gTUOBoxKAobXGtZtKxUomvqTc.jpeg?scale-down-to=2048"
          alt="bg"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      {/* Overlay to dim the background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ width: "100%" }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              py: {
                xs: 25,
                md: 15,
                lg: 10,
              },
              zIndex: 1,
              position: "relative",
            }}
          >
            <Grid container spacing={4} justifyContent={"space-between"}>
              <Grid
                size={{ xs: 12, md: 6, lg: 7 }}
                sx={{ pb: { xs: 10, md: 0 } }}
              >
                <Box
                  sx={{ position: "relative", display: "inline-block", mb: 4 }}
                >
                  <Typography variant="h1" sx={{ textAlign: "left" }}>
                    Building brands to drive{" "}
                    <Typography component="span" variant="gradientText">
                      Results
                    </Typography>
                  </Typography>
                  <Box sx={{ position: "absolute", top: "-50px", left: 0 }}>
                    <Indicator text="Available for work" />
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  We merge bold strategy, compelling storytelling, and timeless
                  design to craft unforgettable brand experiences that truly
                  resonate.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                  <CustomButton
                    text={"View Projects"}
                    variant="outlined"
                    startIcon={<FolderOpenIcon />}
                  />
                  <CustomButton
                    text={"Get Started Now"}
                    variant="filled"
                    startIcon={<ArrowOutwardIcon />}
                  />
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    p: "6px",
                    borderRadius: "14px",
                    background: (theme) => theme.gradients.heroCard,
                    width: "fit-content",
                    opacity: 1,
                    transform: "rotate(-3deg)",
                  }}
                >
                  {/* vertical shadow line*/}
                  <Box
                    sx={{
                      position: "absolute",
                      right: {
                        xl: "-160px",
                        lg: "-35%",
                        md: "-35%",
                        sm: "-70%",
                      },
                      top: "calc(45% - 318px)", // 636px / 2
                      width: "106px",
                      height: "636px",
                      overflow: "hidden",
                      pointerEvents: "none",
                      zIndex: 5,
                      display: {
                        xs: "none",
                        md: "flex",
                      },
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "rotate(3deg)",
                    }}
                  >
                    <Box
                      sx={{
                        width: "3px",
                        height: "100%",
                        background: (theme) => theme.gradients.shadowLineDown,
                        boxShadow: "8px 0 20px rgba(255,255,255,0.15)",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <ImageWrapper
                      src="https://framerusercontent.com/images/UEn20HWHR8SAYg61F9bsmJDq9w.png?scale-down-to=512"
                      alt="profile pic"
                      width={320}
                      height={320}
                      priority
                    />
                  </Box>
                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={4.7}
                      precision={0.5}
                      max={5}
                      size="large"
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: theme.palette.custom.golden,
                        },
                        "& .MuiRating-iconEmpty": {
                          color: theme.palette.custom.silver,
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      4.7/5 stars (10+Clients)
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: -50,
                      right: -60,
                      zIndex: -1,
                    }}
                  >
                    <CircularText
                      text="Sr. Frontend Eng."
                      size={150}
                      fontSize={12}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </motion.div>
      {/* Scroll Down Arrow */}
      <KeyboardArrowDownIcon
        fontSize="large"
        onClick={handleScroll}
        sx={{
          cursor: "pointer",
          zIndex: 1,
          position: "absolute",
          bottom: {
            xs: "5%",
            sm: "5%",
            md: "15%",
          },
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 5s infinite",
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(-10px)" },
          },
        }}
      />
    </Box>
  );
};

export default Hero;
