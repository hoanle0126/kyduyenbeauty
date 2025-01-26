import ClientLayout from "@/Layouts/ClientLayout";
import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import {
  alpha,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  FormControl,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Rating,
  Select,
  Slide,
  Slider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import marksRating from "./DetailPage/marksRating";
import { formatCurrency } from "@/Function/formatCurrency";
import PriceSlider from "@/Components/PriceSlider";
import FilterSection from "./Components/FilterSection";
import SortSection from "./Components/SortSection";
import ProductSection from "./Components/ProductSection";
import convertText from "@/Function/converText";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../store/categories/action";
import HeaderHelmet from "../../../Components/Header";
import FilterDrawer from "./Components/FilterSection/FilterDrawer";

const ShopPage = () => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { search } = window.location; // Lấy query string hiện tại
  const searchParams = new URLSearchParams(search);
  const upSm = useMediaQuery(MuiTheme().breakpoints.up("sm"));
  const upMd = useMediaQuery(MuiTheme().breakpoints.up("md"));
  const upLg = useMediaQuery(MuiTheme().breakpoints.up("lg"));

  const products = useSelector((store) => store.products);

  console.log("product", products);

  return (
    <>
      <HeaderHelmet title={"Shop Cao Kỳ Duyên Beauty"} />
      <Stack
        sx={{
          gap: "40px",
        }}
      >
        <Stack>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "text.secondary",
              display: "flex",
              alignItems: "center",
              paddingX: {
                xs: "30px",
                sm: "60px",
                md: "90px",
                lg: "160px",
              },
              paddingY: "40px",
            }}
          >
            <Typography variant="h4" color="background.paper">
              Shop
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "background.neutral",
              display: "flex",
              alignItems: "center",
              paddingX: {
                xs: "30px",
                sm: "60px",
                md: "90px",
                lg: "160px",
              },
              paddingY: "20px",
            }}
          >
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                fontSize: MuiTheme().typography.body2,
                ".current": {
                  color: "text.primary",
                },
              }}
            >
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link className="current">Shop</Link>
            </Breadcrumbs>
          </Box>
        </Stack>
        <Stack
          sx={{
            paddingX: {
              xs: "30px",
              sm: "60px",
              md: "90px",
              lg: "160px",
            },
            paddingBottom: "80px",
            flexDirection: "row",
            gap: "40px",
          }}
        >
          {upLg ? <FilterSection /> : <></>}
          <Stack flex={1} gap="20px">
            <SortSection />
            <ProductSection />
            <Stack alignItems="center" marginTop="20px">
              <Pagination
                count={products.page?.last_page}
                page={products.page?.current_page}
                onChange={(e, value) => {
                  searchParams.set("page", value);
                  navigate(`?${searchParams?.toString()}`);
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      
    </>
  );
};

export default ShopPage;
