// import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
// import { Link, router, usePage } from "@inertiajs/react";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Badge,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import AvatarHeader from "./components/AvatarHeader";
import { MuiTheme } from "../../../../Theme";
import SearchModal from "./components/SearchModal";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../../../Context";
import MainLogo from "../../../../assets/mainLogo";

const ClientHeader = () => {
  const navigate = useNavigate();
  const { cart } = useStateContext();
  const [openSearch, setOpenSearch] = React.useState(false);
  const upSm = useMediaQuery(MuiTheme().breakpoints.up("sm"));
  const upMd = useMediaQuery(MuiTheme().breakpoints.up("md"));

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "background.paper",
        height: "66px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: {
          xs: "30px",
          sm: "60px",
          md: "90px",
          lg: "160px",
        },
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "custom.card",
      }}
    >
      {upMd ? (
        <>
          <img src={MainLogo} className="w-[40px] h-[40px] rounded-full"></img>
          <Stack
            direction="row"
            sx={{
              position: "absolute",
              translate: "-50%",
              left: "50%",
              gap: "28px",
              a: {
                fontStyle: MuiTheme().typography.body1,
              },
            }}
          >
            {[
              { title: "Home", route: "/" },
              { title: "Shop", route: "/shop" },
              { title: "Contact us", route: "/contact-us" },
              { title: "Terms & Policies", route: "/terms-and-policies" },
            ].map((navItem, navIndex) => (
              <Link to={navItem.route} key={navIndex}>
                {navItem.title}
              </Link>
            ))}
          </Stack>
        </>
      ) : (
        <IconButton>
          <Icon icon="solar:hamburger-menu-linear" width={32} height={32} />
        </IconButton>
      )}
      <Stack
        direction="row"
        sx={{
          gap: "12px",
        }}
      >
        <IconButton onClick={() => setOpenSearch(true)}>
          <Icon icon="eva:search-fill" width={24} height={24} />
        </IconButton>
        <IconButton
          onClick={() => navigate("/checkout")}
          sx={{
            marginRight: "12px",
          }}
        >
          <Badge
            badgeContent={
              <Typography variant="captiontext">
                {cart?.products.length}
              </Typography>
            }
            color="error"
          >
            <Icon icon="solar:cart-5-broken" width={24} height={24} />
          </Badge>
        </IconButton>
      </Stack>
      <SearchModal open={openSearch} handleClose={() => setOpenSearch(false)} />
    </Box>
  );
};

export default ClientHeader;
