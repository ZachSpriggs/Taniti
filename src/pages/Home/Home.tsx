import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import heroImage from '../../images/hero1.jpg';
import DisplayCard from '../../components/DisplayCard/DisplayCard';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
    <div className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <Container>
        <Row className="min-vh-75 align-items-center" style={{zIndex: 100}}>
          <Col md={8} lg={6}>
            <div className={styles.heroContent}>
              <h1>Welcome to Our Island Paradise</h1>
              <p className={styles.lead}>Discover the beauty and excitement of our tropical getaway</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>



      <Container className="py-5">
        <Row className="align-items-center mb-5">
        <DisplayCard
          name="Explore the island"
          description="Nestled in the Pacific, Taniti offers a perfect blend of adventure and
          relaxation across its compact 500 square miles. Our white sandy
          beaches along Yellow Leaf Bay provide an ideal setting for both
          sunbathers and water sports enthusiasts, while our active volcano and
          lush rainforest create unique opportunities for explorers."
          image={image1}
        />
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={{ span: 6, order: 2 }}>
            <Image src={image4} alt="Feature 2" fluid />
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