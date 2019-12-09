import React, {Component} from 'react'
import styled from "styled-components";
// import {Link} from 'react-router-dom'
// import axios from 'axios'
// import './style.css'


const PlayerHeading = styled.h4`
  color: black;
  height: 20px:
`

function PlayerCard(props) {
    return (
        <div id="playerCardBox">
            <div className="row">
                <div className="col-sm-8">
                    <PlayerHeading id="currentComparisonCard" className="text-center">{props.listPlayer.player_name}</PlayerHeading>
                </div>
                <div className="col-sm-2">
                    <button id="comparisonStatsButton" onClick={() => props.handleClick(props.id)}>STATS</button>
                </div>
                <div className="col-sm-2">
                    <button id="comparisonStatsButton" onClick={() => {props.handleDeletePlayer(props.id.id)}}>Delete</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default PlayerCard;