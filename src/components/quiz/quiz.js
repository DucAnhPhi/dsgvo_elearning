import React from 'react';
import { submitAction } from '../../store/quiz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class QuizComp extends React.Component{

    render(){
        const submitAction = this.props.submitAction;
        return(
            <form>
                {this.props.children}
                <input type="button" value="Beantworten" onClick={() => submitAction(this.props.id) }/>
            </form>

        )
    }


}
const mapStateToProps = state => ({
    answered: state.quiz.finished
});

const mapDispatchToProps = dispatch => bindActionCreators({ submitAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuizComp);
