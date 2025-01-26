import { Drawer, List, ListItemButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocation, useNavigate } from "react-router-dom";
import FilterCategory from "../components/FilterCategory";
import FilterPrice from "../components/FilterPrice";

const FilterDrawer = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer open={open} onClose={handleClose}>
      <Stack
        sx={{
          width: "100vw",
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "row",
            padding: "20px",
            borderBottom: "1px solid black",
            borderColor: "divider",
            gap: "12px",
          }}
        >
          <Typography variant="h5">Filter</Typography>
          <div className="flex-1"></div>
          <Icon
            icon="eva:close-fill"
            width="40"
            height="40"
            onClick={handleClose}
            className="cursor-pointer"
          />
        </Stack>
        <Stack
          sx={{
            padding: "20px",
            gap: "40px",
          }}
        >
          <FilterCategory />
          <FilterPrice />
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default FilterDrawer;
