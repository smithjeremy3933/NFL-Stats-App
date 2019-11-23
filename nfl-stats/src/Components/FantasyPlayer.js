import React, {Component} from 'react'
import styled from "styled-components";

class FantasyPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerSeasonStats:[]
        }

        
    }

    componentDidMount() {
        let playerSeasonStatsQueryURL =  `https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStatsByPlayerID/2019REG/${this.props.match.params.id}?key=e785706d32a54b8f850c248da415cb73`
        fetch(playerSeasonStatsQueryURL).then((response) => {
          return response.json();
        }).then((PSSData) => {
          console.log(PSSData);
          this.setState({
            playerSeasonStats: PSSData
          })
          console.log(this.props)
        })
    }


    render() {
        // console.log(props)
        return(
            <div>
                Fantasy Player
            </div>
        )
    }
}

export default FantasyPlayer;