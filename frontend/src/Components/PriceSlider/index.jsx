import { MuiTheme } from "@/Theme";
import {
    alpha,
    Button,
    OutlinedInput,
    Slider,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import marksRating from "./marksRating";

const PriceSlider = ({ action, rangeValue }) => {
    const [range, setRange] = React.useState(rangeValue || [0, 200]);

    return (
        <Stack gap={"20px"}>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Typography
                    variant="captiontext"
                    fontWeight={600}
                    color={"text.disabled"}
                >
                    Min ($)
                </Typography>
                <OutlinedInput
                    size="small"
                    sx={{ width: 80, borderRadius: "8px" }}
                    color="custom"
                    value={range[0]}
                    type="number"
                    onChange={(e) => {
                        if (
                            0 <= Number(e.target.value) &&
                            Number(e.target.value) <= 200
                        ) {
                            const newRange = [...range];
                            newRange[0] = e.target.value;
                            setRange(newRange);
                        }
                    }}
                />
                <Typography
                    variant="captiontext"
                    fontWeight={600}
                    color={"text.disabled"}
                >
                    Max ($)
                </Typography>
                <OutlinedInput
                    size="small"
                    sx={{ width: 60, borderRadius: "8px" }}
                    color="custom"
                    value={range[1]}
                    onChange={(e) => {
                        if (0 <= range[1] <= 200) {
                            const newRange = [...range];
                            newRange[1] = e.target.value;
                            setRange(newRange);
                        }
                    }}
                />
            </Stack>
            <Slider
                value={range}
                onChange={(e, newValue) => {
                    setRange([newValue[0], newValue[1]]);
                }}
                shiftStep={30}
                step={10}
                marks={marksRating()}
                min={0}
                max={200}
                sx={{
                    height: 6,
                    width: "calc(100% - 24px)",
                    alignSelf: "center",
                    "& .MuiSlider-thumb": {
                        height: 16,
                        width: 16,
                        border: "1px solid",
                        color: "grey.0",
                        boxShadow: "rgba(145, 158, 171, 0.16) 0px 1px 2px 0px",
                        borderColor: alpha(MuiTheme().palette.grey[500], 0.08),
                        "&::before": {
                            opacity: 0.4,
                            boxShadow: "none",
                            width: "calc(100% - 4px)",
                            height: "calc(100% - 4px)",
                            backgroundImage: `linear-gradient(180deg, ${
                                MuiTheme().palette.grey[500]
                            } 0%, transparent 100%)`,
                            position: "absolute",
                            content: "''",
                        },
                    },
                    "& .MuiSlider-mark": {
                        height: "4px",
                        width: "1px",
                        backgroundColor: "grey.500",
                        "&.MuiSlider-markActive": {
                            backgroundColor: "grey.0",
                        },
                        '&[data-index="0"]': {
                            width: "0px",
                        },
                        '&[data-index="20"]': {
                            width: "0px",
                        },
                    },
                    "& .MuiSlider-rail": {
                        color: "grey.500",
                    },
                    "& .MuiSlider-markLabel": {
                        color: "text.disabled",
                    },
                }}
            />
            <Button
                variant="contained"
                color="common"
                onClick={() => action(range)}
            >
                Set
            </Button>
        </Stack>
    );
};

export default PriceSlider;
