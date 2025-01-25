import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from "./Theme/index.jsx";
import MainRouter from "./Router/index.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import ThemeContext from "./Context/index.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeContext>
      <Provider store={store}>
        <ThemeProvider theme={MuiTheme()}>
          <MainRouter />
        </ThemeProvider>
      </Provider>
    </ThemeContext>
  </LocalizationProvider>
  // </StrictMode>
);
