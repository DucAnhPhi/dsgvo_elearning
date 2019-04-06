
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
    console.log("Reducer triggered");
    switch(action){
        
        case SUBMIT:
            let finished = state.finished;
            finished.push(action.payload.id);
            return {
                finished : finished
            };
        
        default:
            return state;
    }
}