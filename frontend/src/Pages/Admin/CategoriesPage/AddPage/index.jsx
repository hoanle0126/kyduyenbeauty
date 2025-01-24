import AdminLayout from "@/Layouts/AdminLayout";
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
} from "@mui/material";
import { Icon } from "@iconify/react";
import { MuiTheme } from "resources/js/Theme";
import { uploadToCloudinary } from "resources/utils/uploadToCloudinary";
import { router, usePage } from "@inertiajs/react";
import { CustomTabPanel } from "@/Components/CustomTabPanel";
import AdminDefaultLayout from "resources/js/Layouts/AdminLayout/DefaultLayout";
import { HexColorPicker } from "react-colorful";
import ImageThumbnail from "@/Components/ImageThumbnail";

const CategoriesAddPage = () => {
    const [openFeatureModal, setOpenFeatureModal] = React.useState(false);
    const [openCompanyModal, setOpenCompanyModal] = React.useState(false);
    const { props } = usePage();
    const [category, setCategory] = React.useState({
        feature: {
            color: { type: "color" },
            size: { type: "select_value" },
        },
        companies: [
            {
                name: "Samsung",
                image: "https://cdnv2.tgdd.vn/mwg-static/common/Category/31/ce/31ce9dafafac121361ee7cbd313ae76b.png",
            },
            {
                name: "Apple",
                image: "https://cdnv2.tgdd.vn/mwg-static/common/Category/92/e5/92e5003382a0bada9a770618b6c6099b.png",
            },
        ],
    });

    const handleSelectImage = async (e) => {
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setCategory({
            ...category,
            thumbnail: imgUrl,
        });
    };

    return (
        <AdminLayout title="Add category">
            <AdminDefaultLayout title="Add category">
                <Grid2
                    container
                    spacing={"28px"}
                    sx={{ paddingBottom: "12px" }}
                >
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
                                    Set the category thumbnail image. Only
                                    *.png, *.jpg and *.jpeg image files are
                                    accepted
                                </Typography>
                            </Paper>
                        </Stack>
                    </Grid2>
                    <Grid2 size={9}>
                        <Stack
                            sx={{
                                paddingTop: "20px",
                                gap: "28px",
                                "& .MuiInputBase-input.MuiOutlinedInput-input":
                                    {
                                        fontSize: 14,
                                    },
                            }}
                        >
                            <Card>
                                <Stack gap={"20px"}>
                                    <Typography variant="h6">
                                        General
                                    </Typography>
                                    <Stack gap={"8px"}>
                                        <Typography variant="subtitle2">
                                            Category Name
                                        </Typography>
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
                                        <Typography
                                            variant="captiontext"
                                            color={"text.disabled"}
                                        >
                                            A category name is required and
                                            recommended to be unique.
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
                                    router.post(
                                        route("categories.store"),
                                        category,
                                        {
                                            onSuccess: () => {
                                                router.get(
                                                    route("categories.index")
                                                );
                                            },
                                            onError: (e) => {
                                                console.log("error", e);
                                            },
                                        }
                                    );
                                }}
                            >
                                Save
                            </Button>
                        </Stack>
                    </Grid2>
                </Grid2>
            </AdminDefaultLayout>
        </AdminLayout>
    );
};

export default CategoriesAddPage;
