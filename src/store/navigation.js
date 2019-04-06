const initialState = {
    route: ''
}


const NAVIGATE = 'NAVIGATE';

// ACTIONS

export const navigateAction = route => {
    return dispatch => {
        dispatch({
            type: NAVIGATE,
            payload: { route: route }
        });
    };
};

// REDUCERS

export const navigation = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE:
            return {
                route: action.payload.route
            };
    };
    return state;
};
