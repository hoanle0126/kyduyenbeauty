import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useStateContext } from "../../../../../Context";

function RenderProduct(props) {
  const { row, rows, setRows } = props;
    const { cart, setCart } = useStateContext();

  function addQuantity() {
    setRows((preCarts) => {
      const updateCarts = preCarts.map((cart) => {
        if (cart.id == row.id) {
          return { ...cart, quantity_cart: cart.quantity_cart + 1 };
        }
        return cart;
      });

      return updateCarts;
    });
  }

  function decQuantity() {
    setRows((preCarts) => {
      const updateCarts = preCarts.map((cart) => {
        if (cart.id == row.id) {
          return { ...cart, quantity_cart: cart.quantity_cart - 1 };
        }
        return cart;
      });

      return updateCarts;
    });
  }

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <img
        src={row.thumbnail}
        className="w-[100px] h-[100px] aspect-square rounded-[12px]"
      />
      <Stack
        sx={{
          width: "calc(100% - 110px)",
          height: "100px",
          gap: "30px",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            overflow: "hidden",
            gap: "12px",
            alignItems: "start",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              whiteSpace: "normal",
              wordWrap: "break-word",
              flex: 1,
            }}
          >
            {row.name}
          </Typography>
          <IconButton
            onClick={() => {
              let updatedProduct = cart.products.filter(
                (item) => item.id !== row.id
              );
              setCart((newCart) => ({
                ...newCart,
                products: updatedProduct,
              }));
              console.log(newCart);
            }}
          >
            <Icon icon="solar:trash-bin-trash-bold" />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" color="error.main">
            {formatCurrency(row.price)}
          </Typography>
          <Stack
            sx={{
              border: "1px solid black",
              flexDirection: "row",
              alignItems: "center",
              gap: "4px",
              borderColor: "divider",
              borderRadius: "8px",
            }}
          >
            <IconButton
              size="small"
              sx={{ borderRadius: "8px" }}
              onClick={() => decQuantity()}
              disabled={row.quantity_cart == 1}
            >
              <Icon icon="eva:minus-fill" width={16} height={16} />
            </IconButton>
            <Typography>{row.quantity_cart}</Typography>
            <IconButton
              size="small"
              sx={{ borderRadius: "8px" }}
              onClick={() => addQuantity()}
              disabled={row.quantity_cart == row.remain}
            >
              <Icon icon="eva:plus-fill" width={16} height={16} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

const DataGridHeaderXs = (rows, setRows) => {
  return [
    {
      field: "name",
      headerName: "Product",
      flex: 1,
      renderCell: (value, row) => (
        <RenderProduct {...value} rows={rows} setRows={setRows} />
      ),
    },
  ];
};

export default DataGridHeaderXs;
