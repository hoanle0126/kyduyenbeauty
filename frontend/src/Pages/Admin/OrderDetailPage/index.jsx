import { Icon } from "@iconify/react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  FormControl,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepContent,
  StepLabel,
  Stepper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { formatCurrency } from "@/Function/formatCurrency";
import { formatDate } from "@/Function/formatDate";
import { formatTime } from "@/Function/formatTime";
import getPriceValue from "@/Function/getPriceValue";
import AdminLayout from "@/Layouts/AdminLayout";
import { MuiTheme } from "@/Theme";
import { Palette } from "@/Theme/elements/palette";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../../../store/orders/action";
import { useParams } from "react-router-dom";
import formatPhoneNumber from "../../../Function/formatPhoneNumber";
import moment from "moment-timezone";

const OrderDetailPage = () => {
  const orderState = useSelector((store) => store.orders);
  const [status, setStatus] = React.useState("Order Placed");
  const dispatch = useDispatch();
  const { id } = useParams();
  const timeInZone = moment()
    .tz(import.meta.env.VITE_APP_TIMEZONE)
    .format("YYYY-MM-DD HH:mm:ss z");

  React.useEffect(() => {
    dispatch(getOrderById(id));
  }, []);

  React.useEffect(() => {
    console.log(orderState);
  }, [orderState]);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "background.paper",
        minHeight: "calc(100vh - 80px)",
      }}
      className="p-[30px] pt-0 flex flex-col gap-[28px] w-full"
    >
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          paddingRight: "20px",
          gap: "12px",
        }}
      >
        <Stack direction="row" alignItems="start" gap="8px">
          <IconButton>
            <Icon icon="solar:alt-arrow-left-outline" />
          </IconButton>
          <Stack gap="4px">
            <Typography variant="h4" color="text.primary">
              Order #{orderState.order?.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDate(orderState.order?.created_at)
                .concat(" ")
                .concat(formatTime(orderState.order?.created_at))}
            </Typography>
          </Stack>
        </Stack>
        <div className="flex-1"></div>
        <FormControl sx={{ width: 160 }} size="small">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={(e) => setStatus(e.target.value)}
          >
            {[
              "Order Placed",
              "Shipping",
              "Completed",
              "Cancelled",
              "Return Refund",
            ].map((statusItem, statusIndex) => (
              <MenuItem key={statusIndex} value={statusItem}>
                {statusItem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          startIcon={<Icon icon="solar:check-read-broken" />}
          variant="contained"
          color="common"
          onClick={() =>
            dispatch(
              updateOrder(id, {
                ...orderState.order,
                status: [
                  ...orderState.order.status,
                  { title: status, created_at: timeInZone },
                ],
                current_status: status,
              })
            )
          }
        >
          Submit
        </Button>
      </Stack>
      <Grid2 container spacing="20px" padding="20px">
        <Grid2 size={8}>
          <Stack gap="20px">
            <Box
              sx={{
                boxShadow: "custom.card",
                borderRadius: "12px",
                backgroundColor:
                  MuiTheme().palette.mode === "dark" && "background.default",
              }}
            >
              <Box
                sx={{
                  padding: "20px",
                  borderBottom: "1px dashed",
                  borderColor: "divider",
                }}
              >
                <Typography variant="h6" color="text.primary">
                  Details
                </Typography>
                <Stack sx={{ paddingTop: "20px" }}>
                  {orderState.order?.products?.map((item) => (
                    <Stack
                      key={item}
                      direction="row"
                      gap="12px"
                      sx={{
                        borderTop:
                          orderState.order?.products.indexOf(item) != 0 &&
                          "1px dashed",
                        borderColor: "divider",
                        paddingY: "6px",
                      }}
                    >
                      <img
                        src={item?.thumbnail}
                        alt=""
                        className="w-[48px] h-[48px] rounded-[12px]"
                      />
                      <Stack
                        sx={{
                          justifyContent: "center",
                          flex: 1,
                        }}
                      >
                        <Typography variant="body2" color="text.primary">
                          {item?.name}
                        </Typography>
                        <Stack direction="row" gap="12px">
                          <Typography variant="body2" color="text.secondary">
                            #{item?.id}
                          </Typography>
                          <div className="flex-1"></div>
                          <Typography variant="body2" color="text.primary">
                            x{item?.quantity_cart}
                          </Typography>
                          <Typography variant="subtitle2" color="text.primary">
                            {formatCurrency(item?.price * item?.quantity_cart)}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Box>
              <Grid2
                container
                sx={{
                  padding: "20px",
                }}
              >
                <Grid2 size={9}>
                  {["Subtotal"].map((item) => (
                    <Stack key={item} sx={{ alignItems: "end" }}>
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Grid2>
                <Grid2 size={3}>
                  {["Subtotal"].map((item) => (
                    <Stack key={item} sx={{ alignItems: "end" }}>
                      <Typography variant="subtitle2" color="text.primary">
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Grid2>
              </Grid2>
            </Box>
            <Box
              sx={{
                boxShadow: "custom.card",
                borderRadius: "12px",
              }}
            >
              <Stack
                sx={{
                  padding: "20px",
                  borderBottom: "1px dashed",
                  borderColor: "divider",
                  gap: "20px",
                  backgroundColor:
                    MuiTheme().palette.mode === "dark" && "background.default",
                }}
              >
                <Typography variant="h6" color="text.primary">
                  History
                </Typography>
                <Stack direction="row">
                  <Timeline
                    sx={{
                      padding: 0,
                      [`& .${timelineItemClasses.root}:last-child`]: {
                        minHeight: 0,
                      },
                      [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                      },
                      "& .MuiTimelineConnector-root": {
                        backgroundColor: "divider",
                      },
                    }}
                  >
                    {["Order Placed", "Shipping", "Completed"].map(
                      (statusItem, statusIndex) => (
                        <TimelineItem key={statusIndex}>
                          <TimelineSeparator>
                            {orderState.order?.status?.filter(
                              (orderItem) => orderItem.title === statusItem
                            ).length > 0 ? (
                              <TimelineDot color="primary" />
                            ) : (
                              <TimelineDot />
                            )}
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Stack>
                              <Typography
                                variant="subtitle2"
                                color="text.primary"
                              >
                                {statusItem}
                              </Typography>
                              {orderState.order?.status?.filter(
                                (orderItem) => orderItem.title === statusItem
                              ).length > 0 && (
                                <Typography
                                  variant="captiontext"
                                  color="text.secondary"
                                >
                                  {formatDate(
                                    orderState.order?.status?.filter(
                                      (orderItem) =>
                                        orderItem.title === statusItem
                                    )[0]?.created_at
                                  )}{" "}
                                  {formatTime(
                                    orderState.order?.status?.filter(
                                      (orderItem) =>
                                        orderItem.title === statusItem
                                    )[0]?.created_at
                                  )}
                                </Typography>
                              )}
                            </Stack>
                          </TimelineContent>
                        </TimelineItem>
                      )
                    )}
                  </Timeline>
                  <Stack
                    sx={{
                      border: "1px dashed",
                      borderColor: "divider",
                      padding: "20px",
                      borderRadius: "12px",
                      minWidth: "240px",
                      gap: "16px",
                    }}
                  >
                    {orderState.order?.status?.map((item) => (
                      <Stack key={item.title} gap="4px">
                        <Typography variant="subtitle2" color="text.secondary">
                          {item.title} Time
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          {formatDate(item.created_at)}{" "}
                          {formatTime(item.created_at)}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Grid2>
        <Grid2 size={4}>
          <Box
            sx={{
              boxShadow: "custom.card",
              borderRadius: "12px",
              backgroundColor:
                MuiTheme().palette.mode === "dark" && "background.default",
            }}
          >
            <Stack
              sx={{
                padding: "20px",
                gap: "20px",
                borderBottom: "1px dashed",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6" color="text.primary">
                Customer info
              </Typography>
              <Stack direction="row" gap="12px">
                <Avatar
                  sx={{
                    width: "44px",
                    height: "44px",
                    color: "text.primary",
                  }}
                />
                <Stack gap="4px">
                  <Typography variant="subtitle2" color="text.primary">
                    {orderState.order?.address?.first_name
                      .concat(" ")
                      .concat(orderState.order?.address?.last_name)}
                  </Typography>
                  <Typography variant="captiontext" color="text.secondary">
                    {orderState.order?.address?.email}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{
                padding: "20px",
                gap: "20px",
                borderBottom: "1px dashed",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6" color="text.primary">
                Shipping
              </Typography>
              <Grid2 container spacing="12px">
                <Grid2 size={4}>
                  <Stack gap="12px">
                    <Typography variant="body2" color="text.secondary">
                      Address
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={8}>
                  <Stack gap="12px">
                    <Typography variant="body2" color="text.primary">
                      {orderState.order?.address?.street_address},{" "}
                      {orderState.order?.address?.city},{" "}
                      {orderState.order?.address?.state}{" "}
                      {orderState.order?.address?.zip}, USA
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={4}>
                  <Stack gap="12px">
                    <Typography variant="body2" color="text.secondary">
                      Phone number
                    </Typography>
                  </Stack>
                </Grid2>
                <Grid2 size={8}>
                  <Stack gap="12px">
                    <Typography variant="body2" color="text.primary">
                      {/* {formatPhoneNumber(orderState.order?.address?.phone)} */}
                    </Typography>
                  </Stack>
                </Grid2>
              </Grid2>
            </Stack>
            <Stack
              sx={{
                padding: "20px",
                gap: "20px",
                borderBottom: "1px dashed",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6" color="text.primary">
                Payment
              </Typography>
              <Stack direction="row" gap="12px" alignItems="center">
                <div className="flex-1"></div>
                <Typography variant="subtitle2" color="text.primary">
                  **** **** **** 5678
                </Typography>
                <Icon icon="logos:mastercard" />
              </Stack>
            </Stack>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default OrderDetailPage;
