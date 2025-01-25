import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { Palette } from "@/Theme/elements/palette";
import AddAddressModal from "./components/AddAddressModal";
import { MuiTheme } from "../../../../../Theme";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../../../../Context";

const ListAddress = () => {
  const { cart, setCart } = useStateContext();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [address, setAddress] = React.useState({
    first_name: "",
    last_name: "",
    phone: 0,
    street_address: "",
    city: "",
    state: "",
    zip: "",
    default: true,
  });

  React.useEffect(() => {
    setCart({ ...cart, address: address });
  }, [address]);

  return (
    <>
      <AddAddressModal open={open} handleClose={handleClose} />
      <Stack
        gap={"32px"}
        sx={{
          padding: "40px",
          boxShadow: "custom.card",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h4">Shipping address</Typography>
        <Grid2 container spacing="12px">
          <Grid2 size={4}>
            <Stack gap="8px">
              <Typography id="modal-modal-title" variant="subtitle2">
                First name
              </Typography>
              <TextField
                size="small"
                fullWidth
                color="common"
                value={address.first_name}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    first_name: e.target.value,
                  })
                }
              />
            </Stack>
          </Grid2>
          <Grid2 size={8}>
            <Stack gap="8px">
              <Typography id="modal-modal-title" variant="subtitle2">
                Last name
              </Typography>
              <Stack direction="row" alignItems="center" gap="20px">
                <TextField
                  size="small"
                  color="common"
                  value={address.last_name}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      last_name: e.target.value,
                    })
                  }
                  sx={{ flex: 1 }}
                />
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
        <Stack gap="8px">
          <Typography id="modal-modal-title" variant="subtitle2">
            Phone number
          </Typography>
          <Stack direction="row" alignItems="center" gap="20px">
            <TextField
              size="small"
              color="common"
              value={address.phone}
              onChange={(e) =>
                setAddress({
                  ...address,
                  phone: e.target.value,
                })
              }
              sx={{ flex: 1 }}
            />
          </Stack>
        </Stack>
        <Stack gap="8px">
          <Typography id="modal-modal-title" variant="subtitle2">
            Street Address
          </Typography>
          <TextField
            size="small"
            fullWidth
            color="common"
            value={address.street_address}
            onChange={(e) =>
              setAddress({
                ...address,
                street_address: e.target.value,
              })
            }
          />
        </Stack>
        <Stack gap="8px">
          <Typography id="modal-modal-title" variant="subtitle2">
            City
          </Typography>
          <TextField
            size="small"
            fullWidth
            color="common"
            value={address.city}
            onChange={(e) =>
              setAddress({
                ...address,
                city: e.target.value,
              })
            }
          />
        </Stack>
        <Stack gap="8px">
          <Typography id="modal-modal-title" variant="subtitle2">
            State/ Province
          </Typography>
          <TextField
            size="small"
            fullWidth
            color="common"
            value={address.state}
            onChange={(e) =>
              setAddress({
                ...address,
                state: e.target.value,
              })
            }
          />
        </Stack>
        <Stack gap="8px">
          <Typography id="modal-modal-title" variant="subtitle2">
            Zip/Postal Code
          </Typography>
          <TextField
            size="small"
            fullWidth
            color="common"
            value={address.zip}
            onChange={(e) =>
              setAddress({
                ...address,
                zip: e.target.value,
              })
            }
          />
        </Stack>
      </Stack>
      <Stack direction={"row"} marginTop={"32px"} alignItems={"center"}>
        <Button
          color="common"
          startIcon={<Icon icon="eva:arrow-back-fill" width="28" height="28" />}
          onClick={() => navigate("/checkout?step=" + 0)}
        >
          Back
        </Button>
        <div className="flex-1"></div>
        <Button
          color="common"
          variant="contained"
          startIcon={<Icon icon="eva:plus-fill" />}
          onClick={() => navigate("/checkout?step=" + 2)}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default ListAddress;
