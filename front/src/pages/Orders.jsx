import React from "react";
import { Card, Table, Button, Row, Col } from "react-bootstrap";
import { FaClipboardList, FaHourglassHalf, FaPlusCircle } from "react-icons/fa"; // Íconos
import { Link, useNavigate } from "react-router-dom";

const Orders = () => {
  // Datos simulados
  const pedidos = [
    { id: 1, cliente: "Juan Pérez", estado: "Pendiente", fecha: "2024-10-20" },
    { id: 2, cliente: "Ana Gómez", estado: "Completado", fecha: "2024-10-18" },
    { id: 3, cliente: "Pedro López", estado: "Pendiente", fecha: "2024-10-19" },
  ];

  const totalPedidos = pedidos.length;
  const pedidosPendientes = pedidos.filter(
    (p) => p.estado === "Pendiente"
  ).length;
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      {/* Cards en la parte superior */}
      <Row className="mb-4">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <FaClipboardList size={40} />
              <Card.Title>Total Pedidos</Card.Title>
              <Card.Text>{totalPedidos}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <FaHourglassHalf size={40} />
              <Card.Title>Pedidos Pendientes</Card.Title>
              <Card.Text>{pedidosPendientes}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <FaPlusCircle size={40} />
              <Card.Title>Nuevo Pedido</Card.Title>
              <Link to={'/new-order'}>
              <Button variant="primary">Crear</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tabla de historial de pedidos */}
      <h3>Historial de Pedidos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr
              key={pedido.id}
              style={{ cursor: "pointer" }}
              onClick={() => navigate('/order-detail')}
            >
              <td>{pedido.id}</td>
              <td>{pedido.cliente}</td>
              <td>{pedido.estado}</td>
              <td>{pedido.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
