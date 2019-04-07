import React from 'react';
import questions from '../resources/quiz/questions';
import QuizComp from '../components/quiz/quiz';

class QuizView extends React.Component {
    render() {
        const { match: { params } } = this.props;
        const questionList = questions[params.id];
        console.log((questionList.length))
        return (
            <div>
                {<QuizComp questions={questionList} quizId={params.id} />}
            </div>
        );
    }
}

export default QuizView;