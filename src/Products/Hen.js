import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Hen() {
  const [items, setItems] = useState([]);

  const decrement = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem);
  };

  const increment = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };

  useEffect(() => {
    axios.get('https://abuabz.github.io/restoapii/resto.json')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    

    <div>
        <h1 className='bg-info text-white'>Uni rest cafe</h1>
<div className="d-flex flex-wrap">
  {items.map((item) => (
    <Card
      className="shadow p-3 m-2 bg-body-tertiary rounded d-flex flex-row"
      style={{ width: '100%' }}
      key={item.id}
    >
      <div className="d-flex flex-column justify-content-between">
        <Card.Body>
          <Card.Title>{item.restaurant_namel}</Card.Title>
          <Card.Text>{item.brand}</Card.Text>
          <h5>{item.price}</h5>
          <div className="d-flex align-items-center">
            <p>QTY:</p>
            <Button onClick={() => decrement(item.id)} className='m-1'>-</Button>
            {item.qty}
            <Button onClick={() => increment(item.id)} className='m-1'>+</Button>
          </div>
        </Card.Body>
        {/* <Button variant="primary">Add to cart</Button> */}
      </div>
      <div className="d-flex">
        <Card.Img
          variant="top"
          className='p-2'
          style={{ height: "10rem", width: "10rem" }}
          src={item.image}
        />
      </div>
    </Card>
  ))}
</div>

        
        
 </div>
        )  
}

export default Hen