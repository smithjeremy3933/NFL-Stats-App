import React, {Component} from 'react'
import './style.css'

class FantasyPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerSeasonStats:[],
            playerWeeklyStats:[],
            fantasyPlayerName: "",
            fantasyPlayerSeasonFD_FP: 0,
            fantasyPlayerWeeklyFD_FP: 0
        }

        
    }

    componentDidMount() {
        let playerSeasonStatsQueryURL =  `https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStatsByPlayerID/2019REG/${this.props.match.params.id}?key=e785706d32a54b8f850c248da415cb73`
        fetch(playerSeasonStatsQueryURL).then((response) => {
          return response.json();
        }).then((PSSData) => {
          console.log(PSSData);
          this.setState({
            playerSeasonStats: PSSData,
            fantasyPlayerName: PSSData.Name,
            fantasyPlayerSeasonFD_FP: PSSData.FantasyPointsFanDuel
          })
          console.log(this.state.fantasyPlayerName)
          console.log(this.state.fantasyPlayerSeasonFD_FP)
        })

        let playerWeeklyStatsQueryURL =  `https://api.sportsdata.io/v3/nfl/projections/json/PlayerGameProjectionStatsByPlayerID/2019REG/12/${this.props.match.params.id}?key=e785706d32a54b8f850c248da415cb73`
        fetch(playerWeeklyStatsQueryURL).then((response) => {
          return response.json();
        }).then((PWSData) => {
          console.log(PWSData);
          this.setState({
            playerWeeklyStats: PWSData,
            fantasyPlayerWeeklyFD_FP:PWSData.FantasyPointsFanDuel
          })
          console.log(this.state.fantasyPlayerWeeklyFD_FP)
        //   console.log(this.props)
        })
    }

    handleSavePlayer = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/api/new-player", {
            body: JSON.stringify({ player_name: this.state.fantasyPlayerName,
                                   player_weekly_FD_FP: this.state.fantasyPlayerSeasonFD_FP,
                                   player_season_FD_FP:this.state.fantasyPlayerSeasonFD_FP }),
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
          }).then((response) => {
            // return response.json();
            if (response === "") {
                alert("yay")
            }
          }).then((data) => {
            if (data === "") {
                alert("yay")
            }
            console.log("Completed");
            window.location.reload();
          });
    }


    render() {
        // console.log(props)
        // console.log(this.state.playerSeasonStats.Name)
        let rawPlayerSeasonStats = this.state.playerSeasonStats
        let rawPlayerWeeklyStats = this.state.playerWeeklyStats
        let isPlayerActive;
        if (rawPlayerWeeklyStats.DeclaredInactive === false ) {
            isPlayerActive = "Active";
        }
        else {
            isPlayerActive = "Inactive"
        }
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
                                <h1>{rawPlayerSeasonStats.Name} ({isPlayerActive})</h1>
                                :
                                <h1>Loading...</h1>
                            }
                            
                        </div>
                        <div className="col-sm-2">
                            <h1>{rawPlayerSeasonStats.Team}</h1>
                            <button onClick={this.handleSavePlayer}>SAVE</button>
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
                            <h3>Week 12 Fantasy Stats:</h3>
                            <div className="row">
                                <div className="col">
                                    <div id="draftKingsWeeklyFantasyPoints">
                                        <p>Draft Kings Fantasy Points:</p>
                                        <h3>{rawPlayerWeeklyStats.FantasyPointsDraftKings}</h3>
                                    </div>
                                </div>
                                <div className="col">
                                    <div id="fanDuelWeeklyFantasyPoints">
                                        <p>Fan Duel Fantasy Points:</p>
                                        <h3>{rawPlayerWeeklyStats.FantasyPointsFanDuel}</h3>
                                    </div>
                                </div>
                                <div className="col">
                                    <div id="yahooWeeklyFantasyPoints">
                                        <p>Yahoo Fantasy Points:</p>
                                        <h3>{rawPlayerWeeklyStats.FantasyPointsYahoo}</h3>
                                    </div>
                                </div>
                            </div>
                            <h3>2019 Season Fantasy Stats:</h3>
                            <div className="row">
                                <div className="col">
                                    <div id="draftKingsWeeklyFantasyPoints">
                                        <p>Draft Kings Fantasy Points:</p>
                                        <h3>{rawPlayerSeasonStats.FantasyPointsDraftKings}</h3>
                                    </div>
                                </div>
                                <div className="col">
                                    <div id="fanDuelWeeklyFantasyPoints">
                                        <p>Fan Duel Fantasy Points:</p>
                                        <h3>{rawPlayerSeasonStats.FantasyPointsFanDuel}</h3>
                                    </div>
                                </div>
                                <div className="col">
                                    <div id="yahooWeeklyFantasyPoints">
                                        <p>Yahoo Fantasy Points:</p>
                                        <h3>{rawPlayerSeasonStats.FantasyPointsYahoo}</h3>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col">
                <div id="fantasyPlayerWeeklyStats">
                    <div className="row">
                        <div className="col">
                            <div id="weeklyPassingStatsContainer">
                                <div className="row">
                                    <div className="col">
                                        <strong><p>Weekly Passing Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Passing Yards:</p>
                                        <h3 id="weeklyPassingYardsNumber">{rawPlayerWeeklyStats.PassingYards}</h3>
                                    </div>
                                    <div className="col">
                                        <p>Passing Touchdowns:</p>
                                        <h3 id="weeklyPassingTouchdownNumber">{rawPlayerWeeklyStats.PassingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div id="weeklyRushingStatsContainer">
                                <div className="row">
                                    <div className="col">
                                        <strong><p>Weekly Rushing Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Rushing Yards:</p>
                                        <h3 id="weeklyRushingYardsNumber">{rawPlayerWeeklyStats.RushingYards}</h3>
                                    </div>
                                    <div className="col">
                                        <p>Rushing Touchdowns:</p>
                                        <h3 id="weeklyRushingTouchdownNumber">{rawPlayerWeeklyStats.RushingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div id="weeklyReceivingStatsContainer">
                                <div className="row">
                                    <div className="col">
                                        <strong><p>Weekly Receiving Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Receiving Yards:</p>
                                        <h3 id="weeklyReceivingYardsNumber">{rawPlayerWeeklyStats.ReceivingYards}</h3>
                                    </div>
                                    <div className="col">
                                        <p>Receiving Touchdowns:</p>
                                        <h3 id="weeklyReceivingTouchdownNumber">{rawPlayerWeeklyStats.ReceivingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
                </div>
                <div className="col">
                    <div id="fantasyPlayerSeasonStats">
                    <div className="row">
                        <div className="col">
                            <div id="weeklyPassingStatsContainer">
                                <div className="row">
                                    <div className="col">
                                        <strong><p>Season Passing Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Passing Yards:</p>
                                        <h3>{rawPlayerSeasonStats.PassingYards}</h3>
                                    </div>
                                    <div className="col">
                                        <p>Passing Touchdowns:</p>
                                        <h3>{rawPlayerSeasonStats.PassingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div id="weeklyRushingStatsContainer">
                                <div className="row">
                                    <div className="col">
                                        <strong><p>Season Rushing Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Rushing Yards:</p>
                                        <h3>{rawPlayerSeasonStats.RushingYards}</h3>
                                    </div>
                                    <div className="col">
                                        <p>Rushing Touchdowns:</p>
                                        <h3>{rawPlayerSeasonStats.RushingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div id="weeklyReceivingStatsContainer">
                                <div className="row">
                                    <div className="col">
                                        <strong><p>Season Receiving Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>Receiving Yards:</p>
                                        <h3>{rawPlayerSeasonStats.ReceivingYards}</h3>
                                    </div>
                                    <div className="col">
                                        <p>Receiving Touchdowns:</p>
                                        <h3>{rawPlayerSeasonStats.ReceivingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>

                    </div>
                </div>
                </div>

                <hr></hr>
            </div>
        )
    }
}

export default FantasyPlayer;