import axios from 'axios';
import { GET_USERS, IS_LOADING, ERROR } from "../types/usersTypes";



export const getAll = () => async(dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        dispatch({
            type: GET_USERS,
            payload: response.data,
            error: ''
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}