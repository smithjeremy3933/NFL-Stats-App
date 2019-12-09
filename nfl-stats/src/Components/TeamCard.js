import React, {Component} from 'react'
import styled from "styled-components";
// import {Link} from 'react-router-dom'
// import axios from 'axios'
// import './style.css'


const TeamHeading = styled.h4`
  color: black;
  height: 20px:
`

function TeamCard(props) {

    return (
        <div id="playerCardBox">
            <div className="row">
                <div className="col-sm-8">
                    <TeamHeading id="currentComparisonCard" className="text-center">{props.listTeam.Team}</TeamHeading>
                </div>
                <div className="col-sm-4">
                    <button id="comparisonStatsButton" onClick={() => props.handleTeamClick(props.team)}>STATS</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default TeamCard;