import React, { Component } from 'react';
import history from '../../history';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavigationTab from '../NavigationTab';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Span = styled.span`
    padding-left: 10px;
    text-transform: uppercase;
`;

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light " variant="light ">
                    <Link to="/"><Image src={process.env.PUBLIC_URL + '/images/icons/kaercher_logo_black.png'}></Image></Link>
                    <Span>Connected Cleaning</Span>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Navbar>
                <NavigationTab />
            </div>
        );
    }
}

export default Navigation;