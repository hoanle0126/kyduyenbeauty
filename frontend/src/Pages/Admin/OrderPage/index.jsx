import OrderTable from "@/Components/OrderTable";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import AdminDefaultLayout from "../../../Layouts/AdminLayout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../store/orders/action";

const OrderPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.orders);

  React.useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <AdminDefaultLayout title="Orders">
      <OrderTable rows={state.orders} admin={true} tabs={true} />
    </AdminDefaultLayout>
  );
};

export default OrderPage;
