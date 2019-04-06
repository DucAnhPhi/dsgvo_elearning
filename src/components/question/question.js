import React from 'react';
import PropTypes from 'prop-types';



class QuestionComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { answer: "" }

    }
    render() {
        let answers = createAnswersHTML(this.props.answers)
        return (
            <div>
                {this.props.children}
                <ul>
                    {answers}
                </ul>
            </div>
        );
    }
}

QuestionComp.propTypes = {
    answers: PropTypes.array,
    rightAnswer: PropTypes.number
}

function createAnswersHTML(answers){
    return answers.map(answer => (
        <div><input type="radio" />
            <span>{answer}</span>
        </div>))
}

export default QuestionComp;