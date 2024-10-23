import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './Cuisine.module.scss';

const Cuisine = () => {
  return (
    <div className={styles.home}>
      <Container>
        <Row className="min-vh-75 vw-100 align-items-center">
          <Col md={8} lg={6}>
            <div>
              <h2> Explore all of the beautiful dining options that Taniti has to offer</h2>
              <p>With 10 restaurants serving a variety of cuisines from local fish and rice dishes, to American-style 
                meals, to pan-asian cuisines, Taniti has you covered for all of your dining needs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    


      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            {/* <Image src={image1} alt="Feature 1" fluid /> */}
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
            {/* <Image src={image4} alt="Feature 2" fluid /> */}
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


export default Cuisine