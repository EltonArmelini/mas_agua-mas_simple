import React, { useState } from "react";
import { Card, Table, Button, Row, Col, Dropdown } from "react-bootstrap";
import {
  FaUser,
  FaCalendarAlt,
  FaShoppingCart,
  FaMoneyBillWave,
} from "react-icons/fa";

const OrderDetail = () => {
  // Datos simulados para el pedido
  const pedido = {
    id: 12345,
    cliente: {
      nombre: "Juan Pérez",
      telefono: "123456789",
      email: "juan.perez@example.com",
      direccion: "Av. Siempre Viva 742, Springfield",
    },
    fechaPedido: "2024-10-21",
    estado: "Pendiente",
    productos: [
      {
        id: 1,
        nombre: "Agua Mineral 500ml",
        cantidad: 10,
        precioUnitario: 1.5,
      },
      { id: 2, nombre: "Agua Mineral 1L", cantidad: 5, precioUnitario: 2.0 },
    ],
    total: 25.0,
    metodoPago: "Tarjeta de Crédito",
    fechaEntrega: "2024-10-23",
  };

  const subtotalProducto = (producto) =>
    producto.cantidad * producto.precioUnitario;

  // Estado para el nuevo estado del pedido
  const [nuevoEstado, setNuevoEstado] = useState(pedido.estado);

  const handleEstadoChange = (estado) => {
    setNuevoEstado(estado);
    // Aquí podrías agregar lógica adicional si es necesario
    console.log(`Estado cambiado a: ${estado}`);
  };

  return (
    <div className="container mt-4">
      {/* Encabezado del Pedido */}
      <Row className="mb-4">
        <Col>
          <Card className="p-3">
            <h5>
              <FaShoppingCart /> Pedido #{pedido.id}
            </h5>
            <p>
              <FaCalendarAlt /> Fecha del Pedido: {pedido.fechaPedido}
            </p>
            <p>
              <FaUser /> Cliente: {pedido.cliente.nombre}
            </p>
            <p>Dirección: {pedido.cliente.direccion}</p>
            <p>Estado: {nuevoEstado}</p>
          </Card>
        </Col>
        <Col>
          <Card className="p-3">
            <h5>
              <FaMoneyBillWave /> Resumen del Pedido
            </h5>
            <p>Total: ${pedido.total.toFixed(2)}</p>
            <p>Método de Pago: {pedido.metodoPago}</p>
            <p>Día de Entrega: {pedido.fechaEntrega}</p>
          </Card>
        </Col>
      </Row>

      {/* Productos del Pedido */}
      <h4>Productos del Pedido</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {pedido.productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>${producto.precioUnitario.toFixed(2)}</td>
              <td>${subtotalProducto(producto).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Botones de Acción */}
      <Row className="mt-4">
        <Col md={6}>
          <Button variant="primary" className="me-2">
            Editar Pedido
          </Button>
          <Button variant="danger">Cancelar Pedido</Button>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="secondary">Marcar como</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleEstadoChange("Pendiente")}>
                Pendiente
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleEstadoChange("Completado")}>
                Completado
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  handleEstadoChange("Cancelado por el Repartidor")
                }
              >
                Cancelado por el Repartidor
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleEstadoChange("Cancelado por el Cliente")}
              >
                Cancelado por el Cliente
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetail;
