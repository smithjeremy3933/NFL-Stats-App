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
            currentPlayers: []
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

        // let topFivePlayersQueryURL =  `https://api.sportsdata.io/v3/nfl/stats/json/DailyFantasyPlayers/2019-NOV-21?key=e785706d32a54b8f850c248da415cb73`
        // fetch(topFivePlayersQueryURL).then((response) => {
        //   return response.json();
        // }).then((TFPData) => {
        // //   console.log(TFPData);
        //   this.setState({
        //     playerData: TFPData
        //   })
        // //   console.log(this.state.playerData)
        // })
    }

    getTopFiveRBs = () => {
        let rawPlayerData = this.state.playerData;
        var RBArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "RB" 
        });
        var topFiveRBs = RBArray.slice(0, 5).map(RBArray => {
            return RBArray.Name
            
        });
        this.setState({ currentPlayers: RBArray.Name })
        console.log(topFiveRBs);
        // console.log(rawPlayerData)
    }

    getTopFiveQBs = () => {
        let rawPlayerData = this.state.playerData;
        var QBArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "QB" 
        });
        var topFiveQBs = QBArray.slice(0, 5).map(QBArray => {
            return QBArray.Name
            
        });
        this.setState({ currentPlayers: topFiveQBs })
        console.log(topFiveQBs);
        console.log(this.state.currentPlayers)
    }
    

    render() {
        let rawPlayerData = this.state.playerData;
        let rawOwnershipData = this.state.ownershipData;
        console.log(rawOwnershipData)
        console.log(this.state.playerData)

        var AllOwnershipArray = rawOwnershipData.filter(function (el) {
            return el.DeltaOwnershipPercentage > 15
        });
        console.log(AllOwnershipArray)
        // rawPlayerData ? console.log(rawPlayerData) : console.log("No Player Data")

        var QBArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "QB" // Changed this so a home would match
        });
        var RBArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "RB" // Changed this so a home would match
        });
        // console.log(QBArray)
        // console.log(RBArray)
        var topFiveQBs = QBArray.slice(0, 5).map(QBArray => {
            return QBArray.Name
        })
        var topFiveRBs = RBArray.slice(0, 5).map(RBArray => {
            return RBArray.Name
            
        })

        
        // console.log(topFiveQBs)
        // console.log(topFiveRBs)
        return(
            <div id="fantasyContainer" className="container">
                <div id="topFiveContainer">
                    <div className="row">
                        <div className="col">
                            <h2 className="topFiveHeader">Top 5 Players</h2>
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
                    <div id="topFivePlayerDisplay">
                        
                        {topFiveQBs.map(topFiveQBs => (
                        <h3>{topFiveQBs}</h3>
                        ))} 
                        
                        {topFiveRBs.map(topFiveRBs => (
                        <h3>{topFiveRBs}</h3>
                        ))} 
                    {/* {rawPlayerData} ? <h3>{rawPlayerData}</h3> : <h3>oops!</h3> */}
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