import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';
import LocalStorageService from '../services/storage/LocalStorageService';

const localStorageService = LocalStorageService;
const URL = 'http://127.0.0.1:8000'

export const registerUser = (user, history) => dispatch => {
    axios.post(URL+'/users/register/', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}



export const createAgent = (agent) => dispatch => {
    axios.post(URL+'/api/agent/create/', agent)
            .then(res => console.log(res))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}


export const createError = (errorObj) => dispatch => {
   
    axios.post(URL+'/api/central/create/', errorObj)
            .then(res => console.log(res))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {
    axios.post(URL+'/api/token/', user)
            .then(res => {
                const { token } = res.data;
                //console.log(res.data)
                localStorageService.setToken(res.data)
               

                var jwtacess = res.data['access']
                localStorage.setItem('jwtToken', jwtacess);  // need change to use only acess 
                setAuthToken(jwtacess);
                const decoded = jwt_decode(jwtacess);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}


export const logoutUser = (history) => dispatch => {
    localStorageService.clearToken();
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}


export const aboutMe = (history) => dispatch => {
    axios.get(URL+'/users/me/')
    .then(response => {
        this.setState({ registers: response.data });
    })
    .catch(function (error){
        console.log(error);
    })
}



export const getToken = () => localStorage.getItem('access');
