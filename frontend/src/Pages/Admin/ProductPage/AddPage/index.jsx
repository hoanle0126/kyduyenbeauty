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
  List,
  ListItemButton,
  Collapse,
} from "@mui/material";
import { Icon } from "@iconify/react";
import GeneralTab from "./components/GeneralTab";
import AdvancedTab from "./components/AdvancedTab";
import { CustomTabPanel } from "@/Components/CustomTabPanel";
import ImageThumbnail from "@/Components/ImageThumbnail";
import AdminDefaultLayout from "../../../../Layouts/AdminLayout/DefaultLayout";
import { MuiTheme } from "../../../../Theme";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../../store/product/action";
import { getAllCategories } from "../../../../store/categories/action";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = React.useState("1");
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState({
    images: [],
    ingredient: {},
    sales: null,
  });
  const categories = useSelector((store) => store.categories);

  React.useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleTab = (event, newValue) => {
    setTab(newValue);
  };

  React.useEffect(() => {
    console.log(product);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(product, () => navigate("/admin/products")));
  };

  return (
    <AdminDefaultLayout title={"Create new product"}>
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
                src={product.thumbnail}
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
                  value={product.category}
                  label="Categories"
                  color="custom"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      category: e.target.value,
                    })
                  }
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
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => router.get(route("categories.create"))}
              >
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
            <AdvancedTab product={product} setProduct={setProduct} />
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

export default AddProductPage;
