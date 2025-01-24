import OrderTable from "@/Components/OrderTable";
import AdminLayout from "@/Layouts/AdminLayout";
import AdminDefaultLayout from "@/Layouts/AdminLayout/DefaultLayout";
import { usePage } from "@inertiajs/react";
import React from "react";

const OrderPage = () => {
    const { props } = usePage();

    return (
        <AdminLayout>
            <AdminDefaultLayout title="Orders">
                <OrderTable rows={props.orders} admin={true} tabs={true} />
            </AdminDefaultLayout>
        </AdminLayout>
    );
};

export default OrderPage;
