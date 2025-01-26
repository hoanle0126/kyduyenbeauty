import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Card,
  Grid2,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ShowParam } from "./components/ShowParam";
import { Icon } from "@iconify/react";
import { MuiTheme } from "@/Theme";
import ListImage from "@/Components/ListImages";
import EditorTiptap from "../../../../../../Components/EditorTiptap";

const AdvancedTab = ({ product, setProduct }) => {
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
          <Typography variant="h6">Advanced</Typography>
          <Stack gap={"20px"}>
            <Typography variant="subtitle2">Images</Typography>
            <ListImage
              images={product?.images}
              setImages={(images) => setProduct({ ...product, images: images })}
            />
          </Stack>
        </Stack>
      </Card>
      <Card>
        <Stack gap={"20px"}>
          <Typography variant="h6">Detail</Typography>
          <EditorTiptap
            content={product.detail}
            setContent={(contentValue) =>
              setProduct({
                ...product,
                detail: contentValue,
              })
            }
          />
        </Stack>
      </Card>
      <Card>
        <Stack gap={"20px"}>
          <Typography variant="h6">Ingredients</Typography>
          <ShowParam
            parameter={product?.ingredient}
            setParameter={(parameterValue) => {
              setProduct({
                ...product,
                ingredient: parameterValue,
              });
            }}
          />
        </Stack>
      </Card>
    </Stack>
  );
};

export default AdvancedTab;
