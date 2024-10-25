import { Card } from "react-bootstrap";
import { DataEntry } from "../../constants/dataConstants";

const DisplayCard = ({
  category,
  name,
  description,
  cuisine,
  vibe,
  image,
}: DataEntry) => {
  return (
    <Card style={{ width: "25rem" }} className="mb-5 shadow">
      <Card.Img variant="top" src={image} alt="Nothing to see" />
      <Card.Body>
        <Card.Title className="mb-1 text-primary">{name}</Card.Title>
        <Card.Text as="small" className="d-block mb-2 fw-bold">
          {category}
          {cuisine ? ` | ${cuisine}` : ""}
        </Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="mt-auto">
        {vibe && (
          <Card.Text as="small">
            <b>Atmposphere:</b> {vibe}
          </Card.Text>
        )}
      </Card.Footer>
    </Card>
  );
};

export default DisplayCard;