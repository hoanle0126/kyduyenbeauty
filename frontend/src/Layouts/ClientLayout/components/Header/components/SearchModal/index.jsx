import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import {
  alpha,
  Box,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        backgroundColor: alpha(MuiTheme().palette.grey[900], 0.9),
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/shop?search=" + searchValue);
        }}
      >
        <Stack alignItems="end" padding="40px">
          <Icon
            icon="eva:close-fill"
            width="60"
            height="60"
            color={MuiTheme().palette.background.paper}
            className="cursor-pointer"
            onClick={handleClose}
          />
        </Stack>
        <TextField
          id="standard-basic"
          placeholder="Search for ..."
          variant="standard"
          fullWidth
          color="common"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            "& .MuiInputBase-input": {
              height: "60px",
              color: "#fff",
              fontSize: MuiTheme().typography.h4.fontSize,
              "&::placeholder": {
                color: "background.paper",
                fontSize: MuiTheme().typography.h4.fontSize,
              },
              textAlign: "center",
            },
          }}
        />
        <Box
          sx={{
            flex: 1,
          }}
        ></Box>
      </Box>
    </Modal>
  );
};

export default SearchModal;
