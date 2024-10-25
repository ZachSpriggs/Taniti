import { Container, Row, Col, Image } from "react-bootstrap";
import heroImage from "./hero1.webp";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Container>
          <Row className="min-vh-75 align-items-center" style={{ zIndex: 100 }}>
            <Col md={8} lg={6}>
              <div className={styles.heroContent}>
                <h1>Welcome to Our Island Paradise</h1>
                <p className={styles.lead}>
                  Discover the beauty and excitement of our tropical getaway
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row
          className="align-items-center mb-6 my-6"
          style={{ marginBottom: "10rem" }}
        >
          <Col md={{ span: 6, order: 1 }}>
            <Image src="../images/image1.webp" className="mb-4" alt="Feature 2" fluid style={{boxShadow: "6px 6px 10px #352f44"}}/>
          </Col>
          <Col md={{ span: 6, order: 2 }}>
            <div className="px-md-4">
              <h2>Beautiful Taniti</h2>
              <p className="fs-lg">
                Nestled in the Pacific, Taniti offers a perfect blend of
                adventure and relaxation across its compact 500 square miles.
                Our white sandy beaches along Yellow Leaf Bay provide an ideal
                setting for both sunbathers and water sports enthusiasts, while
                our active volcano and lush rainforest create unique
                opportunities for explorers..
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="align-items-center mb-6 my-6"
          style={{ marginBottom: "10rem" }}
        >
          <Col md={{ span: 6, order: 2 }}>
            <Image src="../images/image2.webp" className="mb-4" alt="Feature 2" fluid style={{boxShadow: "-6px 6px 10px #352f44"}}/>
          </Col>
          <Col md={{ span: 6, order: 1 }}>
            <div className="px-md-4">
              <h2>Local Experiences</h2>
              <p>
                The heart of the island, Taniti City, seamlessly combines
                traditional architecture with modern comfort. Our walkable
                streets are lined with local restaurants serving fresh-caught
                fish, American classics, and Pan-Asian cuisine. For those
                seeking authentic experiences, our local history museum and art
                galleries showcase the rich culture of our 20,000 indigenous
                residents.
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="align-items-center mb-6 my-6"
          style={{ marginBottom: "10rem" }}
        >
          <Col md={{ span: 6, order: 2 }}>
            <Image src="../images/image3.webp" className="mb-4" alt="Feature 2" fluid style={{boxShadow: "6px 6px 10px #352f44"}}/>
          </Col>
          <Col md={{ span: 6, order: 2 }}>
            <div className="px-md-4">
              <h2>Adventurers Welcome</h2>
              <p>
                Adventure seekers can explore our rainforest canopy through
                exciting zip-line tours, take helicopter rides for breathtaking
                aerial views, or join chartered fishing expeditions in our
                crystal-clear waters. The growing Merriton Landing area has
                become a hub for entertainment, featuring everything from a
                local microbrewery to snorkeling tours.
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="align-items-center mb-6 my-6"
          style={{ marginBottom: "10rem" }}
        >
          <Col md={{ span: 6, order: 2 }}>
            <Image src="../images/image4.webp" className="mb-4" alt="Feature 2" fluid style={{boxShadow: "-6px 6px 10px #352f44"}}/>
          </Col>
          <Col md={{ span: 6, order: 1 }}>
            <div className="px-md-4">
              <h2>Transportation</h2>
              <p>
                Getting around is convenient with public buses running
                throughout Taniti City from 5 AM to 11 PM daily. Whether you
                prefer cycling through our flat city streets (with required
                helmets), taking private bus tours to remote beaches, or
                exploring on foot, you'll find transportation options to suit
                your style.
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="align-items-center mb-6 my-6"
          style={{ marginBottom: "10rem" }}
        >
          <Col md={{ span: 6, order: 2 }}>
            <Image src={heroImage} alt="Feature 2" className="mb-4" fluid style={{boxShadow: "6px 6px 10px #352f44"}} />
          </Col>
          <Col md={{ span: 6, order: 2 }}>
            <div className="px-md-4">
              <h2>Luxurious Accommodations</h2>
              <p>
                Accommodation options cater to every preference and budget, from
                our four-star resort overlooking Yellow Leaf Bay to charming
                family-owned hotels and bed & breakfasts. All lodging undergoes
                regular government inspections to ensure your comfort and safety
                during your stay on our island paradise.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
