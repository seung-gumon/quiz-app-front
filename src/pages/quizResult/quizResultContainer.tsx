import React from 'react';
import QuizResultPresenter from "./QuizResultPresenter";
import {useRecoilValue} from "recoil";
import {correctQuiz, IQuizApi, wrongQuiz, userName , startTime} from "../../atoms";





const QuizResultContainer = () => {

    const correctArr = useRecoilValue<IQuizApi[]>(correctQuiz);
    const wrongArr = useRecoilValue<IQuizApi[]>(wrongQuiz);
    const name = useRecoilValue<string>(userName);
    const oldTime = useRecoilValue<number>(startTime);



    return (
        <QuizResultPresenter
            correctArr={correctArr}
            wrongArr={wrongArr}
            name={name}
            oldTime={oldTime}
        />
    )
}

export default QuizResultContainer