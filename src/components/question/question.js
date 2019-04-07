import React from 'react';
import SubtitleComp from '../subtitle/subtitle';
import PropTypes from 'prop-types';

class QuestionComp extends React.Component {
    render() {
        const { question, selectAnswer } = this.props;
        return (
            <div style={{marginBottom: '30px'}}>
                <SubtitleComp>{question.question}</SubtitleComp>
                <div>
                    {
                        question.possibleAnswers.map((answer, i) => (
                            <div key={i}>
                                <input
                                    type="radio"
                                    name={question.id}
                                    onClick={() => selectAnswer(answer, question.id)}
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

QuestionComp.propTypes = {
    selectAnswer: PropTypes.func,
    question: PropTypes.object
};


export default QuestionComp;