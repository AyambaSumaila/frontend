import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/orders/')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Order History</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>{order.customer}</td>
              <td>
                <ul>
                  {order.items.map(item => (
                    <li key={item.product.id}>{item.product.name} x {item.quantity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default OrderList;
