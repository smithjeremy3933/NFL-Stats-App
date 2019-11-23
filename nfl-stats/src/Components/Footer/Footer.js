import React, {Component} from 'react'
import './style.css'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <footer className="card-footer bg-light footer-font-style text-muted footer-position">Copywright &copy;</footer>
            </div>
        )
    }
}

export default Footer;