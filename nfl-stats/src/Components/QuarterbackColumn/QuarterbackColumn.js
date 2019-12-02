import React, {Component} from 'react'
import './style.css'

class QuarterbackColumn extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    

    render() {
        return (
            <div className="card">
                {this.props.Name}
            </div>
        )
    }
}

export default QuarterbackColumn;