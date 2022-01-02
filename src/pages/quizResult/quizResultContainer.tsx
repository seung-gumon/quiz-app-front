import React, {Dispatch, SetStateAction} from 'react';
import QuizResultPresenter from "./quizResultPresenter";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {correctQuiz, IQuizApi, wrongQuiz, userName, startTime} from "../../atoms";


interface IQuizResultContainer {
    setQuizSeq: Dispatch<SetStateAction<number>>
}


const QuizResultContainer: React.FC<IQuizResultContainer> =
    ({
         setQuizSeq
     }) => {

        const [correctArr,setCorrectArr] = useRecoilState<IQuizApi[]>(correctQuiz);
        const [wrongArr , setWrongArr] = useRecoilState<IQuizApi[]>(wrongQuiz);
        const name = useRecoilValue<string>(userName);
        const [oldTime , setOldTime] = useRecoilState<number>(startTime);

        const unravelAgain = () => {
            setQuizSeq(0);
            setOldTime(new Date().getTime());
            setCorrectArr([]);
            setWrongArr([]);
        }

        return (
            <QuizResultPresenter
                correctArr={correctArr}
                wrongArr={wrongArr}
                name={name}
                oldTime={oldTime}
                unravelAgain={unravelAgain}
            />
        )
    }

export default QuizResultContainer