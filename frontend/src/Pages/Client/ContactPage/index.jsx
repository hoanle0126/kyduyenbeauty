import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { PoliciesIcon } from "../../../assets/policies";
import { MuiTheme } from "../../../Theme";
import HeaderHelmet from "../../../Components/Header";
import { axiosClient } from "../../../config/axiosClient";
import MainLogo from "../../../assets/mainLogo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactPage = () => {
  const [contact, setContact] = React.useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleContact = async () => {
    try {
      setLoading(true);
      axiosClient.post("/send-email", contact).then((data) => {
        setLoading(false);
        setContact({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
        setOpen(true);
      });
    } catch (error) {
      console.error("Payment failed", error);
      setLoading(false);
    }
  };

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
      <HeaderHelmet title={"Contact us"} />
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
        <TextField
          label="Name"
          color="common"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <TextField
          label="Email"
          color="common"
          type="email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <TextField
          label="Subject"
          color="common"
          value={contact.subject}
          onChange={(e) => setContact({ ...contact, subject: e.target.value })}
        />
        <TextField
          label="Enter your message here"
          color="common"
          multiline
          minRows={5}
          value={contact.message}
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
        />
        <Button
          variant="contained"
          color="common"
          size="large"
          onClick={handleContact}
          loading={loading}
        >
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Sent Successfully!</DialogTitle>
        <DialogActions>
          <Button color="success" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default ContactPage;
