import React, {Component} from 'react'
import styled from "styled-components";

class Standings extends Component {
    constructor(props) {
        super(props);
        

    }

    render() {
        this.props.leagueStandings ? 
        console.log(this.props.leagueStandings[0].Name) 
        : 
        console.log("No Standings")

        // let AFC_Conference = this.props.patriotsStats.Conference
        // let EAST_Division = this.props.patriotsStats.Division
        // let patriotsName = this.props.patriotsStats.Name
        
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
}

export default Standings;