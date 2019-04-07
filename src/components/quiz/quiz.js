import React from 'react';
import { submitAction } from '../../store/quiz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import QuestionComp from '../question/question';
import ButtonComp from '../button/button';

class QuizComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            finished: false
        };
        this.handleSubmit.bind(this);
        this.renderQuestions.bind(this);
        this.renderSolutions.bind(this);
    }

    selectAnswer(id) {
        this.setState({
            answers: [...this.state.answers, id]
        });
    }

    handleSubmit() {
        this.setState({ ...this.state, finished: true });
        this.props.submitAction(this.props.quizId, this.state.answers);
    }

    renderQuestions() {
        return (
            <div>
                {this.props.questions.map(
                    (question, i) => <QuestionComp key={i} question={question} selectAnswer={this.selectAnswer.bind(this)} />
                )}
            </div>
        );
    }

    renderSolutions(){
        return(
            <div>
                {this.props.questions.map(
                    (question, i) => 
                )}
            </div>
        );
    }

    render() {
        if(this.state.finished){
            return this.renderSolutions();
        }
        return (
            <div>
                {this.renderQuestions()}
                <div onClick={this.handleSubmit.bind(this)}>
                    <ButtonComp>
                        Überprüfen
                    </ButtonComp>
                </div>
            </div>
        );
    }
}

QuizComp.propTypes = {
    question: PropTypes.object,
    submitAction: PropTypes.func,
    quizId: PropTypes.string
};

const mapStateToProps = (state, props) => {
    let finished = state.quiz.finished.includes(props.quizId);
    return { finished }
};

const mapDispatchToProps = dispatch => bindActionCreators({ submitAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuizComp);
