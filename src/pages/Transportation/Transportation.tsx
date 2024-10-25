import { Container, Row, Col } from "react-bootstrap";
import { transportationData } from "../../constants/dataConstants";
import DisplayCard from "../../components/DisplayCard/DisplayCard";

const Transportation = () => {
  return (
    <Container>
      <Container className="pb-3">
        <h2>Navigate Taniti With Ease Using Multiple Transportation Options</h2>
        <p>
          Get around Taniti City on our public buses running daily from 5 AM to
          11 PM, or explore beyond with private bus services. The flat, walkable
          city streets are perfect for cycling (helmets provided and required),
          while taxis and rental cars from our airport agency offer flexibility
          for your island adventures. Our easily navigable city center and
          Merriton Landing area are also perfect for exploring on foot.
        </p>
        <p>
          Most travelers arrive to Taniti by air, however we do have cruise ships dock sometimes. 
          We have a small airport for smaller planes, with plans to expand the airport to accommodate
          larger planes in the next few years.
        </p>
      </Container>
      <Container
        className={`d-flex justify-content-center align-items-center bg-turq`}
      >
        <h2 className="text-light">Transportation</h2>
      </Container>
      <Container className="py-5">
        <Row>
          {transportationData.map((transport, idx) => (
            <Col key={idx} className="d-flex">
              <DisplayCard
                category={transport.category}
                name={transport.name}
                description={transport.description}
                image={transport.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Transportation;
