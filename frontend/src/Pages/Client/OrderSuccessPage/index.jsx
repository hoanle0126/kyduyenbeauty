import React from "react";
import ClientLayout from "../../../Layouts/ClientLayout";
import { Button, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const OrderSuccessPage = () => {
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
      <Icon icon="ooui:success" width="60" height="60" />
      <Typography variant="h3">Checkout Success !</Typography>
      <Button variant="contained" size="large" color="common">
        Back to Shopping
      </Button>
    </Stack>
  );
};

export default OrderSuccessPage;
