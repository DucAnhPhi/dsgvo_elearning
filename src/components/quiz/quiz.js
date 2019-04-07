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
            finishedIds: []
        };
        this.renderQuestions.bind(this);
        this.renderSolutions.bind(this);
        this.renderButton.bind(this);
        this.isFormComplete.bind(this);
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
        const id = this.props.navParams.url;
        const { finishedIds } = this.state;
        this.setState({ ...this.state, finishedIds: finishedIds.includes(id) ? finishedIds : [...finishedIds, id] });
        this.props.submitAction(this.props.navParams.params.id, this.state.answers);
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
                        return <SolutionComp question={question} key={i} selectedAnswer={selectedAnswers[question.id]}></SolutionComp>
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
            if (!this.state.answers[question.id]) {
                return false;
            }
        }
        return true;
    }

    render() {
        if (this.state.finishedIds.includes(this.props.navParams.url)) {
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
    navParams: PropTypes.object
};

const mapDispatchToProps = dispatch => bindActionCreators({ submitAction }, dispatch);

export default connect(undefined, mapDispatchToProps)(QuizComp);
