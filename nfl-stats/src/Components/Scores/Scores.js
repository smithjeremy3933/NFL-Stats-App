import React, {Component} from 'react'
import './style.css'
import moment from "moment";

class Scores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoresData: []
        }
    }

    // componentDidMount() {
    //     let scoresByWeekQueryURL =  `https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2019REG/13?key=395dd5f8805a4e85baeb9951f01813e6`
    //     fetch(scoresByWeekQueryURL).then((response) => {
    //       return response.json();
    //     }).then((SBWData) => {
    //       console.log(SBWData);
    //       this.setState({
    //         scoresData: SBWData
    //       })
    //     })
    // }

    render() {

        // let firstSixGames = this.state.scoresData.slice(0, 6);
        // console.log(firstSixGames[0])
       
        // console.log(local)

        return (
            <div id="scoresContainer" className="container-fluid">
                <h2>scores</h2>
                {/* <div id="scoresRow" className="row">
                    <div id="scoresHeaderCol" className="col-sm-1">
                        <div id="scoresHeaderBox">
                            <h2 className="scores">Scores</h2>
                        </div>
                    </div>
                    <div id="scoresBoxCol" className="col-sm-2">
                        <div className="scoresBox1 hvr-grow">
                            <div id="gameDetailsRow" className="row">
                                <div className="col-sm-6">
                                    <div id="quarterDescriptionBox">
                                        {firstSixGames[0] ? <strong><p className="text-center">{firstSixGames[0].QuarterDescription}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div id="channelBox">
                                        {firstSixGames[0] ? <strong><p className="text-center">{firstSixGames[0].Channel}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                            </div>
                            <hr className="scoreDetailBreaks"></hr>
                            <div id="scoresDateRow" className="row">
                                <div id="colWithRightBorder" className="col-sm-6">
                                    <div id="homeTeamBox">
                                        <div id="homeTeamNameBox">
                                            {firstSixGames[0] ? <strong><p id="homeTeamText">{firstSixGames[0].HomeTeam}: {firstSixGames[0] ? firstSixGames[0].HomeScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                    <div id="awayTeamBox">
                                        <div id="awayTeamNameBox">
                                            {firstSixGames[0] ? <strong><p id="awayTeamText">{firstSixGames[0].AwayTeam}: {firstSixGames[0] ? firstSixGames[0].AwayScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                </div>
                                <div id="teamTimeCol" className="col-sm-6">
                                    <div id="teamTimeBox">
                                        { firstSixGames[0] ? <p id="timeText">{moment(firstSixGames[0].Date).format('LLL')}</p> : <p>No Time</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="scoresBoxCol" className="col-sm-2 hvr-grow">
                        <div className="scoresBox1">
                            <div id="gameDetailsRow" className="row">
                                <div className="col-sm-6">
                                    <div id="quarterDescriptionBox">
                                        {firstSixGames[1] ? <strong><p className="text-center">{firstSixGames[1].QuarterDescription}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div id="channelBox">
                                        {firstSixGames[1] ? <strong><p className="text-center">{firstSixGames[1].Channel}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                            </div>
                            <hr className="scoreDetailBreaks"></hr>
                            <div id="scoresDateRow" className="row">
                                <div id="colWithRightBorder" className="col-sm-6">
                                    <div id="homeTeamBox">
                                        <div id="homeTeamNameBox">
                                            {firstSixGames[1] ? <strong><p id="homeTeamText">{firstSixGames[1].HomeTeam}: {firstSixGames[1] ? firstSixGames[1].HomeScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                    <div id="awayTeamBox">
                                        <div id="awayTeamNameBox">
                                            {firstSixGames[1] ? <strong><p id="awayTeamText">{firstSixGames[1].AwayTeam}: {firstSixGames[1] ? firstSixGames[1].AwayScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                </div>
                                <div id="teamTimeCol" className="col-sm-6">
                                    <div id="teamTimeBox">
                                        { firstSixGames[1] ? <p id="timeText">{moment(firstSixGames[1].Date).format('LLL')}</p> : <p>No Time</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="scoresBoxCol" className="col-sm-2 hvr-grow">
                        <div className="scoresBox1">
                            <div id="gameDetailsRow" className="row">
                                <div className="col-sm-6">
                                    <div id="quarterDescriptionBox">
                                        {firstSixGames[2] ? <strong><p className="text-center">{firstSixGames[2].QuarterDescription}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div id="channelBox">
                                        {firstSixGames[2] ? <strong><p className="text-center">{firstSixGames[2].Channel}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                            </div>
                            <hr className="scoreDetailBreaks"></hr>
                            <div id="scoresDateRow" className="row">
                                <div id="colWithRightBorder" className="col-sm-6">
                                    <div id="homeTeamBox">
                                        <div id="homeTeamNameBox">
                                            {firstSixGames[2] ? <strong><p id="homeTeamText">{firstSixGames[2].HomeTeam}: {firstSixGames[2] ? firstSixGames[2].HomeScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                    <div id="awayTeamBox">
                                        <div id="awayTeamNameBox">
                                            {firstSixGames[2] ? <strong><p id="awayTeamText">{firstSixGames[2].AwayTeam}: {firstSixGames[2] ? firstSixGames[2].AwayScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                </div>
                                <div id="teamTimeCol" className="col-sm-6">
                                    <div id="teamTimeBox">
                                        { firstSixGames[2] ? <p id="timeText">{moment(firstSixGames[2].Date).format('LLL')}</p> : <p>No Time</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="scoresBoxCol" className="col-sm-2 hvr-grow">
                        <div className="scoresBox1">
                            <div id="gameDetailsRow" className="row">
                                <div className="col-sm-6">
                                    <div id="quarterDescriptionBox">
                                        {firstSixGames[3] ? <strong><p className="text-center">{firstSixGames[3].QuarterDescription}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div id="channelBox">
                                        {firstSixGames[3] ? <strong><p className="text-center">{firstSixGames[3].Channel}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                            </div>
                            <hr className="scoreDetailBreaks"></hr>
                            <div id="scoresDateRow" className="row">
                                <div id="colWithRightBorder" className="col-sm-6">
                                    <div id="homeTeamBox">
                                        <div id="homeTeamNameBox">
                                            {firstSixGames[3] ? <strong><p id="homeTeamText">{firstSixGames[3].HomeTeam}: {firstSixGames[3] ? firstSixGames[3].HomeScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                    <div id="awayTeamBox">
                                        <div id="awayTeamNameBox">
                                            {firstSixGames[3] ? <strong><p id="awayTeamText">{firstSixGames[3].AwayTeam}: {firstSixGames[3] ? firstSixGames[3].AwayScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                </div>
                                <div id="teamTimeCol" className="col-sm-6">
                                    <div id="teamTimeBox">
                                        { firstSixGames[3] ? <p id="timeText">{moment(firstSixGames[3].Date).format('LLL')}</p> : <p>No Time</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="scoresBoxCol" className="col-sm-2 hvr-grow">
                        <div className="scoresBox1">
                            <div id="gameDetailsRow" className="row">
                                <div className="col-sm-6">
                                    <div id="quarterDescriptionBox">
                                        {firstSixGames[4] ? <strong><p className="text-center">{firstSixGames[4].QuarterDescription}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div id="channelBox">
                                        {firstSixGames[4] ? <strong><p className="text-center">{firstSixGames[4].Channel}</p></strong> : <div>NO GAME</div>}
                                    </div>
                                </div>
                            </div>
                            <hr className="scoreDetailBreaks"></hr>
                            <div id="scoresDateRow" className="row">
                                <div id="colWithRightBorder" className="col-sm-6">
                                    <div id="homeTeamBox">
                                        <div id="homeTeamNameBox">
                                            {firstSixGames[4] ? <strong><p id="homeTeamText">{firstSixGames[4].HomeTeam}: {firstSixGames[4] ? firstSixGames[4].HomeScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                    <div id="awayTeamBox">
                                        <div id="awayTeamNameBox">
                                            {firstSixGames[4] ? <strong><p id="awayTeamText">{firstSixGames[4].AwayTeam}: {firstSixGames[4] ? firstSixGames[4].AwayScore : <div>NO GAME</div>}</p></strong> : <div>NO GAME</div>} 
                                        </div>
                                    </div>
                                </div>
                                <div id="teamTimeCol" className="col-sm-6">
                                    <div id="teamTimeBox">
                                        { firstSixGames[4] ? <p id="timeText">{moment(firstSixGames[4].Date).format('LLL')}</p> : <p>No Time</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="scoresHeaderCol" className="col-sm-1">
                        <div id="scoresHeaderBox">
                            <h2 className="scores">Scores</h2>
                        </div>
                    </div>
                   
                </div> */}
            </div>
        )
    }
}

export default Scores;