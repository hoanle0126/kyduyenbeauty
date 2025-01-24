import React from "react";
import { RouterProvider, useLocation } from "react-router-dom";
import itemRouter from "./itemRouter";

const MainRouter = () => {

  return <RouterProvider router={itemRouter} />;
};

export default MainRouter;
