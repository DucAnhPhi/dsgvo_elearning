import React from 'react';
import SubtitleComp from '../subtitle/subtitle';
import PropTypes from 'prop-types';

class QuestionComp extends React.Component {
    render() {
        const { question, selectAnswer } = this.props;
        return (
            <div>
                <SubtitleComp>{question.question}</SubtitleComp>
                <div>
                    {
                        question.possibleAnswers.map((answer, i) => (
                            <div key={i}>
                                <input
                                    type="radio"
                                    name={question.id}
                                    onClick={() => selectAnswer(answer)}
                                />
                                <span>{answer}</span>
                            </div>
                        ))
                    }
                </div>

            </div>
        );
    }
}

function renderPossibleAnswers(possibleAnswers, questionId, selectAnswer) {
    return (
        <div>
            {
                possibleAnswers.map((answer, i) => (
                    <div key={i}>
                        <input
                            type="radio"
                            name={questionId}
                            onClick={() => selectAnswer(answer)}
                        />
                        <span>{answer}</span>
                    </div>
                ))
            }
        </div>
    );
}

QuestionComp.propTypes = {
    selectAnswer: PropTypes.func,
    question: PropTypes.object
};


export default QuestionComp;