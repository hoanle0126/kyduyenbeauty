import { DataGrid, GridRow } from "@mui/x-data-grid";
import React from "react";
import {
    Avatar,
    Box,
    Collapse,
    IconButton,
    List,
    ListItem,
    MenuItem,
    MenuList,
    Popover,
    Stack,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import { formatDate } from "@/Function/formatDate";
import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { typography } from "@/Theme/elements/typography";
import { listStatus } from "./listStatus";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import TableHeader from "./components/TableHeader";
import ActionPopover from "./components/ActionPopover";
import TabList from "./components/TabList";
import TableCollapse from "./components/TableCollapse";
import { t } from "i18next";
import { Palette } from "resources/js/Theme/elements/palette";
import { MuiTheme } from "../../Theme";

const OrderTable = ({ rows, admin, tabs, status }) => {
    const [expand, setExpand] = React.useState("");
    const [statusValue, setStatusValue] = React.useState(
        status || listStatus[0]
    );
    const orders = rows;
    const [searchValue, setSearchValue] = React.useState("");
    const [orderRows, setOrderRows] = React.useState(orders);

    const handleChange = (event, newValue) => {
        setStatusValue(newValue);
    };

    const numProductValue = (statusProduct) => {
        return orderRows.filter((it) => it.current_status === statusProduct)
            .length;
    };
    const [selectedRowId, setSelectedRowId] = React.useState();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event, rowId) => {
        setAnchorEl(event.currentTarget);
        setSelectedRowId(rowId);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const getSearchValueChange = (value) => {
        setSearchValue(value);
        const filtedRow = orders.filter((orderRowsItem) => {
            return (
                orderRowsItem.id?.toString().includes(value) ||
                orderRowsItem.products.length?.toString().includes(value) ||
                formatCurrency(orderRowsItem.total_price).includes(value) ||
                formatDate(orderRowsItem.created_at).includes(value) ||
                orderRowsItem.products.some((it) => it.name.includes(value))
            );
        });
        setOrderRows(filtedRow);
    };

    const setRangeCreatedAt = (value, type) => {
        const filtedRow = orders.filter((orderRowsItem) => {
            return type === "start"
                ? new Date(orderRowsItem.created_at) > new Date(value)
                : new Date(orderRowsItem.created_at) < new Date(value);
        });
        setOrderRows(filtedRow);
    };

    return (
        <Box
            sx={{
                boxShadow: "custom.card",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor:
                    MuiTheme().palette.mode === "dark" &&
                    "background.default",
            }}
        >
            {tabs && (
                <TabList
                    statusValue={statusValue}
                    handleChange={handleChange}
                    orderRows={orderRows}
                />
            )}
            <Stack
                sx={{
                    width: "100%",
                    padding: "20px",
                    flexDirection: "row",
                    gap: "20px",
                }}
            >
                <DatePicker
                    onChange={(newValue) =>
                        setRangeCreatedAt(newValue, "start")
                    }
                    label={t("start_date")}
                    sx={{ width: "400px" }}
                />
                <DatePicker
                    onChange={(newValue) => setRangeCreatedAt(newValue, "end")}
                    label={t("end_date")}
                    sx={{ width: "400px" }}
                />
                <TextField
                    value={searchValue}
                    onChange={(e) => getSearchValueChange(e.target.value)}
                    fullWidth
                    placeholder={t("enter_search_value")}
                />
            </Stack>
            <TableContainer sx={{ height: "calc(100vh - 208px)" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHeader admin={admin} />
                    <TableBody>
                        {orderRows
                            .filter((it) =>
                                status
                                    ? it.current_status === status
                                    : it.current_status === statusValue.value
                            )
                            .map((row, index) => (
                                <React.Fragment key={index}>
                                    <TableRow
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                            height: 60,
                                        }}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            align="center"
                                        >
                                            <IconButton
                                                onClick={() =>
                                                    row.id === expand
                                                        ? setExpand("")
                                                        : setExpand(row.id)
                                                }
                                            >
                                                <Icon
                                                    icon={`eva:arrow-ios-${
                                                        expand === row.id
                                                            ? "downward"
                                                            : "upward"
                                                    }-fill`}
                                                    width="24"
                                                    height="24"
                                                />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            #{row.id}
                                        </TableCell>
                                        {admin && (
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    gap="16px"
                                                >
                                                    <Avatar />
                                                    <Stack>
                                                        <Typography variant="subtitle2">
                                                            {row.user?.first_name
                                                                .concat(" ")
                                                                .concat(
                                                                    row.user
                                                                        ?.last_name
                                                                )}
                                                        </Typography>
                                                        <Typography
                                                            variant="captiontext"
                                                            color="text.secondary"
                                                        >
                                                            {row.user?.email}
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </TableCell>
                                        )}
                                        <TableCell component="th" scope="row">
                                            {formatDate(row.created_at)}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            x{row.products.length}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {formatCurrency(row.total_price)}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Box
                                                sx={{
                                                    backgroundColor:
                                                        statusValue.backgroundColor,
                                                    display: "inline-block",
                                                    padding: "4px 12px",
                                                    fontSize:
                                                        MuiTheme().typography.captiontext,
                                                    fontWeight: 700,
                                                    color: statusValue.color,
                                                    borderRadius: "8px",
                                                }}
                                            >
                                                {row.current_status}
                                            </Box>
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            width={60}
                                            align="right"
                                        >
                                            <IconButton
                                                onClick={(event) =>
                                                    handleClick(event, row.id)
                                                }
                                            >
                                                <Icon
                                                    icon="eva:more-vertical-fill"
                                                    width="24"
                                                    height="24"
                                                    color={MuiTheme().palette.text.primary}
                                                />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    {
                                        <TableRow>
                                            <TableCell
                                                colSpan={8}
                                                sx={{ padding: 0 }}
                                            >
                                                <TableCollapse
                                                    row={row}
                                                    expand={expand}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    }
                                </React.Fragment>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ActionPopover
                id={id}
                open={open}
                handleClose={handleClose}
                selectedRowId={selectedRowId}
                anchorEl={anchorEl}
            />
        </Box>
    );
};

export default OrderTable;
