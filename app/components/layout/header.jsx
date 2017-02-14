import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import StarredTaskBadge from '../tasks/starredTaskBadge';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component{
  render(){
    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="/">Kanban</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="Dashboard">
                        <NavItem>Dashboard</NavItem>
                    </LinkContainer>
                    <LinkContainer to="Tasks">
                        <NavItem>Tasks</NavItem>
                    </LinkContainer>
                </Nav>
                <Navbar.Text pullRight>
                    <StarredTaskBadge />
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
  }
};