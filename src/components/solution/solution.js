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
                                {this.getSolutionHTML(possibleAnswer)}
                            </div>
                        ))
                    }
                </div>

            </div>
        );
    }

    getSolutionHTML(possibleAnswer) {
        let rightAnswerInd = this.props.question.rightAnswer;
        let rightAnswer = this.props.question.possibleAnswers[rightAnswerInd - 1];
        console.log(this.props.selectedAnswer);
        if (possibleAnswer === rightAnswer) {
            return <span style={{ color: "green" }} className="correct">{possibleAnswer}</span>
        } else if (possibleAnswer === this.props.selectedAnswer) {
            return <span style={{ color: "red" }} className="wrong">{possibleAnswer}</span>
        } else {
            return <span>{possibleAnswer}</span>
        }
    }
}


export default SolutionComp;