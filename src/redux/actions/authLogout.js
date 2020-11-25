import axios from 'axios'
import * as actionTypes from '../types/counterTypes';

export const logout = ()=> dispatch =>{

dispatch({type:actionTypes.LOGOUT_REQUEST});

return axios.get(
    'http://localhost:3020/api/v1/auth/logout', {mode:'cors'})
.then(res =>res.json())
.then(json =>{
    if(json.type==='error'){
        dispatch({type:actionTypes.LOGOUT_ERROR,message:json.message});
    }else{
        dispatch({type:actionTypes.LOGOUT_SUCCESS,...json});
        localStorage.removeItem('token')
    }
})
.catch(error => dispatch ({type:actionTypes.LOGOUT_ERROR, message: error.message}))


};


