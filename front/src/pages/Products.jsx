// src/components/ProductList.js

import React from "react";
import { Card, Table, Row, Col, Button } from "react-bootstrap";
import { FaTag, FaBoxOpen, FaPlusCircle } from "react-icons/fa"; // Íconos
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
  // Datos simulados
  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: 29.99,
      category: "Categoría A",
      stock: 100,
      sold: 30,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 49.99,
      category: "Categoría B",
      stock: 50,
      sold: 20,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 19.99,
      category: "Categoría A",
      stock: 200,
      sold: 15,
    },
    {
      id: 4,
      name: "Producto 4",
      price: 39.99,
      category: "Categoría C",
      stock: 0,
      sold: 5,
    },
  ];

  const totalProducts = products.length;
  const totalCategories = new Set(products.map((product) => product.category))
    .size;
  const mostSoldProducts = products.sort((a, b) => b.sold - a.sold).slice(0, 3); // Toma los 3 más vendidos

  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      {/* Productos Más Vendidos */}
      <h3>Resumen de Productos Más Vendidos</h3>
      <Row className="mb-4 justify-content-center">
        {mostSoldProducts.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Precio: ${product.price.toFixed(2)}
                  <br />
                  Vendidos: {product.sold}
                </Card.Text>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary"
                >
                  Ver Detalles
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Resumen de Productos */}
      <h3>Resumen de Productos</h3>
      <Row className="mb-4 text-center">
        <Col>
          <Card className="h-100">
            <Card.Body>
              <FaTag size={40} />
              <Card.Title>Total de Productos</Card.Title>
              <Card.Text>{totalProducts}</Card.Text>
              <Link to="/new-product">
                <Button variant="primary" className="mt-2">
                  <FaPlusCircle /> Agregar Producto
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <FaBoxOpen size={40} />
              <Card.Title>Total de Categorías</Card.Title>
              <Card.Text>{totalCategories}</Card.Text>
              <Link to="/categories/new">
                <Button variant="primary" className="mt-2">
                  <FaPlusCircle /> Agregar Categoría
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tabla de productos */}
      <h3>Lista de Productos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/product-detail`)}
            >
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
