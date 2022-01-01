import React, {Dispatch, SetStateAction} from 'react';
import QuizStartPresenter from "./quizStartPresenter";
import {useRecoilState, useSetRecoilState} from "recoil";
import {startTime, userName} from "../../atoms";


interface IQuizStartContainer {
    setQuizStart: Dispatch<SetStateAction<boolean>>
}

const QuizStartContainer: React.FC<IQuizStartContainer> =
    ({
         setQuizStart,
     }) => {
        const [name, setName] = useRecoilState<string>(userName);
        const setStartTime = useSetRecoilState<number>(startTime);

        const gameStart = () => {
            if (name.trim().length === 0) {
                setName("");
                return alert("이름을 한글자 이상 적어주세요!");
            }

            setStartTime(new Date().getTime());
            return setQuizStart(true);
        }

        return (
            <QuizStartPresenter
                name={name}
                setName={setName}
                gameStart={gameStart}
            />
        )
    }

export default QuizStartContainer