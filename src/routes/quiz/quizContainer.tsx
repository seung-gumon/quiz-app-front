import React, {useEffect, useState} from 'react';
import {useRecoilState} from "recoil";
import {IQuizApi, quizApi} from "../../atoms";
import axios from "axios";
import QuizStartContainer from "./quizStart/quizStartContainer";
import Quiz from "../../components/Quiz";


const QuizContainer = () => {

    const [userName, setUserName] = useState<string>('');
    const [gameStart, setGameStart] = useState<boolean>(false);
    const [gameSeq, setGameSeq] = useState<number>(0);

    const [quizDataArray, setQuizDataArray] = useRecoilState<IQuizApi[]>(quizApi);


    useEffect(() => {
        (async () => {
            try {
                const {data: {results}} = await axios.get("https://opentdb.com/api.php?amount=10");
                return setQuizDataArray(results)
            } catch (e) {
                alert("데이터를 받아오는 과정에서 에러가 발생하였습니다! 자동으로 새로고침 됩니다!");
                window.location.replace("/")
            }
        })()
    }, [])


    if (!gameStart) {
        return (
            <QuizStartContainer
                userName={userName}
                setUserName={setUserName}
                setGameStart={setGameStart}
            />
        )
    }

    return (
        <main>
            {quizDataArray.map((quiz, index) => {
                if (index === gameSeq) {
                    return (
                        <Quiz quiz={quiz}/>
                    )
                }
            })}
        </main>
    )

}

export default QuizContainer