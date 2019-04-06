
const initialState = {
    finished: [],
}

const SUBMIT = 'SUBMIT'

//ACTIONS

export const submitAction = (id) => {
    return dispatch => {
        dispatch({
            type: SUBMIT,
            payload: { 
                id : id
            }
        });
    };
};


//REDUCERS

export const quiz = (state = initialState, action) => {
    switch(action.type){
        
        case SUBMIT:
            return {
                finished : [...state.finished, action.payload.id]
            };
        
        default:
            return state;
    }
}