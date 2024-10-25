import { Container, Row, Col } from "react-bootstrap";
import { lodgingData } from "../../constants/dataConstants";
import DisplayCard from "../../components/DisplayCard/DisplayCard";

const Lodging = () => {
  return (
    <Container>
      <Container className="pb-3">
        <h2>Experience the finest lodging options on Taniti</h2>
        <p>
          From our luxurious four-star resort to cozy family-owned hotels and
          charming bed & breakfasts, Taniti offers diverse lodging options for
          every budget. All accommodations are regularly inspected and regulated
          by the Tanitian government to ensure quality and safety.
        </p>
      </Container>

      <Container
        className={`d-flex justify-content-center align-items-center bg-turq`}
      >
        <h2 className="text-light">Lodging</h2>
      </Container>
      <Container className="py-5">
        <Row>
          {lodgingData.map((lodging, idx) => (
            <Col key={idx} className="d-flex">
              <DisplayCard
                category={lodging.category}
                name={lodging.name}
                description={lodging.description}
                image={lodging.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Lodging;
