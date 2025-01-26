import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  MenuItem,
  MenuList,
  Popover,
  Popper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { MuiTheme } from "../../../../Theme";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../../store/categories/action";

function RenderProduct(props) {
  const { value, row } = props;

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Avatar
        src={row.thumbnail}
        sx={{
          bgcolor: "primary.light",
          width: "70px",
          height: "70px",
          borderRadius: "16px",
        }}
        variant="rounded"
      >
        C
      </Avatar>
      <Stack>
        <Typography variant="subtitle2">{row.name}</Typography>
      </Stack>
    </Box>
  );
}

function RenderAction(props) {
  const { row } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        height: "100%",
      }}
    >
      <IconButton onClick={handleClick}>
        <Icon
          icon="eva:more-vertical-fill"
          color={MuiTheme().palette.text.primary}
        />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuList>
          <MenuItem onClick={() => navigate("/admin/categories/" + row.id)}>
            <Icon icon="solar:eye-bold" />
            View {row.id}
          </MenuItem>
          <MenuItem onClick={() => dispatch(deleteCategory(row.id))}>
            <Icon
              icon="solar:trash-bin-trash-bold"
              color={MuiTheme().palette.error.main}
            />
            <Typography variant="body2" color={"error"}>
              Delete
            </Typography>
          </MenuItem>
        </MenuList>
      </Popover>
    </Box>
  );
}

const DataGridHeader = () => {
  const { t } = useTranslation();

  return [
    {
      field: "name",
      headerName: "Categories",
      flex: 1,
      renderCell: RenderProduct,
    },
    {
      field: "action",
      headerName: "",
      sortable: false, // Disable sorting
      disableColumnMenu: true,
      renderCell: RenderAction,
    },
  ];
};

export default DataGridHeader;
