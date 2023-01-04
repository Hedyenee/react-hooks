import React from 'react';
import { Card } from 'react-bootstrap';
import Ratings from "./Ratings"

function MovieCard({ title, description, posterURL, Rate }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL}  style={{ height:'60vmin',alignItems: 'center' }} />
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ color:'red'}}>
    <Ratings Rate={Rate}  />
      </Card.Footer>
    </Card>
  );
}

export default MovieCard;


