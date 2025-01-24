import AdminLayout from "@/Layouts/AdminLayout";
import { Grid2, Stack, TextField } from "@mui/material";
import React from "react";
import SaleByGenderCard from "./SaleByGenderCard";
import ProductSoldCard from "./ProductSoldCard";
import YearlySalesCard from "./YearlySalesCard";
import TotalBalanceCard from "./TotalBalanceCard";
import SalesProfitCard from "./SalesProfitCard";
import AdminDefaultLayout from "@/Layouts/AdminLayout/DefaultLayout";

const DashboardPage = () => {
  return (
    <AdminDefaultLayout title={"Dashboard"}>
      <Grid2 container spacing={3}>
        {[<ProductSoldCard />, <TotalBalanceCard />, <SalesProfitCard />].map(
          (it) => (
            <Grid2 size={4} key={it}>
              {it}
            </Grid2>
          )
        )}
        <Grid2 size={4}>
          <SaleByGenderCard />
        </Grid2>
        <Grid2 size={8}>
          <YearlySalesCard />
        </Grid2>
      </Grid2>
    </AdminDefaultLayout>
  );
};

export default DashboardPage;
