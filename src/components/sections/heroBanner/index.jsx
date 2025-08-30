import { Box, Grid, Typography } from "@mui/material";
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
      px: 3,
      background: "#0e0e0e",
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h1">
              Building brands to drive Results
            </Typography>
            <Typography variant='body1'>
              We merge bold strategy, compelling storytelling, and timeless
              design to craft unforgettable brand experiences that truly
              resonate.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h2">
              Building brands to drive Results
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  </Box>
);

export default Hero;
