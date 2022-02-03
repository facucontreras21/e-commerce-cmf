import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const usrl = useSelector((state) => state.userLogged);
  const { loading, userFound } = usrl;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("data");
    window.location.href = "/";
    // return navigate("/");
  };

  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark" expand="lg" collapOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Ecommerce</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>Carrito
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
                {!userFound ? (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i>Login
                    </Nav.Link>
                  </LinkContainer>
                ) : (
                  <NavDropdown title={userFound.name} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/rutaNoSeUsa">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => logout()}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
