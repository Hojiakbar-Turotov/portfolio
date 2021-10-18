import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';

export default function PagesNavbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/" className="text-white">HOJIAKBAR-TUROTOV</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Portfolios</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">News</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" title="Umid is a social network">UMID - SN</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Profil
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    LogIn
                                </DropdownItem>
                                <DropdownItem>
                                    SignUp
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <UncontrolledDropdown  nav inNavbar>
                                        <DropdownToggle direction="right" nav caret>
                                            Language
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                        <DropdownItem>
                                                EN
                                            </DropdownItem>
                                            <DropdownItem>
                                                UZ
                                            </DropdownItem>
                                            <DropdownItem>
                                                RU
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Brend</NavbarText>
                </Collapse>
            </Navbar>
        </>
    )
}
