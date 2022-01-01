import React, {useEffect, useState} from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import {correctQuiz, DIFFICULTY, IQuizApi, quizApi, wrongQuiz, userName} from "../../../atoms";
import axios from "axios";
import QuizStartContainer from "../quizStart/quizStartContainer";
import QuizPresenter from "./quizPresenter";
import QuizResultContainer from "../quizResult/quizResultContainer";





const QuizContainer = () => {


    const [quizStart, setQuizStart] = useState<boolean>(false);
    const [quizSeq, setQuizSeq] = useState<number>(0);




    const [quizDataArray, setQuizDataArray] = useRecoilState<IQuizApi[]>(quizApi);
    const setCorrectQuizArray = useSetRecoilState<IQuizApi[]>(correctQuiz);
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

    const grade = (selectAnswer: string): boolean => {
        return quizDataArray[quizSeq].correct_answer === selectAnswer;
    }


    const transformDifficulty = (difficulty: DIFFICULTY) => {
        switch (difficulty) {
            case DIFFICULTY.EASY :
                return "쉬움"
            case DIFFICULTY.MEDIUM :
                return "중간"
            case DIFFICULTY.HARD :
                return "어려움"
        }
    }


    const goToNextQuiz = (selectAnswer: string, close: Function) => {
        const answer = grade(selectAnswer);
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
                setQuizStart={setQuizStart}
            />
        )
    }


    if (quizDataArray.length === quizSeq) {
        return (
            <QuizResultContainer/>
        )
    }



    return (
        <main>
            <section
                className={'animate-fade-in-up w-full lg:pb-0 flex justify-center items-center h-screen box-border overflow-hidden fixed'}>
                <article className={'p-6 pt-0 w-10/12 md:w-5/6 lg:w-4/6 bg-white rounded-lg mb-24 md:mb-0'}>
                    {quizDataArray.map((quiz, index) => {
                        if (index === quizSeq) {
                            return (
                                <QuizPresenter
                                    grade={grade}
                                    key={index}
                                    quiz={quiz}
                                    seq={index}
                                    quizLength={quizDataArray.length}
                                    parsingHtmlEntity={parsingHtmlEntity}
                                    goToNextQuiz={goToNextQuiz}
                                    transformDifficulty={transformDifficulty}
                                />
                            )
                        }
                    })}
                </article>
            </section>

        </main>
    )

}

export default QuizContainer