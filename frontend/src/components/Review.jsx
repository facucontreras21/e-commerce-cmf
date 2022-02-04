import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { createReviewAction } from "../redux/actions/product/productActions";
import { useParams } from "react-router-dom";

const ratings = [
  {
    value: "1",
    name: "1. Malo",
  },
  {
    value: "2",
    name: "2. Regular",
  },
  {
    value: "3",
    name: "3. Bueno",
  },
  {
    value: "4",
    name: "4. Muy bueno",
  },
  {
    value: "5",
    name: "5. Excelente",
  },
];

const Review = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  const [dataReview, setDataReview] = useState({
    rating: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReviewAction(user.token, dataReview, id));
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setDataReview({
      ...dataReview,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <h5 className="mt-2">Write a review</h5>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formGridRating">
          <Form.Label className="mt-2">Rating</Form.Label>
          <Form.Control
            as="select"
            rows={3}
            name="rating"
            className="form-control mb-2"
            value={dataReview.rating}
            onChange={handleChange}
          >
            {ratings.map((rating) => (
              <option key={rating.value} value={rating.value}>
                {rating.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlComment">
          <Form.Label className="mt-2">Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            placeholder="Enter comment"
            className="form-control mb-2"
            onChange={handleChange}
            value={dataReview.comment}
          />
        </Form.Group>
        <Button className="mb-4 mt-3 col-12" variant="dark" type="submit">
          Send review
        </Button>
      </Form>
    </>
  );
};

export default Review;
