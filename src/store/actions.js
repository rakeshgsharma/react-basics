export const ADD_ONE = 'ADD_ONE';
export const MINUS_ONE = 'MINUS_ONE';

export const addOne = () => {
    return { type: ADD_ONE }
};

export const minusOne = () => {
    return { type: MINUS_ONE }
};