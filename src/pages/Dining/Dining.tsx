import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { foodEstablishments, DataEntry } from "../../constants/dataConstants";
import DisplayCard from "../../components/DisplayCard/DisplayCard";

const Dining = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DataEntry[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(foodEstablishments);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container>
      <Container className="pb-3">
        <h2>Savor Local and International Flavors in Taniti</h2>
        <p>
          Discover our island's diverse dining scene featuring 10 unique
          restaurants. Choose from five locations serving fresh local fish and
          traditional rice dishes, three restaurants offering American-style
          favorites, or explore two Pan-Asian establishments bringing
          international flavors to our shores.
        </p>
      </Container>

      <Container
        className={`d-flex justify-content-center align-items-center bgTurq`}
      >
        <h2 className="text-light">Dining</h2>
      </Container>
      <Container className="py-5">
        <Row>
          {data.map(
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
        className={`d-flex justify-content-center align-items-center bgTurq`}
      >
        <h2 className="text-light">Shopping</h2>
      </Container>
      <Container className="py-5">
        <Row>
          {data.map(
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

export default Dining;
