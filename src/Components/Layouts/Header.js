import React, { Component } from "react";
// import { AppBar, Toolbar, Typography, Button } from "material-ui";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
import CreateDialog from "../Main/Dialogs/Create.js";

export default class extends Component {
  render() {
    return (
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="images/logo.png"
            width="50"
            height="30"
            className="d-inline-block align-top"
          />
          {". . .   LarexirWeb"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <strong>JALUZELE VERTICALE</strong>
            </Nav.Link>
            <Nav.Link href="#link1">
              <strong>ROLETE PANZA</strong>
            </Nav.Link>
            <Nav.Link href="#link2">
              <strong>RULOURI EXTERIOARE</strong>
            </Nav.Link>
            <Nav.Link href="#link3">
              <strong>USI DE GARAJ</strong>
            </Nav.Link>
            <Nav.Link href="#link4">
              <strong>PLASE INSECTE</strong>
            </Nav.Link>
            <Nav.Link href="#link5">
              <strong>JALUZELE ORIZONTALE</strong>
            </Nav.Link>

            <NavDropdown title="SETARI" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Date firma</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Curs valutar{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Contact Larexir
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Acord GDPR</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login" flex="1">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
