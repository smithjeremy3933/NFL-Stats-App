import React, {Component, useEffect, useState} from 'react'
import styled from "styled-components";

function Standings() {

        useEffect(() => {
            fetchStandings();
        },[]);
        
        const fetchStandings = async () => {
            const data = await fetch('https://api.sportsdata.io/v3/nfl/scores/json/Standings/%7B2019%7D?key=e785706d32a54b8f850c248da415cb73')
            const currentStandings = await data.json()
            console.log(currentStandings[0].Name);
        }

   

   
        
        return (
            <div className="jumbotron text-center">
                <div className="row">
                    <div className="col">
                        <h3>AFC EAST</h3>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                    </div>
                    <div className="col">
                        <h3>AFC WEST Conference Division</h3>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                    </div>
                    <div className="col">
                        <h3>NFC EAST Conference Division</h3>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                    </div>
                    <div className="col">
                        <h3>NFC WEST Conference Division</h3>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                        <h5>team - Record</h5>
                    </div>
                </div>
            </div>
        )
    
}

export default Standings;