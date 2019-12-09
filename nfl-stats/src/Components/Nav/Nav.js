import React, {Component, useState, useEffect} from 'react'
import styled from "styled-components";
// import './App.css';
import {Link} from 'react-router-dom'
import './style.css'

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div id="navBox">
                <div className="row">
                    <div className="col-sm-4">
                        <h2 className="text-center">NFL Stats</h2>
                    </div>
                    <div className="col-sm-2">
                        <Link to="/">
                            <b id="linkText" className="hvr-grow">Home</b>
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <Link to="/standings">
                            <b id="linkText" className="hvr-grow">Standings</b>
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <Link to= "/fantasy">
                            <b id="linkText" className="hvr-grow">Fantasy</b>
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <Link to= "/fantasy-comparison">
                            <b id="linkText" className="hvr-grow">Fantasy Comparison</b>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        )
    }
}

export default Nav;