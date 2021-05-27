export const SET_USER_ACTION = 'SET_USER_ACTION';

export const setUserAction = (user) => {
    return {
        type: SET_USER_ACTION,
        payload: user,
    }
}

export const DELETE_USER_ACTION = 'DELETE_USER_ACTION';

export const deleteUserAction = (user) => {
    return {
        type: DELETE_USER_ACTION,
        payload: user,
    }
}