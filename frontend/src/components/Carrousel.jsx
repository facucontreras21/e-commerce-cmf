import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { listProductsTop } from "../redux/actions/productActions";

const Carrousel = () => {
  const dispatch2 = useDispatch();
  const productListTop3 = useSelector((state) => state.productListTopRanking);
  const { productListTop } = productListTop3;

  useEffect(() => {
    dispatch2(listProductsTop());
  }, [dispatch2]);

  return (
    <Carousel>
      {productListTop.map((product) => (
        <Carousel.Item interval={1000} key={product._id}>
          <img className="col-4" src={product.image} />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrousel;
