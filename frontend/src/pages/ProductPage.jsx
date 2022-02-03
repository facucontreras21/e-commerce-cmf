import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { productById } from "../redux/actions/productActions";

const ProductPage = () => {
  const dispatch = useDispatch();

  const productFoundById = useSelector((state) => state.productFoundById);
  const { productFound } = productFoundById;
  const { id } = useParams();

  console.log(productFoundById);
  console.log(productFound);
  useEffect(() => {
    dispatch(productById(id));
  }, [dispatch, id]);

  //   dispatch(productById(id));
  return <Product roduct={productFound} />;
};

export default ProductPage;
