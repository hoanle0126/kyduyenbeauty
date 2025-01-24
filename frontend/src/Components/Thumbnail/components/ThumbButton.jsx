import { Box } from "@mui/material";
import React from "react";

export const Thumb = (props) => {
    const { value, selected, index, onClick } = props;

    return (
        <Box
            className={"embla-thumbs__slide".concat(
                selected ? " embla-thumbs__slide--selected" : ""
            )}
            onClick={() => onClick(index)}
        >
            <img
                src={value}
                alt=""
                className="w-full h-full"
            />
        </Box>
    );
};
