const initialState = {
    role: null,
    area: null
}


const SET_ROLE = 'SET_ROLE';
const SET_AREA = 'SET_AREA';

// ACTIONS

export const setRoleAction = role => {
    return dispatch => {
        dispatch({
            type: SET_ROLE,
            payload: { role: role }
        });
    };
};

export const setAreaAction = area => {
    return dispatch => {
        dispatch({
            type: SET_AREA,
            payload: { area: area }
        });
    };
};

// REDUCERS

export const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLE:
            return {
                role: action.payload.role
            };
        case SET_AREA:
            return {
                role: action.payload.area
            };
    };
    return state;
};
