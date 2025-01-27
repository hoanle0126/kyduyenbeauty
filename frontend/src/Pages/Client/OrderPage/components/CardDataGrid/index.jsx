import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext } from "react";
import DataGridHeader from "./DataGridHeader";
import DataGridToolbar from "./DataGridToolbar";
import { MuiTheme } from "@/Theme";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";
import { useStateContext } from "../../../../../Context";
import DataGridHeaderXs from "./DataGridHeaderXs";

const CardDataGrid = () => {
  const { cart, setCart } = useStateContext();
  const [products, setProducts] = React.useState(cart.products);
  const downSm = useMediaQuery(MuiTheme().breakpoints.down("sm"));

  React.useEffect(() => {
    setCart({ ...cart, products: products });
  }, [products]);

  return (
    <>
      <Box
        sx={{
          boxShadow: "custom.card",
          borderRadius: "16px",
        }}
      >
        <DataGrid
          rows={cart.products}
          columns={
            downSm
              ? DataGridHeaderXs(products, setProducts)
              : DataGridHeader(products, setProducts)
          }
          hideFooter
          rowHeight={downSm ? 120 : 100}
          disableColumnSorting
          disableColumnMenu
          disableColumnResize
          slots={{
            toolbar: DataGridToolbar,
          }}
          sx={{
            borderRadius: "16px",
            outline: "none",
            backgroundColor:
              MuiTheme().palette.mode === "dark" && "background.default",
            "--unstable_DataGrid-headWeight": 600,
            "--DataGrid-containerBackground":
              MuiTheme().palette.background.neutral,
            "& .MuiDataGrid-row": {
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&.Mui-selected": {
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
            },
            "& .MuiDataGrid-columnHeader": {
              cursor: "default",
              fontStyle: typography.subtitle2,
              color: "text.secondary",
              "&:focus": {
                outline: "none",
              },
            },
            "&  .MuiDataGrid-cell:focus": {
              outline: "none",
            },
          }}
        />
      </Box>
      <Stack direction={"row"} marginTop={"32px"} alignItems={"center"}>
        <Button
          color="common"
          startIcon={<Icon icon="eva:arrow-back-fill" width="28" height="28" />}
        >
          Continue Shopping
        </Button>
      </Stack>
    </>
  );
};

export default CardDataGrid;
