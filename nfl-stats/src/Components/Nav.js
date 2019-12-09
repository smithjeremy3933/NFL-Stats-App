import React, {Component, useState, useEffect} from 'react'
import styled from "styled-components";
// import './App.css';
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h2>NFL Stats</h2>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/standings">
                    <li>Standings</li>
                </Link>
                <Link to= "/fantasy">
                    <li>Fantasy</li>
                </Link>
                <Link to="/currentnews">
                    <li>Player Information</li>
                </Link>
            </ul>
        </nav>
        )
    }
}

export default Nav;