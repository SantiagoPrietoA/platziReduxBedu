import { GET_USERS, IS_LOADING, ERROR } from "../types/usersTypes";

const INITIAL_STATE = {
    users: [],
    isLoading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload, isLoading: false };

        case IS_LOADING:
            return {...state, isLoading: true };

        case ERROR:
            return {...state, error: action.payload, isLoading: false };


        default:
            return state;
    };
};