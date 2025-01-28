import { Box, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import { listStatus } from "../../listStatus";
import { useTranslation } from "react-i18next";
import { MuiTheme } from "../../../../Theme";

const TabList = (props) => {
  const { statusValue, handleChange, orderRows } = props;
  const { t } = useTranslation();
  const numProductValue = (statusProduct) => {
    return orderRows.filter((it) => it.current_status === statusProduct).length;
  };

  return (
    <Tabs
      value={statusValue}
      onChange={handleChange}
      aria-label="basic tabs example"
      sx={{
        "& .MuiTab-root": {
          textTransform: "none",
          fontStyle: MuiTheme().typography.subtitle2,
        },
      }}
      color="primary"
    >
      {listStatus.map((status, index) => (
        <Tab
          key={index}
          label={
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                gap: "8px",
              }}
            >
              {status.value}
              <Box
                sx={{
                  backgroundColor:
                    statusValue === status
                      ? status.backgroundColorActive
                      : status.backgroundColor,
                  color: statusValue === status ? "white" : status.color,
                  fontStyle: MuiTheme().typography.captiontext,
                  fontWeight: 700,
                  borderRadius: "8px",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transitionDuration: "300ms",
                }}
              >
                {numProductValue(status.value)}
              </Box>
            </Stack>
          }
          value={status}
        />
      ))}
    </Tabs>
  );
};

export default TabList;
