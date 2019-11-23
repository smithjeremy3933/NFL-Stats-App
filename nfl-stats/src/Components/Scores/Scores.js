import React, {Component} from 'react'
import './style.css'

class Scores extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="scoresContainer" className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="scores">Scores</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scores;