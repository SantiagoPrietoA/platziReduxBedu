import { GET_TASKS, IS_LOADING, ERROR, CHANGE_ID, CHANGE_TITLE, SAVE_TASK, UPDATE } from "../types/tasksTypes";

const INITIAL_STATE = {
    tasks: {},
    isLoading: false,
    error: '',
    userId: '',
    taskTitle: '',
    return: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {...state, tasks: action.payload, isLoading: false, return: false };

        case IS_LOADING:
            return {...state, isLoading: true };

        case ERROR:
            return {...state, error: action.payload, isLoading: false };

        case CHANGE_ID:
            return {...state, userId: action.payload };


        case SAVE_TASK:
            return {...state, tasks: {}, isLoading: false, return: true, userId: '', taskTitle: '' };

        case CHANGE_TITLE:
            return {...state, taskTitle: action.payload };

        case UPDATE:
            return {...state, tareas: action.payload };


        default:
            return state;
    };
};