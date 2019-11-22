import React, {Component} from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom'

class Fantasy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownershipData: []
        }
    }

    componentDidMount() {
        let dailyFantasyPlayerQueryURL =  `https://api.sportsdata.io/v3/nfl/stats/json/PlayerOwnership/2019REG/11?key=e785706d32a54b8f850c248da415cb73`
        fetch(dailyFantasyPlayerQueryURL).then((response) => {
          return response.json();
        }).then((DFPData) => {
          console.log(DFPData);
          this.setState({
            ownershipData: DFPData
          })
        })
    }

    render() {
        return(
            <div>
                {this.state.ownershipData.map(ownershipData => (
                    <Link to={`/fantasy/${ownershipData.PlayerID}`}><h3>{ownershipData.Name}</h3></Link>
                ))}
            </div>
        )
    }
}

export default Fantasy;