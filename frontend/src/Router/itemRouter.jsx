import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/Client/LandingPage";
import ShopPage from "../Pages/Client/ShopPage";
import ShopDetailPage from "../Pages/Client/ShopPage/DetailPage";
import CheckoutPage from "../Pages/Client/OrderPage";
import OrderSuccessPage from "../Pages/Client/OrderSuccessPage";
import ErrorPage from "../Pages/Client/ErrorPage";
import ClientLayout from "../Layouts/ClientLayout";
import AdminLayout from "../Layouts/AdminLayout";
import DashboardPage from "../Pages/Admin/DashboardPage";
import ProductPage from "../Pages/Admin/ProductPage";
import AddProductPage from "../Pages/Admin/ProductPage/AddPage";
import UpdateProductPage from "../Pages/Admin/ProductPage/UpdatePage";
import PoliciesPage from "../Pages/Client/PoliciesPage";
import ContactPage from "../Pages/Client/ContactPage";

const itemRouter = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <ShopDetailPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/checkout-success",
        element: <OrderSuccessPage />,
      },
      {
        path: "/terms-and-policies",
        element: <PoliciesPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <DashboardPage />,
      },
      {
        path: "/admin/products",
        element: <ProductPage />,
      },
      {
        path: "/admin/products/create",
        element: <AddProductPage />,
      },
      {
        path: "/admin/products/:id",
        element: <UpdateProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default itemRouter;
