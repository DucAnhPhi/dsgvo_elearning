import React from 'react';
import { submitAction, selectAnswerAction } from '../../store/quiz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import QuestionComp from '../question/question';
import ButtonComp from '../button/button';
import SolutionComp from '../solution/solution';

class QuizComp extends React.Component {

    constructor(props) {
        super(props);
        this.renderQuestions.bind(this);
        this.renderSolutions.bind(this);
        this.renderButton.bind(this);
        this.isFormComplete.bind(this);
    }

    selectAnswer(answer, i) {
        this.props.selectAnswerAction(answer, i);
    }

    handleSubmit() {
        const id = this.props.navParams.params.id;
        const { finishedIds } = this.props;
        //this.setState({ ...this.state, finishedIds: finishedIds.includes(id) ? finishedIds : [...finishedIds, id] });
        this.props.submitAction(this.props.navParams.params.id);
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

    renderSolutions() {
        return (
            <div>
                {this.props.questions.map(
                    (question, i) => {
                        return <SolutionComp question={question} key={i} selectedAnswer={this.props.selectedAnswers[question.id]}></SolutionComp>
                    }
                )}
            </div>
        );
    }

    renderButton() {
        if (this.isFormComplete()) {
            return (
                <div onClick={this.handleSubmit.bind(this)} style={{textAlign: 'right', marginTop: '20px'}}>
                    <ButtonComp>
                        Überprüfen
                    </ButtonComp>
                </div>
            )
        } else {
            return (
                <div style={{textAlign: 'right', marginTop: '20px'}}>
                    <ButtonComp disabled={true}>
                        Überprüfen
                </ButtonComp>
                </div>
            )
        }
    }

    isFormComplete() {
        for (let question of this.props.questions) {
            if (!this.props.selectedAnswers[question.id]) {
                return false;
            }
        }
        return true;
    }

    render() {
        if (this.props.finishedIds.includes(this.props.navParams.params.id)) {
            return this.renderSolutions();
        }
        return (
            <div>
                {this.renderQuestions()}
                {this.renderButton()}
            </div>
        );
    }
}

QuizComp.propTypes = {
    question: PropTypes.object,
    submitAction: PropTypes.func,
    selectAnswerAction: PropTypes.func,
    navParams: PropTypes.object,
    selectedAnswers: PropTypes.object
};

const mapStateToProps = state => ({
    finishedIds: state.quiz.finished,
    selectedAnswers: state.quiz.selectedAnswers
});
const mapDispatchToProps = dispatch => bindActionCreators({ submitAction, selectAnswerAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuizComp);
