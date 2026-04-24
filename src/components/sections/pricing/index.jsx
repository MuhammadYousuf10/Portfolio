"use client";

import { Box, Container, Typography, Stack, Grid, Chip } from "@mui/material";
import CustomButton from "@/components/common/customButtons";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const pricingPlans = [
  {
    title: "Monthly",
    price: "$2,997",
    subtitle: "/month",
    description: "Pause or cancel anytime. Perfect for ongoing design needs.",
    features: [
      "Unlimited Requests",
      "Fast Turnarounds",
      "Fixed Monthly Rate",
      "Ongoing Collaboration",
      "Pause or Cancel Anytime",
    ],
    buttonText: "Get Started Now",
    popular: false,
  },
  {
    title: "Per Project",
    price: "$4,997",
    subtitle: "one time payment",
    description: "Ideal for a single, comprehensive design project.",
    features: [
      "Dedicated Team",
      "Comprehensive Design System",
      "End-to-end Execution",
      "Post-launch Support",
      "Source Files Included",
    ],
    buttonText: "Book a Call",
    popular: true,
  },
];

const PricingSection = () => {
  return (
    <Box
      id="pricing"
      sx={{ py: 15, bgcolor: "background.default", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Chip
            label="Pricing"
            sx={{
              mb: 2,
              bgcolor: "rgba(255,255,255,0.1)",
              color: "text.primary",
            }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            Choose a plan that fits
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Flexible pricing for your goals and creative needs perfectly.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {pricingPlans.map((plan, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Box
                sx={{
                  p: 5,
                  bgcolor: "background.paper",
                  borderRadius: "24px",
                  border: "1px solid",
                  borderColor: plan.popular ? "custom.neonGreen" : "divider",
                  position: "relative",
                  height: "100%",
                }}
              >
                {plan.popular && (
                  <Chip
                    label="Most Popular"
                    color="success"
                    sx={{
                      position: "absolute",
                      top: -15,
                      left: "50%",
                      transform: "translateX(-50%)",
                      bgcolor: "custom.neonGreen",
                      color: "black",
                      fontWeight: 600,
                    }}
                  />
                )}
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {plan.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 4 }}
                >
                  {plan.description}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="baseline"
                  spacing={1}
                  sx={{ mb: 4 }}
                >
                  <Typography variant="h2">{plan.price}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {plan.subtitle}
                  </Typography>
                </Stack>

                <CustomButton
                  text={plan.buttonText}
                  variant={plan.popular ? "glow" : "outlined"}
                  sx={{ width: "100%", mb: 4 }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    mb: 2,
                    color: "text.secondary",
                  }}
                >
                  What's included
                </Typography>
                <Stack spacing={2}>
                  {plan.features.map((feature, i) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      key={i}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: plan.popular
                            ? "custom.neonGreen"
                            : "text.secondary",
                          fontSize: 20,
                        }}
                      />
                      <Typography variant="body1">{feature}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection;
