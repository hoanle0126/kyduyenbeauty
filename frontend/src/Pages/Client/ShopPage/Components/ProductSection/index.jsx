import { formatCurrency } from "@/Function/formatCurrency";
import { Box, Grid2, Rating, Skeleton, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import ProductCart from "./components/ProductCart";
import ProductsData from "../../../../../data/ProductsData";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../../../store/product/action";
import { useLocation } from "react-router-dom";

const ProductSection = () => {
  const state = useSelector((store) => store.products);

  return (
    <Grid2 container spacing="20px">
      {state.products.map((shopItem, shopIndex) => (
        <Grid2
          size={{
            lg: 3,
            md: 3,
            sm: 4,
            xs: 6,
          }}
          key={shopIndex}
        >
          {state.loading ? (
            <Skeleton
              variant="rectangular"
              sx={{
                width: "100%",
                height: "280px",
              }}
            />
          ) : (
            <ProductCart shopItem={shopItem} />
          )}
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ProductSection;
