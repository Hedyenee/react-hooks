import React from 'react';
import { Card } from 'react-bootstrap';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL}  style={{ height:'60vmin',alignItems: 'center' }} />
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ color:'red'}}>
        <h5>{rating}/5</h5>
      </Card.Footer>
    </Card>
  );
}

export default MovieCard;


