import { Box, Typography } from "@mui/material";

const Indicator = ({ text }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        py: 1,
        color: "#ffffffcc",
        fontWeight: 500,
        fontSize: "0.875rem",
      }}
    >
      {/* Dot container */}
      <Box
        sx={{
          position: "relative",
          width: "10px",
          height: "10px",
        }}
      >
        {/* Actual dot (fixed size + blink) */}
        <Box
          sx={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#00ff91",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "blink 1.5s infinite",
            zIndex: 2,
          }}
        />

        {/* Ripple effect (surrounding) */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#00ff91",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            opacity: 0.5,
            animation: "ripple 2.5s infinite ease-out",
          }}
        />
      </Box>

      <Typography component="span">{text}</Typography>

      {/* Animations */}
      <style jsx global>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          70% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0.2;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
};

export default Indicator;
