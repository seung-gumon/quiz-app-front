import React, {Dispatch, SetStateAction} from 'react';
import QuizStartPresenter from "./quizStartPresenter";


interface IQuizStartContainer {
    userName: string
    setUserName: Dispatch<SetStateAction<string>>
    setQuizStart: Dispatch<SetStateAction<boolean>>
}

const QuizStartContainer: React.FC<IQuizStartContainer> =
    ({
         userName,
         setUserName,
         setQuizStart,
     }) => {


        const gameStart = () => {
            if (userName.trim().length === 0) {
                setUserName("");
                return alert("이름을 한글자 이상 적어주세요!");
            }
            setQuizStart(true);
        }

        return (
            <QuizStartPresenter
                name={userName}
                setName={setUserName}
                gameStart={gameStart}
            />
        )
    }

export default QuizStartContainer