"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";
import { Typography } from "@mui/material";

const Counter = ({ value, sx = {}, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  // Parse the value string (e.g., "$80k+", "12,000", "4.7")
  const stringValue = (value || "").toString();
  const numericPart = stringValue.replace(/[^0-9.]/g, "");
  const prefix = stringValue.match(/^\D+/)?.[0] || "";
  const suffix = stringValue.match(/\D+$/)?.[0] || "";
  const targetNumber = parseFloat(numericPart) || 0;

  const count = useMotionValue(0);

  useEffect(() => {
    // Determine decimal places based on target
    const decimals = numericPart.includes(".") ? numericPart.split(".")[1].length : 0;
    
    // Subscribe to motion value changes
    const unsubscribe = count.on("change", (latest) => {
      // Format number with commas if the original had them or if it's a large number
      let formatted = latest.toFixed(decimals);
      if (stringValue.includes(",")) {
        const parts = formatted.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        formatted = parts.join(".");
      } else if (targetNumber >= 1000 && !numericPart.includes(".")) {
        // Auto-format large integers with commas if no decimals are present
        formatted = Math.floor(latest).toLocaleString();
      }
      setDisplayValue(formatted);
    });

    if (isInView) {
      const controls = animate(count, targetNumber, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // Custom ease-out
      });
      return () => {
        controls.stop();
        unsubscribe();
      };
    } else {
      // Reset to 0 when out of view so it can animate again
      count.set(0);
      setDisplayValue("0");
    }
    
    return unsubscribe;
  }, [isInView, targetNumber, count, numericPart, stringValue]);

  return (
    <Typography
      ref={ref}
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "baseline",
        ...sx,
      }}
      {...props}
    >
      {prefix}
      {displayValue}
      {suffix}
    </Typography>
  );
};

export default Counter;

