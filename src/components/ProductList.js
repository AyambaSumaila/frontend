import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`http://localhost:8000${product.image}`} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description.substring(0, 100)}...
                </Card.Text>
                <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
