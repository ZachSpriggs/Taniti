import { useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { DataEntry } from "../../constants/dataConstants";
import styles from "./DisplayCard.module.scss";

const DisplayCard = ({
  category,
  name,
  description,
  cuisine,
  vibe,
  image,
}: DataEntry) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card style={{ width: "25rem" }} className="mb-5 shadow">
      <div style={{ position: "relative", height: "200px" }}>
        {!imageLoaded && !imageError && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f8f9fa",
            }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          style={{
            height: "200px",
            objectFit: "cover",
            display: imageLoaded ? "block" : "none",
          }}
          onLoad={() => {
            setImageLoaded(true);
          }}
          onError={(e) => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />
        {imageError && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f8f9fa",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <div>
              <p>Image not found</p>
              <small style={{ wordBreak: "break-all" }}>{image}</small>
            </div>
          </div>
        )}
      </div>
      <Card.Body>
        <Card.Title className={`mb-1 ${styles.textTurq} text-turq`}>{name}</Card.Title>
        <Card.Text as="small" className="d-block mb-2 fw-bold">
          {category}
          {cuisine ? ` | ${cuisine}` : ""}
        </Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className={`mt-auto ${styles.bgTurq} bg-turq`}>
        {vibe && (
          <Card.Text as="small" className="bold">
            <b>Atmosphere:</b> {vibe}
          </Card.Text>
        )}
      </Card.Footer>
    </Card>
  );
};

export default DisplayCard;
