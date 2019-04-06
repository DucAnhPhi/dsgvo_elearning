import React from 'react';

class QuestionComp extends React.Component {
    render() {
        let answers = createAnswersHTML(this.props.answers, this.props.id)
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

function createAnswersHTML(answers, id){
    return answers.map(answer => (
        <div><input type="radio" name={id} value={id.slice(-1)} />
            <span>{answer}</span>
        </div>))
}

export default QuestionComp;