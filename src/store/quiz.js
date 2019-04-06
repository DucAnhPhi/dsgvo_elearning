
const initialState = {
    finished: [],
    selectedAnswers: {}
}

const SUBMIT = 'SUBMIT'

//ACTIONS

export const submitAction = (id, selectedAnswers) => {
    return dispatch => {
        dispatch({
            type: SUBMIT,
            payload: { 
                id,
                selectedAnswers
            }
        });
    };
};


//REDUCERS

export const quiz = (state = initialState, action) => {
    switch(action.type){
        
        case SUBMIT:
            return {
                finished : [...state.finished, action.payload.id],
                selectedAnswers : {
                    ...state.selectedAnswers,
                    [action.payload.id]: action.payload.selectedAnswers 
                }
            };
        
        default:
            return state;
    }
}