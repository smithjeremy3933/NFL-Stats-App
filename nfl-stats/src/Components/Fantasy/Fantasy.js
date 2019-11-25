import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

class Fantasy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownershipData: [],
            playerData:[],
            rawPlayerData: [],
            currentPlayers: [],
            currentQuarterbacks: [],
            currentRunnningbacks: [],
            currentWidereceivers: [],
            currentTightends: [],
            currentViewingPlayer: []
        }
    }

    componentDidMount() {
        
        let dailyFantasyPlayerQueryURL =  `https://api.sportsdata.io/v3/nfl/stats/json/PlayerOwnership/2019REG/12?key=e785706d32a54b8f850c248da415cb73`
        fetch(dailyFantasyPlayerQueryURL).then((response) => {
          return response.json();
        }).then((DFPData) => {
          console.log(DFPData);
          this.setState({
            ownershipData: DFPData
          })
        })

        let topFivePlayersQueryURL =  `https://api.sportsdata.io/v3/nfl/stats/json/DailyFantasyPlayers/2019-NOV-23?key=e785706d32a54b8f850c248da415cb73`
        fetch(topFivePlayersQueryURL).then((response) => {
          return response.json();
        }).then((TFPData) => {
          console.log(TFPData);
          this.setState({
            playerData: TFPData
          })
        })
    }

    getFantasyPlayerStats  = async (event) => {
        // const data = await fetch('https://api.sportsdata.io/v3/nfl/scores/json/Standings/%7B2019%7D?key=e785706d32a54b8f850c248da415cb73')
        // console.log(data);

        // var viewingPlayer = this.state.currentQuarterbacks.filter(function (el) {
        //     return el.Name === event.target.value
        // });
        console.log(event.target.txt)
        // console.log(this)
        // console.log(this.state.currentQuarterbacks)
    }

    // getFantasyPlayerStats = async () => {
        
    //     // let rawPlayerData = this.state.playerData;
        // var viewingPlayer = rawPlayerData.filter(function (el) {
        //     return el.Name === this.state.currentQuarterbacks.Name
        // });
        // console.log(viewingPlayer)
    // }

    getNETeam = async () => {
        let rawPlayerData = this.state.playerData;
        var NETeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NE" &&
                   el.Position === "QB"
        });
        var NETeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NE" &&
                   el.Position === "RB"
        });
        var NETeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "NE" &&
                   el.Position === "WR"
        });
        var NETeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "NE" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: NETeamQBArray, 
                        currentRunnningbacks: NETeamRBArray, 
                        currentWidereceivers: NETeamWRArray, 
                        currentTightends: NETeamTEArray
                    })
                    console.log(this.state.currentQuarterbacks)
                    console.log(this.state.currentRunnningbacks)

    }

    getBALTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var BALTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "BAL" &&
                   el.Position === "QB"
        });
        var BALTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "BAL" &&
                   el.Position === "RB"
        });
        var BALTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "BAL" &&
                   el.Position === "WR"
        });
        var BALTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "BAL" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: BALTeamQBArray, 
                        currentRunnningbacks: BALTeamRBArray, 
                        currentWidereceivers: BALTeamWRArray, 
                        currentTightends: BALTeamTEArray
                    })
                    console.log(this.state.currentQuarterbacks)
                    console.log(this.state.currentRunnningbacks)

    }

    getWASTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var WASTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "WAS" &&
                   el.Position === "QB"
        });
        var WASTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "WAS" &&
                   el.Position === "RB"
        });
        var WASTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "WAS" &&
                   el.Position === "WR"
        });
        var WASTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "WAS" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: WASTeamQBArray, 
                        currentRunnningbacks: WASTeamRBArray, 
                        currentWidereceivers: WASTeamWRArray, 
                        currentTightends: WASTeamTEArray
                    })
                    console.log(this.state.currentQuarterbacks)
                    console.log(this.state.currentRunnningbacks)

    }

    getTopFiveRBs = async () => {
        let rawPlayerData = this.state.playerData;
        var RBArray = rawPlayerData.filter(function (el) {
            return el.Position === "RB" 
        });
        var topFiveRBs = RBArray.slice(0, 5)
        this.setState({ currentPlayers: topFiveRBs })
        console.log(this.state.currentPlayers);
        console.log(topFiveRBs);
    }

    getTopFiveQBs = async () => {
        let rawPlayerData = this.state.playerData;
        var QBArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "QB" 
        });
        var topFiveQBs = QBArray.slice(0, 5)
        this.setState({ currentPlayers: topFiveQBs })
        console.log(topFiveQBs);
        console.log(this.state.currentPlayers)
    }
    

    render() {
        let rawPlayerData = this.state.playerData;
        let rawOwnershipData = this.state.ownershipData;

        var NETeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NE" &&
                   el.Position === "QB"
        });

        var NETeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NE" &&
                   el.Position === "RB"
        });

        var NETeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "NE" &&
                   el.Position === "WR"
        });

        var NETeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "NE" &&
                   el.Position === "TE"
        });

        console.log(NETeamRBArray)

        var AllOwnershipArray = rawOwnershipData.filter(function (el) {
            return el.DeltaOwnershipPercentage > 18
        });

        var QBArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "QB" // Changed this so a home would match
        });
        var topFiveQBs = QBArray.slice(0, 5);

        return(
            <div id="fantasyContainer" className="container">
                <div id="playerComparisonContainer">
                    <div className="row">
                        <div className="col">
                            <h2>Player Comparison</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <div id="fantasyTeamButtonDisplay">
                                <button onClick={this.getNETeam}>NE</button>
                                <button onClick={this.getBALTeam}>BAL</button>
                                <button onClick={this.getWASTeam}>WAS</button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <div id="fantasyPlayersDisplay">
                                <div className="row">
                                <div className="col">
                                    <h5>Quarterbacks:</h5>
                                        <ol id="fantasyRBContainer">
                                            {this.state.currentQuarterbacks.length > 0 ? this.state.currentQuarterbacks.map( currentQuarterbacks => {
                                                return ( <strong><li onClick={this.getFantasyPlayerStats}>{currentQuarterbacks.Name}</li></strong>)
                                            })
                                            :
                                            NETeamQBArray.map(NewEnglandQBs => {
                                                return (<strong><li onClick={this.getFantasyPlayerStats}>{NewEnglandQBs.Name}</li></strong>)
                                            })}
                                        </ol>
                                    </div>
                                    <div className="col">
                                        <h5>Runningbacks:</h5>
                                        <ol id="fantasyRBContainer">
                                            {NETeamRBArray.map(NewEnglandRBs => {
                                                return (<strong><li>{NewEnglandRBs.Name}</li></strong>)
                                            })}
                                        </ol>
                                    </div>
                                    <div className="col">
                                        <h5>Widereceivers:</h5>
                                        <ol id="fantasyRBContainer">
                                            {NETeamWRArray.map(NewEnglandWRs => {
                                                return (<strong><li>{NewEnglandWRs.Name}</li></strong>)
                                            })}
                                        </ol>
                                    </div>
                                    <div className="col">
                                        <h5>Tightends:</h5>
                                        <ol id="fantasyRBContainer">
                                            {NETeamTEArray.map(NewEnglandTEs => {
                                                return (<strong><li>{NewEnglandTEs.Name}</li></strong>)
                                            })}
                                        </ol>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            Player Display
                        </div>
                    </div>
                </div>
                <div id="topFiveContainer">
                    <div className="row">
                        <div className="col">
                            <h4 className="topFiveHeader">Top 5 Players</h4>
                            <p>(Most Projected Fantasy Points)</p>
                        </div>
                        <div className="col">
                            <button onClick={this.getTopFiveQBs}>QB</button>
                        </div>
                        <div className="col">
                            <button onClick={this.getTopFiveRBs}>RB</button>
                        </div>
                        <div className="col">
                            <button>WR</button>
                        </div>
                        <div className="col">
                            <button>TE</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            {/* <h3>Name</h3> */}
                            <div id="topFivePlayerDisplay">
        
                            {this.state.currentPlayers.length > 0 ? this.state.currentPlayers.map(player => {
                            return (<Link to={`/fantasy/${player.PlayerID}`}><div className="card">
                                            <div className="row">
                                                <div className="col">
                                                    <h3>{player.Position} {player.Name} ({player.Team})</h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p>PFP: {player.ProjectedFantasyPoints}</p>
                                                </div>
                                                <div className="col-sm-3">
                                                    <p>LGFP: {player.LastGameFantasyPoints}</p>
                                                </div>
                                                <div className="col-sm-3">
                                                    <p>OR: {player.OpponentRank}</p>
                                                </div> 
                                                <div className="col-sm-3">
                                                    
                                                </div>   
                                            </div>
                                    </div>
                                    </Link>)
                            }) : topFiveQBs.map(player => {
                                return (<Link to={`/fantasy/${player.PlayerID}`}><div className="card">
                                                <div className="row">
                                                    <div className="col">
                                                        <h3>{player.Position} {player.Name} ({player.Team})</h3>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p>PFP: {player.ProjectedFantasyPoints}</p>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <p>LGFP: {player.LastGameFantasyPoints}</p>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <p>OR: {player.OpponentRank}</p>
                                                    </div> 
                                                    <div className="col-sm-3">
                                                        
                                                    </div>   
                                                </div>
                                        </div>
                                        </Link>)
                                })}
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div id="ownershipContainer">
                    <h2>Top Trending Players</h2>
                    {AllOwnershipArray.map(AllOwnershipArray => (
                    <Link to={`/fantasy/${AllOwnershipArray.PlayerID}`}>
                        <div className="card">
                            <div className="row">
                                <div className="col">
                                    <h3>{AllOwnershipArray.Position}</h3>
                                </div>
                                <div className="col">
                                    <h3>{AllOwnershipArray.Name}</h3>
                                </div>
                                <div className="col">
                                    <h3>{AllOwnershipArray.DeltaOwnershipPercentage}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                        
                    ))}
                </div>
            </div>
        )
    }
}

export default Fantasy;