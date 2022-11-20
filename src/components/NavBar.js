import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggle = () => setIsOpen(!isOpen);

  

  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand><img
        alt="logo"
        src="./military-man.png"
        style={{
          height: 70,
          width: 70
        }}
      /></NavbarBrand>  
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
              </NavItem>
               
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/Calculators"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Calculators
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/pdfversion"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Pdf version
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/resources"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Resources
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/AboutMe"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    About Me
                  </NavLink>
                </NavItem>
                 <NavItem>
                <span>     ...........                    </span>
                </NavItem>
                <NavItem>
                <a id="booklink" href='https://www.amazon.com/How-Influential-Leader-Identify-leadership-ebook/dp/B0BHPX4CQ4/ref=sr_1_8?crid=DRVN9C656O4N&keywords=how+to+be+an+influential+leader&qid=1667247908&qu=eyJxc2MiOiItMC4wMCIsInFzYSI6IjAuMDAiLCJxc3AiOiIwLjAwIn0%3D&sprefix=how+to+be+an+influential+leader%2Caps%2C121&sr=8-8'>
                  <img src="./BookCover.png" alt="bookcover" style={{width: '20%'}}></img>
                </a>
                </NavItem>
               
            </Nav>
            
              
                

              
            
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
