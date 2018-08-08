import axios from 'axios';
import { FETCH_USER } from './types';

/*
export const fetchUser = () => {
    // redux thunk will see the function and create a dispatch
    return function(dispatch) {
        axios
            .get('/api/current_user')
            // for seeing another data
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    }
};
*/

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({type: FETCH_USER, payload: res.data});
}

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({type: FETCH_USER, payload: res.data});
}

// create a survey
export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys')
    dispatch({type: FETCH_USER, payload: res.data});
}