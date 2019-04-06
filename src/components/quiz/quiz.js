import React from 'react';
import { submitAction } from '../../store/quiz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class QuizComp extends React.Component {

    render() {
        if (this.props.finished){
            return <h1>Bereits bestanden</h1>
        } else {

            const submitAction = this.props.submitAction;
            return (
                <form>
                    {this.props.children}
                    <input type="button" value="Beantworten" onClick={() => submitAction(this.props.id)} />
                </form>

            )
        }
    }
}

QuizComp.acceptAnswer = function(){
    
}

const mapStateToProps = (state, props)  => {
    console.log(state)
    let isFinished = state.quiz.finished.includes(props.id);
    console.log(props.id);
    console.log(isFinished);
    return { finished: isFinished}
};

const mapDispatchToProps = dispatch => bindActionCreators({ submitAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuizComp);
