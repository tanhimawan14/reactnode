// SurvveyFormReview shows users their form inputs for review
import React from 'react';
import {connect} from 'react-redux';
import formField from './formFields';
import * as actions from '../../actions/index';
import {withRouter} from 'react-router-dom';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = formField.map((field, i) => {
        return (
            <div key={i++}>
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="yellow darken-3 btn-flat white-text"
                onClick={onCancel}
            >Back</button>
            <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    // console.log(state);
    return {
        formValues: state.form.surveyF.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));