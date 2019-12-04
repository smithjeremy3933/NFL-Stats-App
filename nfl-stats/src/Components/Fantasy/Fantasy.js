import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchForm from '../SearchForm'
import axios from 'axios'
import './style.css'
import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// var ScrollLink = Scroll.Link;
// var DirectLink = Scroll.DirectLink;
// var Element = Scroll.Element;
// var Events = Scroll.Events;
// var scroll = Scroll.animateScroll;
// var scrollSpy = Scroll.scrollSpy;
 

class Fantasy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ownershipData: [],
            playerData:[],
            rawPlayerData: [],
            currentPlayers: [],
            currentQuarterbacks: [],
            currentRunningbacks: [],
            currentWidereceivers: [],
            currentTightends: [],
            currentViewingPlayer: [],
            clickedArray: [],
            search: ""
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
        // old api call = e785706d32a54b8f850c248da415cb73
        let dailyFantasyPlayerQueryURL =  `https://api.sportsdata.io/v3/nfl/stats/json/PlayerOwnership/2019REG/13?key=395dd5f8805a4e85baeb9951f01813e6`
        fetch(dailyFantasyPlayerQueryURL).then((response) => {
          return response.json();
        }).then((DFPData) => {
        //   console.log(DFPData);
          this.setState({
            ownershipData: DFPData
          })
        })

        let topFivePlayersQueryURL =  `https://api.sportsdata.io/v3/nfl/stats/json/DailyFantasyPlayers/2019-NOV-30?key=395dd5f8805a4e85baeb9951f01813e6`
        fetch(topFivePlayersQueryURL).then((response) => {
          return response.json();
        }).then((TFPData) => {
        //   console.log(TFPData);
          this.setState({
            playerData: TFPData
          })
        })
    }


    // Get AFC East Teams
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
                        currentRunningbacks: NETeamRBArray, 
                        currentWidereceivers: NETeamWRArray, 
                        currentTightends: NETeamTEArray
                    })
    }

    getBUFTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var BUFTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "BUF" &&
                   el.Position === "QB"
        });
        var BUFTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "BUF" &&
                   el.Position === "RB"
        });
        var BUFTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "BUF" &&
                   el.Position === "WR"
        });
        var BUFTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "BUF" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: BUFTeamQBArray, 
                        currentRunningbacks: BUFTeamRBArray, 
                        currentWidereceivers: BUFTeamWRArray, 
                        currentTightends: BUFTeamTEArray
                    })
    }

    getNYJTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var NYJTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NYJ" &&
                   el.Position === "QB"
        });
        var NYJTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NYJ" &&
                   el.Position === "RB"
        });
        var NYJTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "NYJ" &&
                   el.Position === "WR"
        });
        var NYJTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "NYJ" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: NYJTeamQBArray, 
                        currentRunningbacks: NYJTeamRBArray, 
                        currentWidereceivers: NYJTeamWRArray, 
                        currentTightends: NYJTeamTEArray
                    })
    }

    getMIATeam = async () => {
        let rawPlayerData = this.state.playerData;
        var MIATeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "MIA" &&
                   el.Position === "QB"
        });
        var MIATeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "MIA" &&
                   el.Position === "RB"
        });
        var MIATeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "MIA" &&
                   el.Position === "WR"
        });
        var MIATeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "MIA" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: MIATeamQBArray, 
                        currentRunningbacks: MIATeamRBArray, 
                        currentWidereceivers: MIATeamWRArray, 
                        currentTightends: MIATeamTEArray
                    })
    }

    // Get AFC North Teams
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
                        currentRunningbacks: BALTeamRBArray, 
                        currentWidereceivers: BALTeamWRArray, 
                        currentTightends: BALTeamTEArray
                    })
    }

    getPITTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var PITTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "PIT" &&
                   el.Position === "QB"
        });
        var PITTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "PIT" &&
                   el.Position === "RB"
        });
        var PITTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "PIT" &&
                   el.Position === "WR"
        });
        var PITTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "PIT" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: PITTeamQBArray, 
                        currentRunningbacks: PITTeamRBArray, 
                        currentWidereceivers: PITTeamWRArray, 
                        currentTightends: PITTeamTEArray
                    })
    }

    getCLETeam = async () => {
        let rawPlayerData = this.state.playerData;
        var CLETeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "CLE" &&
                   el.Position === "QB"
        });
        var CLETeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "CLE" &&
                   el.Position === "RB"
        });
        var CLETeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "CLE" &&
                   el.Position === "WR"
        });
        var CLETeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "CLE" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: CLETeamQBArray, 
                        currentRunningbacks: CLETeamRBArray, 
                        currentWidereceivers: CLETeamWRArray, 
                        currentTightends: CLETeamTEArray
                    })
    }

    getCINTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var CINTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "CIN" &&
                   el.Position === "QB"
        });
        var CINTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "CIN" &&
                   el.Position === "RB"
        });
        var CINTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "CIN" &&
                   el.Position === "WR"
        });
        var CINTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "CIN" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: CINTeamQBArray, 
                        currentRunningbacks: CINTeamRBArray, 
                        currentWidereceivers: CINTeamWRArray, 
                        currentTightends: CINTeamTEArray
                    })
    }

    // AFC West

    getKCTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var KCTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "KC" &&
                   el.Position === "QB"
        });
        var KCTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "KC" &&
                   el.Position === "RB"
        });
        var KCTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "KC" &&
                   el.Position === "WR"
        });
        var KCTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "KC" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: KCTeamQBArray, 
                        currentRunningbacks: KCTeamRBArray, 
                        currentWidereceivers: KCTeamWRArray, 
                        currentTightends: KCTeamTEArray
                    })
    }

    getOAKTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var OAKTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "OAK" &&
                   el.Position === "QB"
        });
        var OAKTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "OAK" &&
                   el.Position === "RB"
        });
        var OAKTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "OAK" &&
                   el.Position === "WR"
        });
        var OAKTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "OAK" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: OAKTeamQBArray, 
                        currentRunningbacks: OAKTeamRBArray, 
                        currentWidereceivers: OAKTeamWRArray, 
                        currentTightends: OAKTeamTEArray
                    })
    }

    getLACTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var LACTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "LAC" &&
                   el.Position === "QB"
        });
        var LACTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "LAC" &&
                   el.Position === "RB"
        });
        var LACTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "LAC" &&
                   el.Position === "WR"
        });
        var LACTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "LAC" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: LACTeamQBArray, 
                        currentRunningbacks: LACTeamRBArray, 
                        currentWidereceivers: LACTeamWRArray, 
                        currentTightends: LACTeamTEArray
                    })
    }

    getDENTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var DENTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "DEN" &&
                   el.Position === "QB"
        });
        var DENTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "DEN" &&
                   el.Position === "RB"
        });
        var DENTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "DEN" &&
                   el.Position === "WR"
        });
        var DENTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "DEN" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: DENTeamQBArray, 
                        currentRunningbacks: DENTeamRBArray, 
                        currentWidereceivers: DENTeamWRArray, 
                        currentTightends: DENTeamTEArray
                    })
    }

    // Get AFC South Teams
    getHOUTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var HOUTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "HOU" &&
                   el.Position === "QB"
        });
        var HOUTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "HOU" &&
                   el.Position === "RB"
        });
        var HOUTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "HOU" &&
                   el.Position === "WR"
        });
        var HOUTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "HOU" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: HOUTeamQBArray, 
                        currentRunningbacks: HOUTeamRBArray, 
                        currentWidereceivers: HOUTeamWRArray, 
                        currentTightends: HOUTeamTEArray
                    })
    }

    getINDTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var INDTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "IND" &&
                   el.Position === "QB"
        });
        var INDTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "IND" &&
                   el.Position === "RB"
        });
        var INDTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "IND" &&
                   el.Position === "WR"
        });
        var INDTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "IND" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: INDTeamQBArray, 
                        currentRunningbacks: INDTeamRBArray, 
                        currentWidereceivers: INDTeamWRArray, 
                        currentTightends: INDTeamTEArray
                    })
    }

    getTENTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var TENTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "TEN" &&
                   el.Position === "QB"
        });
        var TENTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "TEN" &&
                   el.Position === "RB"
        });
        var TENTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "TEN" &&
                   el.Position === "WR"
        });
        var TENTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "TEN" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: TENTeamQBArray, 
                        currentRunningbacks: TENTeamRBArray, 
                        currentWidereceivers: TENTeamWRArray, 
                        currentTightends: TENTeamTEArray
                    })
    }

    getJAXTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var JAXTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "JAX" &&
                   el.Position === "QB"
        });
        var JAXTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "JAX" &&
                   el.Position === "RB"
        });
        var JAXTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "JAX" &&
                   el.Position === "WR"
        });
        var JAXTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "JAX" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: JAXTeamQBArray, 
                        currentRunningbacks: JAXTeamRBArray, 
                        currentWidereceivers: JAXTeamWRArray, 
                        currentTightends: JAXTeamTEArray
                    })
    }

    // NFC East Teams
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
                        currentRunningbacks: WASTeamRBArray, 
                        currentWidereceivers: WASTeamWRArray, 
                        currentTightends: WASTeamTEArray
                    })
    }

    getDALTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var DALTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "DAL" &&
                   el.Position === "QB"
        });
        var DALTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "DAL" &&
                   el.Position === "RB"
        });
        var DALTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "DAL" &&
                   el.Position === "WR"
        });
        var DALTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "DAL" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: DALTeamQBArray, 
                        currentRunningbacks: DALTeamRBArray, 
                        currentWidereceivers: DALTeamWRArray, 
                        currentTightends: DALTeamTEArray
                    })
    }

    getNYGTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var NYGTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NYG" &&
                   el.Position === "QB"
        });
        var NYGTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NYG" &&
                   el.Position === "RB"
        });
        var NYGTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "NYG" &&
                   el.Position === "WR"
        });
        var NYGTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "NYG" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: NYGTeamQBArray, 
                        currentRunningbacks: NYGTeamRBArray, 
                        currentWidereceivers: NYGTeamWRArray, 
                        currentTightends: NYGTeamTEArray
                    })
    }

    getPHITeam = async () => {
        let rawPlayerData = this.state.playerData;
        var PHITeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "PHI" &&
                   el.Position === "QB"
        });
        var PHITeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "PHI" &&
                   el.Position === "RB"
        });
        var PHITeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "PHI" &&
                   el.Position === "WR"
        });
        var PHITeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "PHI" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: PHITeamQBArray, 
                        currentRunningbacks: PHITeamRBArray, 
                        currentWidereceivers: PHITeamWRArray, 
                        currentTightends: PHITeamTEArray
                    })
    }

    // GET NFC North Teams
    getGBTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var GBTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "GB" &&
                   el.Position === "QB"
        });
        var GBTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "GB" &&
                   el.Position === "RB"
        });
        var GBTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "GB" &&
                   el.Position === "WR"
        });
        var GBTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "GB" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: GBTeamQBArray, 
                        currentRunningbacks: GBTeamRBArray, 
                        currentWidereceivers: GBTeamWRArray, 
                        currentTightends: GBTeamTEArray
                    })
    }

    getMINTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var MINTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "MIN" &&
                   el.Position === "QB"
        });
        var MINTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "MIN" &&
                   el.Position === "RB"
        });
        var MINTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "MIN" &&
                   el.Position === "WR"
        });
        var MINTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "MIN" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: MINTeamQBArray, 
                        currentRunningbacks: MINTeamRBArray, 
                        currentWidereceivers: MINTeamWRArray, 
                        currentTightends: MINTeamTEArray
                    })
    }

    getCHITeam = async () => {
        let rawPlayerData = this.state.playerData;
        var CHITeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "CHI" &&
                   el.Position === "QB"
        });
        var CHITeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "CHI" &&
                   el.Position === "RB"
        });
        var CHITeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "CHI" &&
                   el.Position === "WR"
        });
        var CHITeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "CHI" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: CHITeamQBArray, 
                        currentRunningbacks: CHITeamRBArray, 
                        currentWidereceivers: CHITeamWRArray, 
                        currentTightends: CHITeamTEArray
                    })
    }

    getDETTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var DETTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "DET" &&
                   el.Position === "QB"
        });
        var DETTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "DET" &&
                   el.Position === "RB"
        });
        var DETTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "DET" &&
                   el.Position === "WR"
        });
        var DETTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "DET" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: DETTeamQBArray, 
                        currentRunningbacks: DETTeamRBArray, 
                        currentWidereceivers: DETTeamWRArray, 
                        currentTightends: DETTeamTEArray
                    })
    }

    // GET NFC West Teams
    getSFTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var SFTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "SF" &&
                   el.Position === "QB"
        });
        var SFTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "SF" &&
                   el.Position === "RB"
        });
        var SFTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "SF" &&
                   el.Position === "WR"
        });
        var SFTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "SF" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: SFTeamQBArray, 
                        currentRunningbacks: SFTeamRBArray, 
                        currentWidereceivers: SFTeamWRArray, 
                        currentTightends: SFTeamTEArray
                    })
    }

    getLARTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var LARTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "LAR" &&
                   el.Position === "QB"
        });
        var LARTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "LAR" &&
                   el.Position === "RB"
        });
        var LARTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "LAR" &&
                   el.Position === "WR"
        });
        var LARTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "LAR" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: LARTeamQBArray, 
                        currentRunningbacks: LARTeamRBArray, 
                        currentWidereceivers: LARTeamWRArray, 
                        currentTightends: LARTeamTEArray
                    })
    }

    getSEATeam = async () => {
        let rawPlayerData = this.state.playerData;
        var SEATeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "SEA" &&
                   el.Position === "QB"
        });
        var SEATeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "SEA" &&
                   el.Position === "RB"
        });
        var SEATeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "SEA" &&
                   el.Position === "WR"
        });
        var SEATeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "SEA" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: SEATeamQBArray, 
                        currentRunningbacks: SEATeamRBArray, 
                        currentWidereceivers: SEATeamWRArray, 
                        currentTightends: SEATeamTEArray
                    })
    }

    getARITeam = async () => {
        let rawPlayerData = this.state.playerData;
        var ARITeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "ARI" &&
                   el.Position === "QB"
        });
        var ARITeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "ARI" &&
                   el.Position === "RB"
        });
        var ARITeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "ARI" &&
                   el.Position === "WR"
        });
        var ARITeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "ARI" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: ARITeamQBArray, 
                        currentRunningbacks: ARITeamRBArray, 
                        currentWidereceivers: ARITeamWRArray, 
                        currentTightends: ARITeamTEArray
                    })
    }

    // GET NFC South Teams
    getNOTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var NOTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NO" &&
                   el.Position === "QB"
        });
        var NOTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "NO" &&
                   el.Position === "RB"
        });
        var NOTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "NO" &&
                   el.Position === "WR"
        });
        var NOTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "NO" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: NOTeamQBArray, 
                        currentRunningbacks: NOTeamRBArray, 
                        currentWidereceivers: NOTeamWRArray, 
                        currentTightends: NOTeamTEArray
                    })
    }

    getCARTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var CARTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "CAR" &&
                   el.Position === "QB"
        });
        var CARTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "CAR" &&
                   el.Position === "RB"
        });
        var CARTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "CAR" &&
                   el.Position === "WR"
        });
        var CARTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "CAR" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: CARTeamQBArray, 
                        currentRunningbacks: CARTeamRBArray, 
                        currentWidereceivers: CARTeamWRArray, 
                        currentTightends: CARTeamTEArray
                    })
    }

    getTBTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var TBTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "TB" &&
                   el.Position === "QB"
        });
        var TBTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "TB" &&
                   el.Position === "RB"
        });
        var TBTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "TB" &&
                   el.Position === "WR"
        });
        var TBTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "TB" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: TBTeamQBArray, 
                        currentRunningbacks: TBTeamRBArray, 
                        currentWidereceivers: TBTeamWRArray, 
                        currentTightends: TBTeamTEArray
                    })
    }

    getATLTeam = async () => {
        let rawPlayerData = this.state.playerData;
        var ATLTeamQBArray = rawPlayerData.filter(function (el) {
            return el.Team === "ATL" &&
                   el.Position === "QB"
        });
        var ATLTeamRBArray = rawPlayerData.filter(function (el) {
            return el.Team === "ATL" &&
                   el.Position === "RB"
        });
        var ATLTeamWRArray = rawPlayerData.filter(function (el) {
            return el.Team === "ATL" &&
                   el.Position === "WR"
        });
        var ATLTeamTEArray = rawPlayerData.filter(function (el) {
            return el.Team === "ATL" &&
                   el.Position === "TE"
        });
        this.setState({ currentQuarterbacks: ATLTeamQBArray, 
                        currentRunningbacks: ATLTeamRBArray, 
                        currentWidereceivers: ATLTeamWRArray, 
                        currentTightends: ATLTeamTEArray
                    })
    }

    getTopFiveRBs = async () => {
        let rawPlayerData = this.state.playerData;
        var RBArray = rawPlayerData.filter(function (el) {
            return el.Position === "RB" 
        });
        var topFiveRBs = RBArray.slice(0, 5)
        this.setState({ currentPlayers: topFiveRBs })
    }

    getTopFiveQBs = async () => {
        let rawPlayerData = this.state.playerData;
        var QBArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "QB" 
        });
        var topFiveQBs = QBArray.slice(0, 5)
        this.setState({ currentPlayers: topFiveQBs })
    }

    getTopFiveWRs = async () => {
        let rawPlayerData = this.state.playerData;
        var WRArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 2 &&
                   el.Position === "WR" 
        });
        var topFiveWRs = WRArray.slice(0, 5)
        this.setState({ currentPlayers: topFiveWRs })
    }

    getTopFiveTEs = async () => {
        let rawPlayerData = this.state.playerData;
        var TEArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 2 &&
                   el.Position === "TE" 
        });
        var topFiveTEs = TEArray.slice(0, 5)
        this.setState({ currentPlayers: topFiveTEs })
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)})
    }
    

    render() {
        let rawPlayerData = this.state.playerData;
        let rawOwnershipData = this.state.ownershipData;
        console.log(rawPlayerData)


        

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

        // console.log(NETeamRBArray)

        var AllOwnershipArray = rawOwnershipData.filter(function (el) {
            return el.DeltaOwnershipPercentage > 18
        });

        var QBArray = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 10 &&
                   el.Position === "QB" // Changed this so a home would match
        });
        var topFiveQBs = QBArray.slice(0, 5);
        let rawPlayerDatafiltered  = rawPlayerData.filter(function (el) {
            return el.ProjectedFantasyPoints > 0 &&
                   el.LastGameFantasyPoints > 0 // Changed this so a home would match
        });
        console.log(rawPlayerDatafiltered)
        let filteredData = rawPlayerDatafiltered.filter( 
            (rawPlayerData) => {
                return rawPlayerData.Name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        )

        return(
            <div id="fantasyContainer" className="container">
                <div id="playerComparisonContainer">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 id="comparisonContainerHeaderText" className="text-center">Player Comparison</h2>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div id="scrollBox">
                                        <ScrollLink activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                        Go to first element inside container
                                        </ScrollLink>

                                        <Element name="test7" className="element" id="containerElement" style={{
                                        position: 'relative',
                                        height: '200px',
                                        overflow: 'scroll',
                                        // marginBottom: '100px'
                                        }}>
                                        <div>   
                                            <Element name="firstInsideContainer" style={{
                                            marginBottom: '1px'
                                            }}>
                                            <h3>Current Search List:</h3>
                                            </Element>
                                            {filteredData.map(slicedData => {
                                                                return (<h4>{slicedData.Name}</h4>)
                                                            })}</div>
                                        </Element>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div id="inputContainer">
                                    <form>
                                        <input
                                        onChange={this.updateSearch.bind(this)}
                                        value={this.state.search}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                    <div id="comparisonInnerContainer">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div id="fantasyTeamButtonDisplay">
                                        <h5 id="conferenceHeader" className="text-center">AFC East</h5>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button onClick={this.getNETeam} type="button" className="btn btn-secondary">NE</button>
                                            <button onClick={this.getBUFTeam} type="button" className="btn btn-secondary">BUF</button>
                                            <button onClick={this.getNYJTeam} type="button" className="btn btn-secondary">NYJ</button>
                                            <button onClick={this.getMIATeam} type="button" className="btn btn-secondary">MIA</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div id="fantasyTeamButtonDisplay">
                                        <h5 id="conferenceHeader" className="text-center">AFC North</h5>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button onClick={this.getBALTeam} type="button" className="btn btn-secondary">BAL</button>
                                            <button onClick={this.getPITTeam} type="button" className="btn btn-secondary">PIT</button>
                                            <button onClick={this.getCLETeam} type="button" className="btn btn-secondary">CLE</button>
                                            <button onClick={this.getCINTeam} type="button" className="btn btn-secondary">CIN</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div id="fantasyTeamButtonDisplay">
                                        <h5 id="conferenceHeader" className="text-center">NFC East</h5>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button onClick={this.getWASTeam} type="button" className="btn btn-secondary">WAS</button>
                                            <button onClick={this.getDALTeam} type="button" className="btn btn-secondary">DAL</button>
                                            <button onClick={this.getNYGTeam} type="button" className="btn btn-secondary">NYG</button>
                                            <button onClick={this.getPHITeam} type="button" className="btn btn-secondary">PHI</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div id="fantasyTeamButtonDisplay">
                                        <h5 id="conferenceHeader" className="text-center">NFC North</h5>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button onClick={this.getGBTeam} type="button" className="btn btn-secondary">GB</button>
                                            <button onClick={this.getMINTeam} type="button" className="btn btn-secondary">MIN</button>
                                            <button onClick={this.getCHITeam} type="button" className="btn btn-secondary">CHI</button>
                                            <button onClick={this.getDETTeam} type="button" className="btn btn-secondary">DET</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                    <div id="bottomButtonRow" className="row">
                    <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div id="fantasyTeamButtonDisplay">
                                        <h5 id="conferenceHeader" className="text-center">AFC West</h5>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button onClick={this.getKCTeam} type="button" class="btn btn-secondary">KC</button>
                                            <button onClick={this.getOAKTeam} type="button" class="btn btn-secondary">OAK</button>
                                            <button onClick={this.getLACTeam} type="button" class="btn btn-secondary">LAC</button>
                                            <button onClick={this.getDENTeam} type="button" class="btn btn-secondary">DEN</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div id="fantasyTeamButtonDisplay">
                                        <h5 id="conferenceHeader" className="text-center">AFC South</h5>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button onClick={this.getHOUTeam} type="button" class="btn btn-secondary">HOU</button>
                                            <button onClick={this.getINDTeam} type="button" class="btn btn-secondary">IND</button>
                                            <button onClick={this.getTENTeam} type="button" class="btn btn-secondary">TEN</button>
                                            <button onClick={this.getJAXTeam} type="button" class="btn btn-secondary">JAX</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div id="fantasyTeamButtonDisplay">
                                        <h5 id="conferenceHeader" className="text-center">NFC West</h5>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button onClick={this.getSFTeam} type="button" class="btn btn-secondary">SF</button>
                                            <button onClick={this.getSEATeam} type="button" class="btn btn-secondary">SEA</button>
                                            <button onClick={this.getLARTeam} type="button" class="btn btn-secondary">LAR</button>
                                            <button onClick={this.getARITeam} type="button" class="btn btn-secondary">ARI</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div id="fantasyTeamButtonDisplay">
                                        <h5 id="conferenceHeader" className="text-center">NFC South</h5>
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button onClick={this.getNOTeam} type="button" class="btn btn-secondary">NO</button>
                                            <button onClick={this.getCARTeam} type="button" class="btn btn-secondary">CAR</button>
                                            <button onClick={this.getTBTeam} type="button" class="btn btn-secondary">TB</button>
                                            <button onClick={this.getATLTeam} type="button" class="btn btn-secondary">ATL</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <div id="fantasyPlayersDisplay">
                                <div className="row">
                                <div className="col-sm-3">
                                    <h5 id="playerDisplayHeaderText">Quarterbacks:</h5>
                                        <ol id="fantasyRBContainer">
                                            {this.state.currentQuarterbacks.length > 0 ? this.state.currentQuarterbacks.map( currentQuarterback => {
                                                return ( <Link to={`/fantasy/${currentQuarterback.PlayerID}`}><strong><li id="currentPlayerCard" className="card hvr-grow" key = {currentQuarterback.PlayerID}>{currentQuarterback.Name}</li></strong></Link>)
                                            })
                                            :
                                            NETeamQBArray.map(NewEnglandQBs => {
                                                return ( <Link to={`/fantasy/${NewEnglandQBs.PlayerID}`}><strong><li id="currentPlayerCard" className="card hvr-grow" key = {NewEnglandQBs.PlayerID}>{NewEnglandQBs.Name}</li></strong></Link>)
                                            })}
                                        </ol>
                                    </div>
                                    <div className="col-sm-3">
                                        <h5 id="playerDisplayHeaderText">Runningbacks:</h5>
                                        <ol id="fantasyRBContainer">
                                            {this.state.currentRunningbacks.length > 0 ? this.state.currentRunningbacks.map( currentRunningback => {
                                                return ( <Link to={`/fantasy/${currentRunningback.PlayerID}`}><strong><li id="currentPlayerCard" className="card hvr-grow" key = {currentRunningback.PlayerID}>{currentRunningback.Name}</li></strong></Link>)
                                            })
                                            :
                                            NETeamRBArray.map(NewEnglandRBs => {
                                                return ( <Link to={`/fantasy/${NewEnglandRBs.PlayerID}`}><strong><li id="currentPlayerCard" className="card hvr-grow"  key = {NewEnglandRBs.PlayerID}>{NewEnglandRBs.Name}</li></strong></Link>)
                                            })}
                                        </ol>
                                    </div>
                                    <div className="col-sm-3">
                                        <h5 id="playerDisplayHeaderText">Widereceivers:</h5>
                                        <ol id="fantasyRBContainer">
                                            {this.state.currentWidereceivers.length > 0 ? this.state.currentWidereceivers.map( currentWidereceiver => {
                                                return ( <Link to={`/fantasy/${currentWidereceiver.PlayerID}`}><strong><li id="currentPlayerCard" className="card hvr-grow"  key = {currentWidereceiver.PlayerID}>{currentWidereceiver.Name}</li></strong></Link>)
                                            })
                                            :
                                            NETeamWRArray.map(NewEnglandWRs => {
                                                return (<Link to={`/fantasy/${NewEnglandWRs.PlayerID}`}><strong><li id="currentPlayerCard" className="card hvr-grow"  key = {NewEnglandWRs.PlayerID}>{NewEnglandWRs.Name}</li></strong></Link>)
                                            })}
                                        </ol>
                                    </div>
                                    <div className="col-sm-3">
                                        <h5 id="playerDisplayHeaderText">Tightends:</h5>
                                        <ol id="fantasyRBContainer">
                                            {this.state.currentTightends.length > 0 ? this.state.currentTightends.map( currentTightend => {
                                                return ( <Link to={`/fantasy/${currentTightend.PlayerID}`}><strong><li id="currentPlayerCard" className="card hvr-grow"  key = {currentTightend.PlayerID}>{currentTightend.Name}</li></strong></Link>)
                                            })
                                            :
                                            NETeamTEArray.map(NewEnglandTEs => {
                                                return ( <Link to={`/fantasy/${NewEnglandTEs.PlayerID}`}><strong><li id="currentPlayerCard" className="card hvr-grow"  key = {NewEnglandTEs.PlayerID}>{NewEnglandTEs.Name}</li></strong></Link>)
                                            })}
                                        </ol>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="topFiveContainer">
                    <div id="topFiveInnerContainer">
                        <div id="TopFiveHeadRow" className="row">
                            <div className="col-sm-4">
                                <h4 id="topFiveHeader">Top 5 Players</h4>
                                {/* <p>(Most Projected Fantasy Points)</p> */}
                            </div>
                            <div  className="col-sm-2">
                                <button id="topFiveButton" className="btn btn-outline-primary hvr-grow" onClick={this.getTopFiveQBs}>QB</button>
                            </div>
                            <div className="col-sm-2">
                                <button id="topFiveButton" className="btn btn-outline-primary hvr-grow" onClick={this.getTopFiveRBs}>RB</button>
                            </div>
                            <div className="col-sm-2">
                                <button id="topFiveButton" className="btn btn-outline-primary hvr-grow" onClick={this.getTopFiveWRs}>WR</button>
                            </div>
                            <div className="col-sm-2">
                                <button id="topFiveButton" className="btn btn-outline-primary hvr-grow" onClick={this.getTopFiveTEs}>TE</button>
                            </div>
                        </div>
                    </div>
                    <div id="topFivePlayerDisplayContainer" className="center-block">
                                <div id="topFivePlayerDisplay">
            
                                {this.state.currentPlayers.length > 0 ? this.state.currentPlayers.map(player => {
                                return (<Link to={`/fantasy/${player.PlayerID}`}><div id="playerCard" className="card hvr-grow">
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 id="topFivePlayerNameText" className="text-center">{player.Position} {player.Name} ({player.Team})</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <p id="statText" className="text-center">PFP: {player.ProjectedFantasyPoints}</p>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <p id="statText" className="text-center">LGFP: {player.LastGameFantasyPoints}</p>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <p id="statText" className="text-center">OPRK: {player.OpponentRank}</p>
                                                    </div> 
                                                </div>
                                        </div>
                                        </Link>)
                                }) : topFiveQBs.map(player => {
                                    return (<Link to={`/fantasy/${player.PlayerID}`}><div id="playerCard" className="card hvr-grow">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h5 id="topFivePlayerNameText" className="text-center">{player.Position} {player.Name} ({player.Team})</h5>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <p id="statText"className="text-center">PFP: {player.ProjectedFantasyPoints}</p>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <p id="statText" className="text-center">LGFP: {player.LastGameFantasyPoints}</p>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <p id="statText" className="text-center">OPRK: {player.OpponentRank}</p>
                                                        </div> 
                                                    </div>
                                            </div>
                                            </Link>)
                                    })}
                                </div>
                         
                    </div>
                </div>
                <div id="ownershipContainer">
                    {/* <div id="ownershipInnerContainer"> */}
                    <div id="ownershipRow" className="row">
                        <div className="col-sm-12">
                            <div id="topTrendingHeaderBox">
                                <h2 id="topTrendingHeaderText" className="text-center">Top Trending Players</h2>
                            </div>
                        </div>
                    </div>
                    <div id="ownershipInnerContainer">
                    {AllOwnershipArray.map(AllOwnershipArray => {
                    return <Link to={`/fantasy/${AllOwnershipArray.PlayerID}`}>
                                <div id="playerCard" className="card hvr-grow">
                                    <div className="row">
                                        <div className="col">
                                            <h5 id="playerOwnershipNameText" className="text-center">{AllOwnershipArray.Position} {AllOwnershipArray.Name} ({AllOwnershipArray.Team})</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <p id="statText" className="text-center">Change in Ownership: <strong>{AllOwnershipArray.DeltaOwnershipPercentage}%</strong></p>
                                        </div>
                                                        
                                    </div>
                                </div>
                            </Link>
                            })}
                    </div>
                    <button onClick={this.scrollToTop} type="button" class="btn btn-primary btn-lg btn-block">Back To Top!</button>
                </div>
            </div>
        )
    }
}

export default Fantasy;