import React from 'react';
import './solution.css'
import SubtitleComp from '../subtitle/subtitle'


class QuestionComp extends React.Component {
    render() {
        const { question, selectedAnswer } = this.props;
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


export default SolutionComp;