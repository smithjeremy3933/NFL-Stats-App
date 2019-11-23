import React, {Component} from 'react'
import './style.css'

class FantasyPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerSeasonStats:[],
            playerWeeklyStats:[]
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
        //   console.log(this.props)
        })

        let playerWeeklyStatsQueryURL =  `https://api.sportsdata.io/v3/nfl/projections/json/PlayerGameProjectionStatsByPlayerID/2019REG/11/${this.props.match.params.id}?key=e785706d32a54b8f850c248da415cb73`
        fetch(playerWeeklyStatsQueryURL).then((response) => {
          return response.json();
        }).then((PWSData) => {
          console.log(PWSData);
          this.setState({
            playerWeeklyStats: PWSData
          })
        //   console.log(this.props)
        })
    }


    render() {
        // console.log(props)
        // console.log(this.state.playerSeasonStats.Name)
        let rawPlayerSeasonStats = this.state.playerSeasonStats
        let rawPlayerWeeklyStats = this.state.playerWeeklyStats
        return(
            <div id="fantasyPlayerContainer" className="container">
                <div id="fantasyPlayerHeader" className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2">
                            <h1>{rawPlayerSeasonStats.Position}</h1>
                        </div>
                        <div className="col-sm-8 text-center">
                            {
                                rawPlayerSeasonStats ?
                                <h1>{rawPlayerSeasonStats.Name}</h1>
                                :
                                <h1>Loading...</h1>
                            }
                            
                        </div>
                        <div className="col-sm-2">
                            <h1>{rawPlayerSeasonStats.Team}</h1>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div id="fantasyPointsDisplay">
                    <div className="row">
                        <div className="col-sm-6">
                            Team Image
                        </div>
                        <div className="col-sm-6">
                            Fantasy Stats
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div id="fantasyPlayerWeeklyStats">

                </div>
            </div>
        )
    }
}

export default FantasyPlayer;