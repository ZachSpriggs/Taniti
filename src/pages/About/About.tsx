import { Container, Col, Row } from "react-bootstrap";
import DisplayCard from "../../components/DisplayCard/DisplayCard";

const About = () => {
  return (
    <Container className="pb-3">
      <Container>
        <p>
          Nestled in the Pacific, Taniti offers a perfect blend of adventure and
          relaxation across its compact 500 square miles. Our white sandy
          beaches along Yellow Leaf Bay provide an ideal setting for both
          sunbathers and water sports enthusiasts, while our active volcano and
          lush rainforest create unique opportunities for explorers.
        </p>
      </Container>
      <Container>
        <DisplayCard
          name="Explore the island"
          description="Nestled in the Pacific, Taniti offers a perfect blend of adventure and
          relaxation across its compact 500 square miles. Our white sandy
          beaches along Yellow Leaf Bay provide an ideal setting for both
          sunbathers and water sports enthusiasts, while our active volcano and
          lush rainforest create unique opportunities for explorers."
        />
      </Container>
    </Container>
  );
};

export default About;
