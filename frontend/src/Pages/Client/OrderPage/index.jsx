import ClientLayout from "@/Layouts/ClientLayout";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Stack,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  Typography,
  Grid2,
  Breadcrumbs,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useContext, useMemo } from "react";
import { typography } from "@/Theme/elements/typography";
import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import CardDataGrid from "./components/CardDataGrid";
import { CustomTabPanel } from "@/Components/CustomTabPanel";
import ListAddress from "./components/ListAddress";
import PaymentStep from "./components/PaymentStep";
import { formatCurrency } from "@/Function/formatCurrency";
import getParams from "@/Function/getParams";
import ProductsData from "../../../data/ProductsData";
import { useNavigate, Link } from "react-router-dom";
import { useStateContext } from "../../../Context";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.dark,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.dark,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.background.neutral,
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.background.neutral,
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: theme.palette.primary.dark,
  }),
  "& .QontoStepIcon-completedIcon": {
    color: theme.palette.primary.dark,
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-circle" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ["Cart", "Billing & address", "Payment"];

export const sumPrice = (products) => {
  return products?.reduce(
    (total, item) => total + item.price_value * item.quantity,
    0
  );
};

const CheckoutPage = () => {
  const [step, setStep] = React.useState(0);
  const [order, setOrder] = React.useState({
    products: ProductsData(),
  });
  const { cart, setCart } = useStateContext();

  return (
    <Stack>
      <Stack>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "text.secondary",
            display: "flex",
            alignItems: "center",
            paddingX: {
              xs: "30px",
              sm: "60px",
              md: "90px",
              lg: "160px",
            },
            paddingY: "40px",
          }}
        >
          <Typography variant="h4" color="background.paper">
            Checkout
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "background.neutral",
            display: "flex",
            alignItems: "center",
            paddingX: {
              xs: "30px",
              sm: "60px",
              md: "90px",
              lg: "160px",
            },
            paddingY: "12px",
            a: {
              color: "text.secondary",
              "&:hover": {
                color: "text.primary",
              },
            },
          }}
        >
          <Link className="flex items-center gap-[12px]">
            <Icon icon="solar:undo-left-bold" />
            Back
          </Link>
        </Box>
      </Stack>
      <Grid2
        container
        paddingY={"40px"}
        paddingX={{
          xs: "30px",
          sm: "60px",
          md: "90px",
          lg: "160px",
        }}
        spacing={"32px"}
      >
        <Grid2 size={{ md: 8, sm: 12, xs: 12 }}>
          <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={step}
              connector={<QontoConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </Grid2>
        <Grid2
          size={{
            md: 8,
            sm: 12,
            xs: 12,
          }}
        >
          <Box>
            {[
              <CardDataGrid order={cart} setOrder={setCart} />,
              <ListAddress
                backAction={() => setStep(0)}
                setStep={setStep}
                order={cart}
                setOrder={setCart}
              />,
              <PaymentStep order={cart} setOrder={setCart} />,
            ].map((value, index) => (
              <CustomTabPanel tab={step} index={index} key={index}>
                {value}
              </CustomTabPanel>
            ))}
          </Box>
        </Grid2>
        <Grid2
          size={{
            md: 4,
            sm: 12,
            xs: 12,
          }}
        >
          <Stack gap={"32px"}>
            <CustomTabPanel tab={step} index={2}>
              <Box
                sx={{
                  boxShadow: "custom.card",
                  borderRadius: "16px",
                  padding: "24px",
                  backgroundColor:
                    MuiTheme().palette.mode === "dark" && "background.default",
                }}
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography variant="h6" color="text.primary">
                    Address
                  </Typography>
                  <div className="flex-1"></div>
                  <Button
                    color="common"
                    startIcon={<Icon icon="solar:pen-bold" />}
                    onClick={() => setStep(1)}
                  >
                    Edit
                  </Button>
                </Stack>
                <Stack gap={"12px"} paddingTop={"24px"}>
                  <Stack direction={"row"} gap={"8px"}>
                    <Typography variant="subtitle2" color="text.primary">
                      Jayvion Simon
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                      (Home)
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color={"text.secondary"}>
                    19034 Verna Unions Apt. 164 - Honolulu, RI / 87535
                  </Typography>
                  <Typography variant="body2" color={"text.secondary"}>
                    +1 202-555-0143
                  </Typography>
                </Stack>
              </Box>
            </CustomTabPanel>
            <Box
              sx={{
                boxShadow: "custom.card",
                borderRadius: "16px",
                padding: "24px",
                backgroundColor:
                  MuiTheme().palette.mode === "dark" && "background.default",
              }}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <Typography variant="h6" color="text.primary">
                  Order summary
                </Typography>
                <div className="flex-1"></div>
                {step != 0 && (
                  <Button
                    color="common"
                    startIcon={<Icon icon="solar:pen-bold" />}
                    onClick={() => setStep(0)}
                  >
                    Edit
                  </Button>
                )}
              </Stack>
              <Stack gap={"16px"} paddingTop={"24px"}>
                <Stack direction={"row"}>
                  <Typography variant="body2" color="text.primary">
                    Sub total
                  </Typography>
                  <div className="flex-1"></div>
                  <Typography variant="subtitle2" color="text.primary">
                    {formatCurrency(order.total)}
                  </Typography>
                </Stack>
                <Stack direction={"row"}>
                  <Typography variant="body2" color="text.primary">
                    Discount
                  </Typography>
                  <div className="flex-1"></div>
                  <Typography variant="subtitle2" color="text.primary">
                    -$5
                  </Typography>
                </Stack>
                <Stack direction={"row"}>
                  <Typography variant="body2" color="text.primary">
                    Shipping
                  </Typography>
                  <div className="flex-1"></div>
                  <Typography variant="subtitle2" color="text.primary">
                    Free
                  </Typography>
                </Stack>
                <Divider
                  sx={{
                    borderStyle: "dashed",
                    borderColor: "divider",
                  }}
                />
                <Stack direction={"row"}>
                  <Typography variant="h6" color="text.primary">
                    Total
                  </Typography>
                  <div className="flex-1"></div>
                  <Typography variant="h6" color={"error.main"}>
                    {formatCurrency(order.total)}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <CustomTabPanel tab={step} index={0}>
              <Button
                variant="contained"
                color="common"
                size="large"
                fullWidth
                onClick={() => {
                  setStep(1);
                }}
              >
                Check Out
              </Button>
            </CustomTabPanel>
            <CustomTabPanel tab={step} index={2}>
              <Button
                variant="contained"
                color="common"
                size="large"
                fullWidth
                //   onClick={() => {
                //     router.post(route("orders.store"), order, {
                //       onSuccess: () => {
                //         setOrder({});
                //         router.visit(route("shops.index"));
                //       },
                //     });
                //   }}
              >
                Complete Order
              </Button>
            </CustomTabPanel>
          </Stack>
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default CheckoutPage;
