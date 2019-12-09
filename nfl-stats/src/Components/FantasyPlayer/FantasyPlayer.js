import React, {Component} from 'react'
import './style.css'
import NFLLogo from "./NFL-Logo.jpg"
import APIKey from "../keys";


class FantasyPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerSeasonStats:[],
            playerWeeklyStats:[],
            fantasyPlayerName: "",
            player_ID: 0,
            fantasyPlayerTeam: "",
            fantasyPlayerPosition: "",
            fantasyPlayerSeasonDK_FP : 0,
            fantasyPlayerSeasonFD_FP: 0,
            fantasyPlayerSeasonYOO_FP: 0,
            fantasyPlayerSeasonPassingYards: 0,
            fantasyPlayerSeasonPassingTouchdowns: 0,
            fantasyPlayerSeasonRushingYards: 0,
            fantasyPlayerSeasonRushingTouchdowns: 0,
            fantasyPlayerSeasonReceivingYards: 0,
            fantasyPlayerSeasonReceivingTouchdowns: 0,
            fantasyPlayerWeeklsDK_FP : 0,
            fantasyPlayerWeeklyFD_FP: 0,
            fantasyPlayerWeeklyYOO_FP: 0,
            fantasyPlayerWeeklyPassingYards: 0,
            fantasyPlayerWeeklyPassingTouchdowns: 0,
            fantasyPlayerWeeklyRushingYards: 0,
            fantasyPlayerWeeklyRushingTouchdowns: 0,
            fantasyPlayerWeeklyReceivingYards: 0,
            fantasyPlayerWeeklyReceivingTouchdowns: 0
            
        }

        
    }

    componentDidMount() {
        let playerSeasonStatsQueryURL =  `https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStatsByPlayerID/2019REG/${this.props.match.params.id}?key=${APIKey}`
        fetch(playerSeasonStatsQueryURL).then((response) => {
          return response.json();
        }).then((PSSData) => {
          console.log(PSSData);
          this.setState({
            playerSeasonStats: PSSData,
            fantasyPlayerName: PSSData.Name,
            player_ID:PSSData.PlayerID,
            fantasyPlayerTeam: PSSData.Team,
            fantasyPlayerPosition: PSSData.Position,
            fantasyPlayerSeasonDK_FP : PSSData.FantasyPointsDraftKings,
            fantasyPlayerSeasonFD_FP: PSSData.FantasyPointsFanDuel,
            fantasyPlayerSeasonYOO_FP: PSSData.FantasyPointsYahoo,
            fantasyPlayerSeasonPassingYards: PSSData.PassingYards,
            fantasyPlayerSeasonPassingTouchdowns: PSSData.PassingTouchdowns,
            fantasyPlayerSeasonRushingYards: PSSData.RushingYards,
            fantasyPlayerSeasonRushingTouchdowns: PSSData.RushingTouchdowns,
            fantasyPlayerSeasonReceivingYards: PSSData.ReceivingYards,
            fantasyPlayerSeasonReceivingTouchdowns: PSSData.ReceivingTouchdowns
          })
          console.log(this.state.fantasyPlayerName)
          console.log(this.state.fantasyPlayerSeasonFD_FP)
        })

        let playerWeeklyStatsQueryURL =  `https://api.sportsdata.io/v3/nfl/projections/json/PlayerGameProjectionStatsByPlayerID/2019REG/14/${this.props.match.params.id}?key=${APIKey}`
        fetch(playerWeeklyStatsQueryURL).then((response) => {
          return response.json();
        }).then((PWSData) => {
          console.log(PWSData);
          this.setState({
            playerWeeklyStats: PWSData,
            fantasyPlayerWeeklyDK_FP : PWSData.FantasyPointsDraftKings,
            fantasyPlayerWeeklyFD_FP: PWSData.FantasyPointsFanDuel,
            fantasyPlayerWeeklyYOO_FP: PWSData.FantasyPointsYahoo,
            fantasyPlayerWeeklyPassingYards: PWSData.PassingYards,
            fantasyPlayerWeeklyPassingTouchdowns: PWSData.PassingTouchdowns,
            fantasyPlayerWeeklyRushingYards: PWSData.RushingYards,
            fantasyPlayerWeeklyRushingTouchdowns: PWSData.RushingTouchdowns,
            fantasyPlayerWeeklyReceivingYards: PWSData.ReceivingYards,
            fantasyPlayerWeeklyReceivingTouchdowns: PWSData.ReceivingTouchdowns
          })
          console.log(this.state.fantasyPlayerWeeklyFD_FP)
        //   console.log(this.props)
        })
    }

    handleSavePlayer = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/api/new-player", {
            body: JSON.stringify({ player_name: this.state.fantasyPlayerName,
                                   player_ID: this.state.player_ID,
                                   player_team: this.state.fantasyPlayerTeam,
                                   player_position: this.state.fantasyPlayerPosition,
                                   player_weekly_DK_FP: this.state.fantasyPlayerWeeklyDK_FP,
                                   player_weekly_FD_FP: this.state.fantasyPlayerWeeklyFD_FP,
                                   player_weekly_YOO_FP: this.state.fantasyPlayerWeeklyYOO_FP,
                                   player_weekly_passingYards: this.state.fantasyPlayerWeeklyPassingYards,
                                   player_weekly_passingTouchdowns: this.state.fantasyPlayerWeeklyPassingTouchdowns,
                                   player_weekly_rushingYards: this.state.fantasyPlayerWeeklyRushingYards,
                                   player_weekly_rushingTouchdowns: this.state.fantasyPlayerWeeklyRushingTouchdowns,
                                   player_weekly_receivingYards: this.state.fantasyPlayerWeeklyReceivingYards,
                                   player_weekly_receivingTouchdowns: this.state.fantasyPlayerWeeklyReceivingTouchdowns,

                                   player_season_DK_FP: this.state.fantasyPlayerSeasonDK_FP,
                                   player_season_FD_FP: this.state.fantasyPlayerSeasonFD_FP,
                                   player_season_YOO_FP: this.state.fantasyPlayerSeasonYOO_FP,
                                   player_season_passingYards: this.state.fantasyPlayerSeasonPassingYards,
                                   player_season_passingTouchdowns: this.state.fantasyPlayerSeasonPassingTouchdowns,
                                   player_season_rushingYards: this.state.fantasyPlayerSeasonRushingYards,
                                   player_season_rushingTouchdowns: this.state.fantasyPlayerSeasonRushingTouchdowns,
                                   player_season_receivingYards: this.state.fantasyPlayerSeasonReceivingYards,
                                   player_season_receivingTouchdowns: this.state.fantasyPlayerSeasonReceivingTouchdowns }),
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
                            <h1 id="indFantasyPlayer">{rawPlayerSeasonStats.Position}</h1>
                        </div>
                        <div className="col-sm-8 text-center">
                            {
                                rawPlayerSeasonStats ?
                                <h1 id="indFantasyPlayer">{rawPlayerSeasonStats.Name} ({isPlayerActive})</h1>
                                :
                                <h1>Loading...</h1>
                            }
                            
                        </div>
                        <div className="col-sm-2">
                            <h1 id="indFantasyPlayer">{rawPlayerSeasonStats.Team}</h1>
                            <button id="saveButton" className="hvr-grow" onClick={this.handleSavePlayer}>SAVE PLAYER</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div id="fantasyPointsDisplay">
                    <div className="row">
                        <div className="col-sm-6">
                            <img id="playerImage" src={NFLLogo}/>
                        </div>
                        <div className="col-sm-6">
                            <h3>Week 12 Fantasy Stats:</h3>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div id="draftKingsWeeklyFantasyPoints">
                                        <p id="fantasyWeeklyStatsText">Draft Kings Fantasy Points:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerWeeklyStats.FantasyPointsDraftKings}</h3>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div id="fanDuelWeeklyFantasyPoints">
                                        <p id="fantasyWeeklyStatsText">Fan Duel Fantasy Points:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerWeeklyStats.FantasyPointsFanDuel}</h3>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div id="yahooWeeklyFantasyPoints">
                                        <p id="fantasyWeeklyStatsText">Yahoo Fantasy Points:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerWeeklyStats.FantasyPointsYahoo}</h3>
                                    </div>
                                </div>
                            </div>
                            <h3>2019 Season Fantasy Stats:</h3>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div id="draftKingsWeeklyFantasyPoints">
                                        <p id="fantasyWeeklyStatsText">Draft Kings Fantasy Points:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerSeasonStats.FantasyPointsDraftKings}</h3>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div id="fanDuelWeeklyFantasyPoints">
                                        <p id="fantasyWeeklyStatsText">Fan Duel Fantasy Points:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerSeasonStats.FantasyPointsFanDuel}</h3>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div id="yahooWeeklyFantasyPoints">
                                        <p id="fantasyWeeklyStatsText">Yahoo Fantasy Points:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerSeasonStats.FantasyPointsYahoo}</h3>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-sm-6">
                <div id="fantasyPlayerWeeklyStats">
                    <div className="row">
                        <div className="col-sm-4">
                            <div id="weeklyPassingStatsContainer">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <strong><p id="fantasyWeeklyStatsText">Weekly Passing Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasyWeeklyStatsText">Passing Yards:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerWeeklyStats.PassingYards}</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasyWeeklyStatsText">Passing Touchdowns:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerWeeklyStats.PassingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div id="weeklyRushingStatsContainer">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <strong><p id="fantasyWeeklyStatsText">Weekly Rushing Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasyWeeklyStatsText">Rushing Yards:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerWeeklyStats.RushingYards}</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasyWeeklyStatsText">Rushing Touchdowns:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerWeeklyStats.RushingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div id="weeklyReceivingStatsContainer">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <strong><p id="fantasyWeeklyStatsText">Weekly Receiving Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasyWeeklyStatsText">Receiving Yards:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerWeeklyStats.ReceivingYards}</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasyWeeklyStatsText">Receiving Touchdowns:</p>
                                        <h3 id="fantasyWeeklyStats">{rawPlayerWeeklyStats.ReceivingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
                </div>
                <div className="col-sm-6">
                    <div id="fantasyPlayerSeasonStats">
                    <div className="row">
                        <div className="col-sm-4">
                            <div id="weeklyPassingStatsContainer">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <strong><p id="fantasySeasonStatsText">Season Passing Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasySeasonStatsText">Passing Yards:</p>
                                        <h3 id="fantasySeasonStats">{rawPlayerSeasonStats.PassingYards}</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasySeasonStatsText">Passing Touchdowns:</p>
                                        <h3 id="fantasySeasonStats">{rawPlayerSeasonStats.PassingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div id="weeklyRushingStatsContainer">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <strong><p id="fantasySeasonStatsText">Season Rushing Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasySeasonStatsText">Rushing Yards:</p>
                                        <h3 id="fantasySeasonStats">{rawPlayerSeasonStats.RushingYards}</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasySeasonStatsText">Rushing Touchdowns:</p>
                                        <h3 id="fantasySeasonStats">{rawPlayerSeasonStats.RushingTouchdowns}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div id="weeklyReceivingStatsContainer">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <strong><p id="fantasySeasonStatsText">Season Receiving Stats:</p></strong>
                                   </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasySeasonStatsText">Receiving Yards:</p>
                                        <h3 id="fantasySeasonStats">{rawPlayerSeasonStats.ReceivingYards}</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p id="fantasySeasonStatsText">Receiving Touchdowns:</p>
                                        <h3 id="fantasySeasonStats">{rawPlayerSeasonStats.ReceivingTouchdowns}</h3>
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