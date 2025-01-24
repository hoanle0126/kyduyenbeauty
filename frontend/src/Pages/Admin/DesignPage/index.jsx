import AdminLayout from "@/Layouts/AdminLayout";
import AdminDefaultLayout from "@/Layouts/AdminLayout/DefaultLayout";
import React from "react";

const DesignPage = () => {
    return (
        <AdminLayout title="Design">
            <AdminDefaultLayout title="Design">DesignPage</AdminDefaultLayout>
        </AdminLayout>
    );
};

export default DesignPage;
