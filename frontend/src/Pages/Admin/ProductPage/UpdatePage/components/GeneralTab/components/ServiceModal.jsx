import { Icon } from "@iconify/react";
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { ModalStyle } from "resources/js/Components/GlobalStyle/modal";
import { uploadToCloudinary } from "resources/utils/uploadToCloudinary";

const ServiceModal = ({ open, onClose, action }) => {
    const [service, setService] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const handleSelectImage = async (e) => {
        setLoading(true);
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setLoading(false);
        setService({ ...service, img: imgUrl });
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <Stack sx={{ gap: "28px" }}>
                    <Stack gap="12px">
                        <Typography variant="h6">Image</Typography>
                        <Stack direction="row" alignItems="end" gap="20px">
                            <Avatar
                                variant="rounded"
                                src={service?.img}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: "16px",
                                    fontSize: 96,
                                }}
                            >
                                {loading ? (
                                    <CircularProgress
                                        size={60}
                                        color="common"
                                    />
                                ) : (
                                    <Icon icon="solar:gallery-wide-bold-duotone" />
                                )}
                            </Avatar>
                            <Button
                                component="label"
                                variant="outlined"
                                color="inherit"
                                startIcon={
                                    <Icon icon="solar:gallery-send-broken" />
                                }
                            >
                                Click to upload
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={handleSelectImage}
                                />
                            </Button>
                        </Stack>
                    </Stack>
                    <TextField
                        label="Content"
                        color="common"
                        value={service.content}
                        onChange={(e) =>
                            setService({ ...service, content: e.target.value })
                        }
                    />
                    <Button
                        variant="contained"
                        color="common"
                        onClick={() => {
                            action(service);
                            setService({});
                            onClose();
                        }}
                    >
                        Submit
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
};

export default ServiceModal;
