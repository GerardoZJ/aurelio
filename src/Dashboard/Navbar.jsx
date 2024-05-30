import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FaCaretDown } from 'react-icons/fa'; // Importar el icono de flecha hacia abajo

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar isOpen={isOpen} toggle={toggle}>
              <DropdownToggle nav>
                Usuario <FaCaretDown /> {/* Icono de flecha hacia abajo */}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Mi Perfil</DropdownItem>
                <DropdownItem>Configuraciones</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Cerrar Sesion</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        {!isOpen && (
          <Nav className="ms-auto" navbar>
            <NavLink onClick={toggle}>
              Usuario <FaCaretDown /> {/* Icono de flecha hacia abajo */}
            </NavLink>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}

export default NavBar;
