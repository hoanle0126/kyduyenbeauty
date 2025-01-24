import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { HexColorPicker } from "react-colorful";

const ModalFeature = ({ open, onClose, action, features }) => {
    const [feature, setFeature] = React.useState({});


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
                <Stack direction="row" marginBottom="12px">
                    <Typography variant="h4">Add feature modal</Typography>
                    <div className="flex-1"></div>
                    <IconButton onClick={onClose}>
                        <Icon icon="eva:close-fill" />
                    </IconButton>
                </Stack>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={feature.title}
                        label="Type"
                        onChange={(e) => {
                            setFeature({
                                ...feature,
                                type: features[e.target.value].type,
                                title: e.target.value,
                            });
                            console.log("value", features[e.target.value].type);
                        }}
                    >
                        {Object.entries(features).map(([key, value]) => (
                            <MenuItem key={key} value={key}>
                                {key}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {feature.type === "color" && (
                    <Stack gap="12px">
                        <Typography variant="h6">Color feature</Typography>
                        <TextField
                            label="Color name"
                            value={feature.name}
                            onChange={(e) =>
                                setFeature({
                                    ...feature,
                                    name: e.target.value,
                                })
                            }
                        />
                        <HexColorPicker
                            color={feature.value}
                            onChange={(e) =>
                                setFeature({ ...feature, value: e })
                            }
                        />
                        <TextField
                            value={feature.value}
                            onChange={(e) =>
                                setFeature({
                                    ...feature,
                                    value: e.target.value,
                                })
                            }
                        />
                    </Stack>
                )}
                {feature.type === "select_value" && (
                    <Stack gap="12px">
                        <Typography variant="h6">Select feature</Typography>
                        <TextField
                            label={`Set ${feature.title} value`}
                            value={feature.value}
                            onChange={(e) =>
                                setFeature({
                                    ...feature,
                                    value: e.target.value,
                                })
                            }
                        />
                    </Stack>
                )}
                <Button
                    variant="contained"
                    color="common"
                    size="large"
                    disabled={feature.title === ""}
                    onClick={() => {
                        action(feature);
                        setFeature({});
                        onClose();
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Modal>
    );
};

export default ModalFeature;
