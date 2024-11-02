// src/components/ProductDetail.js

import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa"; // Íconos
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  // Datos simulados del producto
  const product = {
    id: 1,
    name: "Producto 1",
    price: 29.99,
    category: "Categoría A",
    stock: 100,
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(product);
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Lógica de guardado
    alert("Producto editado.");
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Lógica de eliminación aquí (puedes implementar un modal de confirmación si lo deseas)
    alert(`Producto ${formData.name} eliminado.`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Detalles del Producto</h3>
        <Button variant="primary" onClick={handleEditToggle}>
          {isEditing ? "Cancelar" : "Editar"}
        </Button>
      </div>

      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Ingrese el nombre del producto"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Ingrese la categoría del producto"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Ingrese el precio del producto"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Ingrese el stock"
              />
            </Form.Group>
          </Col>
        </Row>

        {isEditing && (
          <div className="d-flex justify-content-end mt-3">
            <Button variant="primary" onClick={handleSave} className="me-2">
              <FaEdit /> Guardar Cambios
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              <FaTrash /> Eliminar
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default ProductDetail;
