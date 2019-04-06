const initialState = {
    areas: []
}

const SET_AREAS = 'SET_AREAS';

// ACTIONS

export const setAreasAction = areas => {
    return dispatch => {
        dispatch({
            type: SET_AREAS,
            payload: { areas: areas }
        });
    };
};

// REDUCERS

export const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_AREAS:
            return {
                areas: action.payload.areas
            };
        default:
            return state;
    };
};
