import React from "react";
import { Card } from "react-bootstrap";

import { Col, Row } from "react-bootstrap";

const ReviewList = ({ review }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Card.Body>
          <Card.Text as="h3">$ {review.name}</Card.Text>
          <Card.Text as="h3">$ {review.rating}</Card.Text>
          <Card.Text as="h3">$ {review.comment}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReviewList;
