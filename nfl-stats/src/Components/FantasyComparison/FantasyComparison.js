import React, {Component} from 'react'
import './style.css';
import {Link} from 'react-router-dom'
import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import PlayerCard from "../PlayerCard"
import TeamCard from "../TeamCard"
import APIKey from "../keys";

class FantasyComparison extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlayers: [],
            clickedArray: [],
            currentPositionPlayers: [],
            seasonTeamStats: [],
            clickedTeamArray: []
        }
    }



    componentDidMount() {

      Events.scrollEvent.register('begin', function () {
        console.log("begin", arguments);
      });
  
      Events.scrollEvent.register('end', function () {
        console.log("end", arguments);
      });
  
      scrollSpy.update();
  
    }
    scrollToTop() {
      scroll.scrollToTop();
    }
    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
  }

    componentDidMount() {
    fetch("http://localhost:8000/api/all-players")
    .then((res) => {
      return res.json()
    }).then((Data) => {
      console.log(Data);
      this.setState({ 
        selectedPlayers: Data
      })
    });
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let seasonTeamStatsQueryURL =  `https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseBySeason/2019REG?key=${APIKey}`
        fetch(seasonTeamStatsQueryURL).then((response) => {
          return response.json();
        }).then((STSData) => {
        //   console.log(DFPData);
          this.setState({
            seasonTeamStats: STSData
          })
          console.log(this.state.seasonTeamStats)
        })
    }

    handleClick = id => {
      if (this.state.clickedArray === []) {
        this.setState({ clickedArray: this.state.clickedArray.concat([id]) })
      }
    }

    handleTeamClick = team => {
      if (this.state.clickedTeamArray === []) {
        this.setState({ clickedTeamArray: this.state.clickedTeamArray.concat([team]) })
      }
      console.log(this.state.clickedTeamArray)
    }

    handleDeletePlayer = (id) => {
      console.log("id", id);
      fetch("http://localhost:8000/api/delete-player", {
          body: JSON.stringify({ id: id }),
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        }).then((response) => {
           //return response.json();
        }).then((data) => {
          console.log("Completed");
          window.location.reload();
        });
  }

  getComparisonQBs = async () => {
    let rawPlayerData = this.state.selectedPlayers;
    var QBArray = rawPlayerData.filter(function (el) {
        return el.player_position === "QB" 
    });
    this.setState({ currentPositionPlayers: QBArray })
  }

  getComparisonRBs = async () => {
    let rawPlayerData = this.state.selectedPlayers;
    var RBArray = rawPlayerData.filter(function (el) {
        return el.player_position === "RB" 
    });
    this.setState({ currentPositionPlayers: RBArray })
  }

  getComparisonWRs = async () => {
    let rawPlayerData = this.state.selectedPlayers;
    var WRArray = rawPlayerData.filter(function (el) {
        return el.player_position === "WR" 
    });
    this.setState({ currentPositionPlayers: WRArray })
  }

  getComparisonTEs = async () => {
    let rawPlayerData = this.state.selectedPlayers;
    var TEArray = rawPlayerData.filter(function (el) {
        return el.player_position === "TE" 
    });
    this.setState({ currentPositionPlayers: TEArray })
  }

  


    render() {
        console.log(this.state.clickedTeamArray)
        return (
          <div id="fantasyComparisonRoot" className="container">
              <div id="comparisonSearchBox">
                <div id="comparisonSearchRow" className="row">
                  <div className="col-sm-6">
                      <div id="scrollBoxSavedPlayer">
                        <div className="row">
                          <div className="col-sm-3">
                            <button id ="topFiveButton" onClick={this.getComparisonQBs}>QB</button>
                          </div>
                          <div className="col-sm-3">
                            <button id ="topFiveButton" onClick={this.getComparisonRBs}>RB</button>
                          </div>
                          <div className="col-sm-3">
                            <button id ="topFiveButton" onClick={this.getComparisonWRs}>WR</button>
                          </div>
                          <div className="col-sm-3">
                            <button id ="topFiveButton" onClick={this.getComparisonTEs}>TE</button>
                          </div>
                        </div>
                        <ScrollLink className="text-center" activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ margin: '20px' }}>
                            <button id="backToTopScrollButton" className="hvr-grow">Back to Top!</button>
                        </ScrollLink>

                        <Element name="test7" className="element" id="containerElement" style={{
                        position: 'relative',
                        height: '200px',
                        overflow: 'scroll',
                        // marginBottom: '100px'
                        }}>
                        <div id="innerScrollBox">   
                            <Element name="firstInsideContainer" style={{
                            marginBottom: '1px'
                            }}>
                            <h3 id="searchText" className="text-center">Current Search List:</h3>
                            </Element>
                            {this.state.currentPositionPlayers > 0 ? <h4>Choose a Filter</h4> : this.state.currentPositionPlayers.map(listPlayers => {
                                return (<PlayerCard id={listPlayers} key ={listPlayers.player_ID} handleClick={this.handleClick} handleDeletePlayer={this.handleDeletePlayer} listPlayer={listPlayers}/>)
                            })}</div>
                        </Element>
                      </div>
                    </div>
                    <div className="col-sm-6">
                        <div id="scrollBoxSavedPlayer">
                          <ScrollLink className="text-center" activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ margin: '20px' }}>
                              <button id="backToTopScrollButton" className="hvr-grow">Back to Top!</button>
                          </ScrollLink>

                          <Element name="test7" className="element" id="containerElement" style={{
                          position: 'relative',
                          height: '200px',
                          overflow: 'scroll',
                          // marginBottom: '100px'
                          }}>
                          <div id="innerScrollBox">   
                              <Element name="firstInsideContainer" style={{
                              marginBottom: '1px'
                              }}>
                              <h3 id="searchText" className="text-center">Current Search List:</h3>
                              </Element>
                              {this.state.seasonTeamStats.map(listTeams => {
                                  return (<TeamCard team={listTeams} key ={listTeams.Team} handleTeamClick={this.handleTeamClick} listTeam={listTeams}/>)
                              })}</div>
                          </Element>
                        </div>
                    </div>
                </div>
            </div>
            <div id="comparisonDisplayBox">
              <div id="comparisonInnerDisplayBox">
              <div id="comparisonSearchRow" className="row">
                <div className="col-sm-12">
                    <div id="comparisonPlayerDisplayBox">
                      <div className="row">
                        <div className="col-sm-4">
                            {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                              return (<h4 id="comparisonPlayerStatsHeader" className="text-center">{clickedPlayer.player_team}</h4>)
                            })}
                        </div>
                        <div className="col-sm-4">
                            {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                              return (<h4 id="comparisonPlayerStatsHeader" className="text-center">{clickedPlayer.player_name} ({clickedPlayer.player_position}) </h4>)
                            })}
                        </div>
                        <div className="col-sm-4">
                            {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                              return (<h4 id="comparisonPlayerStatsHeader" className="text-center">PFP: {clickedPlayer.player_weekly_FD_FP}</h4>)
                            })}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <div id="passingStatsBox">
                            <div className="row">
                              <div className="col-sm-12">
                                <h5 id="passingStatsHeader" className="text-center">Player Passing Stats</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                  return(<p id="passingStatsText" className="text-center">Weekly Passing Yards: <strong><p>{clickedPlayer.player_weekly_passingYards}</p></strong></p>)
                                })}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                  return(<p id="passingStatsText" className="text-center">Season Passing Yards: <strong><p>{clickedPlayer.player_season_passingYards}</p></strong></p>)
                                })}
                              </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                              <div className="col-sm-12">
                                {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                  return(<p id="passingStatsText" className="text-center">Weekly Passing Touchdowns: <strong><p>{clickedPlayer.player_weekly_passingTouchdowns}</p></strong></p>)
                                })}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                  return(<p id="passingStatsText" className="text-center">Season Passing Touchdowns: <strong><p>{clickedPlayer.player_season_passingTouchdowns}</p></strong></p>)
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div id="rushingStatsBox">
                            <div className="row">
                                <div className="col-sm-12">
                                  <h5 id="rushingStatsHeader" className="text-center">Player Rushing Stats</h5>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12">
                                  {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                    return(<p id="rushingStatsText" className="text-center">Weekly Rushing Yards: <strong><p>{clickedPlayer.player_weekly_rushingYards}</p></strong></p>)
                                  })}
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12">
                                  {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                    return(<p id="rushingStatsText" className="text-center">Season Rushing Yards: <strong><p>{clickedPlayer.player_season_rushingYards}</p></strong></p>)
                                  })}
                                </div>
                              </div>
                              <hr></hr>
                              <div className="row">
                                <div className="col-sm-12">
                                  {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                    return(<p id="rushingStatsText" className="text-center">Weekly Rushing Touchdowns: <strong><p>{clickedPlayer.player_weekly_rushingTouchdowns}</p></strong></p>)
                                  })}
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12">
                                  {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                    return(<p id="rushingStatsText" className="text-center">Season Rushing Touchdowns: <strong><p>{clickedPlayer.player_season_rushingTouchdowns}</p></strong></p>)
                                  })}
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div id="receivingStatsBox">
                          <div className="row">
                              <div className="col-sm-12">
                                <h5 id="receivingStatsHeader" className="text-center">Player receiving Stats</h5>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                  return(<p id="receivingStatsText" className="text-center">Weekly receiving Yards: <strong><p>{clickedPlayer.player_weekly_receivingYards}</p></strong></p>)
                                })}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                  return(<p id="receivingStatsText" className="text-center">Season receiving Yards: <strong><p>{clickedPlayer.player_season_receivingYards}</p></strong></p>)
                                })}
                              </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                              <div className="col-sm-12">
                                {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                  return(<p id="receivingStatsText" className="text-center">Weekly receiving Touchdowns: <strong><p>{clickedPlayer.player_weekly_receivingTouchdowns}</p></strong></p>)
                                })}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                {this.state.clickedArray > 0 ? <h4 id="comparisonPlayerStatsHeader" className="text-center">No Player Selected</h4> : this.state.clickedArray.map(clickedPlayer => {
                                  return(<p id="receivingStatsText" className="text-center">Season receiving Touchdowns: <strong><p>{clickedPlayer.player_season_receivingTouchdowns}</p></strong></p>)
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
                <div id="comparisonSearchRow" className="row">
                <div className="col-sm-12">
                    <div id="comparisonTeamDisplayBox">
                      <div className="row">
                        <div className="col">
                        <div class="table-responsive">
                            <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Games</th>
                                  <th scope="col">Offensive Yards Allowed</th>
                                  <th scope="col">Fanduel Total Fantasy Points Allowed</th>
                                  <th scope="col">Fanduel K Fantasy Points Allowed</th>
                                </tr>
                              </thead>
                              <tbody>
                              {this.state.clickedTeamArray.map(team => {
                                   
                                   return (<tr key={team.TeamID}> 
                                      <td>{team.Team}</td>
                                      <td>{team.Games}</td>
                                      <td>{team.OffensiveYardsAllowed}</td>
                                      <td>{team.FanDuelFantasyPointsAllowed}</td>
                                      <td>{team.FanDuelKickerFantasyPointsAllowed}</td>
                                    </tr>);
                                    })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                        <div class="table-responsive">
                            <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Fanduel QB Fantasy Points Allowed</th>
                                  <th scope="col">Fanduel RB Fantasy Points Allowed</th>
                                  <th scope="col">Fanduel WR Fantasy Points Allowed</th>
                                  <th scope="col">Fanduel TE Fantasy Points Allowed</th>
                                </tr>
                              </thead>
                              <tbody>
                              {this.state.clickedTeamArray.map(team => {
                                   
                                   return (<tr key={team.TeamID}> 
                                      <td>{team.Team}</td>
                                      <td>{team.FanDuelQuarterbackFantasyPointsAllowed}</td>
                                      <td>{team.FanDuelRunningbackFantasyPointsAllowed}</td>
                                      <td>{team.FanDuelWideReceiverFantasyPointsAllowed}</td>
                                      <td>{team.FanDuelTightEndFantasyPointsAllowed}</td>
                                    </tr>);
                                    })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              </div>
            </div>
          </div>
         
        )
    }
}

export default FantasyComparison;