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
          {upSm ? (
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          ) : (
            <>
              <Typography variant="body1" sx={{
                paddingX:"30px",
                textAlign:"center",
                color:"text.secondary"
              }}>
                Free shipping on orders over $149 | Use code at checkout:
                FREESHIP
              </Typography>
              <Stack
                sx={{
                  paddingX: "30px",
                  paddingBottom: "40px",
                  gap: "12px",
                  backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(20, 22, 23, 0.4) 100%), url(https://th.bing.com/th/id/R.58d952d0d80dffa2f7df595664b01e3c?rik=tFrwN4lgCs%2fikQ&pid=ImgRaw&r=0)",
                  ".landing__title": {
                    color: "background.paper",
                    textShadow: "3px 3px 3px #141617",
                  },
                }}
              >
                <Typography className="landing__title" variant="h2">
                  Authentic Korean Quality at Fair Prices
                </Typography>
                <Typography className="landing__title" variant="h6">
                  We specialize in offering authentic Korean products of
                  exceptional quality, ensuring a commitment to reasonable
                  pricing and providing dedicated, customer-focused service to
                  enhance your shopping experience.
                </Typography>
              </Stack>
            </>
          )}
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
            paddingX: {
              xs: "30px",
              sm: "60px",
              md: "90px",
              lg: "160px",
            },
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
              description:
                "Free shipping with $150 purchase (on selected items) in the U.S. only",
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
