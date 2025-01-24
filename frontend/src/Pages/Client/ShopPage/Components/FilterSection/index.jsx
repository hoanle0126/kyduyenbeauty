import { Stack } from "@mui/material";
import React from "react";
import FilterCategory from "./components/FilterCategory";
import FilterPrice from "./components/FilterPrice";

const FilterSection = () => {
    const [getParam, setGetParam] = React.useState("?");

    return (
        <Stack width={280} gap="40px">
            <FilterCategory getParam={getParam} setGetParam={setGetParam} />
            <FilterPrice />
        </Stack>
    );
};

export default FilterSection;
