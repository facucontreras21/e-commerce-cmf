import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/layout/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element ={<LoginPage/>} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default AppRouter;
