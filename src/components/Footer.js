// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark pt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h6 className="text-uppercase">Contact Us</h6>
            <h6 className="mt-4 text-uppercase">Connect With Us</h6>
            <div className="d-flex gap-3 mt-2">
              <a href="#"><FaLinkedin size={24} /></a>
              <a href="#"><FaYoutube size={24} /></a>
            </div>
          </Col>

          <Col md={1}><div className="border-end h-100 mx-auto"></div></Col>

          <Col md={3}>
            <h6 className="text-uppercase">About Us</h6>
            <p className="mb-1">Overview</p>
            <p className="mb-1">Our Timeline</p>
            <p className="mb-1">Awards and Recognition</p>
          </Col>

          <Col md={1}><div className="border-end h-100 mx-auto"></div></Col>

          <Col md={2}>
            <h6 className="text-uppercase">Capabilities</h6>
            <p className="mb-1">News</p>
          </Col>

          <Col md={2}>
            <h6 className="text-uppercase">Careers</h6>
            <p className="mb-1">Vendor Registration</p>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row>
          <Col>
            <p className="mb-1 text-muted">
              Copyright 2025 © ACC. All rights reserved.
            </p>
            <p className="text-muted small">
              ACC Group Ltd and its affiliated entities make every effort to maintain the information stored on this website as current as possible. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
