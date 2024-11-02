import React from "react";
import { Nav, Button } from "react-bootstrap";
import { FaClipboard, FaBox, FaUser, FaTruck, FaBars, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className="d-flex flex-column align-items-start vh-100 text-light">
      <Button variant="outline-light" className="my-3 mx-auto" onClick={toggleSidebar}>
        <FaBars />
      </Button>

      <Nav className="flex-column w-100 px-2" activeKey="/">
        <Nav.Link as={Link} to="/dashboard/summary" className="text-light d-flex align-items-center py-2">
          <FaClipboard /> {!isCollapsed && <span className="ms-2">Resumen</span>}
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard/orders" className="text-light d-flex align-items-center py-2">
          <FaBox /> {!isCollapsed && <span className="ms-2">Pedidos</span>}
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard/products" className="text-light d-flex align-items-center py-2">
          <FaTag /> {!isCollapsed && <span className="ms-2">Productos</span>}
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard/deliveries" className="text-light d-flex align-items-center py-2">
          <FaTruck /> {!isCollapsed && <span className="ms-2">Entregas</span>}
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard/profile" className="text-light d-flex align-items-center py-2">
          <FaUser /> {!isCollapsed && <span className="ms-2">Perfil</span>}
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideBar;
