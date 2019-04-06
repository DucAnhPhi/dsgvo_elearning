const initialState = {
    startTime: null,
    endTime: null,
    blocksFinished: 0,
}


const START_TIME = 'START_TIME';
const END_TIME = 'END_TIME';
const FINISH_BLOCK = 'FINISH_BLOCK';

// ACTIONS

export const startTimeAction = time => {
    return dispatch => {
        dispatch({
            type: START_TIME,
            payload: { startTime: time }
        });
    };
};

export const endTimeAction = time => {
    return dispatch => {
        dispatch({
            type: END_TIME,
            payload: { endTime: time }
        });
    };
};

export const finishBlockAction = () => {
    return dispatch => {
        dispatch({
            type: FINISH_BLOCK
        })
    }
}

// REDUCERS

export const tracking = (state = initialState, action) => {
    switch (action.type) {
        case START_TIME:
            return {
                startTime: action.payload.startTime
            };
        case END_TIME:
            return {
                endTime: action.payload.endTime
            };
        case FINISH_BLOCK:
            return {
                blocksFinished: state.blocksFinished + 1
            };
    };
    return state;
};
