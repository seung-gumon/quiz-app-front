import React, {useEffect, useState} from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import {IQuizApi, quizApi, wrongQuiz, correctQuiz} from "../../atoms";
import axios from "axios";
import QuizStartContainer from "./quizStart/quizStartContainer";
import Quiz from "../../components/Quiz";


const QuizContainer = () => {

    const [userName, setUserName] = useState<string>('');
    const [quizStart, setQuizStart] = useState<boolean>(false);
    const [quizSeq, setQuizSeq] = useState<number>(0);


    const [quizDataArray, setQuizDataArray] = useRecoilState<IQuizApi[]>(quizApi);
    const setCorrectQuizArray = useSetRecoilState<IQuizApi[]>(wrongQuiz);
    const setWrongQuizArray = useSetRecoilState<IQuizApi[]>(wrongQuiz);


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


    const parsingHtmlEntity = (question: string) => {
        const textAreaElement = document.createElement("textarea");
        textAreaElement.innerHTML = question
        return textAreaElement.value;
    }


    const chooseAnswer = (selectAnswer: string , close : Function) => {
        const answer = quizDataArray[quizSeq].correct_answer === selectAnswer;
        if (answer) {
            setWrongQuizArray((prev) => [...prev, quizDataArray[quizSeq]])
        } else {
            setCorrectQuizArray((prev) => [...prev, quizDataArray[quizSeq]])
        }
        setQuizSeq((prev) => prev + 1);
        return close()
    }


    if (!quizStart) {
        return (
            <QuizStartContainer
                userName={userName}
                setUserName={setUserName}
                setQuizStart={setQuizStart}
            />
        )
    }

    return (
        <main>
            {quizDataArray.map((quiz, index) => {
                if (index === quizSeq) {
                    return (
                        <Quiz
                            key={index}
                            quiz={quiz}
                            seq={index}
                            parsingHtmlEntity={parsingHtmlEntity}
                            chooseAnswer={chooseAnswer}
                        />
                    )
                }
            })}
        </main>
    )

}

export default QuizContainer