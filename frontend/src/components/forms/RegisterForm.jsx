import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegisterForm = () => {
  return (
    <>
      <h3>Create Account</h3>
      <h6>Complete with the information requested</h6>
      <Form>
        <Form.Group className="mb-2" controlId="formGridName">
          <Form.Control type="text" placeholder="Enter name" name="name" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formGridEmail">
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formGridPassword">
          <Form.Control
            type="password"
            placeholder="Ingrese contraseña"
            name="password"
          />
        </Form.Group>

        <Button className="mb-4 mt-3 col-12" variant="dark" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
