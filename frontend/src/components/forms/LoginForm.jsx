import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInAction } from "../../redux/actions/user/userAuthActions";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignInForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.userLogged);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signInAction(credentials.email, credentials.password));
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <h3>Login</h3>
      <h6>Complete with the information requested</h6>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formGridEmail">
          <Form.Control
            name="email"
            placeholder="Enter email"
            type="email"
            className="form-control mb-2"
            onChange={handleChange}
            value={credentials.email}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formGridPassword">
          <Form.Control
            name="password"
            placeholder="Enter password"
            type="password"
            className="form-control mb-2"
            onChange={handleChange}
            value={credentials.password}
          />
        </Form.Group>
        <Button className="mb-4 mt-3 col-12" variant="dark" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default SignInForm;
