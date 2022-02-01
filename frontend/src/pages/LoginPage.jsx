import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginUser } from "../redux/actions/userActions.js";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialUserState = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const verifyUser = (data) => {
    dispatch(loginUser(data));
  };

  const usrl = useSelector((state) => state.userLogged);
  const { error, usuario } = usrl;// el error esta aca si usamos usrl funciona

  console.log(usrl.user);
  console.log("Holis");
  console.log(usuario);
  useEffect(() => {
    if (usuario) {
      console.log(usuario);
      navigate("/");
    }
  }, [usuario]);
  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.email || !user.password) return;
          verifyUser(user);
          setUser(initialUserState);
        }}
      >
        <Form.Group className="mb-2" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button className="mb-4 mt-3 col-12" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};
export default LoginPage;
