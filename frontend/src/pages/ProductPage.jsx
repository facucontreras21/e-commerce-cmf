import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { productById } from "../redux/actions/productActions";

const ProductPage = () => {
  const dispatch = useDispatch();

  const productFoundById = useSelector((state) => state.productFoundById);
  const { productbById } = productFoundById;
  const { id } = useParams();

  useEffect(() => {
    dispatch(productById(id));
  }, [dispatch]);

  return (
    <>
      <Product product={productbById} />
    </>
  );
};

export default ProductPage;