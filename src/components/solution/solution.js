import React from 'react';
import './solution.css'
import SubtitleComp from '../subtitle/subtitle'


class SolutionComp extends React.Component {
    constructor(props) {
        super(props);
        this.getSolutionHTML.bind(this);
    }

    render() {
        return (
            <div>
                <SubtitleComp>{this.props.question.question}</SubtitleComp>
                <div>
                    {
                        this.props.question.possibleAnswers.map((possibleAnswer, i) => (
                            <div key={i}>
                                {this.getSolutionHTML(possibleAnswer, i)}
                            </div>
                        ))
                    }
                </div>

            </div>
        );
    }

    getSolutionHTML(possibleAnswer, i) {
        let question = this.props.question;
        let rightAnswer = question.possibleAnswers[question.rightAnswer - 1];
        let selectedAnswer = this.props.selectedAnswer;
        console.log(question)
        if (possibleAnswer === rightAnswer) {
            let explanation = rightAnswer === selectedAnswer
            return (
                <div className="correct">
                    <div>{possibleAnswer}</div>
                    {explanation && <div className="explanation">{question.explanations[i]}</div>}
                </div>
            )
        } else if (possibleAnswer === selectedAnswer) {
            return (
                <div className="wrong">
                    <div>{possibleAnswer}</div>
                    <div className="explanation">{question.explanations[i]}</div>
                </div>
            )
            
        } else {
            return <span>{possibleAnswer}</span>
        }
    }
}


export default SolutionComp;