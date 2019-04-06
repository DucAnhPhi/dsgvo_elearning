const initialState = {
    roles: [],
    areas: []
}


const SET_ROLES = 'SET_ROLES';
const SET_AREAS = 'SET_AREAS';

// ACTIONS

export const setRolesAction = roles => {
    return dispatch => {
        dispatch({
            type: SET_ROLES,
            payload: { roles: roles }
        });
    };
};

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
        case SET_ROLES:
            return {
                roles: action.payload.roles
            };
        case SET_AREAS:
            return {
                areas: action.payload.areas
            };
        default:
            return state;
    };
};
