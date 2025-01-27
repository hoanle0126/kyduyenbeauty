import { Icon } from "@iconify/react";
import { Box, Button, OutlinedInput, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MainLogo from "../../../../assets/mainLogo";

const ClientFooter = () => {
  const categories = useSelector((store) => store.categories);

  return (
    <Stack
      direction="row"
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "background.neutral",
        paddingX: {
          xs: "30px",
          sm: "60px",
          md: "90px",
          lg: "160px",
        },
        paddingY: "40px",
        gap: {
          xl: "120px",
          lg: "90px",
          md: "60px",
          sm: "30px",
          xs: "12px",
        },
      }}
    >
      <Stack
        sx={{
          gap: "8px",
        }}
      >
        <Box
          sx={{
            width: "100px",
            height: "100px",
            overflow: "hidden",
            marginBottom: "12px",
            borderRadius: "50%",
          }}
        >
          <img src={MainLogo} alt="" className="w-full h-full" />
        </Box>
        <Typography>Dallas, Texas United State</Typography>
        <Stack direction="row" alignItems="center" gap="8px">
          <Icon icon="eva:email-outline" width={24} height={24} />
          <Typography variant="body2">Caokyduyenkrshop@gmail.com</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap="8px">
          <Icon icon="eva:phone-outline" width="24" height="24" />
          <Typography variant="h6">+1 714-592-9454</Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          gap: "28px",
          display: {
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Typography variant="subtitle1">Categories</Typography>
        <Stack gap="12px">
          {categories.categories.map((itemCategory, indexCategory) => (
            <Typography variant="body2" key={indexCategory}>
              {itemCategory.name}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          gap: "28px",
          display: {
            lg: "flex",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Typography variant="subtitle1">Information</Typography>
        <Stack gap="12px">
          <Typography variant="body2">About Us</Typography>
          <Typography variant="body2">Contact Us</Typography>
          <Typography variant="body2">Order Information</Typography>
          <Typography variant="body2">Delivery</Typography>
          <Typography variant="body2">Returns</Typography>
          <Typography variant="body2">Privacy Policy</Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          gap: "28px",
          flex: 1,
          alignItems: "end",
          display: {
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "none",
          },
        }}
      >
        <Typography variant="h4">Contact Us</Typography>
        <Stack gap="12px" width={"100%"}>
          <OutlinedInput size="small" fullWidth placeholder="Email" />
          <OutlinedInput
            size="small"
            fullWidth
            multiline
            minRows={4}
            placeholder="Content"
          />
          <Button variant="contained" color="common">
            Send
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ClientFooter;
