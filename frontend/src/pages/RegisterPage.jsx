// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// //import { loginUser } from "../redux/actions/userActions.js";
// import { registerUser } from "../services/userServices";

// const RegisterPage = () => {
//   const navigate = useNavigate();

//   const initialUserState = {
//     username: "",
//     email: "",
//     password: "",
//   };

//   const dispatch = useDispatch();
//   const [newUser, setNewUser] = useState(initialUserState);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewUser({ ...newUser, [name]: value });
//   };
//   const register = (theUser) => {
//     //dispatch(register(data));
//     const userCreated = registerUser(
//       theUser.username,
//       theUser.email,
//       theUser.password
//     );
//     navigate("/");
//   };

//   return (
//     <>
//       <h3>REGISTER</h3>
//       <Form
//         onSubmit={(event) => {
//           event.preventDefault();
//           if (!newUser.username || !newUser.email || !newUser.password) return;
//           register(newUser);
//           setNewUser(initialUserState);
//         }}
//       >
//         <Form.Group className="mb-2" controlId="formGridName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             c
//             placeholder="Enter name"
//             name="username"
//             value={newUser.username}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-2" controlId="formGridEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             c
//             placeholder="Enter email"
//             name="email"
//             value={newUser.email}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Form.Group className="mb-2" controlId="formGridPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={newUser.password}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Button className="mb-4 mt-3 col-12" variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default RegisterPage;
