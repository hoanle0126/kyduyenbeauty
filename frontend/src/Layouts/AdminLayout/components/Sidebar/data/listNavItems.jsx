import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const ListNavItems = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return [
    {
      name: "Overview",
      items: [
        {
          name: "Dashboard",
          icon: "solar:chart-bold-duotone",
          to: "/admin",
          active: pathname === "/admin",
        },
      ],
    },
    {
      name: "Management",
      items: [
        {
          name: "Products",
          icon: "solar:bag-2-bold-duotone",
          to: "/admin/products",
          active: pathname.includes("/products"),
        },
        {
          name: "Categories",
          icon: "solar:widget-bold-duotone",
          to: "admin/categories",
          active: pathname.includes("/categories"),
        },
        {
          name: "Orders",
          icon: "solar:cart-large-4-bold-duotone",
          to: "/admin/orders",
          active: pathname.includes("/orders"),
        },
      ],
    },
  ];
};

export default ListNavItems;
