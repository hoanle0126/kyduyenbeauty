import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React from "react";
import { ModalStyle } from "resources/js/Components/GlobalStyle/modal";

const AddSalesModel = ({ open, onClose, action }) => {
    const [sales, setSales] = React.useState({});

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={ModalStyle}>
                <Stack
                    sx={{
                        gap: "20px",
                    }}
                >
                    <TextField
                        value={sales.value}
                        onChange={(e) =>
                            setSales({ ...sales, value: e.target.value })
                        }
                        label="Value"
                        color="common"
                    />
                    <TextField
                        value={sales.description}
                        onChange={(e) =>
                            setSales({ ...sales, description: e.target.value })
                        }
                        label="Description"
                        color="common"
                    />
                    <Stack direction="row" gap="20px">
                        <DatePicker
                            onChange={(newValue) =>
                                setSales({
                                    ...sales,
                                    created_at: dayjs(newValue),
                                })
                            }
                            value={sales.created_at}
                            label={"Start date"}
                            sx={{ flex: 1 }}
                        />
                        <DatePicker
                            onChange={(newValue) =>
                                setSales({
                                    ...sales,
                                    end_at: dayjs(newValue),
                                })
                            }
                            value={sales.end_at}
                            label={"End date"}
                            sx={{ flex: 1 }}
                        />
                    </Stack>
                    <Button
                        variant="contained"
                        color="common"
                        onClick={() => {
                            // setSales({});
                            action(sales);
                            // onClose();
                        }}
                    >
                        Submit
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
};

export default AddSalesModel;
