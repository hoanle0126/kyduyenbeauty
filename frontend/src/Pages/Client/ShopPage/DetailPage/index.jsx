import ClientLayout from "@/Layouts/ClientLayout";
import { MuiTheme } from "@/Theme";
import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Divider,
  Grid2,
  IconButton,
  Paper,
  Rating,
  Skeleton,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import EmblaCarousel from "@/Components/Carousel";
import React from "react";
import { Icon } from "@iconify/react";
import { CustomTabPanel } from "@/Components/CustomTabPanel";
import ProductReviewTab from "./ProductReviewTab";
import ThumbnailCarousel from "@/Components/Thumbnail";
import { formatCurrency } from "@/Function/formatCurrency";
import QuantitySection from "./sections/QuantitySection";
import GlobalStyle from "@/Components/GlobalStyle";
import ProductsData from "../../../../data/ProductsData";
import { Link, useParams } from "react-router-dom";
import ProductData from "../../../../data/ProductData";
import { useDispatch, useSelector } from "react-redux";
import { getProductByKey } from "../../../../store/product/action";
import HeaderHelmet from "../../../../Components/Header";

const OPTIONS = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ShopDetailPage = () => {
  const { id } = useParams();
  const product = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [tab, setTab] = React.useState("1");

  const handleTab = (event, newValue) => {
    setTab(newValue);
  };

  React.useEffect(() => {
    dispatch(getProductByKey(id));
  }, []);

  console.log(product);

  return (
    <>
      {product.loading_product ? (
        <Stack
          sx={{
            height: "100vh",
            width: "100vw",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "background.paper",
            zIndex: 10000,
          }}
        >
          <CircularProgress />
        </Stack>
      ) : (
        <Stack gap="40px" paddingBottom="80px">
          <HeaderHelmet title={product.product?.name} />
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
                {product.product?.name}
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
                <Link underline="hover" color="inherit" href="/">
                  Shop
                </Link>
                <Link className="current">{product.product?.name}</Link>
              </Breadcrumbs>
            </Box>
          </Stack>
          <Grid2
            container
            spacing="80px"
            paddingX={{
              xs: "30px",
              sm: "60px",
              md: "90px",
              lg: "160px",
            }}
          >
            <Grid2
              size={{
                md: 7,
                sm: 12,
                xs: 12,
              }}
            >
              <Stack gap="12px">
                <ThumbnailCarousel
                  slides={[product.product?.thumbnail].concat(
                    product.product?.images
                  )}
                  options={OPTIONS}
                />
              </Stack>
            </Grid2>
            <Grid2
              size={{
                md: 5,
                sm: 12,
                xs: 12,
              }}
            >
              <Stack
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  justifyContent: "end",
                  gap: "16px",
                }}
              >
                <Typography
                  variant="subtitle2"
                  color={
                    Number(product.product?.remain) === 0
                      ? "error.main"
                      : "primary.main"
                  }
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {Number(product.product?.remain) === 0
                    ? "Out of stock"
                    : "In stock"}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {product.product?.name}
                </Typography>
                <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
                  <Rating value={product.product?.rating} readOnly />
                  <Typography variant="body2" color={"text.disabled"} sx={{}}>
                    ({product.product?.reviews?.length} reviews)
                  </Typography>
                </Stack>
                <Stack direction="row" gap="20px">
                  {product.product?.price_total !== null ? (
                    <>
                      <Typography
                        variant="h5"
                        color="text.disabled"
                        sx={{
                          textDecoration: "line-through",
                        }}
                      >
                        {formatCurrency(product.product?.price)}
                      </Typography>
                      <Typography variant="h5" color="error.main">
                        {formatCurrency(product.product?.price_total)}
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="h5" color="text.primary">
                      {formatCurrency(product.product?.price)}
                    </Typography>
                  )}
                </Stack>
                <Divider
                  sx={{
                    borderStyle: "dashed",
                  }}
                />
                <GlobalStyle>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: product.product?.description,
                    }}
                  ></Box>
                </GlobalStyle>
                <div className="flex-1"></div>
                <QuantitySection />
                <Stack
                  sx={{
                    height: "66px",
                    marginTop: "8px",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <div>
                    <Button
                      color="common"
                      startIcon={<Icon icon="eva:plus-fill" />}
                    >
                      <Typography variant="body2">Compare</Typography>
                    </Button>
                  </div>
                  <div>
                    <Button
                      color="common"
                      startIcon={<Icon icon="eva:heart-fill" />}
                    >
                      <Typography variant="body2">Favorite</Typography>
                    </Button>
                  </div>
                  <div>
                    <Button
                      color="common"
                      startIcon={<Icon icon="eva:share-fill" />}
                    >
                      <Typography variant="body2">Favorite</Typography>
                    </Button>
                  </div>
                </Stack>
              </Stack>
            </Grid2>
            <Grid2 size={12}>
              <Grid2
                container
                gap={{
                  sm: 0,
                  xs: "40px",
                }}
                justifyContent={"space-around"}
                spacing="40px"
              >
                {[
                  {
                    icon: "bx:car",
                    title: "Shipping",
                    description:
                      "Shipping takes around 4 to 6 days, depending on the destination and other factors.",
                  },
                  {
                    icon: "solar:verified-check-bold",
                    title: "100% Original",
                    description:
                      "Our Genuine Product Assurance ensures 100% authenticity and quality.",
                  },
                  {
                    icon: "solar:tag-price-bold",
                    title: "Reasonable Price",
                    description:
                      "We offer reasonable prices, providing great value without compromising on quality.",
                  },
                ].map((serviceItem, serviceIndex) => (
                  <Grid2
                    size={{
                      lg: 4,
                      mg: 4,
                      sm: 4,
                      xs: 12,
                    }}
                  >
                    <Stack key={serviceIndex} alignItems={"center"} gap={"8px"}>
                      <Icon
                        icon={serviceItem.icon}
                        width="32"
                        height="32"
                        color={MuiTheme().palette.success.dark}
                      />
                      <div />
                      <Typography variant="subtitle1" color="text.primary">
                        {serviceItem.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={"text.secondary"}
                        textAlign={"center"}
                      >
                        {serviceItem.description}
                      </Typography>
                    </Stack>
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
            <Grid2 size={12}>
              <Stack
                sx={{
                  boxShadow: "custom.card",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Tabs
                  value={tab}
                  onChange={handleTab}
                  sx={{
                    "& .MuiButtonBase-root.MuiTab-root": {
                      textTransform: "none",
                      fontWeight: 600,
                    },
                    borderBottom: "2px solid",
                    borderColor: "divider",
                  }}
                >
                  <Tab
                    color="text.primary"
                    label={<Typography variant="subtitle2">General</Typography>}
                    value="1"
                  />
                  <Tab
                    label={
                      <Typography variant="subtitle2">Advanced</Typography>
                    }
                    value="2"
                  />
                </Tabs>
                <CustomTabPanel tab={tab} index={1}>
                  <GlobalStyle>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        padding: "40px 24px",
                        gap: "16px",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: product.product?.detail,
                      }}
                    ></Box>
                  </GlobalStyle>
                </CustomTabPanel>
                <CustomTabPanel tab={tab} index={2}>
                  <TableContainer
                    component={Paper}
                    sx={{
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Typography variant="h4" textAlign="center">
                      Ingredient Table
                    </Typography>
                    <Table
                      sx={{
                        minWidth: 650,
                        border: "1px solid black",
                        borderColor: "divider",
                        "& .MuiTableCell-root.MuiTableCell-head": {
                          color: "text.secondary",
                          borderRight: "1px solid black",
                          fontWeight: 600,
                          borderColor: "divider",
                        },
                      }}
                      aria-label="simple table"
                    >
                      <TableHead
                        sx={{
                          backgroundColor: "background.neutral",
                        }}
                      >
                        <TableRow>
                          <TableCell>Product</TableCell>
                          <TableCell>Ingredient</TableCell>
                          <TableCell>Uses</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.entries(product.product?.ingredient || {}).map(
                          ([ingredientKey, ingredientValue]) => (
                            <React.Fragment key={ingredientKey}>
                              <TableRow
                                sx={{
                                  td: {
                                    "&:not(:last-child)": {
                                      borderRight: "1px solid black",
                                      borderColor: "divider",
                                    },
                                  },
                                }}
                              >
                                <TableCell
                                  sx={{
                                    fontStyle: MuiTheme().typography.subtitle2,
                                  }}
                                  rowSpan={
                                    Object.entries(ingredientValue).length
                                  }
                                >
                                  {ingredientKey}
                                </TableCell>
                                <TableCell>
                                  <Stack gap="8px">
                                    {Object.keys(ingredientValue)[0]}
                                  </Stack>
                                </TableCell>
                                <TableCell>
                                  <Stack gap="8px">
                                    {Object.entries(ingredientValue)[0]}
                                  </Stack>
                                </TableCell>
                              </TableRow>
                              {Object.entries(ingredientValue)
                                .slice(1)
                                .map(([itemKey, itemValue]) => (
                                  <TableRow
                                    sx={{
                                      td: {
                                        "&:not(:last-child)": {
                                          borderRight: "1px solid black",
                                          borderColor: "divider",
                                        },
                                      },
                                    }}
                                  >
                                    <TableCell>{itemKey}</TableCell>
                                    <TableCell>{itemValue}</TableCell>
                                  </TableRow>
                                ))}
                            </React.Fragment>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CustomTabPanel>
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
      )}
    </>
  );
};

export default ShopDetailPage;
