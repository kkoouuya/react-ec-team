export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
    return {
        type: "SIGN_IN",
        payload: {
            isSignedIn: true,
            uid: userState.uid,
            username: userState.username
        }
    }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
    return {
    type: "SIGN_OUT",
        payload: {
            isSignedIn: false,
            uid: "",
            username: ""
        }
    }
}

export const SET_USER_ACTION = 'SET_USER_ACTION';
export const setUserAction = (user) => {
    return {
        type: SET_USER_ACTION,
        payload: user,
    }
};

export const DELETE_USER_ACTION ='DELETE_USER_ACTION';
export const deleteUserAction = (user) => {
    return {
        type: DELETE_USER_ACTION,
        payload: user,
    }
};

export const FETCH_PRODUCTS_IN_CART = "FETCH_PRODUCTS_IN_CART";
export const fetchProductsInCartAction = (products) => {
    return {
        type: "FETCH_PRODUCTS_IN_CART",
        payload: products
    }
}