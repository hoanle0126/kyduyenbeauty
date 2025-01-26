import {
  Button,
  Card,
  Collapse,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import EditorTiptap from "@/Components/EditorTiptap";

const GeneralTab = ({ product, setProduct }) => {
  return (
    <Stack
      sx={{
        paddingTop: "20px",
        gap: "28px",
        "& .MuiInputBase-input.MuiOutlinedInput-input": {
          fontSize: 14,
        },
      }}
    >
      <Card>
        <Stack gap={"20px"}>
          <Typography variant="h6">General</Typography>
          <Stack gap={"8px"}>
            <Typography variant="subtitle2">Product Name</Typography>
            <OutlinedInput
              size="small"
              color="custom"
              fullWidth
              placeholder="Enter product name..."
              value={product?.name}
              onChange={(e) =>
                setProduct({
                  ...product,
                  name: e.target.value,
                })
              }
            />
            <Typography variant="captiontext" color={"text.disabled"}>
              A product name is required and recommended to be unique.
            </Typography>
          </Stack>
          <Stack gap={"8px"}>
            <Typography variant="subtitle2">Quantity</Typography>
            <OutlinedInput
              size="small"
              color="custom"
              fullWidth
              placeholder="Enter product name..."
              value={product?.quantity}
              onChange={(e) =>
                setProduct({
                  ...product,
                  quantity: e.target.value,
                })
              }
              type="number"
            />
            <Typography variant="captiontext" color={"text.disabled"}>
              A product name is required and recommended to be unique.
            </Typography>
          </Stack>
          <Stack gap={"8px"}>
            <Typography variant="subtitle2">Remain</Typography>
            <OutlinedInput
              size="small"
              color="custom"
              fullWidth
              placeholder="Enter product Remain..."
              value={product?.remain}
              onChange={(e) =>
                setProduct({
                  ...product,
                  remain: e.target.value,
                })
              }
              type="number"
            />
            <Typography variant="captiontext" color={"text.disabled"}>
              A product name is required and recommended to be unique.
            </Typography>
          </Stack>
          <Stack gap={"8px"}>
            <Typography variant="subtitle2">Description</Typography>
            <EditorTiptap
              content={product.description}
              setContent={(contentValue) =>
                setProduct({
                  ...product,
                  description: contentValue,
                })
              }
            />
            <Typography variant="captiontext" color={"text.disabled"}>
              A product name is required and recommended to be unique.
            </Typography>
          </Stack>
        </Stack>
      </Card>
      <Card>
        <Stack gap={"20px"}>
          <Typography variant="h6">Sales</Typography>
          <Stack gap={"8px"}>
            <Typography variant="subtitle2">Base price</Typography>
            <OutlinedInput
              size="small"
              color="custom"
              fullWidth
              type="number"
              placeholder="Enter base price..."
              value={product?.price}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: e.target.value,
                })
              }
            />
            <Typography variant="captiontext" color={"text.disabled"}>
              A product name is required and recommended to be unique.
            </Typography>
          </Stack>
          <Stack gap={"8px"}>
            <Typography variant="subtitle2">Sales</Typography>
            <OutlinedInput
              size="small"
              color="custom"
              fullWidth
              type="number"
              placeholder="Enter sales price..."
              value={product?.sales}
              onChange={(e) =>
                setProduct({
                  ...product,
                  sales: e.target.value,
                })
              }
            />
            <Typography variant="captiontext" color={"text.disabled"}>
              A product name is required and recommended to be unique.
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default GeneralTab;
