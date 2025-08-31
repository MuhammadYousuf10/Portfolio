import CircularText from "@/components/common/circularText";
import CustomButton from "@/components/common/customButtons";
import ImageWrapper from "@/components/common/imageWrapper";
import Indicator from "@/components/common/indicationPoint";
import theme from "@/theme/theme";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const Hero = () => (
  <Box
    id="hero"
    sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: "#0e0e0e",
      position: "relative",
      overflow: "hidden",
    }}
  >
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
        <Box sx={{ py: 10, zIndex: 1, position: "relative" }}>
          <Grid container spacing={4} justifyContent={"space-between"}>
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>
              <Box
                sx={{ position: "relative", display: "inline-block", mb: 4 }}
              >
                <Typography variant="h1" sx={{ textAlign: "left" }}>
                  Building brands to drive{" "}
                  <Typography
                    component="span"
                    variant="h1"
                    sx={{
                      fontStyle: "italic",
                      color: theme.palette.text.secondary,
                    }}
                  >
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
                  background:
                    "linear-gradient(275deg, rgb(154, 151, 130) -49%, rgb(20, 20, 20) 25%, rgba(4,3,3,0) 108%)",
                  width: "fit-content",
                  opacity: 1,
                  transform: "rotate(-3deg)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    right: "-160px",
                    top: "calc(45% - 318px)", // 636px / 2
                    width: "106px",
                    height: "636px",
                    overflow: "hidden",
                    pointerEvents: "none",
                    zIndex: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "rotate(3deg)",
                  }}
                >
                  <Box
                    sx={{
                      width: "3px",
                      height: "100%",
                      background:
                        "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)",
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
  </Box>
);

export default Hero;
