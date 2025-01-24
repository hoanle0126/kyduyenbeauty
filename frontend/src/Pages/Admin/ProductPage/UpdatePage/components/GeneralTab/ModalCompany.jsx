import { Icon } from "@iconify/react";
import {
    Box,
    Button,
    IconButton,
    Modal,
    OutlinedInput,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import React from "react";
import { uploadToCloudinary } from "resources/utils/uploadToCloudinary";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

const ModalCompany = ({ open, onClose, action }) => {
    const [company, setCompany] = React.useState({});

    const handleSelectImage = async (e) => {
        const imgUrl = await uploadToCloudinary(e.target.files[0]);
        setCompany({
            ...company,
            image: imgUrl,
        });
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800,
                    borderRadius: "20px",
                    bgcolor: "background.paper",
                    boxShadow: "custom.card",
                    p: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <Stack direction="row">
                    <Typography variant="h4">Add feature modal</Typography>
                    <div className="flex-1"></div>
                    <IconButton onClick={onClose}>
                        <Icon icon="eva:close-fill" />
                    </IconButton>
                </Stack>
                <Stack gap={"8px"}>
                    <Typography variant="subtitle2">Company Image</Typography>
                    <img
                        className="w-[200px] rounded-[16px] bg-primary"
                        src={company.image}
                    />
                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        tabIndex={-1}
                        color="common"
                    >
                        Upload image
                        <VisuallyHiddenInput
                            type="file"
                            onChange={handleSelectImage}
                            multiple
                        />
                    </Button>
                    <Typography variant="captiontext" color={"text.disabled"}>
                        A product name is required and recommended to be unique.
                    </Typography>
                </Stack>
                <Stack gap={"8px"}>
                    <Typography variant="subtitle2">Company Name</Typography>
                    <OutlinedInput
                        size="small"
                        color="custom"
                        fullWidth
                        placeholder="Enter product name..."
                        value={company.name}
                        onChange={(e) =>
                            setCompany({ ...company, name: e.target.value })
                        }
                    />
                </Stack>
                <Button
                    variant="contained"
                    color="common"
                    size="large"
                    onClick={() => {
                        action(company);
                        setCompany({});
                        onClose();
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Modal>
    );
};

export default ModalCompany;
