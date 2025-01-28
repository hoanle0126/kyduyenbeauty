import { formatCurrency } from "@/Function/formatCurrency";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Box,
    Button,
    IconButton,
    Modal,
    Rating,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const ListProducts = ({ activeStep }) => {
    const { props, url } = usePage();
    const [open, setOpen] = React.useState(false);
    const [reviewData, setReviewData] = React.useState({
        rating: 0,
        comment: "",
        product: 0,
    });

    return (
        <Stack
            sx={{
                padding: "12px 20px",
                backgroundColor: "background.default",
            }}
        >
            <TableContainer>
                <Table
                    sx={{
                        minWidth: 650,
                        "& .MuiTableCell-root": {
                            borderColor: "grey.300",
                            "&:nth-child(2)": {
                                borderLeft: "1px solid",
                                borderLeftColor: "grey.300",
                            },
                        },
                    }}
                    aria-label="simple table"
                >
                    <TableBody>
                        {props.order.products.map((row) => (
                            <TableRow
                                key={row}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    colSpan={2}
                                >
                                    <Stack direction="row" gap="16px">
                                        <img
                                            src={row.thumbnail}
                                            alt=""
                                            className="h-[80px] w-[80px] rounded-[8px]"
                                        />
                                        <Stack
                                            paddingY={"4px"}
                                            gap={"4px"}
                                            sx={{
                                                width: "100%",
                                            }}
                                        >
                                            <Stack direction="row">
                                                <Typography variant="subtitle1">
                                                    {row.name}
                                                </Typography>
                                                <div className="flex-1"></div>
                                            </Stack>
                                            <div className="flex-1"></div>
                                            <Typography variant="captiontext">
                                                x3
                                            </Typography>
                                            <Stack
                                                sx={{
                                                    alignItems: "bottom",
                                                    flexDirection: "row",
                                                    gap: "8px",
                                                    width: "100%",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        fontStyle:
                                                            typography.captiontext,
                                                        color: "error.main",
                                                        border: "1px solid",
                                                        padding: "2px 4px",
                                                        borderRadius: "4px",
                                                    }}
                                                >
                                                    15 days return
                                                </Box>
                                                <Box
                                                    sx={{
                                                        fontStyle:
                                                            typography.captiontext,
                                                        color: "success.main",
                                                        border: "1px solid",
                                                        padding: "2px 4px",
                                                        borderRadius: "4px",
                                                    }}
                                                >
                                                    Free return
                                                </Box>
                                                <div className="flex-1"></div>
                                                <Typography
                                                    sx={{
                                                        textDecoration:
                                                            "line-through",
                                                    }}
                                                    color="text.disabled"
                                                >
                                                    {formatCurrency(
                                                        row.price.base_price *
                                                            row.pivot.quantity
                                                    )}
                                                </Typography>
                                                <Typography>
                                                    {formatCurrency(
                                                        row.price_value *
                                                            row.pivot.quantity
                                                    )}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell component="th" scope="row" align="right">
                                <Typography variant="h5">
                                    Total price
                                </Typography>
                            </TableCell>
                            <TableCell
                                component="th"
                                scope="row"
                                align="right"
                                width={280}
                            >
                                <Typography variant="h5" color="error.main">
                                    {formatCurrency(props.order.total_price)}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: "custom.card",
                        p: "20px",
                        borderRadius: "16px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Add Review
                    </Typography>
                    <Stack gap="20px">
                        <Stack gap="8px" paddingBottom="12px">
                            <Typography
                                id="modal-modal-description"
                                variant="body2"
                            >
                                Your review about this product:
                            </Typography>
                            <Rating
                                value={reviewData.rating}
                                onChange={(e, newValue) =>
                                    setReviewData({
                                        ...reviewData,
                                        rating: newValue,
                                    })
                                }
                            />
                        </Stack>
                        <TextField
                            multiline
                            minRows={3}
                            label="Review"
                            color="custom"
                            value={reviewData.comment}
                            onChange={(e) =>
                                setReviewData({
                                    ...reviewData,
                                    comment: e.target.value,
                                })
                            }
                        />
                        <Stack direction="row" justifyContent="end" gap="12px">
                            <Button
                                variant="outlined"
                                color="inherit"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="inherit"
                                onClick={() =>
                                    router.post("/reviews", reviewData, {
                                        onSuccess: () => setOpen(false),
                                    })
                                }
                            >
                                Post
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </Stack>
    );
};

export default ListProducts;
