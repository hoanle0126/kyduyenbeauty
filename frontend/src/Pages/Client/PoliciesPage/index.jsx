import { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { PoliciesIcon } from "../../../assets/policies";
import { MuiTheme } from "../../../Theme";

const PoliciesPage = () => {
  return (
    <Stack
      sx={{
        paddingX: "160px",
        paddingTop: "80px",
        paddingBottom: "120px",
        flexDirection: "row",
      }}
    >
      <Stack
        sx={{
          gap: "20px",
          flex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: "12px",
          }}
        >
          Refund Policy
        </Typography>
        <Typography>Return & Refund Policy</Typography>
        <Typography>
          We do not accept returns or exchange unless the item that was
          purchased is defective or the item is unopened.
        </Typography>
        <Typography>
          We accept returns within 14 days after receiving an item. To start a
          return, please contact us at info@jubbibeauty.com. Upon acceptance, a
          return label will be provided along with instructions on where the
          package should be sent. Returns without prior approval will not be
          accepted.
        </Typography>
        <Typography>
          The item must be the "original" and in "brand new" condition.
        </Typography>
        <Typography>
          We will cover the return shipping costs if the return is a result of
          our error (incorrect or defective item). Reimbursement for shipping
          costs will not be covered by Jubbibeauty for any returns or exchanges
          in which Jubbibeauty are not at fault.
        </Typography>
      </Stack>
      <Stack
        sx={{
          gap: "12px",
          flex: 1,
          alignItems: "center",
          justifyContent: "start",
        }}
      ></Stack>
    </Stack>
  );
};

export default PoliciesPage;
