import { useState } from "react";
import { Form, Button, Row, Col, Toast } from "react-bootstrap";

const SuccessToast = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => (
  <Toast
    onClose={onClose}
    show={show}
    delay={3000}
    autohide
    className="position-fixed bottom-0 end-0 m-3 bg-success text-white"
  >
    <Toast.Header className="bg-success text-white">
      <strong className="me-auto">Success!</strong>
      <button
        type="button"
        className="btn-close btn-close-white"
        onClick={onClose}
        aria-label="Close"
      />
    </Toast.Header>
    <Toast.Body>
      Thank you for contacting us! We'll get back to you soon.
    </Toast.Body>
  </Toast>
);

const ContactForm = () => {
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    comments: "",
  };

  const [input, setInput] = useState(initialState);
  const [isInvalid, setIsInvalid] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = ({
    target: { id, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = e.currentTarget.checkValidity();
    setIsInvalid(!isValid);

    if (isValid) {
      const { fname, lname, email, phone, comments } = input;
      console.log(
        `Form submitted:
        Name: ${fname} ${lname}
        Email: ${email}
        Phone: ${phone}
        Comments: ${comments}`
      );

      setInput(initialState);
      setIsInvalid(false);

      setShowToast(true);
    }
  };

  return (
    <>
      <Form noValidate validated={isInvalid} onSubmit={handleSubmit}>
        <h2 className="mb-4">Contact Us</h2>
        <Row>
          <Col>
            <Form.Group className="mb-3 form-group" controlId="fname">
              <Form.Control
                type="text"
                placeholder=""
                value={input.fname}
                onChange={handleChange}
                required
              />
              <Form.Label>First Name *</Form.Label>
              <Form.Control.Feedback type="invalid">
                Please enter a first name
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 form-group" controlId="lname">
              <Form.Control
                type="text"
                placeholder=""
                value={input.lname}
                onChange={handleChange}
                required
              />
              <Form.Label>Last Name *</Form.Label>
              <Form.Control.Feedback type="invalid">
                Please enter a last name
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3 form-group" controlId="email">
          <Form.Control
            type="email"
            placeholder=""
            value={input.email}
            onChange={handleChange}
            required
          />
          <Form.Label>Email *</Form.Label>
          <Form.Control.Feedback type="invalid">
            Please provide an email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3 form-group" controlId="phone">
              <Form.Control
                type="text"
                placeholder=""
                value={input.phone}
                onChange={handleChange}
              />
              <Form.Label aria-placeholder="xxx-xxx-xxxx">
                Phone Number
              </Form.Label>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3 form-group" controlId="comments">
          <Form.Control
            as="textarea"
            placeholder=""
            rows={3}
            value={input.comments}
            onChange={handleChange}
          />
          <Form.Label>Comments</Form.Label>
        </Form.Group>
        <Button
          variant="dark"
          className="text-light d-flex ms-auto"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        className="position-fixed bottom-0 end-0 m-3"
      >
        <Toast.Header>
          <strong className="me-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body>Your message has been sent successfully.</Toast.Body>
      </Toast>
    </>
  );
};

export default ContactForm;
