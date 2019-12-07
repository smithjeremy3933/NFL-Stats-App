import React, {Component, useEffect, useState} from 'react'
import styled from "styled-components";
import './style.css'
import buffaloImage from '../../images/Buffalo_Bills.png'
import miamiImage from '../../images/miamiDolphins.png'
import newEnglandImage from '../../images/newEnglandPatriots.png'
import newYorkImage from '../../images/newYorkJets.png'
import dallasImage from  '../../images/dallasCowboys.png'
import newYorkGiantsImage from  '../../images/newYorkGiants.png'
import philadelphiaImage from  '../../images/philadelphiaEagles.png'
import washingtonRedImage from '../../images/washingtonRedskin.png'
import baltimoreRavensImage from '../../images/baltimoreRavens.png'
import cincinnattiBengalsImage from '../../images/cincinnatibengals.png'
import cleavelandBrownsImage from  '../../images/clevelandBrowns.png'
import pittsburghSteelersImage from  '../../images/pittsburghSteelers.png'
import chicagoBearsImage from  '../../images/chicagoBears.png'
import greenBayPackersImage from  '../../images/greenBayPackers.png'
import detroitLionsImage from  '../../images/detroitLions.png'
import minnesotaVikingsImage from '../../images/minnesotaVikins.png'
import houstonTexasImage from '../../images/houstonTexas.png'
import indianapolisColtsImage from '../../images/indianapolisColts.png'
import carolinePanthersImage from '../../images/carolinaPanthers.png'
import titansImage from '../../images/titans.png'
import jacksonvilleJaguarsImage from '../../images/jacksonvilleJaguars.png'
import newOrleansImage from '../../images/newOrleansSaints.png'
import tampaBayImage from '../../images/tampaBayBuccaneers.png'
import atlantaFalconsImage from  '../../images/atlantaFalcons.png'
import denverBroncosImage from  '../../images/denverBroncos.png'
import kansasChiefsImage from  '../../images/kansasCityChiefs.png'
import losAngelesChargersImage from  '../../images/losAngelesChargers.png'
import oaklandRaidersImage from  '../../images/oaklandRaiders.png'
import arizonaCardinalsImage from  '../../images/arizonaCardinals.png'
import losAngelesRamsImage from  '../../images/losAngelesRams.png'
import seattleSeahawksImage from  '../../images/SeattleSeaHawks.png'
import sfGiantsImage from  '../../images/sfGiants.png'













class CurrentNews extends Component {
    constructor(props) {
        super(props);
        // const fetchStandings = async () => {
        //      const data = await fetch('https://api.sportsdata.io/v3/nfl/scores/json/Players?key=3cbb2ec575804bf7af3b56801c45a613')
        //      console.log(data);
        // }
        this.state = {
            "sfGiants" : [],
            "philadelphiaEagles" : [],
            "seattleSeahawks" : [],
            "losAngelesRams" : [],
            "dallasCowboys" : [],
            "chicagoBears" : [],
            "atlantaFalcons" : [],
            "carolinePanthers" : [],
            "baltimoreRavens" : [],
            "buffaloBills" : [],
            "cincinnattiBengals" : [],
            "cleavelandBrowns" : [],
            "washingtonRed" : [],
            "greenBayPackers" : [],
            "detroitLions" : [],
            "minnesotaVikings" : [],
            "newOrleansSaints" : [],
            "miamiDolphins" : [],
            "newYorkJets" : [],
            "tampaBay" : [],
            "indianapolisColts" : [],
            "houstonTexas" : [],
            "denverBroncos" : [],
            "losAngelesChargers" : [],
            "jacksonvilleJaguars" : [],
            "titans" : [],
            "oaklandRaiders" : [],
            "newEnglandPatriots" : [],
            "kansasChiefs" : [],
            "arizonaCardinals" : [],
            "pittsburghSteelers" : [],
            "selectedTeam": []
            

            
            

            

            

            

            

            

           


               
            
        }
    }



    componentDidMount() {
        let playerSeasonStatsQueryURL =  `https://api.sportsdata.io/v3/nfl/scores/json/Players?key=3cbb2ec575804bf7af3b56801c45a613`
        fetch(playerSeasonStatsQueryURL).then((response) => {
          return response.json();
        }).then((PSSData) => {
           console.log("Data", PSSData);
           let sfGiants = PSSData.filter((data) => { return data.Team === "SF" })
           let philadelphiaEagles = PSSData.filter((data) => { return data.Team === "PHI" })
           let seattleSeahawks = PSSData.filter((data) => { return data.Team == "SEA" })
           let losAngelesRams = PSSData.filter((data) => { return data.Team == "LAR" })
           let chicagoBears = PSSData.filter((data) => { return data.Team == "CHI" })
           let atlantaFalcons = PSSData.filter((data) => { return data.Team == "ATL" })
           let carolinePanthers = PSSData.filter((data) => { return data.Team == "CAR" })
           let baltimoreRavens = PSSData.filter((data) => { return data.Team == "BAL" })
           let buffaloBills = PSSData.filter((data) => { return data.Team == "BUF" })
           let cincinnattiBengals = PSSData.filter((data) => { return data.Team == "CIN" })
           let cleavelandBrowns = PSSData.filter((data) => { return data.Team == "CLE" })
           let washingtonRed = PSSData.filter((data) => { return data.Team == "WAS" })
           let greenBayPackers = PSSData.filter((data) => { return data.Team == "GB" })
           let detroitLions = PSSData.filter((data) => { return data.Team == "DET" })
           let minnesotaVikings = PSSData.filter((data) => { return data.Team == "MIN" })
           let newOrleansSaints = PSSData.filter((data) => { return data.Team == "NO" })
           let miamiDolphins = PSSData.filter((data) => { return data.Team == "MIA" })
           let newYorkJets = PSSData.filter((data) => { return data.Team == "NYJ" })
           let tampaBay = PSSData.filter((data) => { return data.Team == "TB" })
           let indianapolisColts = PSSData.filter((data) => { return data.Team == "IND" })
           let houstonTexas = PSSData.filter((data) => { return data.Team == "HOU" })
           let denverBroncos = PSSData.filter((data) => { return data.Team == "DEN" })
           let losAngelesChargers = PSSData.filter((data) => { return data.Team == "LAC" })
           let jacksonvilleJaguars = PSSData.filter((data) => { return data.Team == "JAX" })
           let titans = PSSData.filter((data) => { return data.Team == "TEN" })
           let oaklandRaiders = PSSData.filter((data) => { return data.Team == "OAK" })
           let newEnglandPatriots = PSSData.filter((data) => { return data.Team == "NE" })
           let kansasChiefs = PSSData.filter((data) => { return data.Team == "NE" })
           let arizonaCardinals = PSSData.filter((data) => { return data.Team == "ARI" })
           let pittsburghSteelers = PSSData.filter((data) => { return data.Team == "PIT" })
           let dallasCowboys = PSSData.filter((data) => { return data.Team == "DAL" })

           

           
           

           

           



           //console.log(sfGiants)
           

           this.setState({ 
            sfGiants,
            philadelphiaEagles,
            seattleSeahawks,
            losAngelesRams,
            dallasCowboys,
            chicagoBears,
            atlantaFalcons,
            carolinePanthers,
            baltimoreRavens,
            buffaloBills,
            cincinnattiBengals,
            cleavelandBrowns,
            washingtonRed,
            greenBayPackers,
            detroitLions,
            minnesotaVikings,
            newOrleansSaints,
            miamiDolphins,
            newYorkJets,
            tampaBay,
            indianapolisColts,
            houstonTexas,
            denverBroncos,
            losAngelesChargers,
            jacksonvilleJaguars,
            titans,
            oaklandRaiders,
            newEnglandPatriots,
            kansasChiefs,
            arizonaCardinals,
            pittsburghSteelers,
              })
         
        })

    
        
    }
    

    selectTeam = (teamName) => {
        console.log(this.state[teamName])
        this.setState({"selectedTeam" : this.state[teamName]}) 
    }

   
    render() {
       /* this.props.leagueStandings ? 
        console.log(this.props.leagueStandings[0].Name) 
        : 
        console.log("No Standings")

        // let AFC_Conference = this.props.patriotsStats.Conference
        // let EAST_Division = this.props.patriotsStats.Division
        // let patriotsName = this.props.patriotsStats.Name*/
        
        return (
            <div id="newsContainer" className="container-fluid">
                <div className="row">
                    <div className="col"> 
                        <h3>AFC EAST</h3>
                        <h5 onClick={() => {this.selectTeam('Buffalo_Bills')}}><img alt="Buffalo_Bills" src={buffaloImage }/>BUFFALO BILLS </h5>
                        <h5 onClick={() => {this.selectTeam('miamiDolphins"')}}><img alt="miamiDolphins" src={miamiImage }/>MIAMI DOLPHINS</h5>
                        <h5 onClick={() => {this.selectTeam('newEnglandPatriots')}}><img alt="newEnglandPatriots" src={newEnglandImage }/>NEW ENGLANDS PATRIOTS</h5>
                        <h5 onClick={() => {this.selectTeam('newYorkJets')}}><img alt="newYorkJets" src={newYorkImage }/>NEW YORK JETS</h5>
                    </div>
                    <div className="col">
                        <h3>NFC EAST</h3>
                        <h5 onClick={() => {this.selectTeam('dallasCowboys')}}><img alt="dallasCowboys" src={dallasImage }/>DALLAS COWBOYS</h5>
                        <h5 onClick={() => {this.selectTeam('newYorkGiants')}}><img alt="newYorkGiants" src={newYorkGiantsImage }/>NEW YORK GIANTS</h5>
                        <h5 onClick={() => {this.selectTeam('philadelphiaEagles')}}><img alt="philadelphiaEagles" src={philadelphiaImage }/>PHILADELPHIA EAGLES</h5>
                        <h5 onClick={() => {this.selectTeam('washingtonRed')}}><img alt="washingtonRedskin" src={washingtonRedImage }/>WASHINGTON REDSKINS</h5>
                    </div>
                    <div className="col">
                        <h3>AFC NORTH</h3>
                        <h5 onClick={() => {this.selectTeam('baltimoreRavens')}}><img alt="baltimoreRavens" src={baltimoreRavensImage }/>BALTIMORE RAVENS</h5>
                        <h5 onClick={() => {this.selectTeam('cincinnatiBengals')}}><img alt="cincinnatiBengals" src={cincinnattiBengalsImage }/>CINCINNATI BENGALS</h5>
                        <h5 onClick={() => {this.selectTeam('cleavelandBrowns')}}><img alt="cleavelandBrowns" src={cleavelandBrownsImage }/>CLEAVELAND BROWNS</h5>
                        <h5 onClick={() => {this.selectTeam('pittsburghSteelers')}}><img alt="pittsburghSteelers" src={pittsburghSteelersImage }/>PITTSBURGH STEELERS</h5>
                    </div>
                    <div className="col">
                        <h3>NFC NORTH</h3>
                        <h5 onClick={() => {this.selectTeam('chicagoBears')}}><img alt="chicagoBears" src={chicagoBearsImage }/>CHICAGO BEARS</h5>
                        <h5 onClick={() => {this.selectTeam('detroitLions')}}><img alt="detroitLions" src={detroitLionsImage }/>DETROIT LIONS</h5>
                        <h5 onClick={() => {this.selectTeam('greenBayPackers')}}><img alt="greenBayPackers" src={greenBayPackersImage }/>GREEN BAY PACKERS</h5>
                        <h5 onClick={() => {this.selectTeam('minnesotaVikings')}}><img alt="minnesotaVikings" src={minnesotaVikingsImage }/>MINNESOTA VIKINGS</h5>
                   
                    </div>
                
                    <div id="newsContainer" className="container-fluid">
                        <div className="row">
                            <div class="col">
                                <h3>AFC SOUTH</h3>
                                <h5 onClick={() => {this.selectTeam('houstonTexas')}}><img alt="houstonTexas" src={houstonTexasImage }/>HOUSTON TEXAS</h5>
                                <h5 onClick={() => {this.selectTeam('indianapolisColts')}}><img alt="indianapolisColts" src={indianapolisColtsImage }/>INDIANAPOLIS COLTS</h5>
                                <h5 onClick={() => {this.selectTeam('jacksonvilleJaguars')}}><img alt="jacksonvilleJaguars" src={jacksonvilleJaguarsImage }/>JACKSONVILLE JAGUARS</h5>
                                <h5 onClick={() => {this.selectTeam(' titans')}}><img alt="titans" src={titansImage }/>TENESSEE TITANS</h5>

                            </div>
                            <div className="col">
                                <h3>NFC SOUTH</h3>
                                <h5 onClick={() => {this.selectTeam('atlantaFalcons')}}><img alt="atlantaFalcons" src={atlantaFalconsImage }/>ATLANTA FALCONS</h5>
                                <h5 onClick={() => {this.selectTeam('carolinePanthers')}}><img alt="carolinePanthers" src={carolinePanthersImage }/>CAROLINE PANTHERS</h5>
                                <h5 onClick={() => {this.selectTeam('newOrleansSaints')}}><img alt="newOrleans" src={newOrleansImage }/>NEW ORLEANS SAINTS</h5>
                                <h5 onClick={() => {this.selectTeam('tampaBay')}}><img alt="tampaBay" src={tampaBayImage }/>TAMPA BAY BUCCANEERS</h5>
                            </div>
                            <div className="col">
                                <h3>AFC WEST</h3>
                                <h5 onClick={() => {this.selectTeam('denverBroncos')}}><img alt="denverBroncos" src={denverBroncosImage }/>DENVER BRONCOS</h5>
                                <h5 onClick={() => {this.selectTeam('kansasChiefs')}}><img alt="kansasChiefs" src={kansasChiefsImage }/>KANSAS CITY CHIEFS</h5>
                                <h5 onClick={() => {this.selectTeam('losAngelesChargers')}}><img alt="losAngelesChargers" src={losAngelesChargersImage }/>LOS ANGELES CHARGERS</h5>
                                <h5 onClick={() => {this.selectTeam('oaklandRaiders')}}><img alt="oaklandRaiders" src={oaklandRaidersImage }/>OAKLAND RAIDERS</h5>
                            </div>
                            <div className="col">
                                <h3>NFC WEST</h3>
                                <h5 onClick={() => {this.selectTeam('arizonaCardinals')}}><img alt="arizonaCardinals" src={arizonaCardinalsImage }/>ARIZONA CARDINALS</h5>
                                <h5 onClick={() => {this.selectTeam('losAngelesRams')}}><img alt="losAngelesRams" src={losAngelesRamsImage }/>LOS ANGELES RAMS</h5>
                                <h5 onClick={() => {this.selectTeam('sfGiants')}}><img alt="sfGiants"  src={sfGiantsImage }/>SAN FRANCISCO GIANTS</h5>
                                <h5 onClick={() => {this.selectTeam('seattleSeahawks')}}><img alt="seattleSeahawks" src={seattleSeahawksImage }/>SEATTLE SEAHAWKS</h5>
                            </div>
                    </div>
                       
                    </div>

                    <h1>Info</h1>
                    <div className="container">
                         
                  
                    {
                        this.state.selectedTeam.length > 0 ?   this.state.selectedTeam.map((data, index) => {
                            return (
                                <div className="row">
                                    <p>{index} Player: {data.FirstName} {data.LastName} Injury Status {data.InjuryStatus}</p>
                                </div>
                            )// player id and linkn to jeremys page
                            // display all the injured players by team , declared inactive true or false, position,team, when was this updated 
                        }): <div>No Team</div>
                    } 
                    </div>
                    
                </div>
            </div>

            




            
        )
    }
}




export default CurrentNews;


