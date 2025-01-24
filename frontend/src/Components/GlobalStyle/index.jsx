import { Box, GlobalStyles } from "@mui/material";
import React from "react";
import { MuiTheme } from "../../Theme";

const GlobalStyle = ({ children }) => {
  return (
    <Box
      sx={{
        h1: MuiTheme().typography.h1,
        h2: MuiTheme().typography.h2,
        h3: MuiTheme().typography.h3,
        h4: MuiTheme().typography.h4,
        h5: MuiTheme().typography.h5,
        h6: MuiTheme().typography.h6,
        p: MuiTheme().typography.body2,
        "ul,ol": {
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: "400",
          letterSpacing: 0,
        },
        li: {
          "&:not(:last-child)": {
            marginBottom: "4px",
          },
          marginLeft: "40px",
        },
        ul: {
          listStyleType: "disc",
        },
        ol: {
          listStyleType: "decimal",
        },
        "& .MuiInputBase-input:focus": {
          boxShadow: "none",
        },
        img: {
          width: 400,
          height: 400,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default GlobalStyle;
