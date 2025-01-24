import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import {
  Box,
  ButtonBase,
  Stack,
  Typography,
  Grid2,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React from "react";

const PaymentStep = ({ order, setOrder }) => {
  return (
    <Stack gap={"32px"}>
      <Box
        sx={{
          borderRadius: "16px",
          boxShadow: "custom.card",
          padding: "24px",
          backgroundColor:
            MuiTheme().palette.mode === "dark" && "background.default",
        }}
      >
        <Typography variant="h5" color="text.primary">
          Payment
        </Typography>
        <Stack marginTop={"24px"} gap={"16px"}>
          {[
            {
              title: "Pay with Paypal",
              description:
                "You will be redirected to PayPal website to complete your purchase securely.",
              icon: "logos:paypal",
            },
            {
              title: "Cash",
              description: "Pay with cash when your order is delivered.",
              icon: "tabler:cash",
            },
          ].map((it, index) => (
            <React.Fragment key={index}>
              <Box
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  padding: "20px",
                  borderRadius: "8px",
                  display: "flex",
                  gap: "16px",
                  cursor: "pointer",
                  outline:
                    order?.payment?.title === it.title && "2px solid black",
                }}
                onClick={() => setOrder({ ...order, payment: it })}
              >
                <Stack gap={"8px"}>
                  <Typography variant="subtitle1" color="text.primary">
                    {it.title}
                  </Typography>
                  <Typography variant="body2" color={"text.secondary"}>
                    {it.description}
                  </Typography>
                </Stack>
                <div className="flex-1"></div>
                <Icon
                  icon={it.icon}
                  width="28"
                  height="28"
                  color={MuiTheme().palette.text.primary}
                />
              </Box>
              {order?.payment?.title === it.title && it.title !== "Cash" && (
                <Stack
                  sx={{
                    padding: "20px",
                    border: "1px solid black",
                    borderColor: "divider",
                    borderRadius: "12px",
                    gap: "20px",
                  }}
                >
                  <Stack direction="row" gap="20px" alignItems="center">
                    <Icon
                      icon="solar:card-2-bold-duotone"
                      width="24"
                      height="24"
                      color={MuiTheme().palette.text.secondary}
                    />
                    <Typography variant="h6">Card</Typography>
                  </Stack>
                  <Stack gap="20px">
                    <Stack gap="8px">
                      <Typography variant="subtitle2">Card Number</Typography>
                      <TextField
                        placeholder="1234 1234 1234"
                        color="common"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment>
                              <Stack direction="row" gap="20px">
                                <Icon
                                  icon="logos:visaelectron"
                                  width="24"
                                  height="24"
                                />
                                <Icon
                                  icon="logos:mastercard"
                                  width="24"
                                  height="24"
                                />
                              </Stack>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Stack>
                    <Stack gap="8px">
                      <Typography variant="subtitle2">
                        Expiration Date
                      </Typography>
                      <TextField
                        placeholder="MM/YY"
                        color="common"
                        size="small"
                      />
                    </Stack>
                    <Stack gap="8px">
                      <Typography variant="subtitle2">Security Code</Typography>
                      <TextField
                        placeholder="CVC"
                        color="common"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment>
                              <Icon
                                icon="solar:card-2-bold-duotone"
                                width="24"
                                height="24"
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default PaymentStep;
