import React from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import { FaClipboardList, FaCheckCircle } from "react-icons/fa"; // Íconos
import { useNavigate } from "react-router-dom";

const Deliveries = () => {
  // Datos simulados
  const today = new Date().toISOString().slice(0, 10);
  const pendingDeliveries = [
    {
      ref: 1,
      customer: "Juan Pérez",
      address: "Calle 123, Ciudad",
      date: today,
    },
    {
      ref: 2,
      customer: "Ana Gómez",
      address: "Avenida 456, Ciudad",
      date: today,
    },
  ];
  const completedDeliveries = [
    {
      ref: 3,
      customer: "Pedro López",
      address: "Boulevard 789, Ciudad",
      date: "2024-10-29",
    },
    {
      ref: 4,
      customer: "María Fernández",
      address: "Plaza 101, Ciudad",
      date: "2024-10-28",
    },
  ];

  const totalPendingDeliveries = pendingDeliveries.length;
  const totalDeliveriesToday = pendingDeliveries.filter(
    (delivery) => delivery.date === today
  ).length;

  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      {/* Resumen de entregas */}
      <Row className="mb-4">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <FaClipboardList size={40} />
              <Card.Title>Total de Pedidos Pendientes</Card.Title>
              <Card.Text>{totalPendingDeliveries}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <FaCheckCircle size={40} />
              <Card.Title>Pedidos a Entregar Hoy</Card.Title>
              <Card.Text>{totalDeliveriesToday}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Filas de tablas en una sola fila */}
      <Row>
        {/* Pedidos Pendientes */}
        <Col>
          <h4>Pedidos Pendientes</h4>
          <Table striped bordered hover className="mb-4">
            <thead>
              <tr>
                <th>Ref.</th>
                <th>Cliente</th>
                <th>Dirección</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {pendingDeliveries.map((delivery) => (
                <tr
                  key={delivery.ref}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/order-detail")}
                >
                  <td>{delivery.ref}</td>
                  <td>{delivery.customer}</td>
                  <td>{delivery.address}</td>
                  <td>{delivery.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        {/* Pedidos Completados */}
        <Col>
          <h4>Historial de Pedidos Completados</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ref.</th>
                <th>Cliente</th>
                <th>Dirección</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {completedDeliveries.map((delivery) => (
                <tr
                  key={delivery.ref}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/order-detail")}
                >
                  <td>{delivery.ref}</td>
                  <td>{delivery.customer}</td>
                  <td>{delivery.address}</td>
                  <td>{delivery.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Deliveries;
