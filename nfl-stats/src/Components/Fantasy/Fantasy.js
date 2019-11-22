import React, {Component} from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom'
import './style.css'

class Fantasy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownershipData: [],
            playerData:[],
            rawPlayerData: []

        }

    
    }

    componentDidMount() {
        // let dailyFantasyPlayerQueryURL =  `https://api.sportsdata.io/v3/nfl/stats/json/PlayerOwnership/2019REG/11?key=e785706d32a54b8f850c248da415cb73`
        // fetch(dailyFantasyPlayerQueryURL).then((response) => {
        //   return response.json();
        // }).then((DFPData) => {
        //   console.log(DFPData);
        //   this.setState({
        //     ownershipData: DFPData
        //   })
        // })

        let topFivePlayersQueryURL =  `https://api.sportsdata.io/v3/nfl/stats/json/DailyFantasyPlayers/2019-NOV-21?key=e785706d32a54b8f850c248da415cb73`
        fetch(topFivePlayersQueryURL).then((response) => {
          return response.json();
        }).then((TFPData) => {
        //   console.log(TFPData);
          this.setState({
            playerData: TFPData
          })
        //   console.log(this.state.playerData)
        })
    }

    getTopFiveRBs = () => {
        let rawPlayerData = this.state.playerData;
        var RBArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "RB" // Changed this so a home would match
        });
        var topFiveRBs = RBArray.slice(0, 5).map(RBArray => {
            return RBArray.Name
            
        });
        this.setState({ rawPlayerData: RBArray.Name })
        console.log(topFiveRBs);
    }
    

    render() {
        let rawPlayerData = this.state.playerData;

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
            <div className="container">
                <div id="topFiveContainer">
                    <div className="row">
                        <div className="col">
                            <h2 className="topFiveHeader">Top 5 Players</h2>
                        </div>
                        <div className="col">
                            <button>QB</button>
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
                        {/* {QBArray.slice(0, 5).map(QBArray => (
                        <h3>{QBArray.Name}</h3>
                        ))} */}
                        <h3>{topFiveQBs}</h3>
                    </div>
                </div>
                <div>
                    {this.state.ownershipData.map(ownershipData => (
                        <Link to={`/fantasy/${ownershipData.PlayerID}`}><h3>{ownershipData.Name}</h3></Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Fantasy;