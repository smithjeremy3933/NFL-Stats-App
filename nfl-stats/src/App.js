import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Fantasy from './Components/Fantasy/Fantasy'
import FantasyPlayer from './Components/FantasyPlayer/FantasyPlayer'
import FantasyComparison from './Components/FantasyComparison/FantasyComparison'
import Standings from './Components/Standings/Standings';
import Scores from './Components/Scores/Scores'
import Footer from './Components/Footer/Footer'
import CurrentNews from './Components/CurrentNews/CurrentNews'

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div id="backgroundContainer">
          <Nav/>
          <Scores/>
            <Switch>
              <Route path="/" exact component= {CurrentNews}/>
              <Route path="/standings" component = {Standings}/>
              <Route path="/fantasy" exact component = {Fantasy}/>
              <Route path="/fantasy-comparison" component={FantasyComparison}/>
              <Route path="/:id" component={FantasyPlayer}/>
              <Route path="/fantasy/:id" component={FantasyPlayer}/>
            </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
