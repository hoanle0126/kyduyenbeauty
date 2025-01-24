import { Icon } from "@iconify/react";
import { Avatar, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import React from "react";

const AvatarHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openSetting, setOpenSetting] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <>
            <Avatar onClick={handleClick} className="cursor-pointer" />
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
                        width: "128px",
                    }}
                >
                    <MenuItem>
                        <Icon icon="solar:logout-2-broken" />
                        <Typography variant="body2">Logout</Typography>
                    </MenuItem>
                </MenuList>
            </Popover>
        </>
    );
};

export default AvatarHeader;
