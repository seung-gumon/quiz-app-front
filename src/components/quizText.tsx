import React from 'react';
import {IQuizPresenter} from "../pages/quiz/quizPresenter";
import Popup from "reactjs-popup";
import {motion} from "framer-motion";


interface IQuizText extends Pick<IQuizPresenter, "grade" | "quizLength" | "seq" | "goToNextQuiz"> {
    selectIndex: number
    select: string
}


const QuizText: React.FC<IQuizText> =
    ({
         selectIndex,
         select,
         grade,
         quizLength,
         seq,
         goToNextQuiz
     }) => {
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
    }

export default QuizText;