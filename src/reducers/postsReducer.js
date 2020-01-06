import { GET_POST, IS_LOADING, ERROR, COMMENTS_IS_LOADING, COMMENTS_ERROR, UPLOAD_COMMENTS } from '../types/postsTypes';

const INITIAL_STATE = {
    posts: [],
    isLoading: false,
    error: '',
    comments_isLoading: false,
    commenst_error: ''

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POST:
            return {...state, posts: action.payload, isLoading: false };

        case UPLOAD_COMMENTS:
            return {...state, posts: action.payload, comments_isLoading: false };

        case IS_LOADING:
            return {...state, isLoading: true };

        case ERROR:
            return {...state, error: action.payload, isLoading: false };

        case COMMENTS_IS_LOADING:
            return {...state, comments_isLoading: true };

        case COMMENTS_ERROR:
            return {...state, comments_error: action.payload, comments_isLoading: false };

        default:
            return state;
    };
};