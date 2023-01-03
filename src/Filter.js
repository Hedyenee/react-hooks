import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';




function Filter ({ onFilter }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <Form inline >
      <FormControl
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='form'
      />
      <FormControl
        as="select"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className='form'
      >
        <option value={0}>All</option>
        <option value={1}>1+</option>
        <option value={2}>2+</option>
        <option value={3}>3+</option>
        <option value={4}>4+</option>
        <option value={5}>5</option>
      </FormControl>
      <Button onClick={() => onFilter({ title, rating })} style={{color:'grey'}}>Filter</Button>
    </Form>
  );
}
export default Filter;


