import { Accordion, Container, Col, Row } from "react-bootstrap";
import { faqEntries } from "../../constants/dataConstants";

const FAQ = () => {
  return (
    <Container className="mb-5 mt-5">
      <Container>
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      </Container>
      <Row className="justify-content-center">
        <Col lg="6" md="auto">
          <Accordion>
            {faqEntries.map((entry, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header as="h1">{entry.question}</Accordion.Header>
                <Accordion.Body className="fw-bold" >
                  {entry.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
