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
import CategoriesPage from "../Pages/Admin/CategoriesPage";
import CategoriesAddPage from "../Pages/Admin/CategoriesPage/AddPage";
import CategoriesViewPage from "../Pages/Admin/CategoriesPage/ViewPage";
import OrderPage from "../Pages/Admin/OrderPage";
import OrderDetailPage from "../Pages/Admin/OrderDetailPage";
import CheckoutTestPage from "../Pages/Checkout";

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
        path: "/checkout-test",
        element: <CheckoutTestPage />,
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
      {
        path: "/admin/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/admin/categories/create",
        element: <CategoriesAddPage />,
      },
      {
        path: "/admin/categories/:id",
        element: <CategoriesViewPage />,
      },
      {
        path: "/admin/orders",
        element: <OrderPage />,
      },
      {
        path: "/admin/orders/:id",
        element: <OrderDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default itemRouter;
