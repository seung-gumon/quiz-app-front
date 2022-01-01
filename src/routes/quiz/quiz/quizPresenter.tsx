import React from 'react';
import {DIFFICULTY, IQuizApi} from "../../../atoms";
import {motion} from "framer-motion"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

interface IQuiz {
    quiz: IQuizApi
    seq: number
    parsingHtmlEntity: (HTMLEntity: string) => string
    goToNextQuiz: (answer: string, close: Function) => void
    grade: (selectAnswer: string) => boolean
    transformDifficulty: (difficulty: DIFFICULTY) => string
    quizLength: number
}

const QuizPresenter: React.FC<IQuiz> =
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
                            <Popup
                                key={selectIndex}
                                closeOnDocumentClick={false}
                                lockScroll={true}
                                closeOnEscape={false}
                                trigger={
                                    <motion.li
                                        className={'cursor-pointer w-full font-bold text-white animate-fade-in-up bg-sky-400 rounded-lg p-5 text-base lg:text-xl'}
                                        whileTap={{scale: 0.9}}
                                        whileHover={{scale: 1.07}}
                                    >
                                        {select}
                                    </motion.li>
                                }
                                {...{
                                    contentStyle: {
                                        width: '45vh',
                                        background: '#292D3E',
                                        borderRadius: '0.5rem',
                                        border: 'none',
                                        padding: '20px 0'
                                    },
                                }}
                                modal
                                nested
                            >{(close: any) => (
                                <section className={'flex items-center justify-center flex-col rounded-lg '}>
                                    <div>
                                        {grade(select) ?
                                            <>
                                                <div className={'w-7/12 mx-auto'}>
                                                    <img className={'w-full animate-fade-in-up '}
                                                         src={'/correct.png'} alt={"correctPNG"}/>
                                                </div>
                                                <p className={'animate-fade-in-up whitespace-pre-line text-sm md:text-base lg:text-lg text-gray-300 text-lg my-5 text-center px-10'}>
                                                    {quizLength === seq + 1 ?
                                                        "문제를 다 푸셨어요! 너무 수고하셨고 결과를 확인해주세요 ! 😊"
                                                        :
                                                        "👏🏻 오!! 정답이에요 ! 👏🏻 \n 남은 문제도 정답을 향해 가즈아!!"
                                                    }
                                                </p>
                                            </>

                                            :
                                            <>
                                                <div className={'w-7/12 mx-auto'}>
                                                    <img className={'w-full animate-fade-in-up'} src={'/wrong.png'}
                                                         alt={"correctPNG"}/>
                                                </div>
                                                <p className={'animate-fade-in-up whitespace-pre-line text-sm md:text-base lg:text-lg text-gray-300 text-lg my-5 text-center px-10'}>
                                                    {quizLength === seq + 1 ?
                                                        "문제를 다 푸셨어요! 너무 수고하셨고 결과를 확인해주세요 ! 😊"
                                                        :
                                                        `괜찮아요! 그럴 수도 있죠 ! \n 남은 문제는 정답을 향해 도전! 👊🏻`
                                                    }
                                                </p>
                                            </>
                                        }

                                    </div>

                                    <div className={'w-full flex items-center justify-center'}>
                                        <button
                                            className={'bg-blue-600 hover:bg-blue-700 text-gray-200 font-bold p-3 py-1.5 rounded-lg'}
                                            onClick={() => goToNextQuiz(select, close)}>
                                            {quizLength === seq + 1 ? "결과 확인하기 !" : "다음 문제 풀기!"}
                                        </button>
                                    </div>
                                </section>

                            )}
                            </Popup>
                        )
                    })}
                </ul>
            </>


        )
    }

export default QuizPresenter;