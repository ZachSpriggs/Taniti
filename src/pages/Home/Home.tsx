import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from '../../images/image2.jpg';
import heroImage from '../../images/image2.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero" >
        <Container>
          <Row className="min-vh-75 align-items-center">
            <Col md={8} lg={6}>
              <div className="hero-content">
                <h1>Welcome to Our Island Paradise</h1>
                <p className="lead">Discover the beauty and excitement of our tropical getaway</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Content Sections */}
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Image src={image1} alt="Feature 1" fluid />
          </Col>
          <Col md={6}>
            <div className="px-md-4">
              <h2>Discover Paradise</h2>
              <p>Experience the beauty of our pristine beaches and lush forests.</p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={{ span: 6, order: 2 }}>
            <Image src="../../images/image3.jpg" alt="Feature 2" fluid />
          </Col>
          <Col md={{ span: 6, order: 1 }}>
            <div className="px-md-4">
              <h2>Luxurious Accommodations</h2>
              <p>Relax in comfort with our world-class resorts and villas.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;