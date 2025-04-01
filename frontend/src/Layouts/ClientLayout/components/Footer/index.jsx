import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  OutlinedInput,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MainLogo from "../../../../assets/mainLogo";
import { axiosClient } from "../../../../config/axiosClient";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ClientFooter = () => {
  const categories = useSelector((store) => store.categories);
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
            onChange={(e) =>
              setContact({ ...contact, subject: e.target.value })
            }
          />
          <TextField
            label="Enter your message here"
            color="common"
            multiline
            minRows={3}
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
          />
          <Button
            variant="contained"
            color="common"
            onClick={handleContact}
            loading={loading}
          >
            Send
          </Button>
        </Stack>
      </Stack>
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

export default ClientFooter;
