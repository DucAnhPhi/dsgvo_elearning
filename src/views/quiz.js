import React from 'react';
import questions from '../resources/quiz/questions';
import QuizComp from '../components/quiz/quiz';
import CardComp from '../components/card/card';
import TitleComp from '../components/title/title';

class QuizView extends React.Component {
    render() {
        const { match: { params } } = this.props;
        const questionList = questions[params.id];
        console.log(params);
        return (
            <CardComp>
                <TitleComp>Quiz: </TitleComp>
                {<QuizComp questions={questionList} quizId={params.id} />}
            </CardComp>
        );
    }
}

export default QuizView;