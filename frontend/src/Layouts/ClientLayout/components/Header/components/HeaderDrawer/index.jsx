import { Drawer, List, ListItemButton, Stack, Typography } from "@mui/material";
import React from "react";
import MainLogo from "../../../../../../assets/mainLogo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderDrawer = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer open={open} onClose={handleClose}>
      <Stack
        sx={{
          width: "100vw",
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: "row",
            padding: "20px",
            borderBottom: "1px solid black",
            borderColor: "divider",
            gap: "12px",
          }}
        >
          <img src={MainLogo} alt="" className="w-[40px] h-[40px]" />
          <Typography
            sx={{
              display: {
                sm: "block",
                xs: "none",
              },
            }}
            variant="h5"
          >
            Kỳ Duyên Beauty
          </Typography>
          <div className="flex-1"></div>
          <Icon
            icon="eva:close-fill"
            width="40"
            height="40"
            onClick={handleClose}
            className="cursor-pointer"
          />
        </Stack>
        <List disablePadding>
          {[
            { title: "Home", route: "/" },
            { title: "Shop", route: "/shop" },
            { title: "Contact us", route: "/contact-us" },
            { title: "Terms & Policies", route: "/terms-and-policies" },
          ].map((listItem, listIndex) => (
            <ListItemButton
              key={listIndex}
              onClick={() => {
                navigate(listItem.route);
                handleClose();
              }}
              sx={{
                backgroundColor:
                  location.pathname === listItem.route && "background.neutral",
              }}
            >
              {listItem.title}
            </ListItemButton>
          ))}
        </List>
      </Stack>
    </Drawer>
  );
};

export default HeaderDrawer;
