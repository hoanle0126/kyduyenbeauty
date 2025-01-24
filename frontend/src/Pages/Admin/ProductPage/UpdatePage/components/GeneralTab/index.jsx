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
            <Button
              variant="outlined"
              color="common"
              onClick={() => {
                product?.sales !== null
                  ? setProduct({ ...product, sales: null })
                  : setProduct({
                      ...product,
                      sales: {
                        value: 0,
                      },
                    });
              }}
            >
              {product?.sales === null ? "Add" : "Remove"} sales
            </Button>

            <Collapse in={product?.sales !== null} timeout="auto" unmountOnExit>
              <Stack overflow="hidden" gap="12px" paddingTop="12px">
                <TextField
                  value={product?.sales?.value || 0}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      sales: {
                        ...product.sales,
                        value: e.target.value,
                      },
                    })
                  }
                  label="Value"
                />
                <TextField
                  value={product?.sales?.description}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      sales: {
                        ...product?.sales,
                        description: e.target.value,
                      },
                    })
                  }
                  label="Description"
                />
                <Stack direction="row" gap="20px">
                  <DatePicker
                    value={dayjs(product?.sales?.created_at)}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        sales: {
                          ...product.sales,
                          created_at: dayjs(e),
                        },
                      })
                    }
                    label={"Start date"}
                    sx={{ flex: 1 }}
                  />
                  <DatePicker
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        sales: {
                          ...product?.sales,
                          end_at: dayjs(e),
                        },
                      })
                    }
                    value={dayjs(product?.sales?.end_at)}
                    label={"End date"}
                    sx={{ flex: 1 }}
                  />
                </Stack>
              </Stack>
            </Collapse>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default GeneralTab;
