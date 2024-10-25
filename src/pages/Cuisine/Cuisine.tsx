import { Container, Row, Col } from "react-bootstrap";
import { foodEstablishments } from "../../constants/dataConstants";
import DisplayCard from "../../components/DisplayCard/DisplayCard";
import styles from "./Cuisine.module.scss";

const Cuisine = () => {
  return (
    <Container>
      <Container className="pb-3">
        <h2>
          Explore all of the beautiful dining options that Taniti has to offer
        </h2>
        <p>
          With 10 restaurants serving a variety of cuisines from local fish and
          rice dishes, to American-style meals, or pan-asian cuisines, Taniti
          has you covered for all of your dining needs.
        </p>
      </Container>

      <Container
        className={`d-flex justify-content-center align-items-center ${styles.bgTurq}`}
      >
        <h2 className="text-light">Dining</h2>
      </Container>
      <Container className="py-5">
        <Row>
          {foodEstablishments.map(
            (food, idx) =>
              (food.category === "Restaurant" ||
                food.category === "Casual" ||
                food.category === "Food Cart") && (
                <Col key={idx} className="d-flex">
                  <DisplayCard
                    category={food.category}
                    name={food.name}
                    cuisine={food.cuisine}
                    description={food.description}
                    vibe={food.vibe}
                    image={food.image}
                  />
                </Col>
              )
          )}
        </Row>
      </Container>
      <Container
        className={`d-flex justify-content-center align-items-center ${styles.bgTurq}`}
      >
        <h2 className="text-light">Shopping</h2>
      </Container>
      <Container className="py-5">
        <Row>
          {foodEstablishments.map(
            (food, idx) =>
              (food.category === "Convenience Store" ||
                food.category === "Grocery Store" ||
                food.category === "Supermarket") && (
                <Col lg={4} key={idx} className="d-flex align-items-stretch">
                  <DisplayCard
                    category={food.category}
                    name={food.name}
                    cuisine={food.cuisine}
                    description={food.description}
                    vibe={food.vibe}
                    image={food.image}
                  />
                </Col>
              )
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Cuisine;
