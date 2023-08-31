import React from 'react'
import {food} from "./Productdata.js"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react'


function Barnys() {
const [items, setitems] = useState(food)
const decrement=(id)=>{
    const newItem=items.map((item)=>
    item.id===id && item.qty > 1?{...item,qty:item.qty-1}:item);
    setitems(newItem);
};
const increment=(id)=>{
    const newItem=items.map((item)=>
    item.id===id?{...item,qty:item.qty+1}:item);
    setitems(newItem);
};




  return (
    

    <div>
        <h1 className='bg-info text-white'>Uni rest cafe</h1>
        {items.map((item)=>(
            <div className='d-inline-flex' key={item.id}>
            <Card className="shadow p-3 m-2 bg-body-tertiary rounded"
            style={{ width: '15rem' }}>
            <Card.Img 
            variant="top"
             className='p-2'
              style={{height:"13rem"}} 
              src={item.image} 
              />
            <Card.Body>
               <Card.Title>{item.model}</Card.Title>
               <Card.Text>{item.brand}
                </Card.Text>
                <h5>{item.price}</h5>
                <div>
                    <p>QTY:
                        <Button onClick={()=>decrement(item.id)} className='m-1'>-</Button>
                        {item.qty}
                        <Button onClick={()=>increment(item.id)} className='m-1'>+</Button>

                    </p>
                </div>
                
                {/* <Button variant="primary">Add to cart</Button> */}
           </Card.Body>
           </Card>
           </div>

        ))}
        
 </div>
        )  
}

export default Barnys