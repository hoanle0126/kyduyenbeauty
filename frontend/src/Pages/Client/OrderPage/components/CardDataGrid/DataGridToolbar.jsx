import { typography } from "@/Theme/elements/typography";
import { GridToolbarContainer } from "@mui/x-data-grid";
import React from "react";

const DataGridToolbar = () => {
    return (
        <GridToolbarContainer
            sx={{
                padding: "24px",
                fontStyle: typography.h6,
                fontWeight: 400,
            }}
        >
            <strong>Cart</strong> (5 item)
        </GridToolbarContainer>
    );
};

export default DataGridToolbar;
