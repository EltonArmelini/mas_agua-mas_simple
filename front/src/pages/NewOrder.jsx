import React, { useState } from 'react';
import { Tabs, Tab, Button, Table, Form, Row, Col, Card } from 'react-bootstrap';

const NewOrder = () => {
  // Estados para los productos disponibles y seleccionados
  const [productosDisponibles] = useState([
    { id: 1, nombre: 'Agua Mineral 500ml', precio: 1.5 },
    { id: 2, nombre: 'Agua Mineral 1L', precio: 2.0 },
    { id: 3, nombre: 'Agua Gasificada 500ml', precio: 1.8 },
  ]);
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [productosPedido, setProductosPedido] = useState([]);
  const [metodoPago, setMetodoPago] = useState('');

  // Función para agregar productos al pedido
  const agregarProducto = () => {
    if (productoSeleccionado && cantidad > 0) {
      const producto = productosDisponibles.find(p => p.id === parseInt(productoSeleccionado));
      const productoPedido = { ...producto, cantidad: parseInt(cantidad) };

      // Verificar si el producto ya está en el pedido, para actualizar su cantidad
      const productoExistente = productosPedido.find(p => p.id === productoPedido.id);
      if (productoExistente) {
        setProductosPedido(
          productosPedido.map(p =>
            p.id === productoPedido.id
              ? { ...p, cantidad: p.cantidad + productoPedido.cantidad }
              : p
          )
        );
      } else {
        setProductosPedido([...productosPedido, productoPedido]);
      }

      setProductoSeleccionado('');
      setCantidad(1);
    }
  };

  // Función para eliminar un producto del pedido
  const eliminarProducto = (id) => {
    setProductosPedido(productosPedido.filter(p => p.id !== id));
  };

  // Función para editar la cantidad de un producto en el pedido
  const editarCantidad = (id, nuevaCantidad) => {
    setProductosPedido(
      productosPedido.map(p =>
        p.id === id ? { ...p, cantidad: nuevaCantidad } : p
      )
    );
  };

  // Función para calcular el total del pedido
  const calcularTotal = () => {
    return productosPedido.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0).toFixed(2);
  };

  // Función para obtener los productos disponibles, excluyendo los ya agregados
  const productosParaSeleccionar = productosDisponibles.filter(
    producto => !productosPedido.some(pedido => pedido.id === producto.id)
  );

  return (
    <div className="container mt-4">
      <h3>Nuevo Pedido</h3>
      <Tabs defaultActiveKey="productos" id="new-order-tabs" className="mb-4">
        {/* Pestaña 1: Selección de Productos */}
        <Tab eventKey="productos" title="Seleccionar Productos">
          <Card className="p-3">
            <h5>Agregar Productos</h5>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="producto">
                  <Form.Label>Producto</Form.Label>
                  <Form.Control 
                    as="select" 
                    value={productoSeleccionado} 
                    onChange={(e) => setProductoSeleccionado(e.target.value)}
                  >
                    <option value="">Seleccione un producto</option>
                    {productosParaSeleccionar.map((producto) => (
                      <option key={producto.id} value={producto.id}>
                        {producto.nombre} - ${producto.precio.toFixed(2)}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="cantidad">
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control 
                    type="number" 
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    min="1"
                  />
                </Form.Group>
              </Col>
              <Col md={3} className="d-flex align-items-end">
                <Button variant="primary" onClick={agregarProducto}>Agregar</Button>
              </Col>
            </Row>

            {/* Tabla de Productos Seleccionados */}
            <h5>Productos Seleccionados</h5>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productosPedido.map((producto, index) => (
                  <tr key={index}>
                    <td>{producto.nombre}</td>
                    <td>
                      <Form.Control 
                        type="number"
                        value={producto.cantidad}
                        onChange={(e) => editarCantidad(producto.id, parseInt(e.target.value))}
                        min="1"
                      />
                    </td>
                    <td>${producto.precio.toFixed(2)}</td>
                    <td>${(producto.precio * producto.cantidad).toFixed(2)}</td>
                    <td>
                      <Button 
                        variant="danger" 
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Tab>
        
        {/* Pestaña 2: Método de Pago / Cuenta Corriente */}
        <Tab eventKey="pago" title="Método de Pago / Cuenta Corriente">
          <Card className="p-3">
            <h5>Opciones de Pago</h5>
            <Form>
              <Form.Group controlId="metodoPago">
                <Form.Label>Método de Pago</Form.Label>
                <Form.Control 
                  as="select" 
                  value={metodoPago} 
                  onChange={(e) => setMetodoPago(e.target.value)}
                >
                  <option value="">Seleccione un método de pago</option>
                  <option value="tarjeta">Tarjeta de Crédito</option>
                  <option value="efectivo">Efectivo</option>
                  <option value="transferencia">Transferencia Bancaria</option>
                  <option value="cuenta-corriente">Cargar a Cuenta Corriente</option>
                </Form.Control>
              </Form.Group>

            </Form>
          </Card>

          {/* Resumen del Pedido */}
          <Card className="mt-4 p-3">
            <h5>Resumen del Pedido</h5>
            <Row>
              <Col md={6}>
                <h6>Total de Productos: {productosPedido.length}</h6>
              </Col>
              <Col md={6} className="text-end">
                <h6>Total a Pagar: ${calcularTotal()}</h6>
              </Col>
            </Row>
          </Card>
        </Tab>
      </Tabs>

      {/* Botones de Confirmar y Cancelar */}
      <Row className="mt-4">
        <Col className="text-end">
          <Button variant="danger" className="me-2">Cancelar</Button>
          <Button variant="success">Crear Pedido</Button>
        </Col>
      </Row>
    </div>
  );
};

export default NewOrder;
