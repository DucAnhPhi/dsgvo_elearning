
const initialState = {
    finished: [],
    selectedAnswers: {}
}

const SUBMIT = 'SUBMIT'
const SELECT_ANSWER = 'SELECT_ANSWER';

//ACTIONS

export const submitAction = (id) => {
    return dispatch => {
        dispatch({
            type: SUBMIT,
            payload: { 
                id
            }
        });
    };
};

export const selectAnswerAction = (selectedAnswer, id) => {
    return dispatch => {
        dispatch({
            type: SELECT_ANSWER,
            payload: {
                selectedAnswer,
                id
            }
        });
    }
}


//REDUCERS

export const quiz = (state = initialState, action) => {
    switch(action.type){
        
        case SUBMIT:
            return {
                ...state,
                finished : [...state.finished, action.payload.id],
            };
        case SELECT_ANSWER:
            return {
                ...state,
                selectedAnswers : {
                    ...state.selectedAnswers,
                    [action.payload.id]: action.payload.selectedAnswer 
                }
                
            }
        
        default:
            return state;
    }
}