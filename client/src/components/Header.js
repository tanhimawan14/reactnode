// Stateful / Class-based component
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
    
    // Helper method #1
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return [
                <li key="1"><Payments /></li>,
                <li key="2" style={{margin: '0 10px'}}>
                    Credits : {this.props.auth.credits}
                </li>,
                <li key="3"><a href="/api/logout">Logout</a></li>
                ]
        }
    }

    render() {
        return(
            <nav className="nav-wrapper">
                <Link 
                    // Linking to the root HTML based on user login
                    to={this.props.auth ? '/surveys' : '/'} 
                    className="left brand-logo"
                >
                    Emaily
                </Link>
                <ul className="right">
                    {this.renderContent()}
                </ul>
            </nav>
        );
    }
}

/*
function mapStateToProps(state) {
    return {auth: state.auth};
}
*/

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);