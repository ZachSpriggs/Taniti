
import { Container, Row, Col} from "react-bootstrap";
import { entertainmentData } from "../../constants/dataConstants";
import DisplayCard from "../../components/DisplayCard/DisplayCard";

const Entertainment = () => {

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
        className={`d-flex justify-content-center align-items-center`}
      >
        <h2 className="text-light">Dining</h2>
      </Container>
      <Container className="py-5">
        <Row>
          {entertainmentData.map(
            (entertainment, idx) =>
                (
                <Col key={idx} className="d-flex">
                  <DisplayCard
                    category={entertainment.category}
                    name={entertainment.name}
                    description={entertainment.description}
                    image={entertainment.image}
                  />
                </Col>
              )
          )}
        </Row>
      </Container>

    </Container>
  );
};

export default Entertainment;