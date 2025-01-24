import { MuiTheme } from "@/Theme";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import {
    alpha,
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    Stack,
    TextField,
    Typography,
    Grid2,
} from "@mui/material";
import React from "react";
import CommerceLogo from "resources/assets/logo/commerceLogo";

const LoginPage = () => {
    const { props } = usePage();
    const { data, setData, post } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                backgroundColor:"background.paper"
            }}
        >
            <Stack
                sx={{
                    height: "100%",
                    width: 480,
                    backgroundColor: alpha(MuiTheme().palette.primary.lighter, 0.3),
                    position: "relative",
                    paddingX: "24px",
                    justifyContent: "center",
                    svg: {
                        position: "absolute",
                        top: "24px",
                        left: "24px",
                    },
                    "& .MuiStack-root": {
                        width: "100%",
                        alignItems: "center",
                        gap: "16px",
                    },
                }}
            >
                <Link href="/">
                    <CommerceLogo size={40} primary={MuiTheme().palette.primary.main} />
                </Link>
                <Stack>
                    <Typography variant="h3" color="text.primary">Hi, Welcome back</Typography>
                    <Typography variant="body1" color="text.secondary">
                        More effectively with optimized workflows.
                    </Typography>
                    <img
                        src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/illustration-dashboard.webp"
                        alt=""
                        className="mt-[40px]"
                    />
                </Stack>
            </Stack>
            <form
                className="h-full flex-1 items-center justify-center relative flex"
                onSubmit={submit}
            >
                <Stack
                    direction={"row"}
                    sx={{
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        justifyContent: "end",
                        padding: "24px",
                        alignItems: "center",
                        gap: "4px",
                    }}
                >
                    <Typography variant="subtitle2" color="text.primary">Need help?</Typography>
                    <IconButton>
                        <Icon icon="solar:settings-bold-duotone" color={MuiTheme().palette.text.primary}/>
                    </IconButton>
                </Stack>
                <Stack width={420} gap={"16px"}>
                    <Typography variant="h5" color="text.primary">
                        Sign in to your account
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            a: {
                                color: "primary.dark",
                                fontWeight: 600,
                            },
                        }}
                    >
                        Don't have an account?{" "}
                        <Link href={route("register")}>Get started</Link>
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Email address"
                        variant="outlined"
                        type="email"
                        color="custom"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        sx={{
                            marginTop: "16px",
                        }}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: "right",
                            color:"text.primary"
                        }}
                    >
                        <Link href={route("password.request")}>
                            Forgot password?
                        </Link>
                    </Typography>
                    <TextField
                        id="password-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        color="custom"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                defaultChecked
                                size="small"
                                color="common"
                            />
                        }
                        label={
                            <Typography variant="body2" color="text.primary">Remember</Typography>
                        }
                    />
                    <Button
                        variant="contained"
                        size="large"
                        color="common"
                        type="submit"
                    >
                        Sign in
                    </Button>
                    <Divider
                        sx={{
                            fontStyle: MuiTheme().typography.subtitle2,
                            color: "text.secondary",
                        }}
                    >
                        OR
                    </Divider>
                    <Stack
                        sx={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "16px",
                        }}
                    >
                        <IconButton>
                            <Icon icon="logos:google-icon" />
                        </IconButton>
                        <IconButton>
                            <Icon icon="logos:github-icon"/>
                        </IconButton>
                        <IconButton>
                            <Icon icon="logos:facebook" />
                        </IconButton>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
};

export default LoginPage;
