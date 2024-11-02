import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap"; // Solo usamos Bootstrap y React
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Registrar los componentes de Chart.js necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SummaryOrders = () => {
  // Datos de ejemplo
  const pedidosPendientes = 5; // Total de pedidos pendientes
  const totalAPagar = 1500.0; // Total acumulado en cuenta corriente

  const [data] = useState({
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Historial de Pagos",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: [200, 300, 250, 400, 350, 500], // Datos de historial pagado
      },
    ],
  });

  // Opciones para controlar el tamaño del gráfico
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Permite ajustar la altura sin desbordar
  };

  return (
    <Container
      fluid
      className="mt-4"
      style={{ height: "100vh", padding: "20px" }}
    >
      <Row className="mb-4">
        <Col md={6}>
          <Card className="text-center">
            <Card.Header>Pedidos Pendientes</Card.Header>
            <Card.Body>
              <Card.Title>{pedidosPendientes}</Card.Title>
              <Card.Text>
                Total de pedidos que están pendientes de ser procesados.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="text-center">
            <Card.Header>Total a Pagar</Card.Header>
            <Card.Body>
              <Card.Title>${totalAPagar.toFixed(2)}</Card.Title>
              <Card.Text>Total acumulado en cuenta corriente.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="text-center">Historial de Pagos Mes a Mes</h3>
          <div style={{ height: "300px", marginTop: "20px" }}>
            <Bar data={data} options={chartOptions} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SummaryOrders;
