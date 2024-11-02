import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Profile = () => {
  const userData = {
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "1234567890",
    email: "juan.perez@example.com",
    direccion: "Av. Siempre Viva 742",
    cuit: "20-12345678-9"
  };

  return (
    <div className="container mt-4">
      <h2>Perfil del Cliente</h2>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder={userData.nombre} disabled />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder={userData.apellido} disabled />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formTelefono">
              <Form.Label>Número de Teléfono</Form.Label>
              <Form.Control type="text" placeholder={userData.telefono} disabled />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder={userData.email} disabled />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formDireccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder={userData.direccion} disabled />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCuit">
              <Form.Label>CUIT</Form.Label>
              <Form.Control type="text" placeholder={userData.cuit} disabled />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary">Editar</Button>
      </Form>
    </div>
  );
};

export default Profile;
