import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <Card className="text-white bg-secondary" style={{ width: "25rem" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                required
                className="bg-dark text-white"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                required
                className="bg-dark text-white"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Iniciar Sesión
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
