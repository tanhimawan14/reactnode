// Rendering Layer Control

import React, {Component} from 'react';
// Library for Routing
import { BrowserRouter, Route } from 'react-router-dom';
// To call action creator
import {connect} from 'react-redux';
// call all action creator from actions/index.js, * = all
import * as actions from '../actions';

// creating variable for component
import Landing from './Landing';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
    componentDidMount() {
        // from = ../actions/index.js
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                {/* Need to add this to user Route */}
                <BrowserRouter>
                    <div>
                        <Header />
                        {/* Exact to create the path match exactly to the address exact = {true}*/}
                        <Route exact path="/" component={Landing} />
                        {/* Path to route the component*/}
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);