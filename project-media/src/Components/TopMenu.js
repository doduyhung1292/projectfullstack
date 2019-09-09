import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Button } from 'reactstrap';

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
          <Button color="primary" outline>
          Siu nhân sịp hồng 
          </Button>
        </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                 <Button color="primary">
                   Home
                </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Profile">
                 <Button color="primary">
                    Profile  
                </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                 <Button color="primary" outline>
                    Notifications <Badge color="secondary">4</Badge>
                </Button>    
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 <Button color="primary">
                  Setting 
                </Button>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Muốn chơi cần?
                  </DropdownItem>
                  <DropdownItem>
                   Muốn chơi cỏ?
                  </DropdownItem>
                  <DropdownItem>
                    Muốn chơi bóng?
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/login/">
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
 } 