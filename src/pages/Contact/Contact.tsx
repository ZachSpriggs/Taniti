import { Container, Col, Row } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <Container fluid className="py-5">
      <Container className="text-center mb-5">
      <h1 className="mb-4">Get in Touch with Taniti Tourism</h1>
      <p className="lead mb-3">
        Whether you're planning your Taniti adventure, need assistance with accommodations, or have questions about our island's attractions, we're here to help.
      </p>
      <p>
        Our multilingual staff can assist with travel arrangements, provide detailed information about our various lodging options, and help you plan activities from rainforest ziplines to relaxing beach days. During national holidays, response times may be longer as many of our services operate on adjusted schedules.
      </p>
    </Container>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="contactBg mb-5 px-4 py-3 shadow rounded">
            <h2>Contact Information</h2>
            <p>
              <b>Hours:</b> Monday - Friday, 8:00 AM - 5:00 PM (PST)
            </p>
            <p>
              <b>Email:</b> <a href="mailto:#">contact@taniti.com</a>
            </p>
            <p>
              <b>Phone:</b> <a href="tel:#">555-123-4567</a>
            </p>
            <p>
              <b>Address:</b> 123 Volcano Drive, Taniti City, Taniti
            </p>
            <p>
              <small>
                <b>Note:</b> We are <em className="text-muted">closed</em> on{" "}
                <em className="text-muted">weekends</em> and{" "}
                <em className="text-muted">major holidays</em>.
              </small>
            </p>
          </Col>
          <Col lg={8} className="bgTurq mb-5 px-4 py-3 shadow rounded">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
