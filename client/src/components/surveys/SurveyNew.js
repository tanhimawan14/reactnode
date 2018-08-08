// SurveyNew shows SurveyForm and SurveyFormReview

import React, { Component as C } from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends C {
    /*
    constructor(props) {
        super(props);

        this.state = {new: true};
    }
    */

    state = {showReview: false};

    renderContent() {
        if(this.state.showReview) {
            return <SurveyFormReview 
                onCancel = {() => this.setState({showReview: false})}
            />;
        }

        return <SurveyForm  onSurveySubmit={() => this.setState({showReview : true})} />;
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyF'
})(SurveyNew);