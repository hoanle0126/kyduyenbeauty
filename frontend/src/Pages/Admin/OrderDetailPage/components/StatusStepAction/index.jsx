import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Box,
    Button,
    Modal,
    Rating,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

const StatusStepAction = ({ activeStep }) => {
    const { props, url } = usePage();

    return (
        <>
            <Stack
                direction="row"
                justifyContent="end"
                paddingX="20px"
                gap="12px"
            >
                {activeStep === 0 && (
                    <Button
                        variant="outlined"
                        color="inherit"
                        startIcon={<Icon icon="solar:undo-left-round-broken" />}
                    >
                        Cancel
                    </Button>
                )}
                <Button
                    variant="contained"
                    color="inherit"
                    startIcon={<Icon icon="solar:chat-line-bold" />}
                >
                    Contact
                </Button>
            </Stack>
        </>
    );
};

export default StatusStepAction;
