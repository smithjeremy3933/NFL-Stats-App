import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Fantasy from './Components/Fantasy/Fantasy'
import FantasyPlayer from './Components/FantasyPlayer/FantasyPlayer'
import Standings from './Components/Standings/Standings';
import News from './Components/News'
import Scores from './Components/Scores/Scores'
import Footer from './Components/Footer/Footer'



class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      //standings: [],
      patriotsStandings: "",
      articles:[]
    }
  }

  componentDidMount() {

  }


  render() {
    return (
      <Router>
        <div id="backgroundContainer">
          <Nav/>
          <Scores/>
            <Switch>
              <Route path="/" exact component= {News} articles = {this.state.articles}/>
              <Route path="/fantasy" exact component = {Fantasy}/>
              <Route path="/fantasy/:id" component={FantasyPlayer}/>
              <Route path="/standings" component = {Standings}/>
              
              
            </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
