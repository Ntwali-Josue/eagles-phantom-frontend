import axios from 'axios'
import * as actionTypes from '../types/counterTypes';

export const logout = ()=> dispatch =>{

dispatch({type:actionTypes.FETCH});

return axios.get('https://localhost:3020/api/v1/auth/logout',{credentials:'include'})
.then(res =>res.json())
.then(json =>{
    if(json.type==='error'){
        dispatch({type:actionTypes.FETCH_ERROR,message:json.message});
    }else{
        dispatch({type:actionTypes.LOGOUT,...json})
    }
})
.catch(error => dispatch ({type:actionTypes.FETCH_ERROR, message: error.message}))


};


