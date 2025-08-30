import { Box, Typography } from "@mui/material";

const Indicator = () => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 2,
        py: 1,
        backgroundColor: "#1e1e1e",
        borderRadius: "9999px",
        color: "#ffffffcc",
        fontWeight: 500,
        fontSize: "0.875rem",
      }}
    >
      <Box
        sx={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#00ff91",
          animation: "blink 1.2s infinite",
        }}
      />
      <Typography component="span">Available for work</Typography>

      <style jsx global>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </Box>
  );
};

export default Indicator;
