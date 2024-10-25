import { Container, Row, Col } from "react-bootstrap";
import { entertainmentData } from "../../constants/dataConstants";
import DisplayCard from "../../components/DisplayCard/DisplayCard";

const Entertainment = () => {
  return (
    <Container>
      <Container className="pb-3">
        <h2>Discover Endless Entertainment Across Taniti Island</h2>
        <p>
          From thrilling rainforest ziplines to relaxing beach days, Taniti
          offers diverse activities for every traveler. Explore our active
          volcano, enjoy chartered fishing tours, or experience the nightlife at
          Merriton Landing's new microbrewery and dance club. Whether you're
          seeking outdoor adventures or cultural experiences at our local
          museums and art galleries, Taniti's entertainment scene continues to
          grow.
        </p>
      </Container>

      <Container
        className={`d-flex justify-content-center align-items-center bg-turq`}
      >
        <h2 className="text-light">Entertainment</h2>
      </Container>
      <Container className="py-5">
        <Row>
          {entertainmentData.map((entertainment, idx) => (
            <Col key={idx} className="d-flex">
              <DisplayCard
                category={entertainment.category}
                name={entertainment.name}
                description={entertainment.description}
                image={entertainment.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Entertainment;
