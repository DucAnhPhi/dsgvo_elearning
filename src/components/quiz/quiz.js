import React from 'react';
import { submitAction } from '../../store/quiz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import QuestionComp from '../question/question';
import ButtonComp from '../button/button';
import SolutionComp from '../solution/solution';

class QuizComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: {},
            finished: false
        };
        this.handleSubmit.bind(this);
        this.renderQuestions.bind(this);
        this.renderSolutions.bind(this);
    }

    selectAnswer(answer, i) {
        console.log("i" + i)
        this.setState({
            answers: {
                ...this.state.answers,
                [i]: answer
            }
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

    renderSolutions() {
        let selectedAnswers = this.state.answers;
        return (
            <div>
                {this.props.questions.map(
                    (question, i) => {
                        return <SolutionComp question={question} selectedAnswer={selectedAnswers[question.id]}></SolutionComp>
                    }
                )}
            </div>
        );
    }

    render() {
        if (this.state.finished) {
            return this.renderSolutions();
        }
        return (
            <div>
                {this.renderQuestions()}
                <div onClick={this.handleSubmit.bind(this)} style={{textAlign: 'right', marginTop: '20px'}}>
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
