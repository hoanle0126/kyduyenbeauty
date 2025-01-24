import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import {
    Grid2,
    Box,
    Button,
    Paper,
    Stack,
    Typography,
    Card,
    OutlinedInput,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { MuiTheme } from "resources/js/Theme";
import { uploadToCloudinary } from "resources/utils/uploadToCloudinary";
import { router, usePage } from "@inertiajs/react";
import AdminDefaultLayout from "resources/js/Layouts/AdminLayout/DefaultLayout";

const CategoriesViewPage = () => {
    const { props } = usePage();
    const [category, setCategory] = React.useState(props.category);

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
                                <Box
                                    sx={{
                                        boxShadow: "custom.card",
                                        width: 160,
                                        height: 160,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "12px",
                                        marginX: "auto",
                                        position: "relative",
                                    }}
                                >
                                    {category?.thumbnail && (
                                        <img
                                            src={category.thumbnail}
                                            alt=""
                                            className="w-full h-full rounded-[12px]"
                                        />
                                    )}
                                    <Icon
                                        icon="solar:gallery-wide-bold"
                                        width="120"
                                        height="120"
                                        color={MuiTheme().palette.grey[300]}
                                    />
                                    <label htmlFor="thumbnail">
                                        <Box
                                            sx={{
                                                width: "24px",
                                                height: "24px",
                                                backgroundColor:
                                                    "background.paper",
                                                position: "absolute",
                                                border: "1px solid",
                                                borderColor: "divider",
                                                right: "-8px",
                                                top: "-8px",
                                                borderRadius: 99,
                                                boxShadow: "custom.card",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Icon
                                                icon="solar:pen-bold"
                                                width="14"
                                                height="14"
                                                color={MuiTheme().palette.text.disabled}
                                            />
                                            <input
                                                type="file"
                                                id="thumbnail"
                                                className="hidden"
                                                onChange={handleSelectImage}
                                            />
                                        </Box>
                                    </label>
                                </Box>
                                <Typography
                                    variant="captiontext"
                                    color={"text.disabled"}
                                    width={"90%"}
                                >
                                    Set the product thumbnail image. Only *.png,
                                    *.jpg and *.jpeg image files are accepted
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
                                            Product Name
                                        </Typography>
                                        <OutlinedInput
                                            size="small"
                                            color="custom"
                                            fullWidth
                                            placeholder="Enter product name..."
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
                                            A product name is required and
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
                                    router.put(
                                        route("categories.update", category.id),
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

export default CategoriesViewPage;
