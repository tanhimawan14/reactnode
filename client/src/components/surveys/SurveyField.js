// SurveyField contains logic to render a single label and text input
import React, {Component as C} from 'react';

class SurveyField extends C {

    
    
    render() {
        // console.log(this.props.input);
        // console.log(this.porps.meta);

        return (
            <div>
                <label>{this.props.label}</label>
                <input  {...this.props.input} style={{marginBottom: '5px'}}/>
                {/* {this.props.meta.touched ? this.props.meta.error : null} */}
                <div className="red-text" style={{marginBottom: '20px'}}>
                {this.props.meta.touched && this.props.meta.error}
                </div>
            </div>
        );
    }
}

export default SurveyField;