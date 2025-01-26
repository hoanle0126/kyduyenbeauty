import React from "react";
import {
  Grid2,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
  Card,
  OutlinedInput,
  CircularProgress,
} from "@mui/material";
import { Icon } from "@iconify/react";
import AdminDefaultLayout from "../../../../Layouts/AdminLayout/DefaultLayout";
import ImageThumbnail from "../../../../Components/ImageThumbnail";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  updateCategory,
} from "../../../../store/categories/action";
import { useNavigate, useParams } from "react-router-dom";

const CategoriesViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoriesSelector = useSelector((store) => store.categories);
  const [category, setCategory] = React.useState({});

  React.useEffect(() => {
    dispatch(getCategory(id));
  }, []);

  React.useEffect(() => {
    setCategory(categoriesSelector.category);
  }, [categoriesSelector.category]);

  return (
    <>
      {categoriesSelector.loading ? (
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
        <AdminDefaultLayout title="Add category">
          <Grid2 container spacing={"28px"} sx={{ paddingBottom: "12px" }}>
            <Grid2 size={3}>
              <Stack gap={"28px"}>
                <Paper
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
                    src={category.thumbnail}
                    setSrc={(src) =>
                      setCategory({
                        ...category,
                        thumbnail: src,
                      })
                    }
                  />
                  <Typography
                    variant="captiontext"
                    color={"text.disabled"}
                    width={"90%"}
                  >
                    Set the category thumbnail image. Only *.png, *.jpg and
                    *.jpeg image files are accepted
                  </Typography>
                </Paper>
              </Stack>
            </Grid2>
            <Grid2 size={9}>
              <Stack
                sx={{
                  paddingTop: "20px",
                  gap: "28px",
                  "& .MuiInputBase-input.MuiOutlinedInput-input": {
                    fontSize: 14,
                  },
                }}
              >
                <Card>
                  <Stack gap={"20px"}>
                    <Typography variant="h6">General</Typography>
                    <Stack gap={"8px"}>
                      <Typography variant="subtitle2">Category Name</Typography>
                      <OutlinedInput
                        size="small"
                        color="custom"
                        fullWidth
                        placeholder="Enter category name..."
                        value={category?.name}
                        onChange={(e) =>
                          setCategory({
                            ...category,
                            name: e.target.value,
                          })
                        }
                      />
                      <Typography variant="captiontext" color={"text.disabled"}>
                        A category name is required and recommended to be
                        unique.
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              </Stack>
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
                  onClick={() => {
                    dispatch(updateCategory(id, category));
                    categoriesSelector.loading === false &&
                      navigate("/admin/categories");
                  }}
                >
                  Save
                </Button>
              </Stack>
            </Grid2>
          </Grid2>
        </AdminDefaultLayout>
      )}
    </>
  );
};

export default CategoriesViewPage;
