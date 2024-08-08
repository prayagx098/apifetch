import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Api.css'
function Apifetch() {


  const [product,setProduct]=useState([])

  const fetchData = async()=>{

    const result = await fetch( 'https://dummyjson.com/products' )
    .then(result=>result.json())
    .then(products=>setProduct(products.products))

  }

  useEffect(()=>{
    fetchData()
  },[])

  console.log(product);

  return (
    <div className='card'>
    {
      product.map(item=>(
        <Card style={{ width: '18rem' }}>
        <Card.Img className='img' variant="top" src={item.thumbnail}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button className='me-5' variant="primary">Buy Now</Button>
          <Button variant="warning">Add to Cart</Button>
        </Card.Body>
      </Card>
      ))   
    }

    </div>
  )
}


export default Apifetch
