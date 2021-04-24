import React from 'react';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const TopNav = () => {
    return (
        <div>

            <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>IMS</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>

                            <NavDropdown title="Products Management" id="basic-nav-dropdown">
                                <LinkContainer to="/category">
                                    <NavDropdown.Item>Category</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/product">
                                    <NavDropdown.Item>Product</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            {/* <LinkContainer to='/login'>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer> */}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default TopNav;