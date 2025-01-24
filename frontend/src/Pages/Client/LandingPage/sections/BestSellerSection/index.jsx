import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Grid2,
  Rating,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { MuiTheme } from "../../../../../Theme";
import { useNavigate } from "react-router-dom";
import ProductsData from "../../../../../data/ProductsData";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../../../store/product/action";

const BestSellerSection = () => {
  const upSm = useMediaQuery(MuiTheme().breakpoints.up("sm"));
  const upMd = useMediaQuery(MuiTheme().breakpoints.up("md"));
  const navigate = useNavigate();
  const products = useSelector((store) => store.products);

  console.log(
    "sort",
    products.products.sort(
      (a, b) => b.revenue - a.revenue
    )
  );
  console.log("unsort", products.products);

  return (
    <Box
      sx={{
        paddingX: {
          xs: "30px",
          sm: "60px",
          md: "90px",
          lg: "160px",
        },
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <center>
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            "&::before": {
              position: "absolute",
              content: "''",
              width: "60px",
              height: "2px",
              backgroundColor: "text.primary",
              top: "50%",
              left: "-68px",
            },
            "&::after": {
              position: "absolute",
              content: "''",
              width: "60px",
              height: "2px",
              backgroundColor: "text.primary",
              top: "50%",
              right: "-68px",
            },
          }}
        >
          <Typography variant="h4" textTransform="uppercase">
            Best Seller
          </Typography>
        </Box>
      </center>
      <Grid2 container spacing="40px">
        {products.loading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <Grid2
                key={index}
                size={{
                  lg: 3,
                  md: 4,
                  sm: 6,
                  xs: 6,
                }}
              >
                <Skeleton
                  variant="rounded"
                  sx={{ width: "100%", height: 360 }}
                />
              </Grid2>
            ))
          : products.products.map((item, index) => (
              <Grid2
                key={index}
                size={{
                  lg: 3,
                  md: 4,
                  sm: 6,
                  xs: 6,
                }}
              >
                <Stack
                  gap={"4px"}
                  height={"100%"}
                  onClick={() => navigate("/shop/" + item.key_name)}
                >
                  <Stack
                    sx={{
                      position: "relative",
                      img: {
                        width: "100%",
                        aspectRatio: "1 / 1",
                      },
                      cursor: "pointer",
                      justifyContent: "center",
                      "&:hover": {
                        "&::before": {
                          content: "''",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          backgroundColor: "grey.900",
                          opacity: 0.1,
                          width: "100%",
                          height: "100%",
                        },
                      },
                    }}
                  >
                    <img src={item.thumbnail} alt="" />
                  </Stack>
                  <Typography
                    variant="subtitle2"
                    marginTop={"12px"}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "info.main",
                      },
                      flex: 1,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Rating value={item.rating} readOnly />
                  <Typography variant="h6" color="error.main">
                    {formatCurrency(item.price)}
                  </Typography>
                </Stack>
              </Grid2>
            ))}
      </Grid2>
      <Stack alignItems="end">
        <Button
          color="common"
          endIcon={<Icon icon="eva:arrow-forward-fill" />}
          onClick={() => console.log()}
        >
          View more
        </Button>
      </Stack>
    </Box>
  );
};

export default BestSellerSection;
