import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../css/nav.css';

export default function Side () {
    return (
        <>
            <Nav className="d-none d-md-block sidebar"
            activeKey="/home"
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/add">
                        <Nav.Link>Form Add</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/chart">
                        <Nav.Link>Chart</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </>
    );
};