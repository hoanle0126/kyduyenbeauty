import { Avatar, Checkbox, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../../../../../store/categories/action";
import { useNavigate } from "react-router-dom";

const FilterCategory = () => {
  const navigate = useNavigate();
  const { search } = window.location; // Lấy query string hiện tại
  const searchParams = new URLSearchParams(search);
  const categories = useSelector((store) => store.categories);

  return (
    <Stack gap="20px">
      <Typography
        variant="h6"
        sx={{
          position: "relative",
          "&::before": {
            content: "''",
            position: "absolute",
            width: "60px",
            height: "2px",
            backgroundColor: "text.primary",
            bottom: 0,
          },
        }}
      >
        Filter by Category
      </Typography>
      <Stack
        sx={{
          "& .filter__class": {
            paddingY: "8px",
            borderBottom: "1px solid black",
            borderColor: "divider",
            "&:first-child": {
              paddingTop: 0,
              paddingBottom: "8px",
            },
          },
        }}
      >
        {categories.categories.map((filterItem, filterIndex) => (
          <Stack
            key={filterIndex}
            direction="row"
            className="filter__class"
            sx={{
              gap: "4px",
              alignItems: "center",
              color: "text.secondary",
            }}
          >
            <Checkbox
              disableRipple
              sx={{
                padding: 0,
              }}
              color="common"
              onChange={() => {
                searchParams.set("category", filterItem.id);
                navigate(`?${searchParams?.toString()}`);
              }}
              checked={filterItem.id + "" === searchParams.get("category")}
            />
            <Avatar
              src={filterItem.thumbnail}
              sx={{
                width: 24,
                height: 24,
              }}
            />
            <Typography flex={1} variant="body2">
              {filterItem.name}
            </Typography>
            <Typography variant="body2">({filterItem.products})</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default FilterCategory;
