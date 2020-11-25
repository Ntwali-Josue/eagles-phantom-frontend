import * as counterTypes from '../types/counterTypes';

export const increment = () => {
    return {
        type: counterTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: counterTypes.DECREMENT
    }
}