import React from 'react';
import {DIFFICULTY, IQuizApi} from "../../atoms";
import 'reactjs-popup/dist/index.css';
import QuizText from "../../components/quizText";

export interface IQuizPresenter {
    quiz: IQuizApi
    seq: number
    parsingHtmlEntity: (HTMLEntity: string) => string
    goToNextQuiz: (answer: string, close: Function) => void
    grade: (selectAnswer: string) => boolean
    transformDifficulty: (difficulty: DIFFICULTY) => string
    quizLength: number
}

const QuizPresenter: React.FC<IQuizPresenter> =
    ({
         quiz,
         seq,
         parsingHtmlEntity,
         goToNextQuiz,
         grade,
         transformDifficulty,
         quizLength
     }) => {


        return (
            <>
                <div className="w-full bg-gray-200 rounded-full my-5">
                    <div
                        className="bg-sky-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                        style={{width: `${(seq + 1) / 10 * 100}%`}}>{(seq + 1) / 10 * 100}%
                    </div>
                </div>

                <div className={'flex items-center w-full justify-between my-2'}>
                    <h4 className={'font-bold text-2xl'}>문제 {seq + 1}</h4>
                    <h4 className={'font-bold ml-6 text-lg flex items-center justify-center'}>난이도 : <span
                        className={`p-1 py-1.5 text-sm block text-center ml-2 ${quiz.difficulty === "easy" ? "bg-green-300" : quiz.difficulty === "medium" ? "bg-yellow-300" : "bg-red-300"}`}
                        style={{'borderRadius': '30px'}}>{transformDifficulty(quiz.difficulty)}</span></h4>
                </div>


                <h4 className={'py-6 pt-0 font-bold text-lg'}>{parsingHtmlEntity(quiz.question)}</h4>
                <ul className={'grid grid-cols-1 gap-3 lg:gap-6 md:grid-cols-2 w-full rounded-lg '}>
                    {[...quiz.incorrect_answers, quiz.correct_answer].sort(() => Math.random() - 0.5).map((select, selectIndex) => {
                        return (
                            <QuizText selectIndex={selectIndex} select={select} seq={seq} goToNextQuiz={goToNextQuiz}
                                      grade={grade} quizLength={quizLength} key={selectIndex}/>
                        )
                    })}
                </ul>
            </>


        )
    }

export default QuizPresenter;