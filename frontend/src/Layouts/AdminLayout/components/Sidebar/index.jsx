import { Icon } from "@iconify/react";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ListNavItems from "./data/listNavItems";
import { useNavigate } from "react-router-dom";
import { MuiTheme } from "../../../../Theme";

const AdminSidebar = () => {
  const [activeSidebar, setActiveSidebar] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          width: activeSidebar ? 300 : 96,
          transitionDuration: "100ms",
        }}
      />
      <Box
        sx={{
          backgroundColor: "background.paper",
          width: activeSidebar ? 300 : 96,
          position: "fixed",
          top: 0,
          height: "100vh",
          borderRight: 1,
          borderColor: "divider",
          transitionDuration: "100ms",
          "& .aside": {
            "&__header": {
              height: 80,
              position: "relative",
              display: "flex",
              alignItems: "center",
              padding: "28px",
              width: "100%",
              "& .MuiButtonBase-root": {
                backgroundColor: "background.paper",
                position: "absolute",
                right: -12,
                width: 24,
                height: 24,
                borderRadius: 99,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "divider",
                rotate: !activeSidebar && "180deg",
                transitionDuration: "180ms",
              },
            },
            "&__list__content": {
              gap: activeSidebar ? "20px" : "8px",
            },
            "&__content": {
              paddingX: activeSidebar ? "20px" : "8px",
              gap: "8px",
              "&__title": {
                textTransform: "uppercase",
                fontWeight: 700,
                color: "text.disabled",
                paddingX: "8px",
              },
              "&__nav": {
                gap: "4px",
                "&__item": {
                  padding: "8px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "text.secondary",
                  flexDirection: activeSidebar ? "row" : "column",
                  justifyContent: "start",
                  gap: "8px",
                  "&:hover": {
                    backgroundColor: "background.default",
                  },
                  "&.active": {
                    backgroundColor: "primary.lighter",
                    color: "primary.dark",
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                  },
                  "& .MuiTypography-root ": {
                    fontStyle: activeSidebar
                      ? MuiTheme().typography.body2
                      : MuiTheme().typography.captiontext,
                  },
                },
              },
            },
          },
        }}
      >
        <Box className="aside__header">
          
          <ButtonBase onClick={() => setActiveSidebar(!activeSidebar)}>
            <Icon
              icon="eva:arrow-ios-back-fill"
              color={MuiTheme().palette.text.primary}
            />
          </ButtonBase>
        </Box>
        <Stack className="aside__list__content">
          {ListNavItems().map((navItem) => (
            <Stack key={navItem.name} className="aside__content">
              {activeSidebar && (
                <Typography
                  variant="captiontext"
                  className="aside__content__title"
                >
                  {navItem.name}
                </Typography>
              )}
              <Stack className="aside__content__nav">
                {navItem.items.map((item) => (
                  <ButtonBase
                    key={item.name}
                    className={`aside__content__nav__item ${
                      item.active && "active"
                    }`}
                    onClick={() => navigate(item.to)}
                  >
                    <Icon icon={item.icon} width={21} height={21} />
                    <Typography>{item.name}</Typography>
                  </ButtonBase>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default AdminSidebar;
