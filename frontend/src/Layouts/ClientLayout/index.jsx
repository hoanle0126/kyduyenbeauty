import React from "react";
import ClientHeader from "./components/Header";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import ClientFooter from "./components/Footer";
// import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { MuiTheme } from "../../Theme";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/categories/action";
import { getShopProduct } from "../../store/product/action";

const ClientLayout = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);
  const products = useSelector((store) => store.products);
  const path = useLocation();

  React.useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [path.pathname]);

  React.useEffect(() => {
    dispatch(getShopProduct());
  }, [path.search]);

  return (
    <>
      {categories.loading || products.loading ? (
        <Stack
          sx={{
            width: "100%",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Stack>
      ) : (
        <>
          <ClientHeader />
          <Outlet />
          {/* <ClientFooter /> */}
        </>
      )}
    </>
  );
};

export default ClientLayout;
