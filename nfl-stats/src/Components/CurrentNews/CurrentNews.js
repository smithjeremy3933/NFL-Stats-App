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
import oaklandRaidersImage from  '../../images/losAngelesChargers.png'
import arizonaCardinalsImage from  '../../images/arizonaCardinals.png'
import losAngelesRamsImage from  '../../images/losAngelesRams.png'
import seattleSeahawksImage from  '../../images/SeattleSeaHawks.png'
import sfGiantsImage from  '../../images/sfGiants.png'













class CurrentNews extends Component {
    constructor(props) {
        super(props);
        // const fetchStandings = async () => {
        //     const data = await fetch('https://api.sportsdata.io/v3/nfl/scores/json/Standings/%7B2019%7D?key=e785706d32a54b8f850c248da415cb73')
        //     console.log(data);
        // }
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
                        <h5><img alt="Buffalo_Bills" src={buffaloImage }/>BUFFALO BILLS </h5>
                        <h5><img alt="miamiDolphins" src={miamiImage }/>MIAMI DOLPHINS</h5>
                        <h5><img alt="newEnglandPatriots" src={newEnglandImage }/>NEW ENGLANDS PATRIOTS</h5>
                        <h5><img alt="newEnglandPatriots" src={newYorkImage }/>NEW YORK JETS</h5>
                    </div>
                    <div className="col">
                        <h3>NFC EAST</h3>
                        <h5><img alt="dallasCowboys" src={dallasImage }/>DALLAS COWBOYS</h5>
                        <h5><img alt="newYorkGiants" src={newYorkGiantsImage }/>NEW YORK GIANTS</h5>
                        <h5><img alt="philadelphiaEagles" src={philadelphiaImage }/>PHILADELPHIA EAGLES</h5>
                        <h5><img alt="washingtonRedskin" src={washingtonRedImage }/>WASHINGTON REDSKINS</h5>
                    </div>
                    <div className="col">
                        <h3>AFC NORTH</h3>
                        <h5><img alt="baltimoreRavens" src={baltimoreRavensImage }/>BALTIMORE RAVENS</h5>
                        <h5><img alt="cincinnatiBengals" src={cincinnattiBengalsImage }/>CINCINNATI BENGALS</h5>
                        <h5><img alt="cleavelandBrowns" src={cleavelandBrownsImage }/>CLEAVELAND BROWNS</h5>
                        <h5><img alt="pittsburghSteelers" src={pittsburghSteelersImage }/>PITTSBURGH STEELERS</h5>
                    </div>
                    <div className="col">
                        <h3>NFC NORTH</h3>
                        <h5><img alt="chicagoBears" src={chicagoBearsImage }/>CHICAGO BEARS</h5>
                        <h5><img alt="detroitLions" src={detroitLionsImage }/>DETROIT LIONS</h5>
                        <h5><img alt="greenBayPackers" src={greenBayPackersImage }/>GREEN BAY PACKERS</h5>
                        <h5><img alt="minnesotaVikings" src={minnesotaVikingsImage }/>MINNESOTA VIKINGS</h5>
                   
                    </div>
                
                    <div id="newsContainer" className="container-fluid">
                        <div className="row">
                            <div class="col">
                                <h3>AFC SOUTH</h3>
                                <h5><img alt="houstonTexas" src={houstonTexasImage }/>HOUSTON TEXAS</h5>
                                <h5><img alt="indianapolisColts" src={indianapolisColtsImage }/>INDIANAPOLIS COLTS</h5>
                                <h5><img alt="jacksonvilleJaguars" src={jacksonvilleJaguarsImage }/>JACKSONVILLE JAGUARS</h5>
                                <h5><img alt="titans" src={titansImage }/>TENESSEE TITANS</h5>

                            </div>
                            <div className="col">
                                <h3>NFC SOUTH</h3>
                                <h5><img alt="atlantaFalcons" src={atlantaFalconsImage }/>ATLANTA FALCONS</h5>
                                <h5><img alt="carolinePanthers" src={carolinePanthersImage }/>CAROLINE PANTHERS</h5>
                                <h5><img alt="newOrleans" src={newOrleansImage }/>NEW ORLEANS SAINTS</h5>
                                <h5><img alt="tampaBay" src={tampaBayImage }/>TAMPA BAY BUCCANEERS</h5>
                            </div>
                            <div className="col">
                                <h3>AFC WEST</h3>
                                <h5><img alt="denverBroncos" src={denverBroncosImage }/>DENVER BRONCOS</h5>
                                <h5><img alt="kansasChiefs" src={kansasChiefsImage }/>KANSAS CITY CHIEFS</h5>
                                <h5><img alt="losAngelesChargers" src={losAngelesChargersImage }/>LOS ANGELES CHARGERS</h5>
                                <h5><img alt="oaklandRaiders" src={oaklandRaidersImage }/>OAKLAND RAIDERS</h5>
                            </div>
                            <div className="col">
                                <h3>NFC WEST</h3>
                                <h5><img alt="arizonaCardinals" src={arizonaCardinalsImage }/>ARIZONA CARDINALS</h5>
                                <h5><img alt="losAngelesRams" src={losAngelesRamsImage }/>LOS ANGELES RAMS</h5>
                                <h5><img alt="sfGiants" src={sfGiantsImage }/>SAN FRANCISCO GIANTS</h5>
                                <h5><img alt="seattleSeahawks" src={seattleSeahawksImage }/>SEATTLE SEAHAWKS</h5>
                            </div>
                    </div>
                       
                    </div>
                    
                </div>
            </div>

            




            
        )
    }
}




export default CurrentNews;


