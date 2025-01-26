import { Icon } from "@iconify/react";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { MuiTheme } from "../../../../../Theme";
import { useNavigate } from "react-router-dom";
import FilterDrawer from "../FilterSection/FilterDrawer";

const SortSection = () => {
  const navigate = useNavigate();
  const { search } = window.location; // Lấy query string hiện tại
  const searchParams = new URLSearchParams(search);
  const downLg = useMediaQuery(MuiTheme().breakpoints.down("lg"));
  const [filterMenu, setFilterMenu] = React.useState(true);

  return (
    <Stack direction="row" gap="12px">
      {downLg && (
        <IconButton onClick={()=>setFilterMenu(true)}>
          <Icon icon="solar:filter-linear" width="24" height="24" />
        </IconButton>
      )}
      <div className="flex-1"></div>
      <FormControl
        size="small"
        sx={{
          width: 240,
        }}
      >
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchParams.get("sort")}
          label="Sort"
          onChange={(e) => {
            searchParams.set("sort", e.target.value);
            navigate(`?${searchParams.toString()}`);
          }}
        >
          <MenuItem value={"created_at"}>Sort by date</MenuItem>
          <MenuItem value={"price_total"}>Sort by price</MenuItem>
        </Select>
      </FormControl>
      <IconButton
        sx={{
          borderRadius: "8px",
          border: "1px solid black",
          borderColor: "divider",
        }}
        onClick={() => {
          if (
            searchParams.get("asc") === "true" ||
            searchParams.get("asc") === null
          ) {
            searchParams.set("asc", "false");
          } else {
            searchParams.set("asc", "true");
          }
          navigate(`?${searchParams.toString()}`);
        }}
      >
        <Icon
          icon={
            true
              ? "solar:sort-from-bottom-to-top-linear"
              : "solar:sort-from-top-to-bottom-linear"
          }
          width="24"
          height="24"
        />
      </IconButton>
      <FilterDrawer
        open={filterMenu}
        handleClose={() => setFilterMenu(false)}
      />
    </Stack>
  );
};

export default SortSection;
