import React from 'react';
import {DIFFICULTY, IQuizApi} from "../atoms";
import {motion} from "framer-motion"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

interface IQuiz {
    quiz: IQuizApi
    seq: number
    parsingHtmlEntity: (HTMLEntity: string) => string;
    goToNextQuiz: (answer: string, close: Function) => void;
    grade: (selectAnswer: string) => boolean
    transformDifficulty: (difficulty: DIFFICULTY) => string
}

const Quiz: React.FC<IQuiz> =
    ({
         quiz,
         seq,
         parsingHtmlEntity,
         goToNextQuiz,
         grade,
         transformDifficulty
     }) => {

        return (

            <section
                className={'animate-fade-in-up w-full lg:pb-0 flex justify-center items-center h-screen box-border overflow-hidden fixed'}>
                <article className={'p-6 pt-0 w-10/12 md:w-5/6 lg:w-4/6 bg-white rounded-lg'}>
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
                                    closeOnDocumentClick={false}
                                    lockScroll={true}
                                    trigger={
                                        <motion.li
                                            key={selectIndex}
                                            className={'modal w-full font-bold text-white animate-fade-in-up bg-sky-400 rounded-lg p-5 text-base lg:text-xl'}
                                            whileTap={{scale: 0.9}}
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
                                            padding : '20px 0'
                                        },
                                    }}
                                    modal
                                    nested
                                >{(close: any) => (
                                    <section className={'flex items-center justify-center flex-col rounded-lg '}>
                                        <div>
                                            {grade(select) ?
                                                <div className={'w-7/12 mx-auto'}>
                                                    <img className={'w-full animate-fade-in-up '} src={'/correct.png'}
                                                         alt={"correctPNG"}/>
                                                </div>

                                                :
                                                <div className={'w-7/12 mx-auto'}>
                                                <img className={'w-full animate-fade-in-up'} src={'/wrong.png'}
                                                     alt={"correctPNG"}/>
                                                </div>
                                            }
                                            <p className={'text-sm md:text-base lg:text-lg text-gray-300 text-lg my-5 text-center px-10'}>😍괜찮아요 ! 문제의 난이도가 너무
                                                높았어요! <br/>다음 문제를 맞춰보아요!</p>
                                        </div>

                                        <div className={'w-full flex items-center justify-center'}>
                                            <button className={'bg-blue-300 p-3 py-1.5 rounded-lg'} onClick={() => goToNextQuiz(select, close)}>다음 문제 풀기!
                                            </button>
                                        </div>
                                    </section>

                                )}
                                </Popup>
                            )
                        })}
                    </ul>
                </article>


            </section>
        )
    }

export default Quiz;