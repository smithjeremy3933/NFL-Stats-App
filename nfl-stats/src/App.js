import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Fantasy from './Components/Fantasy'
import Standings from './Components/Standings';
import News from './Components/News'
import Scores from './Components/Scores'



class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      standings: [],
      patriotsStandings: ""
    }
  }

  componentDidMount() {
    let standingsQueryURL =  `https://api.sportsdata.io/v3/nfl/scores/json/Standings/%7B2019%7D?key=e785706d32a54b8f850c248da415cb73`

    fetch(standingsQueryURL).then((response) => {
      return response.json();
    }).then((standingData) => {
      console.log(standingData);
      this.setState({
        standings: standingData,
        patriotsStandings: standingData[0]
      })
    })

    let newsQueryURL =  `https://api.sportsdata.io/v3/nfl/scores/json/News?key=e785706d32a54b8f850c248da415cb73`

    fetch(newsQueryURL).then((response) => {
      return response.json();
    }).then((newsData) => {
      console.log(newsData);
    //   this.setState({

    //   })
    // console.log(this.state.standings)
    })
  }


  render() {
    return (
      <Router>
        <div>
          <Nav/>
            <Switch>
              <Route path="/" exact component= {News}/>
              <Route path="/fantasy" component = {Fantasy}/>
              <Route path="/standings" component = {Standings} leagueStandings={this.state.standings} patriotsStats = {this.state.patriotsStandings}/>
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
