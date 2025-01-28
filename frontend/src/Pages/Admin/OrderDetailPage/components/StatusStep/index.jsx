import { formatDate } from "@/Function/formatDate";
import { formatTime } from "@/Function/formatTime";
import { Icon } from "@iconify/react";
import { usePage } from "@inertiajs/react";
import {
    Box,
    Step,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper,
    styled,
    Typography,
} from "@mui/material";
import React from "react";
import { steps } from "../../elements/steps";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 48,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: theme.palette.primary.main,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: theme.palette.primary.main,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 4,
        border: 0,
        backgroundColor: theme.palette.grey[300],
        borderRadius: 1,
        ...theme.applyStyles("dark", {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.grey[0],
    border: "4px solid",
    borderColor: theme.palette.grey[300],
    zIndex: 1,
    color: theme.palette.grey[300],
    width: 96,
    height: 96,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                color: "white",
            },
        },
        {
            props: ({ ownerState }) => ownerState.completed,
            style: {
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
            },
        },
    ],
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <Icon icon="solar:bill-list-linear" width="32" height="32" />,
        2: <Icon icon="carbon:delivery-truck" width="32" height="32" />,
        3: <Icon icon="solar:box-broken" width="32" height="32" />,
        4: <Icon icon="solar:star-linear" width="32" height="32" />,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const StatusStep = ({ activeStep }) => {
    const { props } = usePage();

    React.useEffect(() => {
        console.log(props.order.status);
    }, []);

    return (
        <Box
            sx={{
                paddingY: "20px",
                paddingX: "20px",
            }}
        >
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
            >
                {props.order.status.map((status) => (
                    <Step key={status}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            {status.title}
                        </StepLabel>
                        <center>
                            <Typography
                                variant="captiontext"
                                color="text.secondary"
                            >
                                {status.active
                                    ? formatTime(status.created_at)
                                          .concat(" / ")
                                          .concat(formatDate(status.created_at))
                                    : ""}
                            </Typography>
                        </center>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default StatusStep;
