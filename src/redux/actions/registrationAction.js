import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL} from '../types/registrationTypes';
import axios from 'axios';

export const registration = () => {
    return {
        type: REGISTER
    }
}

export const registrationFail = () => {
    return {
        type: REGISTER_SUCCESS
    }
}

export const registrationSuccess = () => {
    return {
        type: REGISTER_FAIL
    }
}


export const registrationAction = (data) => async(dispatch) => {
try {
    dispatch(registration())
    const res = await axios.post('', data);
    dispatch(registrationSuccess(res));
}catch (error) {
    if(error) {
        const errorMessage = 'The registration is not possible';
        dispatch(registrationFail(errorMessage))
    } 
    else {
        dispatch(registrationFail('Error in the Network'))
    }
}
} 




