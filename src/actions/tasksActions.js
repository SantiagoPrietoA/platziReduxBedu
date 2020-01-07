import axios from 'axios';
import { GET_TASKS, IS_LOADING, ERROR, CHANGE_ID, CHANGE_TITLE, SAVE_TASK, UPDATE } from "../types/tasksTypes";



export const getTasks = () => async(dispatch) => {
    dispatch({
        type: IS_LOADING
    })
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const newStructTasks = {}

        response.data.map(task => (
            newStructTasks[task.userId] = {
                ...newStructTasks[task.userId],
                [task.id]: {
                    ...task
                }
            }
        ))
        dispatch({
            type: GET_TASKS,
            payload: newStructTasks,
            error: ''
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}

export const changeUserId = (value) => (dispatch) => {
    dispatch({
        type: CHANGE_ID,
        payload: value
    })
}

export const changeTaskTitle = (value) => (dispatch) => {
    dispatch({
        type: CHANGE_TITLE,
        payload: value
    })
}

export const saveTask = (task) => async(dispatch) => {
    dispatch({
        type: IS_LOADING,
    })

    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', task)

        dispatch({
            type: SAVE_TASK,
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.messaje
        })
    }
}

export const editTask = (task) => async(dispatch) => {
    dispatch({
        type: IS_LOADING,
    })

    try {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task)

        dispatch({
            type: SAVE_TASK,
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.messaje
        })
    }
}

export const handlerCheck = (usu_id, tar_id) => (dispatch, getState) => {
    const { tasks } = getState().tasksReducer;
    const seleccionada = tasks[usu_id][tar_id];

    const actualizadas = {
        ...tasks
    };
    actualizadas[usu_id] = {
        ...tasks[usu_id]
    };
    actualizadas[usu_id][tar_id] = {
        ...tasks[usu_id][tar_id],
        completed: !seleccionada.completed
    }

    dispatch({
        type: UPDATE,
        payload: actualizadas
    })
};

export const deleteTask = (tar_id) => async(dispatch) => {
    dispatch({
        type: IS_LOADING
    });

    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${tar_id}`);
        dispatch({
            type: GET_TASKS,
            payload: {}
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'Servicio no disponible en este momento.'
        })
    }
};