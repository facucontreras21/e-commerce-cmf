import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";
import Rating from "../components/Rating";

import { useDispatch, useSelector } from "react-redux";
import { productById } from "../redux/actions/productActions";

const ProductPage = () => {
  const dispatch = useDispatch();

  const productFoundById = useSelector((state) => state.productFoundById);
  const { productByIdFound } = productFoundById;
  const { id } = useParams();

  useEffect(() => {
    dispatch(productById(id));
  }, [dispatch]);

  return (
    <>
      <CardGroup>
        <img src={productByIdFound.image} />
        <Card className="my-3 p-3 rounded">
          <Card.Body>
            <Card.Title as="div">
              <strong>{productByIdFound.name}</strong>
            </Card.Title>
            <Card.Text as="div">
              <Rating rating={productByIdFound.rating} />
            </Card.Text>
            <Card.Text as="h3">$ {productByIdFound.price}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default ProductPage;
