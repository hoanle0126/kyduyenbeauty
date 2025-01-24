import React from "react";
import ClientLayout from "../../../Layouts/ClientLayout";
import { Button, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const ErrorPage = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Icon icon="ooui:error" width="60" height="60" />
      <Typography variant="h3">Page doesn't exist !</Typography>
      <Button variant="contained" size="large" color="common">
        Back to Home
      </Button>
    </Stack>
  );
};

export default ErrorPage;
