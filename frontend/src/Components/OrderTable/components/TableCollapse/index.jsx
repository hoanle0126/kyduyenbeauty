import { Box, Collapse, Stack, Typography } from "@mui/material";
import React from "react";
import { formatCurrency } from "resources/js/Function/formatCurrency";

const TableCollapse = ({ row, expand }) => {
    return (
        <Collapse in={expand === row.id}>
            <Box
                sx={{
                    padding: "12px",
                    backgroundColor: "background.neutral",
                }}
            >
                <Stack
                    sx={{
                        backgroundColor: "background.paper",
                        borderRadius: "8px",
                        boxShadow: "custom.card",
                        overflow: "hidden",
                    }}
                >
                    {row.products.map((product, index) => (
                        <Stack
                            key={index}
                            direction="row"
                            sx={{
                                padding: "12px",
                                borderBottom: "1px solid",
                                borderColor: "divider",
                                gap: "16px",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={product.thumbnail}
                                className="w-[60px] h-[60px] rounded-[8px]"
                            />
                            <Stack justifyContent="center" flex={1}>
                                <Typography variant="subtitle2">
                                    {product.name}
                                </Typography>
                                <Typography
                                    variant="captiontext"
                                    color="text.secondary"
                                >
                                    {product.name}
                                </Typography>
                            </Stack>
                            <Typography
                                sx={{
                                    width: 80,
                                    textAlign: "right",
                                }}
                                variant="body2"
                            >
                                x{product.pivot.quantity}
                            </Typography>
                            <Typography
                                sx={{
                                    width: 80,
                                    textAlign: "right",
                                }}
                                variant="body2"
                            >
                                {formatCurrency(product.price_value)}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Collapse>
    );
};

export default TableCollapse;
