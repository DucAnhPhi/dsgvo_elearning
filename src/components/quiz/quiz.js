import React from 'react';
import { submitAction } from '../../store/quiz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class QuizComp extends React.Component {

    constructor(props) {
        super(props);
        this.getAnswer = function () {
            let answers = [];
            for (let question of this.props.questionIds) {
                var selector = document.querySelector('input[name="' + question + '"]:checked');
                if (selector) answers.push(selector.value);
            }
            return answers;
        }
    }

    render() {
        if (this.props.finished) {
            return <div className="submitted">
                {this.props.children}
            </div>
        } else {
            const submitAction = this.props.submitAction;
            const formId = this.props.id + "_form";
            return <form id={formId} className="notSubmitted">
                {this.props.children}
                <input type="button" value="Beantworten" onClick={() => {
                    this.givenAnswers = this.getAnswer();
                    this.rightAnswers = this.props.rightAnswers;
                    submitAction(this.props.id)
                }
                }
                />
            </form>
        }
    }
}

const mapStateToProps = (state, props) => {
    let isFinished = state.quiz.finished.includes(props.id);
    return { finished: isFinished }
};

const mapDispatchToProps = dispatch => bindActionCreators({ submitAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuizComp);
