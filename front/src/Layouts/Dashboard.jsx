import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col
          className={`sidebar bg-dark ${
            isCollapsed ? "col-auto" : "col-md-3"
          } d-flex flex-column p-0`}
        >
          <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        </Col>
        <Col className="content bg-light p-4 flex-grow-1">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
