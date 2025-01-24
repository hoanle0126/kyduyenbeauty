import { Icon } from "@iconify/react";
import { router } from "@inertiajs/react";
import { MenuItem, MenuList, Popover } from "@mui/material";
import React from "react";
import { menuList } from "./menuList";

const ActionPopover = (props) => {
    const { id, open, handleClose, selectedRowId, anchorEl } = props;

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <MenuList
                sx={{
                    width: 120,
                }}
            >
                {menuList({ selectedRowId }).map((menuItem) => (
                    <MenuItem key={menuItem.title} onClick={menuItem.action}>
                        <Icon icon={menuItem.icon} />
                        {menuItem.title}
                    </MenuItem>
                ))}
            </MenuList>
        </Popover>
    );
};

export default ActionPopover;
