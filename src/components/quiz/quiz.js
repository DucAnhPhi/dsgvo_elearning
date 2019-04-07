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
        this.renderQuestions.bind(this);
    }

    selectAnswer(id) {
        this.setState({
            answers: [...this.state.answers, id]
        });
    }

    handleSubmit() {
        console.log(this.props.id);
        this.setState({ ...this.state, finished: true });
        this.props.submitAction(this.props.id, this.state.answers);
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
    

    render() {



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
    submitAction: PropTypes.func
};

const mapStateToProps = (state, props) => {
    let isFinished = state.quiz.finished.includes(props.id);
    return { finished: isFinished }
};

const mapDispatchToProps = dispatch => bindActionCreators({ submitAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuizComp);
