import { Icon } from "@iconify/react";
import {
    Avatar,
    Button,
    ButtonBase,
    Grid2,
    Skeleton,
    Stack,
} from "@mui/material";
import React from "react";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

const ListImage = ({ images, setImages }) => {
    const [loading, setLoading] = React.useState(false);
    const handleSelectImage = async (e) => {
        setLoading(true);
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setImages([...images, imgUrl]);
        setLoading(false);
    };

    return (
        <Stack gap="20px">
            <Grid2 container spacing="12px">
                {loading && (
                    <Grid2 size={2}>
                        <Skeleton
                            variant="rounded"
                            sx={{
                                width: "100%",
                                height: "100%",
                                aspectRatio: "1 / 1",
                                borderRadius: "12px",
                            }}
                        />
                    </Grid2>
                )}
                {images.reverse().map((image, imageIndex) => (
                    <Grid2
                        key={imageIndex}
                        size={2}
                        sx={{
                            position: "relative",
                        }}
                    >
                        <Avatar
                            variant="rounded"
                            sx={{
                                width: "100%",
                                height: "100%",
                                aspectRatio: "1 / 1",
                                borderRadius: "12px",
                                border: "1px solid black",
                                borderColor: "divider",
                            }}
                            src={image}
                        />
                        <ButtonBase
                            sx={{
                                position: "absolute",
                                top: "-10px",
                                right: "-10px",
                                backgroundColor: "background.paper",
                                padding: "4px",
                                borderRadius: "50%",
                                border: "1px solid black",
                                borderColor: "divider",
                                "& svg": {
                                    color: "text.disabled",
                                    "&:hover": {
                                        color: "text.secondary",
                                    },
                                },
                            }}
                            onClick={() => {
                                setImages(
                                    images.filter((img) => img !== image)
                                );
                            }}
                        >
                            <Icon
                                icon="solar:gallery-remove-bold"
                                width="16"
                                height="16"
                            />
                        </ButtonBase>
                    </Grid2>
                ))}
            </Grid2>
            <Button
                variant="outlined"
                color="common"
                component="label"
                tabIndex={-1}
            >
                {" "}
                Add image
                <input
                    type="file"
                    className="hidden"
                    onChange={handleSelectImage}
                />
            </Button>
        </Stack>
    );
};

export default ListImage;
