import React from "react";
import {
  Grid2,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Icon } from "@iconify/react";
import GeneralTab from "./components/GeneralTab";
import AdvancedTab from "./components/AdvancedTab";
import { CustomTabPanel } from "@/Components/CustomTabPanel";
import ImageThumbnail from "../../../../Components/ImageThumbnail";
import ProductData from "../../../../data/ProductData";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../../store/categories/action";
import AdminDefaultLayout from "../../../../Layouts/AdminLayout/DefaultLayout";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductByKey,
  updateProduct,
} from "../../../../store/product/action";
import { MuiTheme } from "../../../../Theme";

const UpdateProductPage = () => {
  const [tab, setTab] = React.useState("1");
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = React.useState({});
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const categories = useSelector((store) => store.categories);
  const products = useSelector((store) => store.products);
  const [product, setProduct] = React.useState({});
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getProductByKey(id));
  }, []);

  React.useEffect(() => {
    products.loading_product === false && setProduct(products.product);
  }, [products.product]);

  console.log(products.product);

  const handleTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleChange = (event, key) => {
    setCurrentFeature({ ...currentFeature, [key]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(product, id, () => navigate("/admin/products")));
  };

  return products.loading_product ? (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Stack>
  ) : (
    <AdminDefaultLayout title={"Update product"}>
      <Grid2 container spacing={"28px"} sx={{ paddingBottom: "12px" }}>
        <Grid2 size={3}>
          <Stack gap={"28px"}>
            <Box
              sx={{
                boxShadow: "custom.card",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                paddingBottom: "40px",
              }}
            >
              <Typography variant="h6">Thumbnail</Typography>
              <ImageThumbnail
                src={product?.thumbnail}
                setSrc={(src) =>
                  setProduct({
                    ...product,
                    thumbnail: src,
                  })
                }
              />
              <Typography
                variant="captiontext"
                color={"text.disabled"}
                width={"90%"}
              >
                Set the product thumbnail image. Only *.png, *.jpg and *.jpeg
                image files are accepted
              </Typography>
            </Box>
            <Box
              sx={{
                boxShadow: "custom.card",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                paddingBottom: "40px",
              }}
            >
              <Typography variant="h6">Category</Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" color="custom">
                  Categories
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Number(product?.category_id)}
                  label="Categories"
                  onChange={(e) =>
                    setProduct({ ...product, category_id: e.target.value })
                  }
                  color="custom"
                >
                  {categories.categories?.map((category, index) => (
                    <MenuItem value={category.id} key={index}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        gap={"8px"}
                      >
                        <img
                          src={category.thumbnail}
                          alt=""
                          className="w-[16px] h-[16px]"
                        />
                        {category.name}
                      </Stack>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button variant="outlined" color="inherit">
                Create new category
              </Button>
            </Box>
          </Stack>
        </Grid2>
        <Grid2 size={9}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "primary.lighter",
            }}
          >
            <Tabs
              value={tab}
              onChange={handleTab}
              sx={{
                "& .MuiButtonBase-root.MuiTab-root": {
                  textTransform: "none",
                  fontStyle: MuiTheme().typography.subtitle2,
                },
              }}
            >
              <Tab label="General" value="1" />
              <Tab label="Advanced" value="2" />
            </Tabs>
          </Box>
          <CustomTabPanel tab={tab} index={1}>
            <GeneralTab product={product} setProduct={setProduct} />
          </CustomTabPanel>
          <CustomTabPanel tab={tab} index={2}>
            <AdvancedTab
              product={product}
              setProduct={setProduct}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </CustomTabPanel>
          <Stack
            sx={{
              flexFlow: "row",
              flexDirection: "row",
              justifyContent: "right",
              position: "sticky",
              bottom: 24,
              marginTop: "24px",
            }}
          >
            <Button
              variant="contained"
              color="common"
              sx={{ boxShadow: "main.z1" }}
              endIcon={<Icon icon="eva:save-fill" />}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Stack>
        </Grid2>
      </Grid2>
    </AdminDefaultLayout>
  );
};

export default UpdateProductPage;
