import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const shippingForm = () => {
  return (
    <>
      <h3>Shipping information</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicDirection">
          <Form.Label>Direction</Form.Label>
          <Form.Control type="text" placeholder="Enter direcction" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Enter postal code" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Enter country" />
        </Form.Group>

        <Button className="mb-4 mt-3 col-12" variant="dark" type="submit">
          Continue
        </Button>
      </Form>
    </>
  );
};

export default shippingForm;
