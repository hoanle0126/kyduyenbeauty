import { Box } from "@mui/material";

export function CustomTabPanel({ tab, index, children }) {
    return <div>{tab == index && <Box>{children}</Box>}</div>;
}
