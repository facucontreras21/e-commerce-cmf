import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/layout/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductPage from "../pages/ProductPage";
import Review from "../components/Review";
import NoFoundPage from "../pages/NoFoundPage";
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/review" element={<Review />} />
            <Route path="*" element={<NoFoundPage />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default AppRouter;
