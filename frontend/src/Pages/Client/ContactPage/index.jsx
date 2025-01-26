import { useEffect } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { PoliciesIcon } from "../../../assets/policies";
import { MuiTheme } from "../../../Theme";
import HeaderHelmet from "../../../Components/Header";

const ContactPage = () => {
  return (
    <Stack
      sx={{
        paddingX: {
          xs: "30px",
          sm: "60px",
          md: "90px",
          lg: "160px",
        },
        paddingTop: "80px",
        paddingBottom: "120px",
        flexDirection: "row",
      }}
    >
      <HeaderHelmet title={"Contact us"}/>
      <Stack
        sx={{
          gap: "20px",
          flex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: "12px",
          }}
        >
          Contact Us
        </Typography>
        <TextField label="Name" color="common" />
        <TextField label="Email" color="common" />
        <TextField label="Subject" color="common" />
        <TextField
          label="Enter your message here"
          color="common"
          multiline
          minRows={5}
        />
        <Button variant="contained" color="common" size="large">
          Submit
        </Button>
      </Stack>
      <Stack
        sx={{
          gap: "12px",
          flex: {
            xs: 0,
            sm: 0,
            md: 1,
            lg: 1,
          },
          alignItems: "center",
          justifyContent: "start",
        }}
      ></Stack>
    </Stack>
  );
};

export default ContactPage;
