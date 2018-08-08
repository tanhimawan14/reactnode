// import _ from 'lodash';
// SurveyForm survey a form to add input
import React, { Component as C } from 'react';
// Field to export HTML element for form
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields';

class SurveyForm extends C {
    renderFields() {
        // Using Lodash

        // return _.map(FIELDS, ({label, name}) => {
        //     return <Field component={SurveyField} type="text" label={label} name={name} />
        // });

        return formFields.map(({label,name}, i = 0) => {
            return <Field key={i++} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">Next <i className="material-icons right">done</i></button>
                </form>
            </div>
        );
    }
}

// Handle validating inside form
function validate(values) {
    const errors = {};

    // console.log(FIELDS);

    errors.recipients = validateEmails(values.recipients || "");

    formFields.forEach(({name}) => {
        if(!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    })

    return errors;
}

// Redux form helper
export default reduxForm({
    form: 'surveyF',
    validate,
    destroyOnUnmount: false
})(SurveyForm);