import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./components/ArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import {
  alpha,
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../../../store/product/action";
import { getAllCategories } from "../../../../../store/categories/action";

const options = { align: "start" };
const SLIDE_COUNT = 6;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const CategorySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const navigate = useNavigate();
  const categories = useSelector((store) => store.categories);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Box
      sx={{
        paddingX: {
          md: "160px",
          sm: "140px",
          xs: "120px",
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
            Our Categories
          </Typography>
        </Box>
      </center>
      <Box
        sx={{
          width: "100%",
          position: "relative",
        }}
      >
        <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
          <Box
            sx={{
              backfaceVisibility: "hidden",
              display: "flex",
              touchAction: "pan-y pinch-zoom",
              marginLeft: {
                lg: "-40px",
                md: "-30px",
                sm: "-20px",
                xs: "-10px",
              },
            }}
          >
            {categories?.loading
              ? [1, 2, 3, 4].map((item, index) => (
                  <Box
                    sx={{
                      flex: {
                        lg: "0 0 calc(100% / 4)",
                        md: "0 0 calc(100% / 3)",
                        sm: "0 0 calc(100% / 2)",
                        xs: "0 0 calc(100% / 1)",
                      },
                      paddingLeft: {
                        lg: "40px",
                        md: "30px",
                        sm: "20px",
                        xs: "10px",
                      },
                    }}
                    key={index}
                  >
                    <Skeleton
                      variant="rounded"
                      sx={{
                        width: "100%",
                        height: "400px",
                        borderRadius: "20px",
                      }}
                    />
                  </Box>
                ))
              : categories?.categories.map((item, index) => (
                  <Box
                    sx={{
                      flex: {
                        lg: "0 0 calc(100% / 4)",
                        md: "0 0 calc(100% / 3)",
                        sm: "0 0 calc(100% / 2)",
                        xs: "0 0 calc(100% / 1)",
                      },
                      paddingLeft: {
                        lg: "40px",
                        md: "30px",
                        sm: "20px",
                        xs: "10px",
                      },
                    }}
                    key={index}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "400px",
                        position: "relative",
                        userSelect: "none",
                        "&::before": {
                          position: "absolute",
                          content: "''",
                          width: "100%",
                          height: "100%",
                          borderRadius: "20px",
                          backgroundColor: alpha(
                            MuiTheme().palette.text.primary,
                            0.2
                          ),
                        },
                      }}
                    >
                      <img
                        src={item.thumbnail}
                        className="w-full h-full rounded-[20px]"
                      />
                      <Stack
                        sx={{
                          position: "absolute",
                          bottom: "20px",
                          left: "50%",
                          translate: "-50%",
                          gap: "12px",
                        }}
                      >
                        <Typography
                          variant="h4"
                          color="background.paper"
                          textAlign="center"
                        >
                          {item.name}
                        </Typography>
                        <Button
                          variant="outlined"
                          color="common_light"
                          onClick={() => navigate("/shop?category=" + item.id)}
                        >
                          Learn More
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                ))}
          </Box>
        </Box>

        <IconButton
          sx={{
            position: "absolute",
            left: "-60px",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        >
          <Icon icon="eva:arrow-ios-back-fill" width={60} height={60} />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            right: "-132px",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        >
          <Icon icon="eva:arrow-ios-forward-fill" width={60} height={60} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CategorySection;
