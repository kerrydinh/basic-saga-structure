import React, { useEffect } from 'react';
import history from '../../history';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavigationTab from '../NavigationTab';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import cloneDeep from 'lodash/sumBy';
const Span = styled.span`
    padding-left: 10px;
    text-transform: uppercase;
`;

function Navigation(props) {
    useEffect(() => {
        console.log(props);

    });

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light " variant="light ">
                <Link to="/"><Image src={process.env.PUBLIC_URL + '/images/icons/kaercher_logo_black.png'}></Image></Link>
                <Span>Connected Cleaning</Span>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {props.text}
                </Nav>
                <Nav>
                    <Button variant="outline-primary" onClick={() => props.onSignIn()}>Sign-in</Button>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <NavigationTab />
        </div>
    );

}

export default Navigation;