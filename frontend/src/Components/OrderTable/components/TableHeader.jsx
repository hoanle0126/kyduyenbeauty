import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { MuiTheme } from "../../../Theme";

const TableHeader = ({ admin }) => {
    const { t } = useTranslation();

    return (
        <TableHead
            sx={{
                backgroundColor: "background.neutral",
                "& .MuiTableCell-root": {
                    fontStyle: MuiTheme().typography.subtitle2,
                },
            }}
        >
            <TableRow>
                <TableCell width={60}></TableCell>
                {admin ? (
                    <>
                        <TableCell width={160}>{t("order.title")}</TableCell>
                        <TableCell>{t("customer")}</TableCell>
                    </>
                ) : (
                    <TableCell>{t("order.title")}</TableCell>
                )}
                <TableCell width={160}>{t("date")}</TableCell>
                <TableCell width={100}>{t("items")}</TableCell>
                <TableCell width={120}>{t("price")}</TableCell>
                <TableCell width={140}>{t("status")}</TableCell>
                <TableCell width={60}></TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
