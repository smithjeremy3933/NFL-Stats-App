import React, {Component} from 'react'
import './style.css'

class FantasyComparison extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlayers: []
        }
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
    }


    render() {
        return (
            <div id="comparisonContainer" className="container">
                {this.state.selectedPlayers.map(listPlayers => {
                return (<div>{listPlayers.player_name}</div>)
                }) }
            </div>
        )
    }
}

export default FantasyComparison;