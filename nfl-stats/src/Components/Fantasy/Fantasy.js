import React, {Component} from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom'
import './style.css'

class Fantasy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownershipData: [],
            playerData:[]
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
    

    render() {
        let rawPlayerData = this.state.playerData;

        rawPlayerData ? console.log(rawPlayerData) : console.log("No Player Data")

        var newArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "RB" // Changed this so a home would match
        });
        console.log(newArray)
        var topFiveRBs = newArray.slice(0, 5).map(newArray => {
            return <div item = {newArray.name}/>
        })
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
                            <button>RB</button>
                        </div>
                        <div className="col">
                            <button>WR</button>
                        </div>
                        <div className="col">
                            <button>TE</button>
                        </div>
                    </div>
                    <div id="topFivePlayerDisplay">
                        {newArray.slice(0, 5).map(newArray => (
                        <h3>{newArray.Name}</h3>
                        ))}
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