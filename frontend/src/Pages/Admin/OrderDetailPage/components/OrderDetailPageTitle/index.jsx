import { Icon } from "@iconify/react";
import { ButtonBase, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const OrderDetailPageDetail = ({ props }) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            gap="12px"
            sx={{
                padding: "20px 20px 0px 20px",
            }}
        >
            <ButtonBase
                sx={{
                    padding: "2px 4px",
                    borderRadius: "8px",
                    gap: "8px",
                }}
                onClick={() => router.get(route("orders.index"))}
            >
                <Icon
                    icon="solar:undo-left-round-bold"
                    width="24"
                    height="24"
                />
                <Typography variant="body2">Back</Typography>
            </ButtonBase>
            <div className="flex-1"></div>
            <Typography variant="body2">Order ID: #{props.order.id}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
                variant="subtitle2"
                className="uppercase"
                color={"primary.main"}
            >
                {props.order.current_status}
            </Typography>
        </Stack>
    );
};

export default OrderDetailPageDetail;
