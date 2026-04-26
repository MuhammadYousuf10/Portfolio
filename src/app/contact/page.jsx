"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  TextField,
  alpha,
  Rating,
  Snackbar,
  Alert,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { contactPageData } from "@/data/portfolio";
import CustomButton from "@/components/common/CustomButton";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          service: data.service,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          reset();
        }, 3000);
      } else {
        alert("There was an error sending the message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <Box
      component="main"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        pt: { xs: 15, md: 20 },
        pb: 10,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Left Column: Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 3 }}>
              {contactPageData.header.mainText}{" "}
              <Box
                component="span"
                sx={(theme) => ({
                  ...theme.typography.gradientText,
                  fontSize: "inherit",
                })}
              >
                {contactPageData.header.italicText}
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 500, mb: 8 }}
            >
              {contactPageData.header.description}
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 1,
                      display: "block",
                      color: errors.name ? "error.main" : "text.secondary",
                    }}
                  >
                    What's your name?
                  </Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    InputProps={{
                      disableUnderline: false,
                      sx: {
                        fontSize: "1.1rem",
                        py: 1,
                        "&:before": { borderColor: "rgba(255,255,255,0.1)" },
                        "&:after": { borderColor: "#fff" },
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 1,
                      display: "block",
                      color: errors.email ? "error.main" : "text.secondary",
                    }}
                  >
                    What's your email?
                  </Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputProps={{
                      disableUnderline: false,
                      sx: {
                        fontSize: "1.1rem",
                        py: 1,
                        "&:before": { borderColor: "rgba(255,255,255,0.1)" },
                        "&:after": { borderColor: "#fff" },
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 1,
                      display: "block",
                      color: errors.service ? "error.main" : "text.secondary",
                    }}
                  >
                    What service are you looking for?
                  </Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    placeholder="E.g. Web Design, Branding..."
                    {...register("service", {
                      required: "Please specify a service",
                    })}
                    error={!!errors.service}
                    helperText={errors.service?.message}
                    InputProps={{
                      disableUnderline: false,
                      sx: {
                        fontSize: "1.1rem",
                        py: 1,
                        "&:before": { borderColor: "rgba(255,255,255,0.1)" },
                        "&:after": { borderColor: "#fff" },
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 1,
                      display: "block",
                      color: errors.message ? "error.main" : "text.secondary",
                    }}
                  >
                    Tell me about your project
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="standard"
                    placeholder="Describe your goals and vision..."
                    {...register("message", {
                      required: "Message is required",
                    })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    InputProps={{
                      disableUnderline: false,
                      sx: {
                        fontSize: "1.1rem",
                        py: 1,
                        "&:before": { borderColor: "rgba(255,255,255,0.1)" },
                        "&:after": { borderColor: "#fff" },
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 6 }}>
                <CustomButton
                  text={submitted ? "Message Sent!" : "Send Message"}
                  variant="filled"
                  type="submit"
                  icon={!submitted && <ArrowOutwardIcon fontSize="small" />}
                  sx={{
                    px: 6,
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Info & Stats */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={(theme) => ({
                p: { xs: 4, md: 6 },
                borderRadius: "32px",
                border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                bgcolor: alpha(theme.palette.common.white, 0.02),
                height: "100%",
              })}
            >
              {/* Stats */}
              <Stack spacing={4} sx={{ mb: 8 }}>
                {contactPageData.stats.map((stat, index) => (
                  <Box key={index}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        mb: 0.5,
                        display: "block",
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                      {stat.value}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* Testimonial */}
              <Box sx={{ mb: 8 }}>
                <Rating value={5} readOnly sx={{ mb: 2, color: "#fff" }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.primary",
                    fontStyle: "italic",
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  "{contactPageData.testimonial.text}"
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  — {contactPageData.testimonial.author}
                </Typography>
              </Box>

              {/* Socials */}
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", mb: 3, display: "block" }}
              >
                Connect with me
              </Typography>
              <Stack direction="row" spacing={3}>
                {contactPageData.socials.map((social, index) => (
                  <Typography
                    key={index}
                    component="a"
                    href={social.url}
                    variant="subtitle1"
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                      fontWeight: 600,
                      transition: "color 0.2s",
                      "&:hover": { color: "text.secondary" },
                    }}
                  >
                    {social.name}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSubmitted(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%", borderRadius: 2, fontWeight: 500 }}
        >
          Thank you! Your message has been sent successfully.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
