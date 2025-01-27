// import EmblaCarousel from "@/Components/Carousel";
// import ClientLayout from "@/Layouts/ClientLayout";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
// import CategorySection from "./sections/CategorySection";
// import ProductSection from "./sections/ProductSection";
import ClientLayout from "../../../Layouts/ClientLayout";
import EmblaCarousel from "../../../Components/Carousel";
import CategorySection from "./sections/CategorySection";
import ProductSection from "./sections/ProductSection";
import { MuiTheme } from "../../../Theme";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../store/product/action";
import { Landing1Image } from "assets/Landing1";
import { Landing2Image } from "assets/Landing2";
import { Landing3Image } from "assets/Landing3";
import { getAllCategories } from "../../../store/categories/action";
import BestSellerSection from "./sections/BestSellerSection";
import HeaderHelmet from "../../../Components/Header";

const OPTIONS = { loop: true };
const SLIDES = [
  {
    href: Landing1Image,
  },
  {
    href: Landing2Image,
  },
  {
    href: Landing3Image,
  },
];

const LandingPage = () => {
  const upSm = useMediaQuery(MuiTheme().breakpoints.up("sm"));
  const downSm = useMediaQuery(MuiTheme().breakpoints.down("sm"));
  const upMd = useMediaQuery(MuiTheme().breakpoints.up("md"));

  return (
    <>
      <HeaderHelmet title={"Cao Kỳ Duyên Beauty"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: {
            lg: "120px",
            md: "90px",
            sm: "60px",
            xs: "60px",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
          />
        </Box>
        <CategorySection />
        <ProductSection />
        <BestSellerSection />
        <Grid2
          container
          sx={{
            bottom: "-40px",
            backgroundColor: "background.paper",
            width: "100%",
            borderTop: "1px solid " + MuiTheme().palette.primary.lighter,
            borderBottom: "1px solid " + MuiTheme().palette.primary.lighter,
            "& .service__item": {
              padding: "20px",
              "&:nth-child(2)": {
                borderLeft: {
                  xs: "0px solid divider",
                  sm: "1px solid " + MuiTheme().palette.primary.lighter,
                },
                borderRight: {
                  xs: "0px solid black",
                  sm: "1px solid " + MuiTheme().palette.primary.lighter,
                },
                borderTop: {
                  xs: "1px solid " + MuiTheme().palette.primary.lighter,
                  sm: "0px solid black",
                },
                borderBottom: {
                  xs: "1px solid " + MuiTheme().palette.primary.lighter,
                  sm: "0px solid black",
                },
              },
            },
          }}
        >
          {[
            {
              icon: "bx:car",
              title: "Shipping",
              description: "4-6 Days",
            },
            {
              icon: "solar:verified-check-bold",
              title: "100% Original",
              description: "Genuine Product Assurance",
            },
            {
              icon: "solar:tag-price-bold",
              title: "Reasonable Price",
              description: "Reasonable price for customers",
            },
          ].map((serviceItem, serviceIndex) => (
            <Grid2
              key={serviceIndex}
              size={upSm ? 4 : 12}
              className="service__item"
            >
              <Stack direction="row" gap="20px">
                <Icon
                  icon={serviceItem.icon}
                  width={40}
                  height={40}
                  color={MuiTheme().palette.primary.darker}
                />
                <Stack
                  sx={{
                    gap: "4px",
                    flexWrap: "wrap",
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textTransform: "uppercase",
                    }}
                  >
                    {serviceItem.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textTransform: "capitalize",
                      color: "text.secondary",
                    }}
                  >
                    {serviceItem.description}
                  </Typography>
                </Stack>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default LandingPage;
