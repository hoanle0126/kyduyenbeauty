import { Avatar, Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import AdminHeader from "./components/Header";
import AdminSidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../store/product/action";

const AdminLayout = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 w-[0vw]">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
