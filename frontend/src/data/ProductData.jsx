import React from "react";
import { useParams } from "react-router-dom";
import ProductsData from "./ProductsData";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getProductByKey } from "../store/product/action";

const ProductData = () => {
  const { id } = useParams();
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductByKey(id));
  }, []);

  return products;
};

export default ProductData;
