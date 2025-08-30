import ImageWrapper from "@/components/common/imageWrapper";
import Indicator from "@/components/common/indicationPoint";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

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
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 10 }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6, lg: 8 }}>
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Typography variant="h1" sx={{ textAlign: "left" }}>
                  Building brands to drive Results
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
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <ImageWrapper
                src="https://framerusercontent.com/images/UEn20HWHR8SAYg61F9bsmJDq9w.png?scale-down-to=512"
                alt={"profile pic"}
                width={370}
                height={370}
                priority={true}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </motion.div>
  </Box>
);

export default Hero;
