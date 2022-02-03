import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const PaymentForm = () => {
  return (
    <>
      <h3>Payment methods</h3>
      <h6>Select payment method</h6>
      <Form>
        <div>
          <Form.Check
            type="radio"
            id={`default-radio`}
            label="PayPal / Terjeta de crédito"
          />
        </div>
        <div>
          <Form.Check type="radio" id={`default-radio`} label="Mercado Pago" />
        </div>
        <Button className="mb-4 mt-3 col-12" variant="dark" type="submit">
          Continue
        </Button>
      </Form>
    </>
  );
};

export default PaymentForm;
