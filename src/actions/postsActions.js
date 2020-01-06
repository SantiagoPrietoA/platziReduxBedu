import { GET_POST, IS_LOADING, ERROR, COMMENTS_IS_LOADING, COMMENTS_ERROR, UPLOAD_COMMENTS } from '../types/postsTypes';
import { GET_USERS } from '../types/usersTypes';

import axios from 'axios';

export const getByUser = (index) => async(dispatch, getState) => {

    dispatch({
        type: IS_LOADING
    })

    try {

        const { users } = getState().usersReducer;
        const { posts } = getState().postsReducer;
        const userId = users[index].id;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        const commentsState = response.data.map(post => ({
            ...post,
            comments: [],
            isOpen: false

        }))


        const updatePost = [
            ...posts,
            commentsState
        ]
        dispatch({
            type: GET_POST,
            payload: updatePost,
        })

        const postsKey = updatePost.length - 1;
        const updateUsers = users;

        updateUsers[index] = {
            ...users[index],
            postsKey

        }

        dispatch({
            type: GET_USERS,
            payload: updateUsers,
        })

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })

    }

}

export const openClose = (key, index) => (dispatch, getState) => {
    const { posts } = getState().postsReducer;
    const postSelected = posts[key][index]

    const postUpdated = {
        ...postSelected,
        isOpen: !postSelected.isOpen
    }

    const posts_updated = [...posts];
    posts_updated[key] = [
        ...posts[key]
    ]

    posts_updated[key][index] = postUpdated;

    dispatch({
        type: GET_POST,
        payload: posts_updated,
    })
}

export const getComments = (key, index) => async(dispatch, getState) => {
    const { posts } = getState().postsReducer;
    const postSelected = posts[key][index]

    dispatch({
        type: COMMENTS_IS_LOADING,
    })

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postSelected.id}`);
        const data = await response.json()

        const postUpdated = {
            ...postSelected,
            comments: data
        }

        const posts_updated = [...posts];
        posts_updated[key] = [
            ...posts[key]
        ]

        posts_updated[key][index] = postUpdated;

        dispatch({
            type: UPLOAD_COMMENTS,
            payload: posts_updated,
        })

    } catch (error) {
        dispatch({
            type: COMMENTS_ERROR,
            payload: error.message
        })
    }

}